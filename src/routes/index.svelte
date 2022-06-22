<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let wagenfeldLamp;
	onMount(async () => {
		wagenfeldLamp = (await import('../components/THREEJS/WagenfeldLamp/CanvasWagenfeldLamp.svelte'))
			.default;
	});

	onMount(() => {
		gsap.from(document.querySelectorAll('#divider'), {
			width: 0,
			x: 900,
			opacity: 0,
			duration: 1.2,
			ease: 'Power3.easeOut'
		});

		gsap.from(document.querySelectorAll('#headline'), {
			x: 900,
			opacity: 0,
			duration: 1.2,
			ease: 'Power3.easeOut'
		});
	});
</script>

<div id="content" class="relative w-screen min-h-screen px-4">
	<div class="top-0 left-0 !outline-none !border-none z-0">
		<svelte:component this={wagenfeldLamp} />
	</div>

	<div class="relative z-10 flex">
		<div class="w-2/6" />
		<div class="flex items-center flex-grow w-4/6 h-screen mr-24">
			<div class="">
				<h1
					id="headline"
					style="line-height: 1.05;"
					class="py-3 !z-40 text-3xl font-bold tracking-widest md:text-4xl lg:text-5xl xl:text-8xl text-secondary text-right"
				>
					LOREM IPSUM DOLOR SIT AMET CONSETETUR SADIPSCING ELITR SED DIAM NONUMY IRMOD
				</h1>

				<hr id="divider" class="float-right w-4/5 border-4 rounded border-accent" />
				<p class="h-6" />
				<hr id="divider" class="float-right w-1/3 border-4 rounded border-accent" />
				<!-- <p
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
				</p> -->
			</div>
		</div>
	</div>
	<div class="relative z-10 flex">
		<div class="w-2/6" />
		<div class="flex items-center flex-grow w-4/6 h-screen mr-24">
			<div class="">
				<h1
					id="headline"
					style="line-height: 1.05;"
					class="py-3 !z-40 text-3xl font-bold tracking-widest md:text-4xl lg:text-5xl xl:text-8xl text-secondary text-right"
				>
					LOREM IPSUM DOLOR SIT AMET CONSETETUR SADIPSCING ELITR SED DIAM NONUMY IRMOD
				</h1>

				<hr id="divider" class="float-right w-4/5 border-4 rounded border-accent" />
				<p class="h-6" />
				<hr id="divider" class="float-right w-1/3 border-4 rounded border-accent" />
			</div>
		</div>
	</div>
</div>

<style>
	#content {
		background-color: #0a0a0a;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23EA4CD5' stroke-width='0.7' stroke-opacity='0.13' %3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	}
</style>
