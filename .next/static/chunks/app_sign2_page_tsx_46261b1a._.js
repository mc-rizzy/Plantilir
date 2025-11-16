(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/sign2/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FacePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$face_mesh$2f$face_mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mediapipe/face_mesh/face_mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$camera_utils$2f$camera_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mediapipe/camera_utils/camera_utils.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mediapipe/face_mesh/face_mesh.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FacePage() {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FacePage.useEffect": ()=>{
            if (!videoRef.current || !canvasRef.current) return;
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            const faceMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$face_mesh$2f$face_mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceMesh"]({
                locateFile: {
                    "FacePage.useEffect": (file)=>"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/".concat(file)
                }["FacePage.useEffect"]
            });
            faceMesh.setOptions({
                maxNumFaces: 1,
                refineLandmarks: true,
                minDetectionConfidence: 0.5,
                minTrackingConfidence: 0.5
            });
            faceMesh.onResults({
                "FacePage.useEffect": (results)=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
                    if (results.multiFaceLandmarks) {
                        for (const landmarks of results.multiFaceLandmarks){
                            ctx.fillStyle = "cyan";
                            for (const p of landmarks){
                                ctx.beginPath();
                                ctx.arc(p.x * canvas.width, p.y * canvas.height, 2, 0, 2 * Math.PI);
                                ctx.fill();
                            }
                        }
                    }
                }
            }["FacePage.useEffect"]);
            const cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$camera_utils$2f$camera_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"](video, {
                onFrame: {
                    "FacePage.useEffect": async ()=>{
                        await faceMesh.send({
                            image: video
                        });
                    }
                }["FacePage.useEffect"],
                width: 640,
                height: 480
            });
            cam.start();
        }
    }["FacePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Face Landmark Detection Stream"
            }, void 0, false, {
                fileName: "[project]/app/sign2/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                style: {
                    display: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/sign2/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: 640,
                height: 480,
                style: {
                    border: "1px solid #ccc"
                }
            }, void 0, false, {
                fileName: "[project]/app/sign2/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/sign2/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(FacePage, "0gwqVvoOV2or9Ql4L8GH2BGn3hc=");
_c = FacePage;
var _c;
__turbopack_context__.k.register(_c, "FacePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_sign2_page_tsx_46261b1a._.js.map