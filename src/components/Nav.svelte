<script>
	import { onMount } from 'svelte';
	import Hamburger from './Hamburger.svelte';
	import gsap from 'gsap';
	import { goto } from '$app/navigation';
	import { navOpen } from '../store/stores.js';
	import { fade } from 'svelte/transition';
	import InlineSVG from 'svelte-inline-svg';

	onMount(() => {
		gsap.from(document.querySelector('.logo'), {
			width: 0,
			x: -900,
			duration: 1,
			ease: 'Power3.easeOut'
		});
	});

	function gotoHome() {
		goto('/');
		navOpen.set(false);
	}
</script>

<header class="absolute top-0 z-50 w-screen" in:fade={{ duration: 800 }}>
	<div class="flex items-center py-11 navbar text-neutral-content">
		<div class="px-24 py-8 navbar-start">
			<div class="absolute !z-50 logo">
				<p class="inline-block cursor-pointer" on:click={gotoHome}>
					<InlineSVG
						src={'images/Logos/logo_white.svg'}
						height="66.44px"
						style="pointer-events: none;"
					/>
				</p>
			</div>
		</div>
		<div class="hidden navbar-center" />
		<div class="px-24 py-8 navbar-end">
			<Hamburger />
		</div>
	</div>
</header>
