<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { clickOutside } from '../lib/clickOutside.js';
	import { fade } from 'svelte/transition';

	let popupDismiss = false;

	onMount(() => {
		gsap.from(document.querySelector('#popupNotice'), {
			// scale: 1,
			x: 900,
			duration: 1.2,
			ease: 'Power3.easeOut'
			// transformOrigin: 'center center'
		});
	});

	function closePopup() {
		gsap.to(document.querySelector('#popupNotice'), {
			x: 900,
			duration: 0.5,
			ease: 'Sine.easeOut',
			onComplete: () => {
				popupDismiss = true;
			}
		});
	}
</script>

{#if !popupDismiss}
	<div class="fixed z-50 bottom-8 right-4" in:fade={{ duration: 1000 }}>
		<!-- 			
			use:clickOutside
			on:outsideclick={closePopup} 
		-->
		<div class="max-w-screen-sm rounded-none shadow-lg alert" id="popupNotice">
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
				<span class="pl-4 pr-6"
					>Wir empfehlen für die bestmögliche Erfahrung den Chrome-Browser. Außerdem liegt der Fokus
					der Webseite auf der Desktop-Variante mit einer Auflösung von 1920x1080.</span
				>
			</div>
			<div class="self-end">
				<button class="rounded-none btn btn-accent" on:click={closePopup}>Verstanden</button>
			</div>
		</div>
	</div>
{/if}

<style>
	#popupNotice {
		box-shadow: 13px 13px 0 0 #ff03ed;
	}
</style>
