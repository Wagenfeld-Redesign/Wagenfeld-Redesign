<script>
	import { onMount } from 'svelte';

	let menuBar;
	onMount(async () => {
		menuBar = (await import('../components/THREEJS/Menu/MenuCanvas.svelte')).default;
	});
</script>

<div id="contentNavigation" class="absolute left-0 top-0 w-screen h-screen bg-neutral z-40">
	{#if menuBar}
		<svelte:component this={menuBar} />
	{/if}

	<div id="wrap" hidden>
		<img class="menuImage" src="src/assets/images/Logos/logo_1.png" alt="" srcset="" />
		<img class="menuImage" src="src/assets/images/Logos/logo_1.png" alt="" srcset="" />
		<img class="menuImage" src="src/assets/images/Logos/logo_1.png" alt="" srcset="" />
		<img class="menuImage" src="src/assets/images/Logos/logo_1.png" alt="" srcset="" />
		<img class="menuImage" src="src/assets/images/Logos/logo_1.png" alt="" srcset="" />
	</div>

	<div id="container" />
</div>

<style>
	#container {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: -100;
	}

	#block {
		height: 100px;
		width: 100px;
		position: absolute;
		background: red;
	}

	.n {
		position: absolute;
		top: 100px;
		width: 200px;
		background: blue;
		z-index: 59;
		height: 10px;
	}
	.n1 {
		top: 200px;
	}

	.n2 {
		top: 300px;
	}

	.n3 {
		top: 400px;
	}

	.n4 {
		top: 500px;
	}
</style>
