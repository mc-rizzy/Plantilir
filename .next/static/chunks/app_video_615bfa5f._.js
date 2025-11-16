(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/video/speech.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpeechToText",
    ()=>useSpeechToText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useSpeechToText() {
    let { silenceMs = 2000, wakeWord = "hey app" } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [listening, setListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [awake, setAwake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const silenceTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reset the silence timer
    const resetSilenceTimer = ()=>{
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = setTimeout(()=>{
            if (listening) {
                var _recognitionRef_current;
                (_recognitionRef_current = recognitionRef.current) === null || _recognitionRef_current === void 0 ? void 0 : _recognitionRef_current.stop();
                setListening(false);
            }
        }, silenceMs);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSpeechToText.useEffect": ()=>{
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                console.warn("SpeechRecognition API not supported.");
                return;
            }
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = "en-US";
            recognition.onresult = ({
                "useSpeechToText.useEffect": (event)=>{
                    let combined = "";
                    for(let i = event.resultIndex; i < event.results.length; i++){
                        combined += event.results[i][0].transcript.toLowerCase();
                    }
                    // Wake word detection
                    if (!awake && combined.includes(wakeWord.toLowerCase())) {
                        setAwake(true);
                        setText("");
                        return;
                    }
                    if (awake) {
                        setText(combined);
                    }
                    resetSilenceTimer();
                }
            })["useSpeechToText.useEffect"];
            recognition.onend = ({
                "useSpeechToText.useEffect": ()=>{
                    setListening(false);
                    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
                }
            })["useSpeechToText.useEffect"];
            recognitionRef.current = recognition;
        }
    }["useSpeechToText.useEffect"], [
        silenceMs,
        wakeWord,
        listening
    ]);
    const startListen = ()=>{
        if (!recognitionRef.current) return;
        setAwake(false); // wake-word mode resets
        setText("");
        recognitionRef.current.start();
        resetSilenceTimer();
        setListening(true);
    };
    const stopListen = ()=>{
        var _recognitionRef_current;
        (_recognitionRef_current = recognitionRef.current) === null || _recognitionRef_current === void 0 ? void 0 : _recognitionRef_current.stop();
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        setListening(false);
        setAwake(false);
    };
    return {
        text,
        listening,
        awake,
        startListen,
        stopListen
    };
}
_s(useSpeechToText, "wGou6Lf67hdsGEdDVtJOlgtTwvo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/video/scrapedData.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrapedData",
    ()=>scrapedData
]);
const scrapedData = [
    {
        name: 'billyBobJones',
        hobbies: 'eating'
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    },
    {
        name: '',
        email: '',
        company: '',
        job: '',
        linkedIn: '',
        instagram: ''
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/video/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$video$2f$speech$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/video/speech.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$video$2f$scrapedData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/video/scrapedData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function VideoPage() {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dataList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const infoList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodeVelocities = {};
    const ignoreParameters = [
        'id',
        'threeShape',
        'connections',
        'conversation'
    ];
    const { text, listening, awake, startListen, stopListen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$video$2f$speech$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeechToText"])({
        silenceMs: 2500,
        wakeWord: "hey app"
    });
    let animationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let profileList = [];
    const scrollData = {
        dataListScroll: 0,
        infoListScroll: 0,
        dataScrollSpeed: 0,
        infoScrollSpeed: 0,
        dataScrollDir: 0,
        infoScrollDir: 0
    };
    const landmarkData = {
        hands: null,
        camera: null,
        smoothing: {
            pinchDist: []
        }
    };
    const three = {
        camera: null,
        scene: null,
        renderer: null,
        objects: []
    };
    function resize() {
        if (videoRef != null && videoRef.current != null && canvasRef != null && canvasRef.current != null) {
            videoRef.current.width = window.innerWidth;
            videoRef.current.height = window.innerHeight;
            const aspectRatio = 640 / 480;
            let width = window.innerWidth;
            let height = width / aspectRatio;
            if (height > window.innerHeight) {
                height = window.innerHeight;
                width = height * aspectRatio;
            }
            videoRef.current.width = width;
            videoRef.current.height = height;
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            videoRef.current.style.width = "".concat(width, "px");
            videoRef.current.style.height = "".concat(height, "px");
            canvasRef.current.style.width = "".concat(width, "px");
            canvasRef.current.style.height = "".concat(height, "px");
        // canvasRef.current.style.width = `${window.innerWidth}px`;
        // canvasRef.current.style.height = `${window.innerHeight}px`;
        }
        if (canvasRef.current && canvasRef.current.children.length > 0 && three.renderer != null && three.camera != null) {
            const canvas = three.renderer.domElement;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            three.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            three.camera.updateProjectionMatrix();
        }
    }
    function setUpCamera() {
        landmarkData.hands = new window.Hands({
            locateFile: (file)=>"https://cdn.jsdelivr.net/npm/@mediapipe/hands/".concat(file)
        });
        landmarkData.hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.7,
            minTrackingConfidence: 0.5
        });
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let cubeObject = profileList[0].threeShape;
        landmarkData.hands.onResults((results)=>{
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
            if (results.multiHandLandmarks) {
                let chosenHand = 'Left';
                let data = null;
                //asd
                for(let i = 0; i < results.multiHandedness.length; i++)if (results.multiHandedness[i].label == chosenHand) data = results.multiHandLandmarks[results.multiHandedness[i].index];
                if (data != null) {
                    if (profileList.length > 0 && three.camera) {
                        let landmark = results.multiHandLandmarks[0][8]; // index fingertip
                        let projectionData = projectLandmark(landmark);
                        let landmark2 = results.multiHandLandmarks[0][4];
                        let flatLandmarkData = {
                            x1: landmark.x * canvas.width,
                            y1: landmark.y * canvas.height,
                            x2: landmark2.x * canvas.width,
                            y2: landmark2.y * canvas.height
                        };
                        ctx.lineWidth = 10;
                        ctx.beginPath();
                        ctx.moveTo(flatLandmarkData.x1, flatLandmarkData.y1);
                        ctx.lineTo(flatLandmarkData.x2, flatLandmarkData.y2);
                        ctx.stroke();
                        let dist = Math.sqrt((flatLandmarkData.x1 - flatLandmarkData.x2) * (flatLandmarkData.x1 - flatLandmarkData.x2) + (flatLandmarkData.y1 - flatLandmarkData.y2) * (flatLandmarkData.y1 - flatLandmarkData.y2));
                        landmarkData.smoothing.pinchDist.push(dist);
                        let avgDist = listAverage(landmarkData.smoothing.pinchDist);
                        cubeObject.rotation.x = avgDist / 100;
                        cubeObject.rotation.y = avgDist / 100;
                        cubeObject.rotation.z = avgDist / 100;
                        //x is 1 to -1 ish
                        //y is 1 to -1
                        let pinchedDist = 100 + (0.9 - projectionData.ndcZ) * 720 + 20;
                        if (dist < pinchedDist) {
                            let newMove = smoothMove(profileList[0].threeShape, projectionData.ndcX, projectionData.ndcY, projectionData.ndcZ);
                            let ndc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](newMove.avgX, newMove.avgY, newMove.avgZ);
                            ndc.unproject(three.camera);
                            cubeObject.position.copy(ndc);
                        }
                    }
                }
                for (const landmarks of results.multiHandLandmarks){
                    window.drawConnectors(ctx, landmarks, window.HAND_CONNECTIONS, {
                        color: '#00FF00',
                        lineWidth: 2
                    });
                    window.drawLandmarks(ctx, landmarks, {
                        color: '#FF0000',
                        lineWidth: 1
                    });
                }
            }
            ctx.restore();
        });
        handsRef.current = landmarkData.hands;
        landmarkData.camera = new window.Camera(videoRef.current, {
            onFrame: async ()=>{
                await landmarkData.hands.send({
                    image: videoRef.current
                });
            },
            width: 640,
            height: 480
        });
        cameraRef.current = landmarkData.camera;
        landmarkData.camera.start();
    }
    function createScene() {
        three.scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
        three.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        three.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            alpha: true
        });
        if (containerRef.current && three.renderer) {
            containerRef.current.appendChild(three.renderer.domElement);
            three.renderer.domElement.className = 'absolute';
            three.renderer.setSize(window.innerWidth, window.innerHeight);
            three.renderer.domElement.style.transform = "scaleX(-1)";
        }
        three.camera.position.z = 5;
        three.camera.position.y = 0;
        three.camera.position.x = 0;
    }
    function createCube(size) {
        var tempGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](size, size, size);
        var tempMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: "rgb(".concat(Math.round(Math.random() * 255), ",").concat(Math.round(Math.random() * 255), ",").concat(Math.round(Math.random() * 255), ")")
        });
        var tempCube = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](tempGeometry, tempMaterial);
        tempCube.position.x = 0;
        tempCube.zList = [];
        tempCube.xList = [];
        tempCube.yList = [];
        three.objects.push(tempCube);
        if (three.scene) three.scene.add(tempCube);
    }
    function listAverage(list) {
        let maxLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
        if (list.length > maxLength) list.shift();
        let tempAvg = 0;
        for(let i = 0; i < list.length; i++)tempAvg += list[i];
        tempAvg /= list.length;
        return tempAvg;
    }
    function smoothMove(object, newX, newY, newZ) {
        object.zList.push(newZ);
        object.xList.push(newX);
        object.yList.push(newY);
        let avgZ = listAverage(object.zList);
        let avgX = listAverage(object.xList, 5);
        let avgY = listAverage(object.yList, 5);
        return {
            'avgZ': avgZ,
            'avgX': avgX,
            'avgY': avgY
        };
    }
    function projectLandmark(landmark) {
        // Convert to NDC
        let ndcX = (landmark.x - 0.5) * 2;
        let ndcY = (0.5 - landmark.y) * 2;
        let ndcZ = Math.abs(landmark.z);
        ndcZ = Math.min(0.7, Math.max(0, ndcZ));
        ndcZ = ndcZ * (1 / 0.7);
        ndcZ = 0.995 - ndcZ * 0.195;
        // ndcZ = 0.995;
        // ndcZ = 0.8;
        return {
            "ndcX": ndcX,
            "ndcY": ndcY,
            "ndcZ": ndcZ
        };
    }
    function parseGeminiJSON(text) {
        let startIndex = text.indexOf('{');
        let endIndex = text.lastIndexOf('}');
        if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
            console.error("Could not find valid JSON object delimiters '{' and '}' in the string.");
            return null;
        }
        let jsonString = text.substring(startIndex, endIndex + 1);
        let parsedData = JSON.parse(jsonString);
        return parsedData;
    }
    async function createInfo(tempData) {
        let askGemini = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (!tempData.phone) {
            tempData.phone = Math.round(Math.random() * 10000000000);
        }
        if (!tempData.connections || tempData.connection.length == 0) {
            tempData.connections = [];
            if (profileList.length > 0) {
                for(let i = 0; i < 3; i++){
                    tempData.connections.push(profileList[Math.floor(Math.random() * profileList.length)]);
                }
            }
        }
        if (askGemini) {
            let dataString = tempData;
            let geminiedObject = await getGemini("Here is a JSON object:".concat(dataString, ". Add some JSON data to this object of the profile of ").concat(tempData.name, ' (especially identifiable information) based on the following conversation: "').concat(tempData.conversation, '". Return only a JSON object.'));
            let parsedJSONObject = parseGeminiJSON(geminiedObject);
            let tempShape = tempData.threeShape;
            // tempData = { ...parsedJSONObject, ...tempData };
            tempData.threeShape = tempShape;
        }
        return tempData;
    }
    function findId(id) {
        for(let i = 0; i < profileList.length; i++){
            if (profileList[i].id == id) {
                return profileList[i];
            }
        }
    }
    function loadInfo(dataID) {
        let tempData = findId(dataID);
        if (!infoList.current) return;
        for(let i = 0; i < infoList.current.children.length; i++){
            infoList.current.children[i].remove();
            i--;
        }
        for(let key in tempData){
            if (!ignoreParameters.includes(key)) addInfoSnippet(key, tempData[key]);
        }
    }
    function addPerson(name) {
        let newItem = document.createElement("div");
        newItem.className = 'dataItem';
        newItem.innerHTML = name;
        if (!newItem.id) newItem.id = crypto.randomUUID();
        newItem.addEventListener('click', function() {
            loadInfo(newItem.id);
        });
        if (dataList.current) dataList.current.appendChild(newItem);
        return newItem.id;
    }
    function addInfoSnippet(keyName, tempData) {
        if (typeof tempData === "string" || typeof tempData === "number") {
            let newItem = document.createElement("div");
            newItem.className = 'infoItem';
            let tempKeyName = keyName.replaceAll('_', ' ').toLowerCase().split(' ').map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');
            newItem.innerHTML = "".concat(tempKeyName, ": ").concat(tempData);
            if (infoList.current) infoList.current.appendChild(newItem);
        } else {
            for(let key in tempData){
                if (!ignoreParameters.includes(key)) addInfoSnippet(key, tempData[key]);
            }
        }
    }
    async function loadData(tempData) {
        for(let i = 0; i < tempData.length; i++){
            await createProfile(tempData[i]);
        }
        setUpCamera();
    }
    async function createProfile(data) {
        if (data.conversation) data = await createInfo(data, true);
        else data = await createInfo(data);
        data = add3dProfile(data);
        data.id = addPerson(data.name);
        profileList.push(data);
    }
    function add3dProfile(tempData) {
        var tempGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](1, 1, 1);
        var tempMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: "rgb(".concat(Math.round(Math.random() * 255), ",").concat(Math.round(Math.random() * 255), ",").concat(Math.round(Math.random() * 255), ")")
        });
        var tempCube = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](tempGeometry, tempMaterial);
        tempCube.position.x = Math.random();
        tempCube.position.y = Math.random();
        tempCube.position.z = Math.random();
        tempCube.zList = [];
        tempCube.xList = [];
        tempCube.yList = [];
        three.objects.push(tempCube);
        tempData.threeShape = tempCube;
        if (three.scene) three.scene.add(tempData.threeShape);
        return tempData;
    }
    function animateThreeShapes() {
        let selected = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        for(let i = 0; i < profileList.length; i++){
            let x = profileList[i].threeShape.position.x;
            let y = profileList[i].threeShape.position.y;
            let z = profileList[i].threeShape.position.z;
            if (profileList[i].name == "Mac") {
                console.log(profileList[i].threeShape.position);
                profileList[i].threeShape.position.x = Math.random();
            // if(three.scene) three.scene.remove(profileList[i].threeShape);
            }
            let connections = profileList[i].connections;
            let avgX = 0;
            let avgY = 0;
            let avgZ = 0;
            for(let t = 0; t < connections.length; t++){
                let connection = findId(connections[t].id).threeShape.position;
                avgX += connection.x;
                avgY += connection.y;
                avgZ += connection.z;
                let dist = Math.sqrt((connection.x - x) * (connection.x - x) + (connection.y - y) * (connection.y - y) + (connection.z - z) * (connection.z - z));
                if (dist > 0.3) {
                    // x= x+((connection.x-x)*0.1);
                    // y= y+((connection.y-y)*0.1);
                    // z= z+((connection.z-z)*0.1);
                    x += (connection.x - x) * 0.5;
                    y += (connection.y - y) * 0.5;
                    z += (connection.z - z) * 0.5;
                }
            }
            // x = x+(avgX-x)/5;
            // y = y+(avgY-y)/5;
            // z = z+(avgZ-z)/5;
            for(let t = 0; t < profileList.length; t++){
                let shape = profileList[i].threeShape.position;
                let dist = Math.sqrt((shape.x - x) * (shape.x - x) + (shape.y - y) * (shape.y - y) + (shape.z - z) * (shape.z - z));
                if (dist < 100) {
                // x+= ((shape.x-x)*1.5);
                // y+= ((shape.y-y)*1.5);
                // z+= ((shape.z-z)*1.5);
                // x+= ((1/dist)*0.1);
                // y+= ((1/dist)*0.1);
                // z+= ((1/dist)*0.1);
                }
            }
            if (z > 2) z = 2;
            profileList[i].threeShape.position.x = x;
            profileList[i].threeShape.position.y = y;
            profileList[i].threeShape.position.z = z;
        }
    }
    /*
	function animateThreeShapes(selected:any = null) {
		const CLUSTER_PULL = 0.05;      // pull nodes toward cluster center
		const REPULSION = 10;          // repulsion inside cluster
		const MIN_DISTANCE = 1;
		const DAMPING = 0.85;
		const MAX_STEP = 3;

		// ---- 1. gather nodes by cluster ----
		const clusterMap: Record<string, THREE.Vector3[]> = {};

		for (const node of profileList) {
			const c = node.cluster ?? "_none_";
			if (!clusterMap[c]) clusterMap[c] = [];
			clusterMap[c].push(node.threeShape.position);
			if (!nodeVelocities[node.id]) nodeVelocities[node.id] = new THREE.Vector3();
		}

		// ---- 2. compute cluster centers ----
		const clusterCenters: Record<string, THREE.Vector3> = {};
		for (const cluster in clusterMap) {
			let sum = new THREE.Vector3();
			for (const pos of clusterMap[cluster]) sum.add(pos);
			clusterCenters[cluster] = sum.divideScalar(clusterMap[cluster].length);
		}

		// ---- 3. apply simple forces ----
		for (const node of profileList) {
			const pos = node.threeShape.position;
			const vel = nodeVelocities[node.id];
			const cluster = node.cluster ?? "_none_";

			let force = new THREE.Vector3();

			// (a) attraction toward cluster center
			const center = clusterCenters[cluster];
			const toCenter = new THREE.Vector3().subVectors(center, pos);
			force.add(toCenter.multiplyScalar(CLUSTER_PULL));

			// (b) repulsion from nodes in same cluster (keeps things spaced)
			for (const otherPos of clusterMap[cluster]) {
				if (otherPos === pos) continue;
				const dir = new THREE.Vector3().subVectors(pos, otherPos);
				const dist = Math.max(dir.length(), MIN_DISTANCE);
				dir.normalize().multiplyScalar(REPULSION / (dist * dist));
				force.add(dir);
			}

			// (c) apply velocity + damping
			vel.add(force);
			vel.multiplyScalar(DAMPING);

			// (d) smooth clamp on motion
			if (vel.length() > MAX_STEP) vel.setLength(MAX_STEP);

			pos.add(vel);
		}
	}
*/ function scrollDataList(e) {
        scrollData.dataScrollSpeed = 2 * Math.abs(e.deltaY);
        scrollData.dataScrollDir = e.deltaY > 0 ? -1 : 1;
    }
    function scrollInfoList(e) {
        scrollData.infoScrollSpeed = 2 * Math.abs(e.deltaY);
        scrollData.infoScrollDir = e.deltaY > 0 ? -1 : 1;
    }
    function handleScrolls() {
        if (dataList.current) {
            let temp = dataList.current.offsetTop + scrollData.dataScrollSpeed * scrollData.dataScrollDir;
            let minTop = 0;
            let maxTop = window.innerHeight + (dataList.current.getBoundingClientRect().top - dataList.current.getBoundingClientRect().bottom);
            if (temp > minTop) temp = minTop;
            if (temp < maxTop) temp = maxTop;
            scrollData.dataScrollSpeed *= 0.9;
            dataList.current.style.top = temp + 'px';
        }
    }
    async function getGemini(prompt) {
        const res = await fetch("/api/gemini", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt
            })
        });
        const data = await res.json();
        return data.geminiAnswer;
    // return null;
    }
    function animate() {
        animationId.current = requestAnimationFrame(animate);
        if (three.renderer && three.scene && three.camera) three.renderer.render(three.scene, three.camera);
        // three.objects.forEach((object) => {
        // 	object.rotateX(0.01);
        // 	object.rotateY(0.01);
        // 	object.rotateZ(0.01);
        // });
        animateThreeShapes();
        handleScrolls();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPage.useEffect": ()=>{
            document.body.style.overflow = "hidden";
            window.addEventListener('resize', resize);
            resize();
            if ("object" === 'undefined' || !window.Hands || !window.Camera) return;
            createScene();
            // createCube(1);
            loadData(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$video$2f$scrapedData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapedData"]);
            animate();
            let conversation = "Hello, How are you doing? I'm doing well, I just got back from my trip to SodaCity Beach. My work phone number is 123456789 and my middle name is BobbyMcBob. My favorite food is donuts and I work at Pipes Inc. I am actually the Senior manager of cooling.";
            createProfile({
                name: 'Mac',
                hobbies: 'racing cars',
                id: '78666-23145',
                conversation: conversation
            });
            window.setTimeout({
                "VideoPage.useEffect": function() {
                    for(let i = 0; i < profileList.length; i++){
                        profileList[i].threeShape.position.x = Math.random() * 10 - 5;
                        profileList[i].threeShape.position.y = Math.random() * 10 - 5;
                        profileList[i].threeShape.position.z = Math.random() * 10 - 5;
                    }
                }
            }["VideoPage.useEffect"], 1000);
            startListen();
            return ({
                "VideoPage.useEffect": ()=>{
                    landmarkData.hands.close();
                    landmarkData.camera.stop();
                    window.removeEventListener('resize', resize);
                    if (animationId.current) cancelAnimationFrame(animationId.current);
                }
            })["VideoPage.useEffect"];
        }
    }["VideoPage.useEffect"], []);
    // check Listening
    // Fix box animations
    // add lines between connections
    // Get judges information
    // hand controls
    // Nicer UI
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js",
                strategy: "beforeInteractive"
            }, void 0, false, {
                fileName: "[project]/app/video/page.tsx",
                lineNumber: 657,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
                strategy: "beforeInteractive"
            }, void 0, false, {
                fileName: "[project]/app/video/page.tsx",
                lineNumber: 661,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js",
                strategy: "beforeInteractive"
            }, void 0, false, {
                fileName: "[project]/app/video/page.tsx",
                lineNumber: 665,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: dataList,
                        id: "dataList",
                        onWheel: scrollDataList
                    }, void 0, false, {
                        fileName: "[project]/app/video/page.tsx",
                        lineNumber: 671,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "grid justify-center w-full h-full ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: videoRef,
                                style: {
                                    display: 'none',
                                    transform: 'scaleX(-1)'
                                },
                                width: "640",
                                height: "480",
                                playsInline: true
                            }, void 0, false, {
                                fileName: "[project]/app/video/page.tsx",
                                lineNumber: 673,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                width: "640",
                                height: "480",
                                style: {
                                    transform: 'scaleX(-1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/video/page.tsx",
                                lineNumber: 680,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/video/page.tsx",
                        lineNumber: 672,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: infoList,
                        id: "infoList",
                        onWheel: scrollInfoList
                    }, void 0, false, {
                        fileName: "[project]/app/video/page.tsx",
                        lineNumber: 689,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/video/page.tsx",
                lineNumber: 670,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_s(VideoPage, "btI/FUGMgrdOkueGW8R4i97RQAU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$video$2f$speech$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeechToText"]
    ];
});
_c = VideoPage;
var _c;
__turbopack_context__.k.register(_c, "VideoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_video_615bfa5f._.js.map