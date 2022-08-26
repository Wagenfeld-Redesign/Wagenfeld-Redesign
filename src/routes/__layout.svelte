<script>
	import '../app.css';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import Popup from '../components/Popup.svelte';
	import LoadingScreen from '../components/Loadings/PatternLoading.svelte';
	import { gltfLamp } from '../store/stores';
	// import { useGltf } from 'threlte/extras';
	// const { gltf } = useGltf('3DModels/Wagenfeldlampe/wagenfeldlampe_24.glb');
	import { page } from '$app/stores';

	let timerLoading = true; //default: true
	let t1;

	// $: if ($gltf) {
	// 	gltfLamp.set($gltf);

	// 	setTimeout(function () {
	// 		t1.play();
	// 	}, 0);
	// }

	onMount(async () => {});

	onMount(() => {
		fetch('3DModels/Wagenfeldlampe/wagenfeldlampe_24.glb').then((test) => {
			console.log(test);
		});

		// setTimeout(function () {
		// }, 0);
		t1 = gsap.timeline({ paused: true, defaults: { duration: 0.4 } });
		t1.play();

		const loadingScreen = document.getElementById('quoteLoading');

		t1.to(loadingScreen, {
			opacity: 0,
			onComplete: () => {
				timerLoading = false;
			}
		});
	});
</script>

<div id="content" style="margin: 0 auto;">
	<a href="3DModels/Wagenfeldlampe/wagenfeldlampe_24.glb" download> file_name </a>
	<div class="flex flex-col min-h-screen">
		{#if !timerLoading}
			<Nav />
		{/if}

		<div class="flex flex-col flex-1 sm:flex-row bg-primary">
			{#if !timerLoading}
				<slot />
				<Popup />
			{/if}

			{#if timerLoading}
				<div id="quoteLoading" class="z-50">
					<LoadingScreen />
				</div>
			{/if}
		</div>

		{#if !timerLoading && $page.url.pathname == '/'}
			<Footer />
		{/if}
	</div>
</div>
