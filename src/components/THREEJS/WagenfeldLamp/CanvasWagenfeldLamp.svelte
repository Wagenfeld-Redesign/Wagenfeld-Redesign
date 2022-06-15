<script lang="ts">
	// import { useGltf } from 'threlte/extras';
	// const { gltf } = useGltf('src/assets/3DModels/Wagenfeldlampe/wagenfeldlampe_24.glb');

	import { PerspectiveCamera } from 'three';
	import WagenfeldLamp from './WagenfeldLamp.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { DEG2RAD } from 'three/src/math/MathUtils';

	import {
		Canvas,
		DirectionalLight,
		HemisphereLight,
		CameraInstance,
		AmbientLight,
		SpotLight,
		OrbitControls
	} from 'threlte';

	onMount(() => {});

	let cameraVariable = new PerspectiveCamera(
		50,
		window.innerWidth / window.innerHeight,
		0.01,
		1000.0
	);
</script>

<div id="content" class="fixed top-0 left-0 w-screen h-screen">
	<Canvas>
		<!-- rotation={{ x: DEG2RAD * 0.5, y: DEG2RAD * -43.47, z: DEG2RAD * 0.54 }} -->
		<CameraInstance
			camera={cameraVariable}
			useCamera={true}
			viewportAware={true}
			position={{ x: 0, y: 2.7, z: 4.86 }}
		>
			<!-- <OrbitControls autoRotate={false} enableZoom={false} target={{ z: -5, y: -3.2, x: 0 }} /> -->
		</CameraInstance>

		<AmbientLight color={0xffffff} intensity={0.1} />

		<HemisphereLight skyColor={0xf15a24} groundColor={0xf15a24} intensity={1} />

		<DirectionalLight
			shadow
			intensity={1}
			position={{ z: -2, y: -6, x: -1 }}
			target={{ z: -5, y: -3, x: -3.2 }}
			color={'#f15a24'}
		/>

		<WagenfeldLamp />
	</Canvas>
</div>
