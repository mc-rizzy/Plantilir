"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Particle {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

interface Line {
  left: number;
  width: number;
  duration: number;
}

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const router = useRouter();

  const particleCount = 50;
  const lineCount = 20;

  const [particles, setParticles] = useState<Particle[]>([]);
  const [lines, setLines] = useState<Line[]>([]);
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    // Generate particles and lines on client only
    const generatedParticles: Particle[] = Array.from({ length: particleCount }).map(
      () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 10,
        duration: Math.random() * 10 + 5,
      })
    );

    const generatedLines: Line[] = Array.from({ length: lineCount }).map(() => ({
      left: Math.random() * 100,
      width: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 10,
    }));

    setParticles(generatedParticles);
    setLines(generatedLines);
    setClientReady(true);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundPositionY: `${scrollY * 0.3}px` }}
    >
      {/* Render animated elements only on client */}
      {clientReady && (
        <>
          <div className="particles">
            {particles.map((p, i) => (
              <span
                key={i}
                className="particle"
                style={{
                  top: `${p.top}vh`,
                  left: `${p.left}vw`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.duration}s`,
                }}
              />
            ))}
          </div>

          <div className="neonLines">
            {lines.map((l, i) => (
              <div
                key={i}
                className="neonLine"
                style={{
                  left: `${l.left}vw`,
                  width: `${l.width}px`,
                  animationDuration: `${l.duration}s`,
                }}
              />
            ))}
          </div>

          <div className="heroGradientOverlay" />
        </>
      )}

      {/* Hero content is static */}
      <div className="heroContent">
        <h1 className="hoverableText header1">Plantilir</h1>
        <p className="hoverableText subHeader">
          Connect to anyone alive, instantly and securely.
        </p>
        <button className="hoverableButton" onClick={() => window.location.href='./sign'}>
          Sign On
        </button>
      </div>

      <div className="heroOverlay"></div>
    </section>
  );
}
