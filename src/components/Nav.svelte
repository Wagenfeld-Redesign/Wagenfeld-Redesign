<script>
	import Hamburger from './Hamburger.svelte';
</script>

<div class="header w-screen absolute top-0 ">
	<div class="navbar shadow-lg bg-[#0A0B1C] text-neutral-content py-2">
		<div class="px-2 mx-2 navbar-start">
			<!-- <img class="object-contain h-16" src="src/assets/images/Logos/logo_5.png" alt="Logo" /> -->
			<Hamburger />
		</div>
		<div class="hidden px-2 mx-2 navbar-center lg:flex">
			<object data="src\assets\images\Element 4.svg" height="30px" />
		</div>
		<div class="navbar-end gap-0" />
	</div>
</div>
