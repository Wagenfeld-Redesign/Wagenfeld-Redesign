<script>
	import { onMount } from 'svelte';

	let wagenfeldLamp;
	let menuBar;
	onMount(async () => {
		wagenfeldLamp = (await import('../components/THREEJS/WagenfeldLamp/CanvasWagenfeldLamp.svelte'))
			.default;
	});
</script>

<div id="content" class="relative w-screen min-h-screen px-4">
	<div class="top-0 left-0 !outline-none !border-none z-0 invisible md:visible">
		<svelte:component this={wagenfeldLamp} />
	</div>

	<div class="relative z-10 grid grid-cols-1 md:grid-cols-2">
		<div />
		<div class="flex h-screen mt-16 xl:mt-48 md:-ml-36 lg:-ml-60">
			<div class="">
				<h1
					class="py-3 !z-40 text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-r from-secondary to-secondary-focus"
				>
					Wilhelm Wagenfeld
				</h1>
				<p
					class="px-4 mt-1 text-base text-justify text-neutral-content sm:text-lg sm:max-w-3xl sm:mx-auto md:text-xl lg:mx-0"
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus aspernatur
					quaerat expedita, rerum vel! Sint libero amet dignissimos provident inventore sapiente?
					Incidunt, labore cumque eligendi saepe officia nesciunt nulla voluptas soluta alias est
					qui rem dolor, natus dolorem esse asperiores iure! Nostrum a debitis asperiores! Vitae
					ullam eos fugiat dignissimos rerum, repudiandae, suscipit quae totam odit ratione tempore!
					Eveniet itaque dolorem voluptatum iure animi rerum beatae, a quae libero numquam provident
					modi obcaecati magnam asperiores nostrum voluptatibus doloremque! Facilis tempore cum
					pariatur enim. Consequuntur nemo delectus nulla ex. Itaque?
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	#content {
		background-color: #003d6c;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='100' stroke-opacity='0.57' %3E%3Ccircle fill='%23003D6C' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23013b68' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23033863' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2304365f' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2305345b' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23063257' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23072f53' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23082d4f' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23082b4b' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23092947' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23092743' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%230a253f' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%230a223b' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%230a2037' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%230a1e33' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%230a1c2f' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%230a1a2c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230A1828' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	}
</style>
