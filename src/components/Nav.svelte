<script>
	import { onMount } from 'svelte';
	import Hamburger from './Hamburger.svelte';

	onMount(() => {});
</script>

<header class="header w-screen top-0 z-20">
	<div class="navbar shadow-lg bg-neutral text-neutral-content py-4">
		<div class="px-2 mx-2 navbar-start">
			<Hamburger />
		</div>
		<div class="hidden px-2 mx-2 navbar-center lg:flex">
			<object data="src\assets\images\Element 4.svg" height="35px" />
		</div>
		<div class="navbar-end gap-0" />
	</div>
</header>
