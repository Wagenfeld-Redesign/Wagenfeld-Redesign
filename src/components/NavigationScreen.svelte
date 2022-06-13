<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Glide from '@glidejs/glide';

	onMount(() => {
		new Glide('.images', {
			type: 'carousel',
			perView: 3,
			focusAt: 'center',
			animationDuration: 500,
			gap: 40,
			breakpoints: {
				1200: {
					perView: 3
				},
				800: {
					perView: 2
				}
			},
			paddings: '25%'
		}).mount();
	});
</script>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.4.1/glide.min.js"></script>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.4.1/css/glide.core.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.4.1/css/glide.theme.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
	/>
</svelte:head>

<div id="contentNavigation" class="absolute left-0 top-0 w-screen h-screen bg-neutral z-40 ">
	<div>
		<div class="images glide">
			<div class="glide__track" data-glide-el="track">
				<ul class="glide__slides">
					<li class="glide__slide">
						<img
							src="https://64.media.tumblr.com/b6040c5ae3cb7ba78be0fb36d1350dc1/tumblr_nab4rdrtBs1th1vozo1_500.png"
							alt=""
						/>
					</li>

					<li class="glide__slide">
						<img
							src="https://64.media.tumblr.com/5624295270915cb27a8eb850d3567d7c/tumblr_nab510IiNr1th1vozo1_500.png"
							alt=""
						/>
					</li>

					<li class="glide__slide">
						<img
							src="https://64.media.tumblr.com/8ceeff99a98d4e598ad9d2a73303a398/tumblr_na405rBMc31th1vozo1_500.jpg"
							alt=""
						/>
					</li>

					<li class="glide__slide">
						<img
							src="https://64.media.tumblr.com/0ea289dd49e039906639b4dad1bd23e6/tumblr_nab5a9c7D21th1vozo1_500.jpg"
							alt=""
						/>
					</li>

					<li class="glide__slide">
						<img
							src="https://64.media.tumblr.com/ebc8a82ce9c1761e7c2dd2c310fc542c/tumblr_na3zvuz0Rb1th1vozo1_500.jpg"
							alt=""
						/>
					</li>

					<li class="glide__slide">
						<img
							src="https://64.media.tumblr.com/009f5568fe619e5be9ae3cfd9f538005/tumblr_nab4nqgWXE1th1vozo1_500.jpg"
							alt=""
						/>
					</li>
				</ul>
			</div>

			<div class="glide__arrows" data-glide-el="controls">
				<button class="glide__arrow glide__arrow--left" data-glide-dir="<"
					><i class="fas fa-arrow-left" /></button
				>
				<button class="glide__arrow glide__arrow--right" data-glide-dir=">"
					><i class="fas fa-arrow-right" /></button
				>
			</div>
		</div>
	</div>
</div>

<style>
	:global(.glide__slide img) {
		width: 100%;
	}
	:global(.glide__slide) {
		filter: blur(6px);
		opacity: 0.7;
		transition: 0.2s linear;
	}
	:global(.glide__slide--active) {
		opacity: 1;
		filter: none;
		transform: scale(1.1);
	}
	:global(.glide__slides) {
		overflow: visible !important;
	}
</style>
