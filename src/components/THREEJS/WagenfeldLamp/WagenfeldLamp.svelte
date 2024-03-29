<script>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	import { onMount } from 'svelte';
	import { Object3DInstance } from 'threlte';
	import { useThrelte } from 'threlte';
	import { Pass } from '@threlte/core';
	import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

	import { gltfLamp } from '../../../store/stores.js';
	import { Vector2 } from 'three';
	import CustomEase from 'gsap/CustomEase';

	const { renderer, size, camera, scene } = useThrelte();

	const gltf = $gltfLamp;
	let animationFinished = false;
	let effectPass;

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
		effectPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 0, 1.7, 0);
	}

	// GSAP ScrollTrigger
	function registerScrollAnimation() {
		gsap.registerPlugin(CustomEase);
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(gltf.scene.scale, {
			x: 1.4,
			y: 1.4,
			z: 1.4,
			duration: 2.2,
			ease: 'Back.easeOut'
		});

		gsap.to(gltf.scene.rotation, {
			x: -0.08,
			y: 0,
			z: 0,
			duration: 2.3,
			ease: 'Back.easeOut',
			onComplete: () => {
				animationFinished = true;

				gsap.to(effectPass, {
					strength: 0.4,
					duration: 2.2,
					ease: CustomEase.create(
						'custom',
						'M0,0,C0.071,0.11,0.079,1.167,0.078,1.254,0.136,1.358,0.237,0.401,0.332,0.49,0.332,0.49,0.332,0.49,0.332,0.49,0.333,0.492,0.334,0.494,0.336,0.496,0.384,0.571,0.467,0.696,0.418,0.614,0.501,1.068,0.498,1.126,0.59,1.216,0.737,1.36,0.866,1,1,1'
					),
					onComplete: () => {
						gsap.to(
							effectPass,
							{
								strength: 0.6,
								radius: 2.5,
								duration: 3,
								repeat: -1,
								ease: CustomEase.create(
									'custom',
									'M0,0 C0.066,0.298 0.122,0.165 0.184,0.018 0.23,-0.086 0.268,-0.198 0.318,-0.148 0.318,-0.148 0.318,-0.148 0.318,-0.148 0.351,-0.115 0.364,0.15 0.396,0.17 0.42,0.185 0.447,0.181 0.481,0.167 0.481,0.094 0.489,-0.095 0.55,-0.118 0.59,-0.103 0.638,0.163 0.69,0.182 0.713,0.19 0.738,-0.089 0.763,-0.104 0.787,-0.12 0.822,0.181 0.848,0.196 0.87,0.208 0.879,-0.059 0.9,-0.1 0.928,-0.159 0.967,0 1,0 '
								)
							},
							1
						);
					}
				});
			}
		});

		gsap.to(gltf.scene.position, {
			x: -0.5,
			y: -1.5,
			z: 0,
			duration: 1.8,
			ease: 'Back.easeOut'
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
			y: '+=2.5'
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

	{#if animationFinished}
		<Pass pass={effectPass} />
	{/if}

	<Object3DInstance
		object={gltf.scene}
		position={{ x: -5, y: 2, z: -5 }}
		rotation={{ x: -2.2, y: 2.4, z: 2 }}
		scale={{ x: 0, y: 0, z: 0 }}
	/>
{/if}

<!-- <Object3DInstance bind:object position={{ z: -5, y: -3.2, x: -5 }} /> -->
