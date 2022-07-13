<script>
	import { onMount } from 'svelte';

	let menuBar;
	onMount(async () => {
		menuBar = (await import('../components/THREEJS/Menu/MenuCanvas.svelte')).default;
	});
</script>

<div id="contentNavigation" class="absolute top-0 left-0 z-40 w-screen h-screen cursor-pointer">
	<div class="flex justify-center w-screen">
		<p
			class="absolute z-40 pt-16 font-bold tracking-widest text-center text-white text-xl md:text-8xl xl:text-[5.75rem]"
		>
			MENU
		</p>
	</div>

	<div class="z-50 flex items-center w-screen h-screen">
		<div
			id="arrow-left"
			class="flex items-center justify-start invisible w-1/3 h-screen ml-8 cursor-pointer lg:justify-end lg:-mr-12 text-accent text-7xl"
		>
			❮
		</div>
		<div class="w-1/3" />
		<div
			id="arrow-right"
			class="flex items-center justify-end invisible w-1/3 h-screen mr-8 cursor-pointer lg:justify-start lg:-ml-12 text-accent text-7xl"
		>
			❯
		</div>

		<div
			id="currentMenuTitle"
			class="absolute bottom-0 w-screen mb-24 text-3xl font-bold text-center text-white md:text-4xl xl:text-5xl"
		>
			Wer ist Wagenfeld?
		</div>
	</div>

	{#if menuBar}
		<svelte:component this={menuBar} />
	{/if}

	<div id="wrap" hidden>
		<img
			class="menuImage"
			src="src/assets/images/menuPictures/wilhelmWagenfeldWerke.png"
			alt=""
			srcset=""
			data-url="werke"
		/>
		<img
			class="menuImage"
			src="src/assets/images/menuPictures/werIstWilhelmWagenfeld.jpg"
			alt=""
			srcset=""
		/>
		<img
			class="menuImage"
			src="src/assets/images/menuPictures/wilhelmWagenfeldHaus.jpg"
			alt=""
			srcset=""
		/>
		<img
			class="menuImage"
			src="src/assets/images/menuPictures/wilhelmWagenfeldAusstellung.jpg"
			alt=""
			srcset=""
		/>
	</div>

	<div id="container" />
</div>

<style>
	#contentNavigation {
		background-color: #0a0a0a;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23EA4CD5' stroke-width='0.7' stroke-opacity='0.13' %3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	}

	#container {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: -100;
	}
</style>
