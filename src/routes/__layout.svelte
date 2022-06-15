<script>
	import '../app.css';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import LoadingScreen from '../components/Loadings/QuoteLoading.svelte';

	let timerLoading = false;

	onMount(() => {
		const t1 = gsap.timeline({ paused: true, defaults: { duration: 0.4 } });
		setTimeout(function () {
			t1.play();
		}, 7000);

		const loadingScreen = document.getElementById('quoteLoading');
		const content = document.getElementById('content');
		t1.to(loadingScreen, {
			opacity: 0,
			onComplete: () => {
				timerLoading = false;
				// loadingScreen.style.visibility = 'hidden';
			}
		});

		t1.to(
			content,
			{
				opacity: 1,
				onStart: () => {
					content.removeAttribute('hidden');
				}
			},
			'-=0.2'
		);
	});
</script>

<!-- <div id="content" style="margin: 0 auto; opacity: 0;" hidden> -->

<div class="flex flex-col min-h-screen">
	<Nav />

	<div class="flex flex-col flex-1 sm:flex-row">
		<slot />
	</div>

	<!-- <Footer /> -->
</div>

{#if timerLoading}
	<div id="quoteLoading" class="z-50">
		<LoadingScreen />
	</div>
{/if}
