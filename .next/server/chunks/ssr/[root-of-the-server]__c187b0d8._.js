module.exports = [
"[project]/.next-internal/server/app/sign2/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/sign2/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use client';
// import { useRef, useEffect, useState, useCallback } from 'react';
// // =======================================================
// // NEXT.JS/Client-Side Compatibility Setup
// // =======================================================
// // This component relies entirely on browser APIs (window, navigator, video, canvas).
// // In a server-rendering environment like Next.js, this entire file would typically be 
// // loaded dynamically or wrapped with 'use client' and rendered only on the client.
// //
// // Since we must use a single file, we load the external scripts globally here,
// // ensuring the execution is guarded by 'typeof window'.
// // =======================================================
// if (typeof window !== 'undefined' && !window.FaceLandmarker) {
//   const script1 = document.createElement('script');
//   script1.src = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/tasks-vision.js";
//   script1.onload = () => {
//     // MediaPipe defines these classes globally upon script load
//     console.log("MediaPipe tasks-vision loaded.");
//   };
//   const script2 = document.createElement('script');
//   script2.src = "https://cdn.tailwindcss.com";
//   // Append scripts to the document head for correct loading
//   document.head.appendChild(script1);
//   document.head.appendChild(script2);
// }
// // Custom hook-like function to safely wait for and access global MediaPipe classes
// async function loadMediaPipeClasses() {
//   return new Promise((resolve, reject) => {
//     const checkGlobals = () => {
//       // Check if all required global objects are defined by the MediaPipe script
//       if (window.FaceLandmarker && window.FilesetResolver && window.FaceLandmarker.RunningMode && window.DrawingUtils) {
//         resolve({
//           FaceLandmarker: window.FaceLandmarker,
//           FilesetResolver: window.FilesetResolver,
//           RunningMode: window.FaceLandmarker.RunningMode,
//           DrawingUtils: window.DrawingUtils,
//         });
//       } else {
//         // Retry check after a short delay
//         setTimeout(checkGlobals, 100);
//       }
//     };
//     checkGlobals();
//   });
// }
// const App = () => {
//   // Refs for DOM elements and mutable state
//   const videoRef = useRef(null) as any;
//   const canvasRef = useRef(null) as any;
//   const landmarkerRef = useRef(null) as any;
//   const lastVideoTimeRef = useRef(-1) as any;
//   const rafIdRef = useRef(null) as any;
//   // State for UI and initialization management
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null) as any;
//   const [isCameraActive, setIsCameraActive] = useState(false);
//   const [mediaPipeClasses, setMediaPipeClasses] = useState(null);
//   const videoDimensions = { width: 640, height: 480 };
//   // --- Core Detection Logic ---
//   const detectFaceLandmarks = useCallback(async () => {
//     const { current: landmarker } = landmarkerRef as any;
//     const { current: video } = videoRef as any;
//     const { current: canvas } = canvasRef as any; // Destructure canvas ref
//     // Guard clause: stop if model, video, canvas, or classes are not ready
//     if (!landmarker || !video || video.paused || !mediaPipeClasses || !canvas) {
//       rafIdRef.current = requestAnimationFrame(detectFaceLandmarks);
//       return;
//     }
//     const { DrawingUtils } = mediaPipeClasses as any;
//     // Only process a new frame if the video time has advanced
//     if (video.currentTime !== lastVideoTimeRef.current) {
//       // Perform the detection on the live video stream
//       const results = landmarker.detectForVideo(video, performance.now());
//       // Safe access to context and DrawingUtils (Guaranteed to be present by the guard clause)
//       const canvasCtx = canvas.getContext('2d');
//       const drawingUtils = new DrawingUtils(canvasCtx);
//       // 1. Draw the video frame onto the canvas
//       canvasCtx.clearRect(0, 0, videoDimensions.width, videoDimensions.height);
//       canvasCtx.drawImage(video, 0, 0, videoDimensions.width, videoDimensions.height);
//       // 2. Draw the landmarks over the video
//       if (results.faceLandmarks) {
//         for (const landmarks of results.faceLandmarks) {
//           // Facial Tesselation (the full mesh)
//           drawingUtils.drawConnectors(landmarks, DrawingUtils.FACEMESH_TESSELATION, { color: '#C0C0C070', lineWidth: 1 });
//           // Facial contours (the outline)
//           drawingUtils.drawConnectors(landmarks, DrawingUtils.FACEMESH_FACE_OVAL, { color: '#E0F2FE', lineWidth: 2 });
//           // Lips
//           drawingUtils.drawConnectors(landmarks, DrawingUtils.FACEMESH_LIPS, { color: '#FF7070', lineWidth: 2 });
//           // Eyes and eyebrows
//           drawingUtils.drawConnectors(landmarks, DrawingUtils.FACEMESH_RIGHT_EYE, { color: '#00BFFF', lineWidth: 2 });
//           drawingUtils.drawConnectors(landmarks, DrawingUtils.FACEMESH_LEFT_EYE, { color: '#00BFFF', lineWidth: 2 });
//           drawingUtils.drawConnectors(landmarks, DrawingUtils.FACEMESH_RIGHT_EYEBROW, { color: '#30FF30', lineWidth: 2 });
//           drawingUtils.drawConnectors(landmarks, DrawingUtils.FACEMESH_LEFT_EYEBROW, { color: '#30FF30', lineWidth: 2 });
//           // Draw the landmark points themselves
//           drawingUtils.drawLandmarks(landmarks, { radius: 1, color: '#FF0000', fillStyle: '#FF0000' });
//         }
//       }
//       lastVideoTimeRef.current = video.currentTime;
//     }
//     // Schedule the next frame
//     rafIdRef.current = requestAnimationFrame(detectFaceLandmarks);
//   }, [mediaPipeClasses]);
//   // --- Effect 1: Initialize MediaPipe Landmarker (Model Loading) ---
//   useEffect(() => {
//     let activeLandmarker = null as any;
//     const initializeMediaPipe = async () => {
//       try {
//         // Wait for MediaPipe global classes to be available
//         const classes = await loadMediaPipeClasses() as any;
//         setMediaPipeClasses(classes);
//         const { FaceLandmarker, FilesetResolver, RunningMode } = classes;
//         // Initialize FilesetResolver for WASM files
//         const filesetResolver = await FilesetResolver.forVisionTasks(
//           "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
//         );
//         // Create the FaceLandmarker instance
//         activeLandmarker = await FaceLandmarker.create(filesetResolver, {
//           baseOptions: {
//             modelAssetPath: `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/models/face_landmarker_v2_with_blendshapes.task`,
//             delegate: "GPU", // Use GPU for better performance if available
//           },
//           runningMode: RunningMode.LIVE_STREAM,
//           numFaces: 1,
//         });
//         landmarkerRef.current = activeLandmarker;
//         setLoading(false);
//       } catch (e) {
//         console.error("Failed to initialize MediaPipe FaceLandmarker:", e);
//         setError("Error loading AI model. Please check console for details.");
//         setLoading(false); // Stop loading even on error
//       }
//     };
//     initializeMediaPipe();
//     // Cleanup: Close the landmarker and cancel animation frame
//     return () => {
//       if (rafIdRef.current) {
//         cancelAnimationFrame(rafIdRef.current);
//       }
//       if (activeLandmarker) {
//         activeLandmarker.close();
//       }
//     };
//   }, []);
//   // --- Effect 2: Start Camera Stream (After Landmarker is Ready) ---
//   useEffect(() => {
//     // Only proceed if model is loaded, no error, camera is not yet active, and classes are available
//     if (!loading && !error && !isCameraActive && mediaPipeClasses) {
//       let cameraStream = null as any;
//       const startCamera = async () => {
//         try {
//           // Request access to the user's camera
//           const stream = await navigator.mediaDevices.getUserMedia({
//             video: {
//               facingMode: 'user',
//               width: videoDimensions.width,
//               height: videoDimensions.height,
//             },
//           });
//         // Attach the stream to the hidden video element
//         const video = videoRef.current;
//         if(video){
//             video.srcObject = stream;
//             video.onloadedmetadata = () => {
//                 video.play();
//                 setIsCameraActive(true);
//                 // Start the detection loop once video metadata is loaded
//                 rafIdRef.current = requestAnimationFrame(detectFaceLandmarks);
//             };
//         }
//             cameraStream = stream;
//         } catch (err) {
//           console.error("Error accessing webcam:", err);
//           setError("Cannot access webcam. Please ensure camera permissions are granted.");
//         }
//       };
//       startCamera();
//       // Cleanup: Stop the camera stream tracks
//       return () => {
//         if (cameraStream) {
//           cameraStream.getTracks().forEach((track:any) => track.stop());
//         }
//       };
//     }
//   }, [loading, error, isCameraActive, mediaPipeClasses, detectFaceLandmarks]);
//   // --- Render Logic ---
//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-red-50">
//         <div className="p-8 bg-white rounded-xl shadow-2xl text-red-700 text-lg font-mono text-center">
//           <p className="font-bold text-2xl mb-2">🚨 Application Error</p>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-8 font-sans">
//       <header className="text-center mb-8">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-2 mt-4 leading-tight">
//           Face Mesh Detection
//         </h1>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//           Real-Time Facial Landmark Mapping with MediaPipe.
//         </p>
//       </header>
//       {/* Video/Canvas Container */}
//       <div className="relative w-full max-w-xl bg-gray-900 rounded-3xl shadow-2xl p-2 border-4 border-indigo-500 overflow-hidden">
//         {/* Hidden video element to feed the camera stream to MediaPipe */}
//         <video
//           ref={videoRef}
//           className="hidden"
//           width={videoDimensions.width}
//           height={videoDimensions.height}
//           autoPlay
//           playsInline
//           muted
//         />
//         {/* Canvas for rendering the video and the overlaid landmarks */}
//         <canvas
//           ref={canvasRef}
//           width={videoDimensions.width}
//           height={videoDimensions.height}
//           className="w-full h-auto block rounded-2xl"
//           style={{ aspectRatio: `${videoDimensions.width} / ${videoDimensions.height}`, transform: 'scaleX(-1)' }}
//         />
//         {/* Loading/Status Indicator Overlay */}
//         {(loading || !isCameraActive || !mediaPipeClasses) && (
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-90 rounded-2xl transition-opacity duration-300">
//             <div className="text-center p-4">
//               <svg className="animate-spin h-10 w-10 text-indigo-400 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               <p className="text-white text-lg font-semibold">
//                 {loading ? 'Initializing AI Model...' : 'Awaiting Camera Access...'}
//               </p>
//               <p className="text-gray-400 text-sm mt-1">
//                 {loading ? 'Downloading WASM files and model assets.' : 'Please grant camera permissions to continue.'}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//       {/* Legend Card */}
//       <div className="mt-8 p-6 bg-white border-t-8 border-indigo-600 shadow-xl rounded-xl max-w-xl w-full">
//         <h3 className="font-extrabold text-2xl text-indigo-700 mb-3">Landmark Legend</h3>
//         <p className="text-gray-600 mb-4">The visual overlays help you track key facial features:</p>
//         <ul className="grid grid-cols-2 gap-3 text-sm">
//           <li className="flex items-center space-x-2">
//             <span className="h-3 w-3 rounded-full bg-gray-300"></span>
//             <span className="font-medium text-gray-800">White/Gray Lines:</span> Facial Tesselation (full mesh).
//           </li>
//           <li className="flex items-center space-x-2">
//             <span className="h-3 w-3 rounded-full bg-blue-500"></span>
//             <span className="font-medium text-gray-800">Blue Lines:</span> Eye Contours.
//           </li>
//           <li className="flex items-center space-x-2">
//             <span className="h-3 w-3 rounded-full bg-green-500"></span>
//             <span className="font-medium text-gray-800">Green Lines:</span> Eyebrow Contours.
//           </li>
//           <li className="flex items-center space-x-2">
//             <span className="h-3 w-3 rounded-full bg-red-500"></span>
//             <span className="font-medium text-gray-800">Red Lines/Dots:</span> Lips, Outer Contour, and individual landmark points.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default App;
}),
"[project]/app/sign2/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/sign2/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c187b0d8._.js.map