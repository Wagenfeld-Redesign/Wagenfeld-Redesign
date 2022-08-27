<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Sketch from './THREEJS/Menu/scriptMenu';
	import { TweenMax } from 'gsap';
	import { navPosition, navOpen } from '../store/stores.js';
	import { page } from '$app/stores';

	let menuTitles = ['Wilhelm Wagenfelds Werke', 'Biographie', 'Info - Karte', 'Ausstellungen'];

	let leftArrow;
	let rightArrow;
	let menuTitleElement;
	let speed = 0;
	let oldPosition = 0;
	let rounded = 0;
	let position = { value: 0 };
	let sketch;

	//Check which site is active => setting the position of the menu
	if ($page.url.pathname === '/werke') position.value = 0;
	else if ($page.url.pathname === '/biographie') position.value = 1;
	else if ($page.url.pathname === '/ausstellungen') position.value = 3;

	let objs = Array(menuTitles.length).fill({ dist: 0 });

	// Functions
	function raf() {
		try {
			position.value += speed;
			speed *= 0.89;

			objs.forEach((o, i) => {
				o.dist = Math.min(Math.abs(position.value - i), 1);
				o.dist = 1 - o.dist ** 2;

				let scale = 1 + 0.1 * o.dist;

				//@ts-ignore
				sketch.meshes[i].position.x = i * 1.6 - position.value * 1.6;
				//@ts-ignore
				sketch.meshes[i].scale.set(scale, scale, scale);
				//@ts-ignore
				sketch.meshes[i].material.uniforms.distanceFromCenter.value = o.dist;
			});

			rounded = Math.round(position.value);
			let diff = rounded - position.value;

			position.value += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.035;
			checkPositionChange();

			//@ts-ignore only play when page is active
			if ($navOpen) requestAnimationFrame(raf);
		} catch (e) {}
	}

	function checkPositionChange() {
		let roundedPosition = Math.round(position.value);
		if (oldPosition != roundedPosition) {
			oldPosition = roundedPosition;

			navPosition.set(roundedPosition);
		}

		menuTitleElement.innerHTML = menuTitles[roundedPosition];

		if (roundedPosition == 0) {
			leftArrow.style.visibility = 'hidden';
			rightArrow.style.visibility = 'visible';
		} else if (roundedPosition >= 1 && roundedPosition <= 2) {
			leftArrow.style.visibility = 'visible';
			rightArrow.style.visibility = 'visible';
		} else if (roundedPosition == 3) {
			leftArrow.style.visibility = 'visible';
			rightArrow.style.visibility = 'hidden';
		}
	}

	onMount(() => {
		leftArrow = document.getElementById('arrow-left');
		rightArrow = document.getElementById('arrow-right');
		menuTitleElement = document.getElementById('currentMenuTitle');
		sketch = new Sketch({
			dom: document.getElementById('container')
		});

		rightArrow.addEventListener('click', function () {
			TweenMax.to(position, 0.4, {
				value: position.value + 1,
				ease: 'Circ.easeOut'
			});
		});

		leftArrow.addEventListener('click', function () {
			TweenMax.to(position, 0.4, {
				value: position.value - 1,
				ease: 'Circ.easeOut'
			});
		});

		window.addEventListener('wheel', (e) => {
			if (e.deltaY < 0) {
				if (Math.round(position.value) >= 1) speed += e.deltaY * 0.0003;
			} else if (e.deltaY > 0) {
				if (Math.round(position.value) <= 2) speed += e.deltaY * 0.0003;
			}
		});

		raf();
	});
</script>

<div
	id="contentNavigation"
	class="absolute top-0 left-0 z-40 w-screen h-screen cursor-pointer"
	in:fade={{ duration: 200 }}
	out:fade={{ duration: 200 }}
>
	<div class="flex justify-center w-screen">
		<p
			class="absolute z-40 pt-[3.9rem] font-bold tracking-widest text-center text-white text-xl md:text-8xl xl:text-8xl"
		>
			MENU
		</p>
	</div>

	<!-- 
	<div class="absolute z-50 flex items-center justify-center w-screen h-screen">
		<div
			id="infoCard"
			class="border border-red-700 w-[25%] h-[59%] flex justify-center bg-white invisible"
		>

		</div>
	</div> -->

	<div class="absolute z-50 flex items-center w-screen h-screen">
		<div
			id="arrow-left"
			class="flex items-center justify-start invisible w-1/3 h-screen cursor-pointer lg:justify-end text-accent text-7xl"
		>
			<p class="-mr-12">❮</p>
		</div>
		<div class="w-1/3" />
		<div
			id="arrow-right"
			class="flex items-center justify-end invisible w-1/3 h-screen cursor-pointer lg:justify-start text-accent text-7xl"
		>
			<p class="-ml-12">❯</p>
		</div>

		<div
			id="currentMenuTitle"
			class="absolute bottom-0 w-screen mb-24 text-3xl font-bold text-center text-white md:text-4xl xl:text-5xl"
		/>
	</div>

	<div id="wrap" hidden>
		<img
			class="menuImage"
			src="images/menuPictures/wilhelmWagenfeldWerke.png"
			alt=""
			srcset=""
			data-url="werke"
		/>
		<img class="infoCard" src="images/menuPictures/infocard.png" alt="" srcset="" />
		<img
			class="menuImage"
			src="images/menuPictures/werIstWilhelmWagenfeld.jpg"
			alt=""
			srcset=""
			data-url="biographie"
		/>
		<img
			class="menuImage"
			src="images/menuPictures/wilhelmWagenfeldHaus.jpg"
			alt=""
			srcset=""
			data-url="info"
		/>
		<img
			class="menuImage"
			src="images/menuPictures/wilhelmWagenfeldAusstellung.jpg"
			alt=""
			srcset=""
			data-url="ausstellungen"
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
