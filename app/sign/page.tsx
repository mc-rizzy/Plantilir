"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  target?: { x: number; y: number };
}

export default function FacePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [scanComplete, setScanComplete] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const particles = useRef<Particle[]>([]);
  const detectionStableFrames = useRef(0);
  const SCAN_REQUIRED_FRAMES = 60;
  const MAX_PARTICLES = 180;

  // -----------------------------
  // Fullscreen canvas + mirrored video
  // -----------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // -----------------------------
  // Loading → Scan → Authorized → Fade → Redirect
  // -----------------------------
  useEffect(() => {
    const t1 = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (!scanComplete || authorized) return;
    const t = setTimeout(() => {
      setAuthorized(true);
      setFadeOut(true);
      // setTimeout(() => router.push("/dashboard"), 900);
      window.location.href = "./video";
    }, 500);
    return () => clearTimeout(t);
  }, [scanComplete, authorized, router]);

  // -----------------------------
  // Initialize particles
  // -----------------------------
  useEffect(() => {
    const canvas = canvasRef.current!;
    for (let i = 0; i < MAX_PARTICLES; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }
  }, []);

  // -----------------------------
  // MEDIA PIPE + FACE LANDMARKS + PARTICLE INTERACTIONS
  // -----------------------------
  useEffect(() => {
    if (!window.FaceMesh || !window.Camera) return;
    const video = videoRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const faceMesh = new window.FaceMesh({
      locateFile: (file: string) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    let landmarksGlobal: any[] = [];

    faceMesh.onResults((results: any) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Mirror video
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(results.image, -canvas.width, 0, canvas.width, canvas.height);
      ctx.restore();

      if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
        landmarksGlobal = results.multiFaceLandmarks[0];

        detectionStableFrames.current++;
        const pct = Math.min(detectionStableFrames.current / SCAN_REQUIRED_FRAMES, 1);
        if (pct === 1 && !scanComplete) setScanComplete(true);

        // -----------------------------
        // Glowing face landmarks
        // -----------------------------
        ctx.strokeStyle = "rgba(0,255,255,0.8)";
        ctx.fillStyle = "rgba(0,255,255,0.4)";
        ctx.lineWidth = 1.5;

        landmarksGlobal.forEach((lm: any) => {
          const x = canvas.width - lm.x * canvas.width;
          const y = lm.y * canvas.height;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });

        // -----------------------------
        // Laser sweep along face outline
        // -----------------------------
        const sweepProgress = (Date.now() % 2000) / 2000; // 2s loop
        ctx.strokeStyle = `rgba(0,255,255,${0.3 + 0.7 * Math.abs(Math.sin(sweepProgress * Math.PI * 2))})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        landmarksGlobal.forEach((lm: any, i: number) => {
          const x = canvas.width - lm.x * canvas.width;
          const y = lm.y * canvas.height;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.stroke();

        // -----------------------------
        // Particle attraction to landmarks
        // -----------------------------
        particles.current.forEach((p) => {
          // pick random target landmark occasionally
          if (!p.target || Math.random() < 0.01) {
            const targetLM = landmarksGlobal[Math.floor(Math.random() * landmarksGlobal.length)];
            p.target = {
              x: canvas.width - targetLM.x * canvas.width,
              y: targetLM.y * canvas.height,
            };
          }

          // move particle toward target
          if (p.target) {
            const dx = p.target.x - p.x;
            const dy = p.target.y - p.y;
            p.vx += dx * 0.002;
            p.vy += dy * 0.002;
          }

          // apply velocity + damping
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.92;
          p.vy *= 0.92;

          // bounce off edges
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.fillStyle = `rgba(0,255,255,${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
      } else {
        landmarksGlobal = [];
        detectionStableFrames.current = 0;
      }
    });

    const camera = new window.Camera(video, {
      onFrame: async () => await faceMesh.send({ image: video }),
      width: 1280,
      height: 720,
    });

    camera.start();

    // -----------------------------
    // Particle animation loop
    // -----------------------------
    const anim = () => {
      requestAnimationFrame(anim);
      if (!landmarksGlobal.length) return;
      // particles updated inside faceMesh onResults
    };
    anim();
  }, [scanComplete]);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" strategy="beforeInteractive" />

      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          opacity: fadeOut ? 0 : 1,
          transition: "opacity 0.9s ease-in-out",
        }}
      >
        <video ref={videoRef} style={{ display: "none" }} />
        <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100vw", height: "100vh" }} />

        {/* Glass panel UI */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backdropFilter: "blur(8px)",
            background: "rgba(0,0,0,0.15)",
            pointerEvents: "none",
          }}
        />

        {/* Grid overlay */}
        <div className="gridOverlay"></div>

        {loading && (
          <div className="loadingWrap">
            <div className="orbLoader">
              <div className="orb"></div>
            </div>
          </div>
        )}

        {scanComplete && !authorized && <div className="scanComplete">Scanning Complete</div>}
        {authorized && <div className="authorizedPopup">Authorized</div>}
      </div>

      <style jsx>{`
        .gridOverlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 15;
          animation: gridShift 6s linear infinite;
        }

        @keyframes gridShift {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }

        .loadingWrap {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          z-index: 30;
        }

        .orbLoader {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orb {
          width: 55px;
          height: 55px;
          background: radial-gradient(circle, #cfffff, #75f5ff);
          border-radius: 50%;
          box-shadow: 0 0 35px rgba(0,255,255,0.9);
          animation: pulseOrb 1.6s infinite ease-in-out;
        }

        @keyframes pulseOrb {
          0% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.35); opacity: 1; }
          100% { transform: scale(1); opacity: 0.55; }
        }

        .scanComplete {
          position: absolute;
          top: 12%;
          left: 50%;
          transform: translateX(-50%) translateY(-20px);
          font-size: 32px;
          color: #afffff;
          opacity: 0;
          animation: scanPop 0.7s forwards ease-out;
          z-index: 40;
        }

        @keyframes scanPop {
          from { opacity: 0; transform: translateX(-50%) translateY(-30px) scale(0.8); }
          to { opacity: 1; transform: translateX(-50%) translateY(0px) scale(1); }
        }

        .authorizedPopup {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.75);
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          border-radius: 14px;
          border: 1px solid rgba(200,255,255,0.5);
          padding: 22px 55px;
          font-size: 34px;
          color: #afffff;
          box-shadow: 0 0 30px rgba(0,255,255,0.6);
          text-shadow: 0 0 12px #afffff;
          animation:
            authPop 0.1s ease-out forwards,
            authGlow 1.8s infinite ease-in-out;
          z-index: 50;
        }

        @keyframes authPop {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.4); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes authGlow {
          0% { box-shadow: 0 0 20px rgba(0,255,255,0.4); }
          50% { box-shadow: 0 0 45px rgba(0,255,255,0.9); }
          100% { box-shadow: 0 0 20px rgba(0,255,255,0.4); }
        }
      `}</style>
    </>
  );
}
