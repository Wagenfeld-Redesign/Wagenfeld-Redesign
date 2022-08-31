<!-- <script context="module">
	export async function load({ fetch }) {
		const fetchImage = (async () => {
			const response = await fetch('https://dog.ceo/api/breeds/image/random');
			return await response.json();
		})();
	}
</script> -->
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
	import { page } from '$app/stores';
	import { useGltf } from 'threlte/extras';
	const { gltf } = useGltf('3DModels/Wagenfeldlampe/compressed.glb', {
		useDraco: true
	});

	let timerLoading = true; //default: true
	let gpuAvailable = false;
	let isMobile = false;
	let t1;

	$: if ($gltf) {
		gltfLamp.set($gltf);
		t1.play();
	} else {
	}

	onMount(async () => {
		const gpuTier = await getGPUTier();
		if (gpuTier.tier >= 2) gpuAvailable = true;
		if (gpuTier.isMobile) isMobile = true;
	});

	onMount(() => {
		if (checkIfUserIsVistingFirstTime()) location.reload();

		t1 = gsap.timeline({ paused: true, defaults: { duration: 0.3 } });
		const loadingScreen = document.getElementById('quoteLoading');

		t1.to(loadingScreen, {
			opacity: 0,
			onComplete: () => {
				timerLoading = false;
			}
		});
	});

	function checkIfUserIsVistingFirstTime() {
		if (localStorage.getItem('was_visited')) {
			return false;
		}
		// first_visit = true;
		localStorage.setItem('was_visited', 1);
		return true;
	}
</script>

<svelte:head>
	<script type="text/javascript" src="https://unpkg.com/default-passive-events"></script>
</svelte:head>

<div id="content" style="margin: 0 auto;">
	<div class="flex flex-col min-h-screen">
		{#if !timerLoading && gpuAvailable && !isMobile}
			<Nav />
		{/if}

		<div class="flex flex-col flex-1 sm:flex-row bg-primary">
			{#if !timerLoading && gpuAvailable && !isMobile}
				<slot />
				<Popup />
				<PopupNotice />
			{/if}

			{#if !timerLoading && (!gpuAvailable || isMobile)}
				<NoGpuNotification {isMobile} />
			{/if}

			{#if timerLoading}
				<div id="quoteLoading" class="z-50">
					<LoadingScreen />
				</div>
			{/if}
		</div>

		{#if !timerLoading && $page.url.pathname == '/' && gpuAvailable && !isMobile}
			<Footer />
		{/if}
	</div>
</div>
