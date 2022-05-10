<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import gsap from 'gsap';
	import anime from 'animejs/lib/anime.es.js';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import {
		CircleBufferGeometry,
		MeshStandardMaterial,
		BoxBufferGeometry,
		Object3D,
		SphereBufferGeometry,
		PerspectiveCamera,
		TubeBufferGeometry,
		MeshBasicMaterial,
		DoubleSide,
		Mesh as Meshi,
		Clock
	} from 'three';

	import { KnotCurve } from 'three/examples/jsm/curves/CurveExtras.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import {
		Canvas,
		DirectionalLight,
		HemisphereLight,
		Mesh,
		OrbitControls,
		Object3DInstance,
		useFrame,
		Instance,
		InstancedMesh,
		GLTF,
		Group,
		CameraInstance,
		MeshInstance
	} from 'threlte';
	import { spring } from 'svelte/motion';

	const scale = spring(1);

	let rotationX = 0;
	let animationFrameHandle;

	// CameraSmooth Animation
	let cameraPos = { x: 0, y: 0, z: 10 };
	let cameraFinal = { x: 0, y: 3, z: 20 };

	const geometry = new SphereBufferGeometry(0.5);
	const material = new MeshStandardMaterial();

	const camera = new PerspectiveCamera();
	// camera.position.x = cameraPos.x;
	// camera.position.y = cameraPos.y;
	// camera.position.z = cameraPos.z;

	let dn = Date.now();

	let mesh;
	//Add meshes here
	const curve = new KnotCurve();
	const geometry1 = new TubeBufferGeometry(curve, 100, 2, 8, true);
	geometry1.scale(1, 1, 1);
	const material1 = new MeshBasicMaterial({
		wireframe: true,
		color: 0xffffff,
		side: DoubleSide
	});

	mesh = new Meshi(geometry1, material1);
	mesh.position.set(200, 200, 200);

	function animateCamera() {
		var count = {
			numberCount: 0
		};
		anime({
			targets: count,
			easing: 'easeInOutSine',
			duration: 5000,
			numberCount: 0.5,
			direction: 'alternate',
			loop: true,
			update: function (anim) {
				const pos = curve.getPointAt(count.numberCount);
				camera.position.copy(pos);
				camera.lookAt(0, 0, 0);
			}
		});
	}

	// let object = new Object3D();
	// const gltfLoader = new GLTFLoader();
	// onMount(async () => {
	// 	// Save your model reference in a variable
	// 	gltfLoader.load('src/assets/3DModels/Bauhauslampe/model.glb', (gltf) => {
	// 		object = gltf.scene;
	// 	});
	// });

	onMount(async () => {
		animateCamera();
	});

	const tick = () => {
		dn = Date.now();
		animationFrameHandle = requestAnimationFrame(tick);
	};

	tick();

	onDestroy(() => {
		if (animationFrameHandle) {
			cancelAnimationFrame(animationFrameHandle);
		}
	});
</script>

<div>
	<Canvas>
		<!-- <PerspectiveCamera position={cameraPos} fov={60}>
			<OrbitControls
				maxPolarAngle={DEG2RAD * 80}
				autoRotate={false}
				enableZoom={true}
				target={{ y: 0.5 }}
			/>
		</PerspectiveCamera> -->

		<CameraInstance {camera} useCamera={true}>
			<OrbitControls
				maxPolarAngle={DEG2RAD * 80}
				autoRotate={false}
				enableZoom={true}
				target={{ y: 0.5 }}
			/>
		</CameraInstance>

		<DirectionalLight
			intensity={0.8}
			receiveShadow
			color={'#f15a24'}
			position={{ x: 1, y: 2, z: 1 }}
		/>

		<DirectionalLight
			shadow
			intensity={10}
			position={{ x: 2.5, y: 1, z: 1 }}
			target={{ x: 1 }}
			color={'#f15a24'}
		/>

		<DirectionalLight
			shadow
			intensity={10}
			position={{ x: -2.5, y: 1, z: 1 }}
			target={{ x: 1 }}
			color={'#518ad0'}
		/>

		<HemisphereLight skyColor={0x518ad0} groundColor={0xf15a24} intensity={2} />

		<InstancedMesh {geometry} {material}>
			<Instance position={{ x: -2, y: Math.sin(dn / 1000 + 40) }} />
			<Instance position={{ x: -1, y: Math.sin(dn / 1000 + 10) }} />
			<Instance position={{ x: 0, y: Math.sin(dn / 1000 + 5) }} />
			<Instance position={{ x: 1, y: Math.sin(dn / 1000 + 200) }} />
			<Instance position={{ x: 2, y: Math.sin(dn / 1000 + 550) }} />
		</InstancedMesh>

		<!-- <Object3DInstance
			{object}
			position={{ x: 1, y: 1, z: 1 }}
			scale={{ x: 0.1, y: 0.1, z: 0.1 }}
			rotation={{ x: 130, y: 0, z: 200 }}
		/> -->

		<GLTF
			castShadow
			receiveShadow
			url={'src/assets/3DModels/Bauhauslampe/model.glb'}
			position={{ x: 0, y: 0, z: 0 }}
			scale={{ x: 1, y: 1, z: 1 }}
		/>

		<MeshInstance {mesh} />

		<Mesh
			rotation={{ x: rotationX }}
			castShadow
			geometry={new BoxBufferGeometry(1, 1, 1)}
			material={new MeshStandardMaterial({ color: '#dddddd' })}
		/>

		<Mesh
			receiveShadow
			position={{ y: -1.5 }}
			rotation={{ x: -90 * (Math.PI / 180) }}
			geometry={new CircleBufferGeometry(3, 72)}
			material={new MeshStandardMaterial({ color: 'white' })}
		/>
	</Canvas>
</div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
