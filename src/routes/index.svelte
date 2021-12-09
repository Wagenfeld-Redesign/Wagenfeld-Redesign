<script>
	import { onMount } from 'svelte';

	let ThreeModel;
	onMount(async () => {
		ThreeModel = (await import('../components/ThreeModel.svelte')).default;
	});
</script>

<div class="w-100 h-100 relative">
	<div class="absolute top-0 left-0 !outline-none !border-none z-0">
		<svelte:component this={ThreeModel} />
	</div>

	<div class="hero min-h-screen text-neutral-content z-10">
		<div class="text-center hero-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Wagenfeld Redesign</h1>
				<p class="mb-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur libero aut,
					excepturi at ex voluptatem doloribus. A, perferendis? Aut!
				</p>
				<button class="btn btn-accent">Mehr Infos</button>
			</div>
		</div>
	</div>
	<div class="hero min-h-screen text-neutral z-10">
		<div class="text-center hero-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Wagenfeld Redesign</h1>
				<p class="mb-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur libero aut,
					excepturi at ex voluptatem doloribus. A, perferendis? Aut!
				</p>
				<button class="btn btn-accent">Mehr Infos</button>
			</div>
		</div>
	</div>
</div>
