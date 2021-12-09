<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	import {
		Canvas,
		Scene,
		PerspectiveCamera,
		DirectionalLight,
		//BasicShadowMap,
		//PCFShadowMap,
		PCFSoftShadowMap,
		//VSMShadowMap,
		AmbientLight,
		BoxBufferGeometry,
		PlaneBufferGeometry,
		Mesh,
		MeshStandardMaterial,
		WebGLRenderer,
		OrbitControls,
		DoubleSide,
		MathUtils,
		Vector3
	} from 'svelthree';

	import { GLTFLoader } from 'svelthree-three';
	import PointLight from 'svelthree/src/components/PointLight.svelte';
	import LoadedGltf from 'svelthree/src/components/LoadedGLTF.svelte'; //Crash if not used in html
	const loader = new GLTFLoader();

	let cubeGeometry = new BoxBufferGeometry(0.8, 0.8, 0.8);
	cubeGeometry.translate(0, 0, 0);
	cubeGeometry.rotateY(0, MathUtils.degToRad(180), 0);

	let cubeMaterial = new MeshStandardMaterial();

	let scene;
	let bauhausleuchte;
	let canvas;
	let loadedGLTFTest;

	onMount(() => {
		showLamp();

		// Resize Canvas
		window.addEventListener('resize', function () {
			canvas.doResize(window.innerWidth, window.innerHeight);
		});
	});

	function showLamp() {
		scene = scene.getScene();

		loader.load('src/assets/3DModels/Bauhauslampe/model.gltf', function (gltf) {
			bauhausleuchte = gltf.scene;
			bauhausleuchte.position.set(0, 0, 0);
			bauhausleuchte.rotation.set(130, 0, 200);
			bauhausleuchte.scale.set(0.2, 0.2, 0.2);

			scene.add(bauhausleuchte);
		});
	}

	// Functions
	const triggerOnClickAni = (e) => {
		let obj = e.detail.target;
		gsap.to(obj.scale, {
			duration: 1,
			x: 1.5,
			y: 1.5,
			z: 1.5,
			ease: 'elastic.out'
		});
	};

	const triggerOnOverAni = (e) => {
		let obj = e.detail.target;
		gsap.to(obj.scale, {
			duration: 1,
			x: 0.8,
			y: 1.25,
			z: 0.8,
			ease: 'elastic.out'
		});
	};

	const triggerOnOutAni = (e) => {
		let obj = e.detail.target;
		gsap.to(obj.scale, { duration: 1, x: 1, y: 1, z: 1, ease: 'elastic.out' });
	};

	function onPointerMove(e) {
		let obj = e.detail.target;

		let unpr = new Vector3().copy(e.detail.unprojected);
		let unprwtl = obj.worldToLocal(unpr).add(new Vector3(0, 0, 1));
		obj.lookAt(unprwtl);
	}
</script>

<Canvas let:sti bind:this={canvas} w={window.innerWidth} h={window.innerHeight}>
	<Scene {sti} let:scene bind:this={scene} id="scene1" props={{ background: 0x282848 }}>
		<PerspectiveCamera {scene} id="cam1" pos={[8, -6, -10]} lookAt={[0, 0, 0]} />
		<AmbientLight {scene} intensity={0.25} />
		<DirectionalLight {scene} pos={[1, 2, 1]} intensity={0.8} shadowMapSize={512 * 8} castShadow />

		<PointLight {scene} pos={[2.5, 1, 1]} intensity={10} color={0xf15a24} />
		<PointLight {scene} pos={[-2.5, 1, 1]} intensity={10} color={0x518ad0} />

		<LoadedGltf
			{scene}
			path={'src/assets/3DModels/Bauhauslampe/model.gltf'}
			bind:this={loadedGLTFTest}
		/>
		<!-- <Mesh
					{scene}
					geometry={cubeGeometry}
					material={cubeMaterial}
					mat={{ roughness: 0.5, metalness: 0.5, color: 0xf15a24 }}
					pos={[0, 0, 0]}
					interact
					on:pointermove={onPointerMove}
					onClick={triggerOnClickAni}
					onPointerOver={triggerOnOverAni}
					onPointerLeave={triggerOnOutAni}
				/> -->

		<OrbitControls {scene} />
	</Scene>

	<WebGLRenderer
		{sti}
		sceneId="scene1"
		camId="cam1"
		config={{ antialias: true, alpha: true }}
		enableShadowMap
		shadowMapType={PCFSoftShadowMap}
	/>
</Canvas>
