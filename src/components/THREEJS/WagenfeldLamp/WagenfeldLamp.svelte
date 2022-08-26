<script>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/all';

	import { onDestroy, onMount } from 'svelte';
	import { Object3D } from 'three';
	import { Object3DInstance } from 'threlte';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { useThrelte } from 'threlte';
	// import { useGltf } from 'threlte/extras';
	// const { gltf } = useGltf('src/assets/3DModels/Wagenfeldlampe/wagenfeldlampe_24.glb');

	import { gltfLamp } from '../../../store/stores.js';

	const { renderer, size, camera, scene } = useThrelte();

	const gltf = $gltfLamp;
	let animationFinished = false;

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
			window.innerWidth * 0.3,
			-120,
			window.innerWidth,
			window.innerHeight
		);
	});

	$: if ($gltfLamp) {
		registerScrollAnimation();
	}

	// GSAP ScrollTrigger
	function registerScrollAnimation() {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(gltf.scene.scale, {
			x: 1.4,
			y: 1.4,
			z: 1.4,
			duration: 1.2,
			ease: 'Back.easeOut'
		});

		gsap.to(gltf.scene.rotation, {
			x: -0.08,
			y: 0,
			z: 0,
			duration: 1.8,
			ease: 'Back.easeOut'
		});

		gsap.to(gltf.scene.position, {
			x: -0.5,
			y: -1.5,
			z: 0,
			duration: 1.8,
			ease: 'Back.easeOut',
			onComplete: () => {
				animationFinished = true;
			}
		});

		// gsap.from(gltf.scene.position, {
		// 	scrollTrigger: {
		// 		trigger: '#content',
		// 		start: 'top top',
		// 		scrub: true,
		// 		toggleActions: 'restart pause resume pause'
		// 	},
		// 	y: -1.5
		// });

		// gsap.to(gltf.scene.rotation, {
		// 	scrollTrigger: {
		// 		trigger: '#content',
		// 		start: 'top top',
		// 		scrub: true,
		// 		toggleActions: 'restart pause resume pause'
		// 	},
		// 	x: -0.08
		// });

		gsap.to(gltf.scene.rotation, {
			scrollTrigger: {
				trigger: '#content',
				start: 'top top',
				// end: 'bottom top',
				scrub: true,
				toggleActions: 'restart pause resume pause'
			},
			y: '+=3.5'
		});
	}
</script>

{#if gltf}
	<!-- <Object3DInstance
		object={$gltf.scene}
		position={{ x: -0.5, y: -1.5, z: 0 }}
		rotation={{ x: -0.08, y: 0, z: 0 }}
		scale={{ x: 1.4, y: 1.4, z: 1.4 }}
	/> -->

	<Object3DInstance
		object={gltf.scene}
		position={{ x: -5, y: 2, z: -5 }}
		rotation={{ x: -2.2, y: 2.4, z: 2 }}
		scale={{ x: 0, y: 0, z: 0 }}
	/>
{/if}

<!-- <Object3DInstance bind:object position={{ z: -5, y: -3.2, x: -5 }} /> -->
