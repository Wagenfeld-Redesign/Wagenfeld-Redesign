<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let position = { value: 0 };
	let speed = 0;
	let rounded;

	let wrap;
	let elems;
	let objs;

	onMount(() => {
		// gsap.from(document.querySelectorAll('#divider'), {
		// 	width: 0,
		// 	x: 900,
		// 	opacity: 0,
		// 	duration: 1.2,
		// 	ease: 'Power3.easeOut'
		// });
		// gsap.from(document.querySelectorAll('#headline'), {
		// 	x: 900,
		// 	opacity: 0,
		// 	duration: 1.2,
		// 	ease: 'Power3.easeOut'
		// });

		wrap = document.querySelector('#wrap');
		elems = [...document.querySelectorAll('#letter')];

		window.addEventListener('wheel', (e) => {
			if (e.deltaY < 0) {
				if (Math.round(position.value) >= 1) speed += e.deltaY * 0.0003;
			} else if (e.deltaY > 0) {
				if (Math.round(position.value) <= 24) speed += e.deltaY * 0.0003;
			}
		});

		objs = Array(26).fill({ dist: 0 });

		raf();
	});

	function raf() {
		try {
			position.value += speed;
			speed *= 0.89;

			objs.forEach((o, i) => {
				o.dist = Math.min(Math.abs(position.value - i), 1);
				o.dist = 1 - o.dist ** 2;

				elems[i].style.transform = `scale(${1 + 0.8 * o.dist})`;

				if (Math.round(o.dist)) {
					elems[i].style.color = `#FF03ED`;
				} else {
					elems[i].style.color = `white`;
				}
			});

			rounded = Math.round(position.value);
			let diff = rounded - position.value;

			position.value += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.035;

			wrap.style.transform = `translate(0,${-position.value * 154 + 50}px)`;
			window.requestAnimationFrame(raf);
		} catch (e) {}
	}
</script>

<div id="block" />

<div id="content" class="relative w-screen min-h-screen overflow-hidden">
	<div class="flex justify-center w-screen">
		<p
			class="absolute z-40 pt-12 text-4xl font-bold text-center text-white md:text-4xl xl:text-7xl"
		>
			WERKE
		</p>
	</div>
	<div class="relative flex h-screen translate-y-1/3">
		<div id="wrap" class="flex flex-col w-2/6 gap-4">
			<p id="letter" class="font-bold text-center text-8xl text-secondary">A</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">B</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">C</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">D</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">E</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">F</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">G</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">H</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">I</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">J</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">K</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">L</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">M</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">N</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">O</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">P</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">Q</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">R</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">S</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">T</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">U</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">V</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">W</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">X</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">Y</p>
			<p id="letter" class="font-bold text-center text-8xl text-secondary">Z</p>
		</div>

		<div class="w-4/6" />
	</div>
</div>

<style>
	#content {
		background-color: #0a0a0a;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23EA4CD5' stroke-width='0.7' stroke-opacity='0.13' %3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	}

	p {
		/* text-transform: uppercase;
		font-family: verdana;
		font-weight: 700;
		color: #f5f5f5;
		text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
			1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
			1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
			1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
			1px 30px 60px rgba(16, 16, 16, 0.4); */
	}

	/* #block {
		height: 100px;
		width: 100px;
		position: absolute;
		background: red;
		z-index: 999;
	}

	.n {
		position: absolute;
		top: 100px;
		width: 200px;
		background: blue;
		z-index: 999;
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
	} */
</style>
