<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		gsap.from(document.querySelector('#popup'), {
			scale: 0,
			opacity: 0,
			duration: 0.7,
			ease: 'Sine.easeOut'
		});
	});

	function closePopup() {
		gsap.to(document.querySelector('#popup'), {
			scale: 0,
			opacity: 0,
			duration: 0.3,
			ease: 'Sine.easeOut',
			onComplete: () => {
				document.querySelector('#popupContainer').style.visibility = 'hidden';
				document.querySelector('#popupContainer').style.zIndex = -999;
			}
		});
	}
</script>

<div
	id="popupContainer"
	class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen"
>
	<div id="popup" class="flex flex-col w-auto h-auto px-6 pb-8 bg-white md:px-12">
		<h1 class="text-2xl lg:text-3xl xl:text-[2.4rem] text-accent font-bold pt-12 pb-5">
			SUBHEADLINE IT IS YOLO SWAG
		</h1>
		<p
			class="text-sm font-semibold text-justify w-[40ch] md:text-base md:w-[50ch] lg:w-[50ch] xl:w-[60ch]"
		>
			LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED DIAM NONUMY EIRMOD TEMPOR
			INVIDUNT UT LABORE ET DOLORE MAGNA ALIQUYAM ERAT, SED DIAM VOLUPTUA. AT VERO EOS ET ACCUSAM ET
			JUSTO DUO DOLORES ET EA REBUM. STET CLITA KASD GUBERGREN, NO SEA TAKIMATA SANCTUS EST LOREM
			IPSUM DOLOR SIT AMET. LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED DIAM NONUMY
			EIRMOD TEMPOR INVIDUNT UT LABORE ET DOLORE MAGNA ALIQUYAM ERAT, SED DIAM VOLUPTUA. AT VERO EOS
			ET ACCUSAM ET JUSTO DUO DOLORES ET EA REBUM. STET CLITA KASD GUBERGREN, NO SEA TAKIMATA
			SANCTUS EST LOREM IPSUM DOLOR SIT AMET. LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING
			ELITR, SED DIAM NONUMY EIRMOD TEMPOR INVIDUNT UT LABORE ET DOLORE MAGNA ALIQUYAM.
		</p>
		<div class="flex justify-end pt-6 mr-6">
			<button class="rounded-none btn btn-accent" on:click={closePopup}
				><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
					><path
						fill="white"
						d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z"
					/></svg
				></button
			>
		</div>
	</div>
</div>

<style>
	#popup {
		box-shadow: 13px 13px 0 0 #ff03ed;
	}
</style>
