<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import {
		showPopup,
		mousePosition,
		popupText,
		popupHeadline,
		popupPositionLeft
	} from '../store/stores';
	let transformOrigin;
	let hideAnimation;

	onMount(() => {});

	$: if ($showPopup) {
		try {
			try {
				hideAnimation.pause();
			} catch (error) {}

			transformOrigin = 'top right';
			if ($popupPositionLeft) transformOrigin = 'top left';
			gsap.to(document.querySelector('#popup'), {
				opacity: 1,
				scale: 1,
				duration: 0.2,
				ease: 'Sine.easeOut',
				transformOrigin: transformOrigin
			});
		} catch (e) {}
	} else if (!$showPopup) {
		transformOrigin = 'top right';
		if ($popupPositionLeft) transformOrigin = 'top left';
		hideAnimation = gsap.to(document.querySelector('#popup'), {
			scale: 0,
			opacity: 0,
			duration: 0.3,
			ease: 'Sine.easeOut',
			transformOrigin: transformOrigin
		});
	}
</script>

{#if $mousePosition}
	<div id="test">
		<div
			style="top: {$mousePosition.y}px; left: {$popupPositionLeft
				? $mousePosition.x
				: $mousePosition.x - 768}px"
			id="popup"
			class="fixed z-50 flex flex-col w-auto h-auto max-w-screen-md px-6 pb-8 bg-white opacity-0 md:px-12 translate-y-7"
		>
			<h1 class="text-2xl lg:text-3xl xl:text-[2.4rem] text-accent font-bold pt-12 pb-5">
				{$popupHeadline}
			</h1>
			<p
				class="text-sm font-semibold text-justify w-[40ch] md:text-base md:w-[50ch] lg:w-[50ch] xl:w-[66ch]"
			>
				{@html $popupText}
			</p>
			<!-- <div class="flex justify-end pt-6 mr-6">
			<button class="rounded-none btn btn-accent" on:click={closePopup}
				><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
					><path
						fill="white"
						d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z"
					/></svg
				></button
			>
		</div> -->
		</div>
	</div>
{/if}

<style>
	#popup {
		box-shadow: 13px 13px 0 0 #ff03ed;
	}
</style>
