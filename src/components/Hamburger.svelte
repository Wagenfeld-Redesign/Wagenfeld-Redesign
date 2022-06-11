<script>
	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementById('menu-toggle').addEventListener('click', function () {
			document.body.classList.toggle('nav-open');
		});
	});

	// export let openNav;
</script>

<a id="menu-toggle" class="menu-toggle !z-40">
	<span class="menu-toggle-bar menu-toggle-bar--top bg-secondary" />
	<span class="menu-toggle-bar menu-toggle-bar--bottom bg-secondary" />
</a>

<style>
	.menu-toggle {
		position: absolute;
		height: 24px;
		width: 24px;
		z-index: 40 !important;
	}
	.menu-toggle,
	.menu-toggle:hover {
		color: #000;
		cursor: pointer;
	}
	.menu-toggle-bar {
		display: block;
		position: absolute;
		top: 50%;
		margin-top: -1px;
		right: 0;
		width: 100%;
		height: 2px;
		border-radius: 4px;
		transition: all 0.3s ease;
	}
	:global(.menu-toggle-bar.menu-toggle-bar--top) {
		transform: translate(0, -4px);
	}
	:global(.menu-toggle-bar.menu-toggle-bar--bottom) {
		transform: translate(0, 4px);
	}
	:global(.nav-open .menu-toggle-bar.menu-toggle-bar--top) {
		transform: translate(0, 0) rotate(45deg);
	}
	:global(.nav-open .menu-toggle-bar.menu-toggle-bar--bottom) {
		transform: translate(0, 0) rotate(-45deg);
	}
</style>
