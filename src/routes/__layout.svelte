<script>
	import '@fontsource/space-grotesk';
	import '../app.css';

	import { getGPUTier } from 'detect-gpu';
	import { onMount } from 'svelte';

	import gsap from 'gsap';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import Popup from '../components/Popup.svelte';
	import PopupNotice from '../components/PopupNotice.svelte';
	import NoGpuNotification from '../components/NoGPUNotification.svelte';
	import LoadingScreen from '../components/Loadings/PatternLoading.svelte';
	import { gltfLamp } from '../store/stores';
	import { useGltf } from 'threlte/extras';
	const { gltf } = useGltf('3DModels/Wagenfeldlampe/wagenfeldlampe_24.glb');
	import { page } from '$app/stores';

	let timerLoading = true; //default: true
	let gpuAvailable = false;
	let t1;

	$: if ($gltf) {
		gltfLamp.set($gltf);

		setTimeout(function () {
			t1.play();
		}, 0);
	}

	onMount(async () => {
		const gpuTier = await getGPUTier();
		if (gpuTier.tier >= 2) gpuAvailable = true;
	});

	onMount(() => {
		// setTimeout(function () {
		// 	t1.play();
		// }, 0);
		t1 = gsap.timeline({ paused: true, defaults: { duration: 0.4 } });

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
	<div class="flex flex-col min-h-screen">
		{#if !timerLoading && gpuAvailable}
			<Nav />
		{/if}

		<div class="flex flex-col flex-1 sm:flex-row bg-primary">
			{#if !timerLoading && gpuAvailable}
				<slot />
				<Popup />
				<PopupNotice />
			{/if}

			{#if !timerLoading && !gpuAvailable}
				<NoGpuNotification />
			{/if}

			{#if timerLoading}
				<div id="quoteLoading" class="z-50">
					<LoadingScreen />
				</div>
			{/if}
		</div>

		{#if !timerLoading && $page.url.pathname == '/' && gpuAvailable}
			<Footer />
		{/if}
	</div>
</div>
