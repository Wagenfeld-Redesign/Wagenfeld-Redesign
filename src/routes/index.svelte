<script>
	import { onMount } from 'svelte';

	let ThreeModel;
	onMount(async () => {
		ThreeModel = (await import('../components/Threlte.svelte')).default;
	});
</script>

<div class="w-100 h-100 relative pt-20 min-h-screen">
	<div class="absolute top-0 left-0 !outline-none !border-none z-0">
		<svelte:component this={ThreeModel} />
	</div>
</div>
