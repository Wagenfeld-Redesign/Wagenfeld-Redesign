<script>
	import { onMount } from 'svelte';
	import Hamburger from './Hamburger.svelte';
	import gsap from 'gsap';
	import { goto } from '$app/navigation';
	import { navOpen } from '../store/stores.js';
	import { fade } from 'svelte/transition';

	onMount(() => {
		gsap.from(document.querySelector('.logo'), {
			width: 0,
			x: -900,
			duration: 1,
			ease: 'Power3.easeOut'
		});
	});

	function gotoHome() {
		navOpen.set(false);
		goto('/');
	}
</script>

<header class="absolute top-0 z-50 w-screen" in:fade={{ duration: 800 }}>
	<div class="flex items-center py-11 navbar text-neutral-content">
		<div class="px-24 py-8 navbar-start">
			<div class="absolute !z-50 logo">
				<a style="display: block;" on:click={gotoHome} class="cursor-pointer"
					><object
						style="width:unset; pointer-events: none;"
						data="src/assets/images/Logos/logo_white.svg"
						height="66.44px"
					/>
				</a>
			</div>
		</div>
		<div class="hidden navbar-center" />
		<div class="px-24 py-8 navbar-end">
			<Hamburger />
		</div>
	</div>
</header>
