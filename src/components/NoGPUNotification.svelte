<script>
	import { fade } from 'svelte/transition';
	import Footer from './Footer.svelte';
</script>

<div style="margin: 0 auto;">
	<div class="flex flex-col min-h-screen w-screen">
		<div id="content" class="flex flex-col flex-1 sm:flex-row bg-primary justify-center">
			<div class="flex flex-col justify-center items-center gap-11" in:fade>
				<object
					title="logo"
					style="width:unset; pointer-events: none;"
					data="images/Logos/logo_white.svg"
					height="60px"
				/>

				<h1 class="text-4xl font-bold text-white text-center max-w-screen-md">
					WIR KONNTEN KEINE GRAFIKKARTE FESTSTELLEN, BITTE AKTIVIEREN SIE DIE OPTION
					"HARDWAREBESCHLEUNIGUNG" IN IHREN BROWSER-EINSTELLUNGEN
				</h1>
				<p
					class="text-3xl font-bold text-white text-center link link-hover"
					on:click={() => {
						window
							.open(
								'https://www.heise.de/tipps-tricks/Hardwarebeschleunigung-aktivieren-4697745.html',
								'_blank'
							)
							.focus();
					}}
				>
					ZUR ANLEITUNG
				</p>
			</div>
		</div>

		<Footer />
	</div>
</div>

<style>
	#content {
		background-color: #0a0a0a;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23EA4CD5' stroke-width='0.7' stroke-opacity='0.13' %3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;

		box-shadow: 0px 22px 29px -10px rgba(255, 3, 237, 0.15) inset;
		-webkit-box-shadow: 0px 22px 29px -10px rgba(255, 3, 237, 0.15) inset;
		-moz-box-shadow: 0px 22px 29px -10px rgba(255, 3, 237, 0.15) inset;
	}
</style>
