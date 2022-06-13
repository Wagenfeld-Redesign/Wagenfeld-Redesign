<script>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/all';

	import { onDestroy, onMount } from 'svelte';
	import { Object3D } from 'three';
	import { Object3DInstance } from 'threlte';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { useThrelte } from 'threlte';
	import { useGltf } from 'threlte/extras';

	const { renderer, size, camera, scene } = useThrelte();
	const { gltf } = useGltf('src/assets/3DModels/Wagenfeldlampe/wagenfeldlampe_24.glb');

	onMount(async () => {
		// Resize Canvas
		window.addEventListener('resize', function () {
			$camera.aspect = window.innerWidth / window.innerHeight;
			$camera.updateProjectionMatrix();
			renderer.render(scene, $camera);
		});

		$camera.setViewOffset(
			window.innerWidth * 1,
			window.innerHeight,
			window.innerWidth * 0.4,
			-200,
			window.innerWidth,
			window.innerHeight
		);
	});

	// // Loader
	// const loader = new GLTFLoader();
	// let object = new Object3D();
	// loader.load('src/assets/3DModels/Wagenfeldlampe/wagenfeldlampe_24.glb', (gltf) => {
	// 	object = gltf.scene;
	// 	object.position.set(-5, -3, -5);
	// 	// registerScrollAnimation();
	// });

	$: if ($gltf) {
		registerScrollAnimation();
	}

	// GSAP ScrollTrigger
	function registerScrollAnimation() {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to($gltf.scene.rotation, {
			scrollTrigger: {
				trigger: '#content',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				toggleActions: 'restart pause resume pause'
			},
			y: Math.PI
		});
	}
</script>

{#if $gltf}
	<Object3DInstance
		object={$gltf.scene}
		position={{ x: 0, y: 0, z: 0 }}
		scale={{ x: 1.1, y: 1.1, z: 1.1 }}
	/>
{/if}

<!-- <Object3DInstance bind:object position={{ z: -5, y: -3.2, x: -5 }} /> -->
