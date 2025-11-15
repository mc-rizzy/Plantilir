'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

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
	const ignoreParameters = ['id', 'threeShape', 'connections', 'conversation'] as any;

	let animationId = useRef<number | null>(null);

	let profileList = [] as any;
	let testData = [
		{name: 'billyBobJones', hobbies: 'eating'},
		{name: 'sarah', hobbies: 'feasting'},
		{name: 'neek', hobbies: 'pooping'},
		{name: 'sal', hobbies: 'anime'},
		{name: 'ellie', hobbies: 'asdf'},
		{name: 'mark', hobbies: 'nah'},
		{name: 'john', hobbies: 'idk'},
		{name: 'dudeyMcDudeMan', hobbies: 'frfr'},
	];

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
		let cubeObject = three.objects[0];

		landmarkData.hands.onResults((results: any) => {
			ctx.save();
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

			if (results.multiHandLandmarks) {

				let chosenHand = 'Left';
				let data = null;
				//asd
				for(let i = 0; i < results.multiHandedness.length; i++)
					if(results.multiHandedness[i].label == chosenHand) data = results.multiHandLandmarks[results.multiHandedness[i].index];

				if(data != null){
					if(three.objects.length > 0 && three.camera){
						
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
						

						let newMove = smoothMove(three.objects[0], projectionData.ndcX, projectionData.ndcY, projectionData.ndcZ);
						let ndc = new THREE.Vector3(newMove.avgX, newMove.avgY, newMove.avgZ);
						ndc.unproject(three.camera);
						cubeObject.position.copy(ndc);

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

		// Extract the potential JSON string
		let jsonString = text.substring(startIndex, endIndex + 1);

		// console.log("--- Extracted String ---");
		// console.log(jsonString);
		// console.log("------------------------");

		// The core parsing operation:
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
			console.log(parsedJSONObject)
			// tempData = parsedJSONObject;
			tempData = { ...tempData, ...parsedJSONObject };
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
			if(infoList.current) infoList.current.appendChild(newItem);
		}else{
			for (let key in tempData) {
				if(!ignoreParameters.includes(key))	
					addInfoSnippet(key, tempData[key]);
			}
		}
	}

	async function loadData(tempData:any){
		for(let i = 0; i < tempData.length; i++){
			await createProfile(tempData[i]);	
		}
	}

	async function createProfile(data:any){
		if(data.conversation)
			data = await createInfo(data, true);
		else
			data = await createInfo(data);

		data = add3dProfile(data);
		data.id = addPerson(data.name);

		profileList.push(data);
	}



	function add3dProfile(tempData: any){

		var tempGeometry = new THREE.BoxGeometry(1, 1, 1);
		var tempMaterial = new THREE.MeshBasicMaterial({ color: `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})` });
		var tempCube = new THREE.Mesh(tempGeometry, tempMaterial);

		tempCube.position.x = Math.random();
		tempCube.position.y = Math.random();
		tempCube.position.z = Math.random();
		(tempCube as any).zList = [];
		(tempCube as any).xList = [];
		(tempCube as any).yList = [];
		three.objects.push(tempCube);
		if(three.scene)	three.scene.add(tempCube);

		if(!tempData.threeShape) tempData.threeShape = tempCube;

		return tempData;
	}
	
	function animateThreeShapes(selected:any = null){
		if(!profileList) return;
		for(let i = 0; i < profileList.length; i++){
			let x = profileList[i].threeShape.position.x;
			let y = profileList[i].threeShape.position.y;
			let z = profileList[i].threeShape.position.z;



			let connections = profileList[i].connections;
			for(let t = 0; t < connections.length; t++){
				let connection = findId(connections[t].id);
				// connection.name;
				// connection.threeShape.position.x
				// connection.threeShape.position.y
				// connection.threeShape.position.z
			}

			for(let t = 0; t < profileList.length; t++){
				let shape = profileList[i].threeShape;
				// shape.x
				// shape.y
				// shape.z
			}

			
			if(z > 2) z = 2;
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
*/










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

		animateThreeShapes();
		handleScrolls();
	}







	useEffect(() => {

		document.body.style.overflow = "hidden";
		window.addEventListener('resize', resize)
		resize();
		if (typeof window === 'undefined' || !window.Hands || !window.Camera) return;


		createScene();
		createCube(1);

		loadData(testData);
		animate();

		let conversation = "Hello, How are you doing? I'm doing well, I just got back from my trip to SodaCity Beach. My work phone number is 123456789 and my middle name is BobbyMcBob. My favorite food is donuts and I work at Pipes Inc. I am actually the Senior manager of cooling."
		createProfile({name: 'Mac', hobbies:'racing cars', id:'78666-23145', conversation: conversation});
		// createInfo({name: 'Mac', hobbies:'racing cars', id:'78666-23145'}, true)
		
		
		setUpCamera();

		return () => {
			landmarkData.hands.close();
			landmarkData.camera.stop();
			window.removeEventListener('resize', resize);
			if (animationId.current) cancelAnimationFrame(animationId.current);
		};
	}, []);

	// Create UI
	// Nice visualizer
	// load in dataset
	//hand controls
	//conversation analyzer
	//add in to database


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

			<div className=''>
				<div ref={dataList} id='dataList' onWheel={scrollDataList}></div>
				<div ref={containerRef} className='grid justify-center w-full h-full '>
					<video
						ref={videoRef}
						style={{ display: 'none', transform: 'scaleX(-1)' }}
						width="640"
						height="480"
						playsInline
					/>
					<canvas
						ref={canvasRef}
						width="640"
						height="480"
						style={{ transform: 'scaleX(-1)' }}
					/>
				</div>

				
				<div ref={infoList} id='infoList' onWheel={scrollInfoList}></div>
			</div>
		</>
	);
}

















// const ThreeJSPage = () => {


	

// 	useEffect(() => {


// 		const scene = new THREE.Scene();
// 		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 		const renderer = new THREE.WebGLRenderer();

// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		if (canvasRef.current) canvasRef.current.appendChild(renderer.domElement); // Append the canvas to the ref

// 		const groundGeometry = new THREE.PlaneGeometry(10, 100);
// 		const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x7cfc00 });
// 		const ground = new THREE.Mesh(groundGeometry, groundMaterial);
// 		ground.rotation.x = -Math.PI / 2;
// 		ground.position.x = 0;
// 		scene.add(ground);

// 		const characterGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
// 		const characterMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// 		const character = new THREE.Mesh(characterGeometry, characterMaterial);
// 		character.position.y = 0.5;
// 		character.position.z = 2;
// 		character.position.x = 0;
// 		scene.add(character);

// 		camera.position.z = 5;
// 		camera.position.y = 2;
// 		camera.lookAt(character.position);

// 		function removeKey(key: string) {
// 			keys = keys.filter(k => k !== key);
// 			blockedKeys.push(key);
// 		}
		

// 		var blockedKeys: any[] = [];
// 		const listenKeyDown = function(event: { key: any; }){ if (!keys.includes(event.key.toLowerCase()) && !blockedKeys.includes(event.key.toLowerCase())) keys.push(event.key.toLowerCase());}
// 		const listenKeyUp = function(event: { key: any; }){ keys = keys.filter(key => key !== event.key.toLowerCase()); blockedKeys = blockedKeys.filter(key => key !== event.key.toLowerCase()); }

// 		const resize = function() {
// 			if (canvasRef.current && canvasRef.current.children.length > 0) {
// 				const canvas = renderer.domElement;
// 				canvas.style.width = window.innerWidth+'px';
// 				canvas.style.height = window.innerHeight+'px';

// 				camera.aspect = canvas.clientWidth / canvas.clientHeight;
// 				camera.updateProjectionMatrix();
// 			}
// 		}
// 		window.addEventListener('keydown', listenKeyDown);
// 		window.addEventListener('keyup', listenKeyUp);
// 		window.addEventListener('resize', resize)



// 		function makeCustomBox(width: number | undefined, height: number | undefined, depth: number | undefined, x: any, y: any, z: any){
// 			var tempGeometry = new THREE.BoxGeometry(width, height, depth);
// 			var tempMaterial = new THREE.MeshBasicMaterial({ color: `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})` });
// 			var temp = new THREE.Mesh(tempGeometry, tempMaterial);
// 			temp.position.y = x;
// 			temp.position.z = y;
// 			temp.position.x = z;
// 			scene.add(temp);
// 			return temp;
// 		}
// 		function makeModel(id: number, x: any, y: any, z: any){
// 			var temp = new THREE.Mesh(map.presets[id].geometry,  map.presets[id].material);
// 			temp.position.y = x;
// 			temp.position.z = y;
// 			temp.position.x = z;
// 			scene.add(temp);
// 			return temp;
// 		}

// 		};

// 		animate();

// 		return () => {
// 			if (canvasRef.current) canvasRef.current.removeChild(renderer.domElement);
// 			window.removeEventListener('keydown', listenKeyDown);
// 			window.removeEventListener('keyup', listenKeyUp);
// 			window.removeEventListener('resize', resize);
// 			if (animationId.current) cancelAnimationFrame(animationId.current);
// 		};
// 	}, []);

// 	return (
// 		<div ref={canvasRef} style={{ width: '100%', height: '100vh' }}></div>
// 	);
// };

// export default ThreeJSPage;
