module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/sign/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FacePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function FacePage() {
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [scanComplete, setScanComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authorized, setAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fadeOut, setFadeOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const detectionStableFrames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const SCAN_REQUIRED_FRAMES = 60;
    const MAX_PARTICLES = 180;
    // -----------------------------
    // Fullscreen canvas + mirrored video
    // -----------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);
        return ()=>window.removeEventListener("resize", resize);
    }, []);
    // -----------------------------
    // Loading → Scan → Authorized → Fade → Redirect
    // -----------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t1 = setTimeout(()=>setLoading(false), 5000);
        return ()=>clearTimeout(t1);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!scanComplete || authorized) return;
        const t = setTimeout(()=>{
            setAuthorized(true);
            setFadeOut(true);
            // setTimeout(() => router.push("/dashboard"), 900);
            window.location.href = "./video";
        }, 500);
        return ()=>clearTimeout(t);
    }, [
        scanComplete,
        authorized,
        router
    ]);
    // -----------------------------
    // Initialize particles
    // -----------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        for(let i = 0; i < MAX_PARTICLES; i++){
            particles.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
                size: Math.random() * 3 + 1,
                alpha: Math.random() * 0.5 + 0.3
            });
        }
    }, []);
    // -----------------------------
    // MEDIA PIPE + FACE LANDMARKS + PARTICLE INTERACTIONS
    // -----------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!window.FaceMesh || !window.Camera) return;
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const faceMesh = new window.FaceMesh({
            locateFile: (file)=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
        });
        faceMesh.setOptions({
            maxNumFaces: 1,
            refineLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        let landmarksGlobal = [];
        faceMesh.onResults((results)=>{
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
                landmarksGlobal.forEach((lm)=>{
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
                const sweepProgress = Date.now() % 2000 / 2000; // 2s loop
                ctx.strokeStyle = `rgba(0,255,255,${0.3 + 0.7 * Math.abs(Math.sin(sweepProgress * Math.PI * 2))})`;
                ctx.lineWidth = 3;
                ctx.beginPath();
                landmarksGlobal.forEach((lm, i)=>{
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
                particles.current.forEach((p)=>{
                    // pick random target landmark occasionally
                    if (!p.target || Math.random() < 0.01) {
                        const targetLM = landmarksGlobal[Math.floor(Math.random() * landmarksGlobal.length)];
                        p.target = {
                            x: canvas.width - targetLM.x * canvas.width,
                            y: targetLM.y * canvas.height
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
            onFrame: async ()=>await faceMesh.send({
                    image: video
                }),
            width: 1280,
            height: 720
        });
        camera.start();
        // -----------------------------
        // Particle animation loop
        // -----------------------------
        const anim = ()=>{
            requestAnimationFrame(anim);
            if (!landmarksGlobal.length) return;
        // particles updated inside faceMesh onResults
        };
        anim();
    }, [
        scanComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js",
                strategy: "beforeInteractive"
            }, void 0, false, {
                fileName: "[project]/app/sign/page.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
                strategy: "beforeInteractive"
            }, void 0, false, {
                fileName: "[project]/app/sign/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    overflow: "hidden",
                    opacity: fadeOut ? 0 : 1,
                    transition: "opacity 0.9s ease-in-out"
                },
                className: "jsx-686acf85f585cf1f",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        style: {
                            display: "none"
                        },
                        className: "jsx-686acf85f585cf1f"
                    }, void 0, false, {
                        fileName: "[project]/app/sign/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        style: {
                            position: "absolute",
                            inset: 0,
                            width: "100vw",
                            height: "100vh"
                        },
                        className: "jsx-686acf85f585cf1f"
                    }, void 0, false, {
                        fileName: "[project]/app/sign/page.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backdropFilter: "blur(8px)",
                            background: "rgba(0,0,0,0.15)",
                            pointerEvents: "none"
                        },
                        className: "jsx-686acf85f585cf1f"
                    }, void 0, false, {
                        fileName: "[project]/app/sign/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-686acf85f585cf1f" + " " + "gridOverlay"
                    }, void 0, false, {
                        fileName: "[project]/app/sign/page.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-686acf85f585cf1f" + " " + "loadingWrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-686acf85f585cf1f" + " " + "orbLoader",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-686acf85f585cf1f" + " " + "orb"
                            }, void 0, false, {
                                fileName: "[project]/app/sign/page.tsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/sign/page.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/sign/page.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    scanComplete && !authorized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-686acf85f585cf1f" + " " + "scanComplete",
                        children: "Scanning Complete"
                    }, void 0, false, {
                        fileName: "[project]/app/sign/page.tsx",
                        lineNumber: 254,
                        columnNumber: 41
                    }, this),
                    authorized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-686acf85f585cf1f" + " " + "authorizedPopup",
                        children: "Authorized"
                    }, void 0, false, {
                        fileName: "[project]/app/sign/page.tsx",
                        lineNumber: 255,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/sign/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "686acf85f585cf1f",
                children: ".gridOverlay.jsx-686acf85f585cf1f{pointer-events:none;z-index:15;background-image:linear-gradient(90deg,#00ffff1a 1px,#0000 1px),linear-gradient(#00ffff1a 1px,#0000 1px);background-size:60px 60px;animation:6s linear infinite gridShift;position:absolute;inset:0}@keyframes gridShift{0%{background-position:0 0}to{background-position:60px 60px}}.loadingWrap.jsx-686acf85f585cf1f{backdrop-filter:blur(8px);z-index:30;justify-content:center;align-items:center;display:flex;position:absolute;inset:0}.orbLoader.jsx-686acf85f585cf1f{justify-content:center;align-items:center;width:120px;height:120px;display:flex}.orb.jsx-686acf85f585cf1f{background:radial-gradient(circle,#cfffff,#75f5ff);border-radius:50%;width:55px;height:55px;animation:1.6s ease-in-out infinite pulseOrb;box-shadow:0 0 35px #00ffffe6}@keyframes pulseOrb{0%{opacity:.55;transform:scale(1)}50%{opacity:1;transform:scale(1.35)}to{opacity:.55;transform:scale(1)}}.scanComplete.jsx-686acf85f585cf1f{color:#afffff;opacity:0;z-index:40;font-size:32px;animation:.7s ease-out forwards scanPop;position:absolute;top:12%;left:50%;transform:translate(-50%)translateY(-20px)}@keyframes scanPop{0%{opacity:0;transform:translate(-50%)translateY(-30px)scale(.8)}to{opacity:1;transform:translate(-50%)translateY(0)scale(1)}}.authorizedPopup.jsx-686acf85f585cf1f{backdrop-filter:blur(12px);color:#afffff;text-shadow:0 0 12px #afffff;z-index:50;background:#ffffff1a;border:1px solid #c8ffff80;border-radius:14px;padding:22px 55px;font-size:34px;animation:.1s ease-out forwards authPop,1.8s ease-in-out infinite authGlow;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)scale(.75);box-shadow:0 0 30px #0ff9}@keyframes authPop{0%{opacity:0;transform:translate(-50%,-50%)scale(.4)}to{opacity:1;transform:translate(-50%,-50%)scale(1)}}@keyframes authGlow{0%{box-shadow:0 0 20px #0ff6}50%{box-shadow:0 0 45px #00ffffe6}to{box-shadow:0 0 20px #0ff6}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7b8a3694._.js.map