<script>
	import { onMount } from 'svelte';
	import NavigationScreen from './NavigationScreen.svelte';
	import gsap from 'gsap';
	import { navOpen, navPosition } from '../store/stores';

	$: navOpenToggle($navOpen);

	function navOpenToggle(open) {
		document.body.classList.toggle('nav-open');

		// setTimeout(() => {
		if ($navOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'visible';
		}
		// }, 250);
	}

	onMount(() => {
		document.body.classList.toggle('nav-open');
		document.getElementById('menu-toggle').addEventListener('click', function () {
			navOpen.set(!$navOpen);
			navPosition.set(0);
		});

		gsap.from(document.querySelectorAll('.menu-toggle'), {
			x: 9000,
			opacity: 0,
			duration: 0.7,
			ease: 'Power3.easeOut'
		});
	});
</script>

{#if $navOpen}
	<NavigationScreen />
{/if}

<a id="menu-toggle" class="menu-toggle !z-40">
	<span class="menu-toggle-bar menu-toggle-bar--top bg-secondary" />
	<span class="menu-toggle-bar menu-toggle-bar--bottom bg-secondary" />
</a>

<style>
	.menu-toggle {
		position: absolute;
		height: 24px;
		width: 77px;
		z-index: 999 !important;
		margin-bottom: 10px;
	}
	.menu-toggle,
	.menu-toggle:hover {
		cursor: pointer;
	}
	.menu-toggle-bar {
		display: block;
		position: absolute;
		top: 50%;
		/* margin-top: px; */
		right: 0;
		width: 100%;
		height: 11px;
		transition: all 0.3s ease;
	}
	:global(.menu-toggle-bar.menu-toggle-bar--top) {
		transform: translate(0, -15px);
	}
	:global(.menu-toggle-bar.menu-toggle-bar--bottom) {
		transform: translate(0, 11px);
	}
	:global(.nav-open .menu-toggle-bar.menu-toggle-bar--top) {
		transform: translate(0, 0) rotate(45deg);
	}
	:global(.nav-open .menu-toggle-bar.menu-toggle-bar--bottom) {
		transform: translate(0, 0) rotate(-45deg);
	}
</style>
