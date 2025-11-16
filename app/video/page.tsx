'use client';

import { useEffect, useRef } from 'react';
import { useSpeechToText } from "./speech";
import Script from 'next/script';
import { scrapedData } from '../../public/scrapedData';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader, Font } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import * as THREE from 'three';

export default function VideoPage() {

	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const cameraRef = useRef<any>(null);
	const handsRef = useRef<any>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const dataList = useRef<HTMLDivElement>(null);
	const infoList = useRef<HTMLDivElement>(null);
	const nodeVelocities: Record<string, THREE.Vector3> = {};
	const ignoreParameters = ['id', 'threeShape', 'connections', 'conversation', 'nameTag'] as any;
	const listenButton = useRef<HTMLButtonElement>(null);

	const { text, listening, awake, startListen, stopListen } = useSpeechToText({
		silenceMs: 2500,   // auto-stop after 2.5s silence
		wakeWord: "hey app"
	});

	let animationId = useRef<number | null>(null);
	let SelectedID = null as any;
	let monkeyModel = null as any;

	let profileList = [] as any;

	const scrollData = {
		dataListScroll: 0 as any,
		infoListScroll: 0 as any,
		dataScrollSpeed: 0 as any,
		infoScrollSpeed: 0 as any,
		dataScrollDir: 0 as any,
		infoScrollDir: 0 as any
	}

	const landmarkData = {
		hands: null as any | null,
		camera: null as any | null,
		smoothing: {
			pinchDist: [] as number[]
		}
	}

	const three = {
		camera: null as THREE.PerspectiveCamera | null,
		scene: null as THREE.Scene | null,
		renderer: null as THREE.WebGLRenderer | null,
		objects: [] as THREE.Object3D[]
	};

	function resize(){
		if(videoRef!=null && videoRef.current!=null && canvasRef!=null && canvasRef.current!=null){
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

			videoRef.current.style.width = `${width}px`;
			videoRef.current.style.height = `${height}px`;
			canvasRef.current.style.width = `${width}px`;
			canvasRef.current.style.height = `${height}px`;

			// canvasRef.current.style.width = `${window.innerWidth}px`;
			// canvasRef.current.style.height = `${window.innerHeight}px`;
			
		}
		if (canvasRef.current && canvasRef.current.children.length > 0 && three.renderer!=null && three.camera!=null) {
			const canvas = three.renderer.domElement;
			canvas.style.width = window.innerWidth+'px';
			canvas.style.height = window.innerHeight+'px';

			three.camera.aspect = canvas.clientWidth / canvas.clientHeight;
			three.camera.updateProjectionMatrix();
		}
	}
/*
	function setUpCamera(){

		landmarkData.hands = new window.Hands({
			locateFile: (file: string) =>
				`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
		});

		landmarkData.hands.setOptions({
			maxNumHands: 2,
			modelComplexity: 1,
			minDetectionConfidence: 0.7,
			minTrackingConfidence: 0.5,
		});
		
		const canvas = canvasRef.current!;
		const ctx = canvas.getContext('2d')!;
		let cubeObject = profileList[0].threeShape;

		landmarkData.hands.onResults((results: any) => {
			ctx.save();
			// ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

			if (results.multiHandLandmarks) {

				let chosenHand = 'Left';
				let data = null;
				//asd
				for(let i = 0; i < results.multiHandedness.length; i++)
					if(results.multiHandedness[i].label == chosenHand) data = results.multiHandLandmarks[results.multiHandedness[i].index];

				if(data != null){
					if(profileList.length > 0 && three.camera){
						
						let landmark = results.multiHandLandmarks[0][8]; // index fingertip
						let projectionData = projectLandmark(landmark);
						let landmark2 = results.multiHandLandmarks[0][4];


						let flatLandmarkData = {
							x1: landmark.x*canvas.width, 
							y1: landmark.y*canvas.height,
							x2: landmark2.x*canvas.width, 
							y2: landmark2.y*canvas.height
						}


						ctx.lineWidth = 10;
						ctx.beginPath();
						ctx.moveTo(flatLandmarkData.x1, flatLandmarkData.y1);
						ctx.lineTo(flatLandmarkData.x2, flatLandmarkData.y2);
						ctx.stroke();

						let dist = Math.sqrt((flatLandmarkData.x1-flatLandmarkData.x2)*(flatLandmarkData.x1-flatLandmarkData.x2) + (flatLandmarkData.y1-flatLandmarkData.y2)*(flatLandmarkData.y1-flatLandmarkData.y2));
						landmarkData.smoothing.pinchDist.push(dist);
						let avgDist = listAverage(landmarkData.smoothing.pinchDist);


						cubeObject.rotation.x = avgDist / 100;
						cubeObject.rotation.y = avgDist / 100;
						cubeObject.rotation.z = avgDist / 100;

						//x is 1 to -1 ish
						//y is 1 to -1
						
						let pinchedDist = (100+ ((0.9-projectionData.ndcZ)*720)) + 20;
						if(dist < pinchedDist){
							let newMove = smoothMove(profileList[0].threeShape, projectionData.ndcX, projectionData.ndcY, projectionData.ndcZ);
							let ndc = new THREE.Vector3(newMove.avgX, newMove.avgY, newMove.avgZ);
							ndc.unproject(three.camera);
							cubeObject.position.copy(ndc);
						}

					}
				}

				for (const landmarks of results.multiHandLandmarks) {
					window.drawConnectors(ctx, landmarks, window.HAND_CONNECTIONS, {
						color: '#00FF00',
						lineWidth: 2,
					});
					window.drawLandmarks(ctx, landmarks, {
						color: '#FF0000',
						lineWidth: 1,
					});
				}
			}
			ctx.restore();
		});

		handsRef.current = landmarkData.hands;

		landmarkData.camera = new window.Camera(videoRef.current!, {
			onFrame: async () => {
				await landmarkData.hands.send({ image: videoRef.current! });
			},
			width: 640,
			height: 480,
		});

		cameraRef.current = landmarkData.camera;
		landmarkData.camera.start();










		// if (!window.FaceMesh || !window.Camera) return;

		// let video = videoRef.current!;

		// let faceMesh = new window.FaceMesh({
		// 	locateFile: (file: string) =>
		// 		`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
		// });

		// faceMesh.setOptions({
		// 	maxNumFaces: 1,
		// 	refineLandmarks: true,
		// 	minDetectionConfidence: 0.5,
		// 	minTrackingConfidence: 0.5,
		// });

		// faceMesh.onResults((results: any) => {
		// 	// ctx.clearRect(0, 0, canvas.width, canvas.height);

		// // Draw mirrored video
		// ctx.save();
		// ctx.scale(-1, 1);
		// ctx.drawImage(results.image, -canvas.width, 0, canvas.width, canvas.height);
		// ctx.restore();

		// // Draw glowing dots
		// if (!results.multiFaceLandmarks?.length) return;

		// let landmarks = results.multiFaceLandmarks[0];

		// landmarks.forEach((lm: any) => {
		// 	const x = canvas.width - lm.x * canvas.width;
		// 	const y = lm.y * canvas.height;

		// 	const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
		// 	gradient.addColorStop(0, "rgba(0,255,255,1)");
		// 	gradient.addColorStop(1, "rgba(0,255,255,0)");

		// 	ctx.fillStyle = gradient;
		// 	ctx.beginPath();
		// 	ctx.arc(x, y, 5, 0, Math.PI * 2);
		// 	ctx.fill();
		// });
		// });

		// const camera = new window.Camera(video, {
		// onFrame: async () => {
		// 		await faceMesh.send({ image: video });
		// 	},
		// 	width: 640,
		// 	height: 480,
		// });

		// camera.start();
		

	}
*/













	function setUpCamera() {
		const canvas = canvasRef.current!;
		const ctx = canvas.getContext("2d")!;
		const video = videoRef.current!;

		let cubeObject = profileList[0].threeShape;

		// storage for latest results
		let latestHands = null as any;
		let latestFace = null as any;

		// ============================================================
		// 1. HANDS MODEL
		// ============================================================
		const hands = new window.Hands({
			locateFile: (file: string) =>
			`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
		});

		hands.setOptions({
			maxNumHands: 2,
			modelComplexity: 1,
			minDetectionConfidence: 0.7,
			minTrackingConfidence: 0.5,
		});

		hands.onResults((results: any) => {
			latestHands = results; // ← store only
		});

		// ============================================================
		// 2. FACE MESH MODEL
		// ============================================================
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

		faceMesh.onResults((results: any) => {
			latestFace = results; // ← store only
		});

		// ============================================================
		// 3. ONE CAMERA THAT FEEDS BOTH
		// ============================================================
		const camera = new window.Camera(video, {
			onFrame: async () => {
			await hands.send({ image: video });
			await faceMesh.send({ image: video });

			drawFrame(); // ← draw everything here
			},
			width: 640,
			height: 480,
		});

		camera.start();

		// ============================================================
		// 4. THE RENDER PIPELINE (the FIX)
		// ============================================================
		function drawFrame() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			//
			// 1. MIRROR CONTEXT FOR EVERYTHING
			//
			ctx.save();
			ctx.scale(-1, 1);
			ctx.translate(-canvas.width, 0);

			//
			// 2. DRAW VIDEO (mirrored!)
			//
			ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

			//
			// 3. DRAW HAND LANDMARKS (mirrored!)
			//
			if (latestHands?.multiHandLandmarks) {
				const results = latestHands;

				// Your pinch + cube logic still works because it's in canvas space
				let chosenHand = "Left";
				let data = null;

				for (let i = 0; i < results.multiHandedness.length; i++) {
				if (results.multiHandedness[i].label === chosenHand) {
					data = results.multiHandLandmarks[results.multiHandedness[i].index];
				}
				}

				if (data != null && profileList.length > 0 && three.camera) {
				let lm = results.multiHandLandmarks[0][8];
				let lm2 = results.multiHandLandmarks[0][4];

				// SAME coordinates (canvas now mirrored)
				const flat = {
					x1: lm.x * canvas.width,
					y1: lm.y * canvas.height,
					x2: lm2.x * canvas.width,
					y2: lm2.y * canvas.height,
				};

				ctx.lineWidth = 10;
				ctx.beginPath();
				ctx.moveTo(flat.x1, flat.y1);
				ctx.lineTo(flat.x2, flat.y2);
				ctx.stroke();

				let dist = Math.hypot(flat.x1 - flat.x2, flat.y1 - flat.y2);
				landmarkData.smoothing.pinchDist.push(dist);

				const avgDist = listAverage(landmarkData.smoothing.pinchDist);
				cubeObject.rotation.x = avgDist / 100;
				cubeObject.rotation.y = avgDist / 100;
				cubeObject.rotation.z = avgDist / 100;

				const projectionData = projectLandmark(lm);

				let pinchedDist = 100 + (0.9 - projectionData.ndcZ) * 720 + 20;

				if (dist < pinchedDist) {
					let newMove = smoothMove(
					profileList[0].threeShape,
					projectionData.ndcX,
					projectionData.ndcY,
					projectionData.ndcZ
					);

					let ndc = new THREE.Vector3(
					newMove.avgX,
					newMove.avgY,
					newMove.avgZ
					);

					ndc.unproject(three.camera);
					cubeObject.position.copy(ndc);
				}
				}

				// draw all hands
				for (const lm of results.multiHandLandmarks) {
				window.drawConnectors(ctx, lm, window.HAND_CONNECTIONS, {
					color: "#00FF00",
					lineWidth: 2,
				});
				window.drawLandmarks(ctx, lm, {
					color: "#FF0000",
					lineWidth: 1,
				});
				}
			}

			//
			// 4. DRAW FACE LANDMARKS (mirrored!)
			//
			if (latestFace?.multiFaceLandmarks) {
				const landmarks = latestFace.multiFaceLandmarks[0];

				if(landmarks)
				landmarks.forEach((lm: any) => {
					const x = lm.x * canvas.width;     // <— NO canvas.width - x
					const y = lm.y * canvas.height;

					const g = ctx.createRadialGradient(x, y, 0, x, y, 10);
					g.addColorStop(0, "rgba(0,255,255,1)");
					g.addColorStop(1, "rgba(0,255,255,0)");

					ctx.fillStyle = g;
					ctx.beginPath();
					ctx.arc(x, y, 5, 0, Math.PI * 2);
					ctx.fill();
				});
			}

			//
			// 5. RESTORE (leave canvas normal for next frame)
			//
			ctx.restore();
		}

	}




















	function createScene(){

		three.scene = new THREE.Scene();
		three.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

		three.renderer = new THREE.WebGLRenderer({ alpha: true });

		if (containerRef.current && three.renderer){
			containerRef.current.appendChild(three.renderer.domElement);
			three.renderer.domElement.className='absolute';
			three.renderer.setSize(window.innerWidth, window.innerHeight);
			three.renderer.domElement.style.transform = "scaleX(-1)";
		}

		three.camera.position.z = 5;
		three.camera.position.y = 0;
		three.camera.position.x = 0
	}

	function createCube(size: number | undefined){

		var tempGeometry = new THREE.BoxGeometry(size, size, size);
		var tempMaterial = new THREE.MeshBasicMaterial({ color: `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})` });
		var tempCube = new THREE.Mesh(tempGeometry, tempMaterial);

		tempCube.position.x = 0;
		(tempCube as any).zList = [];
		(tempCube as any).xList = [];
		(tempCube as any).yList = [];
		three.objects.push(tempCube);
		if(three.scene)	three.scene.add(tempCube);
		
	}

	function listAverage(list: number[], maxLength=10){
		if(list.length > maxLength) list.shift();
		let tempAvg = 0;
		for(let i = 0; i < list.length; i++) tempAvg+=list[i];
		tempAvg/=list.length;
		return tempAvg;
	}

	function smoothMove(object: THREE.Object3D<THREE.Object3DEventMap>, newX: number, newY: number, newZ: number){
		(object as any).zList.push(newZ);
		(object as any).xList.push(newX);
		(object as any).yList.push(newY);

		let avgZ = listAverage((object as any).zList);
		let avgX = listAverage((object as any).xList, 5);
		let avgY = listAverage((object as any).yList, 5);

		return {'avgZ': avgZ, 'avgX': avgX, 'avgY': avgY}
	}

	function projectLandmark(landmark: { x: number; y: number; z: number; }){
		// Convert to NDC
		let ndcX = (landmark.x - 0.5) * 2;
		let ndcY = (0.5 - landmark.y) * 2;
		let ndcZ = Math.abs(landmark.z);
		ndcZ = Math.min(0.7, Math.max(0, ndcZ));
		ndcZ = ndcZ * (1/0.7);

		ndcZ = 0.995 - (ndcZ * (0.195));
		// ndcZ = 0.995;
		// ndcZ = 0.8;
		return {"ndcX": ndcX, "ndcY": ndcY, "ndcZ": ndcZ}

	}

	function parseGeminiJSON(text:any){
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

	async function createInfo(tempData: any, askGemini=false){

		if(!tempData.phone){
			tempData.phone = Math.round((Math.random()*10000000000));
		}
		if(!tempData.connections || tempData.connection.length == 0){
			tempData.connections = [];
			
			if(profileList.length > 0){
				for(let i = 0; i < 3; i++){
					tempData.connections.push(profileList[Math.floor(Math.random()*profileList.length)]);
				}
			}
		}

		if(askGemini){
			let dataString = tempData;
			let geminiedObject = await getGemini(`Here is a JSON object:${dataString}. Add some JSON data to this object of the profile of ${tempData.name} (especially identifiable information) based on the following conversation: "${tempData.conversation}". Return only a JSON object.`);
			let parsedJSONObject = parseGeminiJSON(geminiedObject);

			let tempShape = tempData.threeShape;
			// tempData = { ...parsedJSONObject, ...tempData };
			tempData.threeShape = tempShape;
		}

		return tempData;
	}
	function findId(id: any){
		for(let i = 0; i < profileList.length; i++){
			if(profileList[i].id==id){
				return profileList[i];
			}
		}
	}
	function loadInfo(dataID:any){
		SelectedID = dataID;
		let tempData = findId(dataID);

		if(!infoList.current)
			return;
		
		for(let i = 0; i < infoList.current.children.length; i++){
			infoList.current.children[i].remove()
			i--;
		}

		for (let key in tempData) {
			if(!ignoreParameters.includes(key))	
				addInfoSnippet(key, tempData[key]);
		}
	}


	function addPerson(name: any){
		let newItem  = document.createElement("div");
		newItem.className = 'dataItem';
		newItem.innerHTML = name;
		if(!newItem.id) newItem.id = crypto.randomUUID();
		newItem.addEventListener('click', function(){
			loadInfo(newItem.id);
		});
		if(dataList.current) dataList.current.appendChild(newItem);
		return newItem.id;
	}




	function addInfoSnippet(keyName:any, tempData:any){
		if(typeof tempData === "string" || typeof tempData === "number"){
			let newItem  = document.createElement("div");
			newItem.className = 'infoItem';
			
			let tempKeyName = keyName.replaceAll('_',' ').toLowerCase().split(' ').map(function (word:any) {
				return (word.charAt(0).toUpperCase() + word.slice(1));
			}).join(' ');

			newItem.innerHTML = `${tempKeyName}: ${tempData}`;
			if(tempKeyName.toLowerCase().includes('linkedin') || tempKeyName.toLowerCase().includes('instagram') || tempKeyName.toLowerCase().includes('github') || tempKeyName.toLowerCase().includes('http')){
				let linkItem  = document.createElement("a");
				linkItem.href = ''+tempData;
				linkItem.target = '_blank';
				linkItem.appendChild(newItem);
				if(infoList.current) infoList.current.appendChild(linkItem);

			}else{
				if(infoList.current) infoList.current.appendChild(newItem);
			}
		}else{
			for (let key in tempData) {
				if(!ignoreParameters.includes(key))	
					addInfoSnippet(key, tempData[key]);
			}
		}
	}

	async function loadErryThang(tempData:any){
		await loadModel(tempData);
		if(!three.scene) return;

		let color = 0xFFFFFF;
		let light = new THREE.AmbientLight(color, 5);
		three.scene.add(light);

		let light2 = new THREE.PointLight(color, 10);
		light2.position.set(0, 1, 3);
		three.scene.add(light2);
	}
	async function loadData(tempData:any){
		
		for(let i = 0; i < tempData.length; i++){
			await createProfile(tempData[i]);	
		}
		setUpCamera();
	}

	async function createProfile(data:any){
		if(data.conversation)
			data = await createInfo(data, true);
		else
			data = await createInfo(data);

		data = await add3dProfile(data);
		if (data.nameTag) {
			data.nameTag.position.x += 0.5;
			data.nameTag.position.y += 0.2;
		}
		data.id = addPerson(data.name);

		profileList.push(data);
	}



	// import * as THREE from 'three';
	// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
	// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

	
	async function add3dProfile(tempData: any) {
		var tempCube = monkeyModel.clone();
		tempCube.position.x = Math.random();
		tempCube.position.y = Math.random();
		tempCube.position.z = Math.random();
		(tempCube as any).zList = [];
		(tempCube as any).xList = [];
		(tempCube as any).yList = [];
		three.objects.push(tempCube);

		tempData.threeShape = tempCube;
		if (three.scene) three.scene.add(tempData.threeShape);

		let material = new THREE.MeshStandardMaterial({ color: 0xdc24e2 });
		const loader = new FontLoader();

		// Wrap loader.load in a Promise
		const font: Font = await new Promise((resolve, reject) => {
			loader.load(
				'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
				(font) => resolve(font),
				undefined,
				(err) => reject(err)
				
			);
		});

		// Now the font is fully loaded
		const geometry = new TextGeometry(tempData.name, {
			font: font,
			size: 0.1,
			depth: 0.01,
			bevelEnabled: false,
			bevelThickness: 0.01,
			bevelSize: 0.01,
			bevelSegments: 3,
			curveSegments: 12,
		});

		let textMesh = new THREE.Mesh(geometry, material);
		geometry.center();

		textMesh.position.set(tempCube.position.x + 0.2, tempCube.position.y, tempCube.position.z);
		textMesh.rotation.set(0, Math.PI, 0);
		tempData.nameTag = textMesh;
		if (three.scene) three.scene.add(tempData.nameTag);

		console.log(tempData.nameTag)
		return tempData;
	}


	function animateThreeShapes(selectedID: any = null) {
		if (!profileList) return;

		const minDistance = 4.0;       // minimum distance for repulsion
		const maxAttractDistance = 10; // distance scaling for attraction
		const attractionBase = 0.1;   // base attraction factor
		const repulsionBase = 0.2;    // base repulsion factor
		const damping = 0.1;           // smooth movement factor

		for (let i = 0; i < profileList.length; i++) {
			let shape = profileList[i].threeShape;
			let pos = shape.position;

			let forceX = 0;
			let forceY = 0;
			let forceZ = 0;

			// Attraction to connections
			const connections = profileList[i].connections;
			for (let t = 0; t < connections.length; t++) {
			const targetShape = findId(connections[t].id).threeShape;
			const targetPos = targetShape.position;

			const dx = targetPos.x - pos.x;
			const dy = targetPos.y - pos.y;
			const dz = targetPos.z - pos.z;
			const distance = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;

			// Stronger attraction when farther away
			const attraction = attractionBase * (distance / maxAttractDistance);

			forceX += (dx / distance) * attraction;
			forceY += (dy / distance) * attraction;
			forceZ += (dz / distance) * attraction;
			}

			// Repulsion from all other shapes
			for (let j = 0; j < profileList.length; j++) {
			if (i === j) continue;
			const other = profileList[j].threeShape;
			const dx = pos.x - other.position.x;
			const dy = pos.y - other.position.y;
			const dz = pos.z - other.position.z;
			const distance = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;

			if (distance < minDistance) {
				// Stronger repulsion when closer
				const repulse = repulsionBase * ((minDistance - distance) / distance);
				forceX += dx * repulse;
				forceY += dy * repulse;
				forceZ += dz * repulse;
			}
			}

			// Smoothly update position using damping
			pos.x += forceX * damping;
			pos.y += forceY * damping;
			pos.z += forceZ * damping;

			// let avgs = smoothMove(shape, pos.x + forceX * damping, pos.y + forceY * damping, pos.z + forceZ * damping);
			// pos.x = avgs['avgX'];
			// pos.y = avgs['avgY'];
			// pos.z = avgs['avgZ'];

			if(pos.z > 2) pos.z = 2;

			if(profileList[i].nameTag){
				profileList[i].nameTag.position.x = pos.x;
				profileList[i].nameTag.position.y = pos.y+1;
				profileList[i].nameTag.position.z = pos.z;
			}
		}

		
		if(selectedID){
			let item = findId(selectedID);
			let shape = item.threeShape.position;

			shape.x*=0.9;
			shape.y*=0.9;
			shape.z*=0.9;
		}

		
	}


	function scrollDataList(e:any){
			scrollData.dataScrollSpeed = 2*Math.abs(e.deltaY);
			scrollData.dataScrollDir = e.deltaY > 0 ? -1 : 1;
	}
	function scrollInfoList(e:any){
			scrollData.infoScrollSpeed = 2*Math.abs(e.deltaY);
		scrollData.infoScrollDir = e.deltaY > 0 ? -1 : 1;
	}

	function handleScrolls() {
		if(dataList.current){
			let temp = dataList.current.offsetTop+scrollData.dataScrollSpeed*scrollData.dataScrollDir;
			
			let minTop = 0;
			let maxTop = window.innerHeight+(dataList.current.getBoundingClientRect().top-dataList.current.getBoundingClientRect().bottom);

			if (temp > minTop)
				temp = minTop;
			if (temp < maxTop)
				temp = maxTop;

			scrollData.dataScrollSpeed*=0.9;
			dataList.current.style.top=temp +'px';
		}
		
	}

	async function getGemini(prompt: any){
		const res = await fetch("/api/gemini", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt }),
		});

		const data = await res.json();
		return data.geminiAnswer;
		// return null;
	}

	function animate() {
		animationId.current = requestAnimationFrame(animate);
		if(three.renderer && three.scene && three.camera)three.renderer.render(three.scene, three.camera);

		// three.objects.forEach((object) => {
		// 	object.rotateX(0.01);
		// 	object.rotateY(0.01);
		// 	object.rotateZ(0.01);
		// });

		animateThreeShapes(SelectedID);
		handleScrolls();
	}

	async function loadModel(tempData:any){
		let loader = new GLTFLoader();
		loader.load('/Monkey.glb', (gltf) => {
			let model: any | null;
			model = gltf.scene;
			model.scale.set(0.7,0.8,0.55);
			
			let box = new THREE.Box3();
			box.setFromObject(model);
			let size = new THREE.Vector3();
			box.getSize(size);
			
			model.geometry = {
				parameters: {
					height: Math.floor(2.87*100)/100,
					width: Math.floor(size.x*100)/100,
					depth: Math.floor(size.z*100)/100,
					depthOffset: 0.6
				}
			};

			monkeyModel = model;
			loadData(tempData)
		});
	}

	function toggleListen(){
		if(listening)
			stopListen();
		else
			startListen();
		console.log(listening);
		console.log(text)
	}



	useEffect(() => {

		document.body.style.overflow = "hidden";
		window.addEventListener('resize', resize)
		resize();
		if (typeof window === 'undefined' || !window.Hands || !window.Camera) return;


		createScene();
		// createCube(1);
		

		loadErryThang(scrapedData);
		animate();

		let conversation = "Hello, How are you doing? I'm doing well, I just got back from my trip to SodaCity Beach. My work phone number is 123456789 and my middle name is BobbyMcBob. My favorite food is donuts and I work at Pipes Inc. I am actually the Senior manager of cooling."
		createProfile({name: 'Mac', hobbies:'racing cars', id:'78666-23145', conversation: conversation});

		startListen();

		
		

		return () => {
			landmarkData.hands.close();
			landmarkData.camera.stop();
			window.removeEventListener('resize', resize);
			if (animationId.current) cancelAnimationFrame(animationId.current);
		};
	}, []);


	// voice
	// add lines between connections

	return (
		<>
			<Script
				src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"
				strategy="beforeInteractive"
			/>
			<Script
				src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"
				strategy="beforeInteractive"
			/>
			<Script
				src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"
				strategy="beforeInteractive"
			/>
			<Script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js" strategy="beforeInteractive" />
			<Script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" strategy="beforeInteractive" />

			<div className=''>
				<div ref={dataList} id='dataList' onWheel={scrollDataList}></div>
				<div ref={containerRef} className='grid justify-center w-full h-full '>
					<video
						ref={videoRef}
						style={{ display: 'none', transform: 'scaleX(1)' }}
						width="640"
						height="480"
						playsInline
					/>
					<canvas
						ref={canvasRef}
						width="640"
						height="480"
						style={{ transform: 'scaleX(1)' }}
					/>
				</div>

				
				<div ref={infoList} id='infoList' onWheel={scrollInfoList}></div>
				<button className='listenButton' ref={listenButton} onClick={toggleListen} >Listen</button>
			</div>
		</>
	);
}