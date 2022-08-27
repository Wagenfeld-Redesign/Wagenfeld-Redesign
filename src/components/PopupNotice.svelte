<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { clickOutside } from '../lib/clickOutside.js';
	import { fade } from 'svelte/transition';

	let popupDismiss = false;

	onMount(() => {
		gsap.to(document.querySelector('#popupNotice'), {
			opacity: 1,
			scale: 1,
			duration: 0.3,
			ease: 'Sine.easeOut',
			transformOrigin: 'center center'
		});
	});

	function closePopup() {
		gsap.to(document.querySelector('#popupNotice'), {
			scale: 0,
			opacity: 0,
			duration: 0.3,
			ease: 'Sine.easeOut',
			transformOrigin: 'center center',
			onComplete: () => {
				popupDismiss = true;
			}
		});
	}
</script>

{#if !popupDismiss}
	<div class="fixed z-50 bottom-8 right-4">
		<div
			class="max-w-screen-sm scale-0 shadow-lg opacity-0  alert"
			use:clickOutside
			on:outsideclick={closePopup}
			id="popupNotice"
		>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="self-center flex-shrink-0 w-6 h-6 stroke-info"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						stroke="#ff03ed"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>

				<span class="pl-3 pr-6"
					>Wir empfehlen für die bestmögliche Erfahrung den Chrome-Browser mit
					Hardwarebeschleunigung an. <br /> Außerdem liegt der Fokus der Webseite auf der Desktop-Variante
					mit einer Auflösung von 1920x1080.</span
				>
			</div>
			<div class="flex-none ">
				<button class="btn btn-sm btn-primary" on:click={closePopup}>VERSTANDEN</button>
			</div>
		</div>
	</div>
{/if}

<style>
	#popupNotice {
		box-shadow: 0px 1px 4px 4px #ff03ed;
	}
</style>
