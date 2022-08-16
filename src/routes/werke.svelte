<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let speed = 0;
	let oldPosition = 0;
	let position = { value: 0 };
	let rounded = 0;
	let countImagesForLetter = [
		{ letter: 'A', countImages: 0, titles: ['test'] },
		{ letter: 'B', countImages: 0, titles: ['test'] },
		{ letter: 'C', countImages: 0, titles: ['test'] },
		{ letter: 'D', countImages: 0, titles: ['test'] },
		{ letter: 'E', countImages: 0, titles: ['test'] },
		{ letter: 'F', countImages: 0, titles: ['test'] },
		{ letter: 'G', countImages: 0, titles: ['test'] },
		{ letter: 'H', countImages: 0, titles: ['test'] },
		{ letter: 'I', countImages: 0, titles: ['test'] },
		{ letter: 'J', countImages: 0, titles: ['test'] },
		{ letter: 'K', countImages: 0, titles: ['test'] },
		{ letter: 'L', countImages: 0, titles: ['test'] },
		{ letter: 'M', countImages: 0, titles: ['test'] },
		{ letter: 'N', countImages: 0, titles: ['test'] },
		{ letter: 'O', countImages: 0, titles: ['test'] },
		{ letter: 'P', countImages: 0, titles: ['test'] },
		{ letter: 'Q', countImages: 0, titles: ['test'] },
		{ letter: 'R', countImages: 0, titles: ['test'] },
		{ letter: 'S', countImages: 0, titles: ['test'] },
		{ letter: 'T', countImages: 0, titles: ['test'] },
		{ letter: 'U', countImages: 0, titles: ['test'] },
		{ letter: 'V', countImages: 0, titles: ['test'] },
		{ letter: 'W', countImages: 0, titles: ['test'] },
		{ letter: 'X', countImages: 0, titles: ['test'] },
		{ letter: 'Y', countImages: 0, titles: ['test'] },
		{ letter: 'Z', countImages: 0, titles: ['test'] }
	];

	let pathPictures = import.meta.glob(`../assets/images/werkePictures/*/*.jpg`);
	let currentArray = [{ letter: 'A', countImages: 0, titles: ['test', 'test'] }];
	let currentLetter = 'A';

	let wrap;
	let elems;
	let objs;

	let initOldPathLetter = 'A';
	let currentTitlesArray = [];
	onMount(() => {
		for (const modulePath in pathPictures) {
			var currentCount = modulePath.split('/')[5].split('.')[0].split('-')[0];
			var currentName = modulePath.split('/')[5].split('.')[0].split('-')[1];

			if (initOldPathLetter == modulePath.split('/')[4]) {
				currentTitlesArray.push(currentName);
			} else {
				currentTitlesArray = [currentName];
			}

			var currentPathLetter = modulePath.split('/')[4];
			initOldPathLetter = currentPathLetter;

			countImagesForLetter.forEach((element, i) => {
				if (element.letter == currentPathLetter) {
					element.countImages = parseInt(currentCount);
					element.titles = currentTitlesArray;
				}
			});
		}

		wrap = document.querySelector('#wrap');
		elems = [...document.querySelectorAll('#letter')];

		document.addEventListener('wheel', (e) => {
			if (e.deltaY < 0) {
				if (Math.round(position.value) >= 1) speed += e.deltaY * 0.0003;
			} else if (e.deltaY > 0) {
				if (Math.round(position.value) <= 24) speed += e.deltaY * 0.0003;
			}
		});

		objs = Array(30).fill({ dist: 0 });

		raf();
	});

	function raf() {
		try {
			position.value += speed;
			speed *= 0.89;

			objs.forEach((o, i) => {
				o.dist = Math.min(Math.abs(position.value + 4 - i), 1);
				o.dist = 1 - o.dist ** 2;

				// elems[i].style.transform = `scale(${1 + 0.8 * o.dist})`;

				// if (Math.round(o.dist)) {
				// 	elems[i].style.color = `#FF03ED`;
				// } else {
				// 	elems[i].style.color = `white`;
				// }
			});

			rounded = Math.round(position.value);
			let diff = rounded - position.value;

			position.value += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.035;

			wrap.style.transform = `translate(${-position.value * 72.8 + 25}px,0)`;

			checkPositionChange();
			window.requestAnimationFrame(raf);
		} catch (e) {}
	}

	function checkPositionChange() {
		let roundedPosition = Math.round(position.value) + 1;
		if (oldPosition != roundedPosition) {
			oldPosition = roundedPosition;
			currentLetter = (roundedPosition + 9).toString(36).toUpperCase();

			currentArray = Array(countImagesForLetter[roundedPosition - 1].countImages).fill(
				countImagesForLetter[roundedPosition - 1].titles
			);
		}
	}
</script>

<div id="content" class="relative w-screen min-h-screen overflow-hidden">
	<div class="flex justify-center w-screen">
		<p
			class="absolute z-40 pt-[3.9rem] font-bold tracking-widest text-center text-white text-xl md:text-8xl  xl:text-8xl"
		>
			WERKE
		</p>
	</div>

	<div class="flex items-center justify-center w-screen h-screen">
		<div class="">
			{#if currentArray.length > 0}
				<div class="h-[32rem] carousel carousel-vertical gap-2">
					{#each currentArray as i, index}
						<div class="h-full carousel-item">
							<div id="portrait" class="h-full w-96">
								<img
									src="src/assets/images/werkePictures/{currentLetter}/{index + 1}-{i[index]}.jpg"
									alt=""
									srcset=""
									class="transition-all duration-100 grayscale hover:grayscale-0 max-h-96"
								/>
								<p class="mt-4 text-xl text-center">{i[index]}</p>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<p class="z-40 text-xl font-bold tracking-widest text-center text-accent md:text-4xl">
					KEINE WERKE FÜR "{currentLetter}" VERFÜGBAR
				</p>
			{/if}
		</div>
	</div>

	<div class="absolute bottom-0 flex flex-col items-center justify-end w-screen gap-5 ">
		<div class="max-w-2xl overflow-hidden">
			<div id="wrap" class="grid items-center justify-start grid-flow-col grid-rows-1 gap-9">
				<p id="letter" class="invisible text-6xl font-bold text-center text-secondary">A</p>
				<p id="letter" class="invisible text-6xl font-bold text-center text-secondary">A</p>
				<p id="letter" class="invisible text-6xl font-bold text-center text-secondary">A</p>
				<p id="letter" class="invisible text-6xl font-bold text-center text-secondary">A</p>

				<p id="letter" class="text-6xl font-bold text-center text-secondary">A</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">B</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">C</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">D</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">E</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">F</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">G</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">H</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">I</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">J</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">K</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">L</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">M</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">N</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">O</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">P</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">Q</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">R</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">S</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">T</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">U</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">V</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">W</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">X</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">Y</p>
				<p id="letter" class="text-6xl font-bold text-center text-secondary">Z</p>
			</div>
		</div>
		<hr id="divider" class="self-center float-right w-16 mb-12 mr-2 -mt-4 border-4 border-accent" />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
	#letter {
		font-family: 'Space Mono', monospace;
	}

	#content {
		background-color: #0a0a0a;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23EA4CD5' stroke-width='0.7' stroke-opacity='0.13' %3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	}

	/* #content:after {
		animation: grain 8s steps(20) infinite;
		background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png);
		content: '';
		height: 300%;
		left: -50%;
		opacity: 0.15;
		position: fixed;
		top: -110%;
		width: 300%;
	}

	@keyframes grain {
		0%,
		100% {
			transform: translate(0, 0);
		}
		10% {
			transform: translate(-5%, -10%);
		}
		20% {
			transform: translate(-15%, 5%);
		}
		30% {
			transform: translate(7%, -25%);
		}
		40% {
			transform: translate(-5%, 25%);
		}
		50% {
			transform: translate(-15%, 10%);
		}
		60% {
			transform: translate(15%, 0%);
		}
		70% {
			transform: translate(0%, 15%);
		}
		80% {
			transform: translate(3%, 35%);
		}
		90% {
			transform: translate(-10%, 10%);
		}
	} */

	#portrait {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 4px;
		border: 10px solid #fff;
		border-bottom: 15px solid #fff;
		box-shadow: 4px 4px 0 0 #ff03eeea;
		background-color: white;
		-webkit-box-shadow: -10px 0px 13px -7px #0a0a0a, 10px 0px 13px -7px #0a0a0a,
			-5px -21px 34px -12px rgba(10, 10, 10, 0);
		box-shadow: -10px 0px 13px -7px #0a0a0a, 10px 0px 13px -7px #0a0a0a,
			-5px -21px 34px -12px rgba(10, 10, 10, 0);
	}

	/* #content::after {
		content: '';
		position: absolute;
		background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(20, 20, 20) 99%);
		z-index: 2;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
	} */

	p {
		/* outline: red 1px solid; */
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
