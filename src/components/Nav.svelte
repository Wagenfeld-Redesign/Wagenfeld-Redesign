<script>
	import { onMount } from 'svelte';
	import Hamburger from './Hamburger.svelte';
	import gsap from 'gsap';
	import { goto } from '$app/navigation';

	onMount(() => {
		gsap.from(document.querySelector('.logo'), {
			width: 0,
			x: -900,
			opacity: 0,
			duration: 1,
			ease: 'Power3.easeOut'
		});
	});

	function gotoHome() {
		goto('/');
	}
</script>

<header class="absolute top-0 z-50 w-screen">
	<div class="py-8 navbar text-neutral-content">
		<div class="py-8 px-14 navbar-start">
			<div class="absolute !z-50 logo">
				<a style="display: block;" on:click={gotoHome} class="cursor-pointer"
					><object
						style="width:unset; pointer-events: none;"
						data="src/assets/images/Logos/logo_white.svg"
						height="60px"
					/>
				</a>
			</div>
		</div>
		<div class="hidden navbar-center" />
		<div class="px-14 navbar-end">
			<Hamburger />
		</div>
	</div>
</header>
