<script>
	import { goto } from '$app/navigation';

	function gotoHome() {
		goto('/');
	}
</script>

<footer
	class="p-10 footer bg-neutral text-neutral-content flex justify-around z-10 bg-gradient-to-tr from-primary via-primary to-[#140D13]"
>
	<div class="self-center">
		<p style="display: block;" on:click={gotoHome} class="cursor-pointer">
			<object
				style="width:unset; pointer-events: none;"
				data="images/Logos/logo_white.svg"
				height="66.44px"
			/>
		</p>
	</div>
	<div class="self-center">
		<p class="text-2xl font-bold text-white uppercase">Bachelorprojekt: Wilhelm Wagenfeld A - Z</p>
		<p class="">
			© 2022 Hochschulprojekt der Klasse Medieninformatik 4. Semester für <a
				href="https://hs-bremen.de"
				class="link link-hover">Hochschule Bremen</a
			>
			<br /> Studierende: Enis Budancamanak, Phil Hartmann, Denis Ritter
		</p>
	</div>
	<div>
		<span class="text-2xl font-bold text-white uppercase">KONTAKT</span>
		<p class="link link-hover">Impressum</p>
		<p class="link link-hover">Datenschutz</p>
		<a class="link link-hover" href="https://wilhelm-wagenfeld-stiftung.de/"
			>Zur originalen Webseite</a
		>
	</div>
	<div class="self-center">
		<div class="flex gap-4">
			<a href="https://www.instagram.com/wilhelmwagenfeldhaus/" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="#FF03ED"
						d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
					/></svg
				>
			</a>

			<a href="https://www.facebook.com/WilhelmWagenfeldHaus/" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="#FF03ED"
						d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
					/></svg
				>
			</a>
		</div>
	</div>
</footer>

<style>
	footer {
		box-shadow: -1px -7px 29px -3px rgba(255, 3, 237, 0.15);
		-webkit-box-shadow: -1px -7px 29px -3px rgba(255, 3, 237, 0.15);
		-moz-box-shadow: -1px -7px 29px -3px rgba(255, 3, 237, 0.15);
		/* box-shadow: 0px 29px 130px -79px rgba(255, 3, 237, 1) inset;
		-webkit-box-shadow: 0px 29px 130px -79px rgba(255, 3, 237, 1) inset;
		-moz-box-shadow: 0px 29px 130px -79px rgba(255, 3, 237, 1) inset; */
	}
</style>
