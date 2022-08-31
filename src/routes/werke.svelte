<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { showPopup, popupText, popupHeadline, navOpen, popupPositionLeft } from '../store/stores';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { TweenMax } from 'gsap';
	import VanillaTilt from 'vanilla-tilt';
	import { SyncLoader } from 'svelte-loading-spinners';

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
	let pathPictures = import.meta.glob(`./../../static/images/werkePictures/*/*.{png,jpg}`);
	let currentArray = [{ letter: 'A', countImages: 0, titles: ['test', 'test'] }];
	let currentLetter = 'A';
	let currentInfoArray = [];
	let currentImage = '1';
	let dontShowPictures = false;

	let wrap;
	let elems = [];
	var timer = null;

	let initOldPathLetter = '.';
	let currentTitlesArray = [];
	onMount(() => {
		popupPositionLeft.set(false);
		//@ts-ignore
		VanillaTilt.init(document.querySelectorAll('#carouselWrapper'), {
			reverse: fade,
			transition: true,
			max: 4,
			easing: 'cubic-bezier(.03,.98,.52,.99)',
			scale: 1.05,
			'full-page-listening': true
		});

		showPopup.set(false);
		for (const modulePath in pathPictures) {
			var currentCount = modulePath.split('/')[7].split('-')[0];
			var currentName = modulePath.split('/')[7].split('-')[1];

			if (initOldPathLetter == modulePath.split('/')[6]) {
				currentTitlesArray.push(currentName);
			} else {
				currentTitlesArray = [currentName];
			}

			var currentPathLetter = modulePath.split('/')[6];
			initOldPathLetter = currentPathLetter;

			countImagesForLetter.forEach((element, i) => {
				if (element.letter == currentPathLetter) {
					element.countImages = parseInt(currentCount);
					element.titles = currentTitlesArray;
				}
			});
		}

		// Scrolling event start
		document.querySelector('#carouselWrapper').addEventListener('scroll', function () {
			clearTimeout(timer);
			//Renew timer
			timer = setTimeout(function () {
				if (currentArray.length > 0) {
					document.querySelectorAll('[data-image]').forEach((e) => {
						if (isInViewport(e)) {
							currentImage = e.getAttribute('data-image');
						}
					});
				}
			}, 100);
		});

		elems = [...document.querySelectorAll('#letter')];

		raf();
	});

	function clickLetterHandle(positionFromLetter) {
		if (positionFromLetter - 1 != position.value) dontShowPictures = true;
		TweenMax.to(position, 0.3, {
			value: positionFromLetter - 1,
			ease: 'Circ.easeOut',
			onComplete: () => {
				dontShowPictures = false;
			}
		});
	}

	const handleWheel = (e) => {
		var target = event.target;
		try {
			if (
				target === document.getElementById('carousel') ||
				//@ts-ignore
				document.getElementById('carousel').contains(target)
			) {
				return;
			}
		} catch (e) {}
		if (e.deltaY < 0) {
			if (Math.round(position.value) >= 1) speed += e.deltaY * 0.0003;
		} else if (e.deltaY > 0) {
			if (Math.round(position.value) <= 24) speed += e.deltaY * 0.0003;
		}
	};

	function popupShow(subheadline, subheadlineTextIndex) {
		if (!$navOpen) {
			showPopup.set(true);
			if ($showPopup) {
				popupHeadline.set(subheadline.split('.')[0]);

				try {
					//@ts-ignore
					if (currentInfoArray.werke[subheadlineTextIndex]['details']) {
						//@ts-ignore
						popupText.set(currentInfoArray.werke[subheadlineTextIndex]['details']);
					}
				} catch (e) {
					popupText.set('Keine Informationen verfügbar.');
				}
			}
		}
	}

	function raf() {
		try {
			wrap = document.querySelector('#wrap');

			position.value += speed;
			speed *= 0.89;

			rounded = Math.round(position.value);
			let diff = rounded - position.value;

			position.value += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.035;
			wrap.style.transform = `translate(${-position.value * 72.8 + 25}px,0)`;

			checkPositionChange();

			//@ts-ignore only play when page is active
			if ($page.url.pathname === new URL(window.location).pathname) requestAnimationFrame(raf);
		} catch (e) {}
	}

	function checkPositionChange() {
		let roundedPosition = Math.round(position.value) + 1;
		if (oldPosition != roundedPosition) {
			currentImage = '1';

			oldPosition = roundedPosition;
			currentLetter = (roundedPosition + 9).toString(36).toUpperCase();

			currentArray = Array(countImagesForLetter[roundedPosition - 1].countImages).fill(
				countImagesForLetter[roundedPosition - 1].titles
			);

			try {
				fetch('images/werkePictures/' + currentLetter + '/infos.json')
					.then((response) => response.json())
					.then((json) => (currentInfoArray = json));
			} catch (e) {
				currentInfoArray = null;
			}

			try {
				document.querySelector('#carouselWrapper').scrollTo({ top: 0 });
			} catch (e) {}
		}
	}

	function isInViewport(elem) {
		var bounding = elem.getBoundingClientRect();
		return (
			bounding.top >= 0 &&
			bounding.left >= 0 &&
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
</script>

<svelte:window on:wheel={handleWheel} />
<svelte:head>
	<title>Wagenfeld - Werke</title>
</svelte:head>

<div
	id="content"
	class="relative w-screen min-h-screen overflow-hidden"
	in:fade={{ duration: 200 }}
>
	<div class="flex justify-center w-screen">
		<p
			class="absolute z-40 pt-[3.9rem] font-bold tracking-widest text-center text-white text-xl md:text-8xl  xl:text-8xl"
		>
			WERKE
		</p>
	</div>

	<div class="flex flex-col items-center justify-center w-screen h-screen place-items-center">
		{#if dontShowPictures}
			<div class="z-40 translate-y-60">
				<SyncLoader size="60" color="#ffffff" unit="px" duration="0.4s" />
			</div>
		{:else if currentArray.length == 0}
			<p
				class="z-40 text-xl font-bold tracking-widest text-center text-white md:text-4xl translate-y-60"
			>
				KEINE WERKE FÜR "{currentLetter}" VERFÜGBAR
			</p>
		{/if}

		<div
			style="box-shadow: inset 0px 0px 86px 3px #0A0A0A;"
			id="carouselWrapper"
			class="h-[32rem] overflow-y-scroll snap-y snap-mandatory items-center flex justify-center overflow-x-hidden bg-white bg-opacity-60"
		>
			{#if currentArray.length > 0 && !dontShowPictures}
				<div id="carousel" class="h-full">
					{#each currentArray as i, index}
						<div
							class="h-full carousel-item w-96 portrait"
							in:fade={{ duration: 100 }}
							on:mouseenter={() => {
								popupShow(i[index], index);
							}}
							on:mouseleave={function () {
								showPopup.set(false);
							}}
						>
							<img
								src="images/werkePictures/{currentLetter}/{index + 1}-{i[index]}"
								alt=""
								srcset=""
								class="transition-all duration-100 max-h-96"
								data-image={index + 1}
							/>
							<!-- grayscale hover:grayscale-0 -->
							<p class="mt-4 text-2xl font-bold text-center">
								{#if i[index]}
									{i[index].split('.')[0]}
								{/if}
							</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		{#if currentArray.length > 0 && !dontShowPictures}
			<p class="mt-6 text-xl font-bold text-center text-white">
				{currentImage} / {currentArray.length}
			</p>
		{/if}
	</div>

	<div class="absolute bottom-0 flex flex-col items-center justify-end w-screen gap-5 ">
		<div class="max-w-2xl overflow-hidden">
			<div id="wrap" class="grid items-center justify-start grid-flow-col grid-rows-1 gap-9">
				<p id="letter" class="invisible text-6xl font-bold text-center text-secondary">A</p>
				<p id="letter" class="invisible text-6xl font-bold text-center text-secondary">A</p>
				<p id="letter" class="invisible text-6xl font-bold text-center text-secondary">A</p>
				<p id="letter" class="invisible text-6xl font-bold text-center text-secondary">A</p>

				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(1);
					}}
				>
					A
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(2);
					}}
				>
					B
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(3);
					}}
				>
					C
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(4);
					}}
				>
					D
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(5);
					}}
				>
					E
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(6);
					}}
				>
					F
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(7);
					}}
				>
					G
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(8);
					}}
				>
					H
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(9);
					}}
				>
					I
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(10);
					}}
				>
					J
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(11);
					}}
				>
					K
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(12);
					}}
				>
					L
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(13);
					}}
				>
					M
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(14);
					}}
				>
					N
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(15);
					}}
				>
					O
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(16);
					}}
				>
					P
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(17);
					}}
				>
					Q
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(18);
					}}
				>
					R
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(19);
					}}
				>
					S
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(20);
					}}
				>
					T
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(21);
					}}
				>
					U
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(22);
					}}
				>
					V
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(23);
					}}
				>
					W
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(24);
					}}
				>
					X
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(25);
					}}
				>
					Y
				</p>
				<p
					id="letter"
					class="text-6xl font-bold text-center cursor-pointer text-secondary"
					on:click={() => {
						clickLetterHandle(26);
					}}
				>
					Z
				</p>
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

	/* ===== Scrollbar CSS ===== */
	/* Firefox */
	* {
		scrollbar-width: thin;
		scrollbar-color: #ff03ee #0a0a0a;
	}

	/* Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: 10px;
	}

	*::-webkit-scrollbar-track {
		background: #0a0a0a;
	}

	*::-webkit-scrollbar-thumb {
		background-color: #ff03ee;
		border-radius: 0px;
		border: 0px none #ffffff;
	}

	.portrait {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0px 12px;
		box-shadow: 4px 4px 0 0 #ff03eeea;
		/* background-color: white; */
		-webkit-box-shadow: -10px 0px 13px -7px #0a0a0a, 10px 0px 13px -7px #0a0a0a,
			-5px -21px 34px -12px rgba(10, 10, 10, 0);
		box-shadow: -10px 0px 13px -7px #0a0a0a, 10px 0px 13px -7px #0a0a0a,
			-5px -21px 34px -12px rgba(10, 10, 10, 0);
	}
</style>
