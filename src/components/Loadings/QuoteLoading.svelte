<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let quotesArray = [
		'Das Schwierigste an meinem Tun ist wohl immer die Bescheidung: solange an einer Sache zu arbeiten, bis sie abgelöst ist von allen Spuren des eigenen Zutuns, völlig für sich und in sich abgeschlossen da sein kann … einfach da ist.',
		'Brauchbar sein heißt auch schön sein, denn alles Brauchen muss schön sein können, anders erfüllen die Dinge nicht ihren Sinn.'
	];

	let authorArray = ['Wilhelm Wagenfeld', 'Wilhelm Wagenfeld'];
	let randomIndex = Math.round(Math.random());

	// „“

	onMount(() => {
		const t1 = gsap.timeline({ paused: true, defaults: { duration: 2 } });
		t1.play();
		const t2 = gsap.timeline({ paused: true, defaults: { duration: 0.5, delay: 1.8 } });
		t2.play();

		const lampScreen = document.getElementById('lampScreen');
		const quoteScreen = document.getElementById('quoteScreen');
		t1.to(lampScreen, {
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			visibility: 'visible',
			scale: 1.15
		});
		t1.to(
			lampScreen,
			{
				clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
				onComplete: () => {}
			},
			'-=1.2'
		);
		t2.to(quoteScreen, { opacity: 1 });
	});
</script>

<div class="w-screen h-screen bg-neutral m-0 overflow-hidden absolute">
	<div id="lampScreen" class="absolute invisible">
		<div class="w-screen h-screen">
			<div class="flex justify-center items-center h-screen">
				<img
					class="w-1/6 h-auto"
					src="src\assets\3DModels\Wagenfeldlampe\WA24_transparent.png"
					alt=""
					srcset=""
				/>
			</div>
		</div>
	</div>

	<div id="quoteScreen" class="opacity-0">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			class="w-auto h-48 absolute -bottom-12 left-28 z-10 fill-current text-secondary"
		>
			<path
				d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
			/>
		</svg>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			class="w-auto h-48 absolute -top-12 right-28 z-10 fill-current text-secondary rotate-180"
		>
			<path
				d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
			/>
		</svg>

		<div
			class="w-screen h-screen flex justify-center items-center text-white text-center font-semibold -mb-24"
		>
			<div class="flex flex-col gap-6">
				<p class="max-w-xs text-base lg:max-w-3xl lg:text-2xl md:max-w-md md:text-xl">
					{quotesArray[randomIndex]}
				</p>
				<p class="text-xs font-normal lg:text-base">
					{authorArray[randomIndex]}
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	/* :global(html),
	:global(body) {
		margin: 0 !important;
		height: 100% !important;
		overflow: hidden !important;
	} */
</style>
