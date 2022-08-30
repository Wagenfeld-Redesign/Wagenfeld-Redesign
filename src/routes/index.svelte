<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { showPopup, popupText, popupHeadline, navOpen, popupPositionLeft } from '../store/stores';
	import { fade } from 'svelte/transition';

	let wagenfeldLamp;
	onMount(async () => {
		wagenfeldLamp = (await import('../components/THREEJS/WagenfeldLamp/CanvasWagenfeldLamp.svelte'))
			.default;
	});

	onMount(() => {
		showPopup.set(false);
		popupPositionLeft.set(false);
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

	function popupShow(subheadline, subheadlineText) {
		if (!$navOpen) {
			showPopup.set(true);
			if ($showPopup) {
				popupHeadline.set(subheadline);
				popupText.set(subheadlineText);
			}
		}
	}

	const subheadlineText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam`;
</script>

<svelte:head>
	<title>Wagenfeld - Startseite</title>
</svelte:head>

<div id="content" class="relative w-screen min-h-screen px-4" in:fade={{ duration: 800 }}>
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
					class="py-3 !z-40 text-3xl font-bold tracking-widest md:text-4xl lg:text-5xl xl:text-8xl text-secondary text-right uppercase"
					on:mouseenter={() => {
						popupShow('ÜBERSCHRIFT', subheadlineText);
					}}
					on:mouseleave={function () {
						showPopup.set(false);
					}}
				>
					WILHELM WAGENFELD PRODUKTDESIGN UND BAUHAUS-KUNST
				</h1>

				<hr id="divider" class="float-right -mt-4 w-[73%] border-[14px] border-accent" />
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
					class="py-5 !z-40 text-3xl font-bold tracking-wide md:text-4xl lg:text-5xl xl:text-7xl text-secondary text-right uppercase"
					on:mouseenter={() => {
						popupShow('ÜBERSCHRIFT', subheadlineText);
					}}
					on:mouseleave={function () {
						showPopup.set(false);
					}}
				>
					„I ASSURE YOU THAT YOU AND YOUR WORK ARE THE MODEL CASE FONT WHAT THE BAUHAUS HAS BEEN
					AFTER”
					<p class="text-xl font-medium tracking-normal">
						Walter Gropius (Brief an Wagenfeld vom 14.04.1965)
					</p>
				</h1>
				<hr id="divider" class="float-right -mt-4  w-[45%] border-[14px] border-accent" />
			</div>
		</div>
	</div>
</div>

<style>
	#content {
		/* background-color: #0a0a0a;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23EA4CD5' stroke-width='0.7' stroke-opacity='0.13' %3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;

		box-shadow: 15px 25px 29px -5px rgba(255, 3, 237, 0.15) inset;
		-webkit-box-shadow: 15px 25px 29px -5px rgba(255, 3, 237, 0.15) inset;
		-moz-box-shadow: 15px 25px 29px -5px rgba(255, 3, 237, 0.15) inset; */
	}
</style>
