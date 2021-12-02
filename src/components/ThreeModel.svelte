<script>
	import { onMount } from 'svelte';

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
		MathUtils
	} from 'svelthree';

	import { GLTFLoader } from 'svelthree-three';
	// import LoadedGltf from 'svelthree/src/components/LoadedGLTF.svelte'; //Crash if not used in html

	let cubeGeometry = new BoxBufferGeometry(1, 1, 1);
	let cubeMaterial = new MeshStandardMaterial();

	let floorGeometry = new PlaneBufferGeometry(4, 4, 1);
	let floorMaterial = new MeshStandardMaterial();

	let scene;
	let bauhausleuchte;
	const loader = new GLTFLoader();

	onMount(async () => {
		showLamp();
	});

	function showLamp() {
		scene = scene.getScene();

		loader.load('src/lib/assets/3DModels/Bauhauslampe/model.gltf', function (gltf) {
			bauhausleuchte = gltf.scene;

			scene.add(bauhausleuchte);

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
		});
	}
</script>

<Canvas let:sti w={window.innerWidth} h={window.innerHeight}>
	<Scene {sti} let:scene bind:this={scene} id="scene1" props={{ background: 0xedf2f7 }}>
		<PerspectiveCamera {scene} id="cam1" pos={[0, 0, 3]} lookAt={[0, 0, 0]} />
		<AmbientLight {scene} intensity={1.25} />
		<DirectionalLight {scene} pos={[1, 2, 1]} intensity={0.8} shadowMapSize={512 * 8} castShadow />

		<!-- <LoadedGltf {scene} path={'src/lib/assets/3DModels/Car/scene.gltf'} bind:this={test} /> -->
		<!-- <Mesh
			{scene}
			geometry={cubeGeometry}
			material={cubeMaterial}
			mat={{ roughness: 0.5, metalness: 0.5, color: 0xff3e00 }}
			pos={[0, 0, 0]}
			rot={[0, 0, 0]}
			castShadow
			receiveShadow
		/>

		<Mesh
			{scene}
			geometry={floorGeometry}
			material={floorMaterial}
			mat={{ roughness: 0.5, metalness: 0.5, side: DoubleSide, color: 0xf7fafc }}
			pos={[0, -0.501, 0]}
			rot={[MathUtils.degToRad(-90), 0, 0]}
			scale={[1, 1, 1]}
			receiveShadow
		/> -->

		<OrbitControls {scene} enableDamping />
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
