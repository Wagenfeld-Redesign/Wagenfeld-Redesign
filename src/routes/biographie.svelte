<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { showPopup, popupText, popupHeadline, navOpen, popupPositionLeft } from '../store/stores';
	import { fade } from 'svelte/transition';

	onMount(() => {
		showPopup.set(false);
	});

	function popupShow(subheadline, subheadlineText, position?) {
		if (!$navOpen) {
			showPopup.set(true);
			if ($showPopup) {
				popupHeadline.set(subheadline);
				popupText.set(subheadlineText);
				if (position) {
					popupPositionLeft.set(true);
				} else {
					popupPositionLeft.set(false);
				}
			}
		}
	}

	const intro = `Wilhelm Wagenfeld war ein deutscher Produktdesigner, welcher am 15. April 1900 in Bremen geboren wurde. Zu seiner Zeit galt Wagenfeld als einer der bekanntesten und besten im Gebiet Industriedesign. Bis zum Ende seiner Lebzeit gab es bis zu über 600 Entwürfe zu Gegenständen, welche zum größten Teil aus Glas oder Metall gefertigt waren. Viele seiner Entwürfe gelten heute noch als Klassiker, das prominenteste Beispiel die mit Carl Jakob Lucker entworfene Bauhaus-Leuchte, welche auch als Wagenfeldlampe bekannt ist. Im Laufe seiner Karriere hat Wagenfeld zudem seine Entwürfe mit verschiedenen Firmen wie zum Beispiel WMF verwirklicht.`;
	const left1 = `Seine Karriere als Produktdesigner begann 1914 in einem Zeichenbüro Bremer Silberwarenfabrik Koch & Bergfeld, dort absolvierte er vier Jahre eine Lehre als Industriezeichner, parallel besuchte er bis 1919 die Bremer Kunstgewerbeschule.`;
	const left2 = `1919 bis 1922 begann für Wagenfeld der nächste lehrreiche Schritt für seine zukünftige Karriere als Produktdesigner. 1919 gelang es ihm durch ein Stipendium an der Zeichenakadamie Hanau, mit einer Fachschule im Schwerpunkt Edelmetalle eine Ausbildung zum Silberschmied zu machen. In dieser Zeit nahm er auch Wettwerben teil, in diesen Wettbewerben ging es primär um Kirchengeräte und Schmuck.`;
	const left3 = `Danach widmete er sich 1923 – 1925 der Metallwerkstatt des Staatliches Bauhauses Weimar, geleitet wurde dies damals von László Moholy-Nagy und Christian Dell. Ein Jahr nach dem Beginn seiner Tätigkeiten schloss Wilhelm Wagenfeld seine Gesellenprüfung als Silberschmied und Ziseleur ab. Zusätzlich entstanden zur selben Zeit die ersten Entwürfe diverser Metallgeräte und der Bauhausleuchte.`;
	const left4 = `Ein Jahr darauf schaffte es Wagenfeld zum Assistenten in der Metallwerkstatt der staatlichen Bauhochschule Weimar, eine Nachfolgeinstitution des Bauhauses. Es kam sogar so weit, dass Wagenfeld 1928 der Leiter der Metallwerkstatt wurde. In dieser Zeit entstanden zudem weitere Entwürfe von Metallgeräten, gefolgt von einer Vielzahl Tisch- und Deckenleuchten. Dies war auch sein Beginn der Zusammenarbeit mit der Industrie und seiner öffentlichen Tätigkeiten.`;

	const right1 = `Nach der Auflösung der Bauhochschule 1930 durch die Nationalsozialisten und seinen freiberuflichen Tätigkeiten startete Wagenfeld in der Großindustrie durch. Wagenfeld hat es durch seine herausragende Arbeit geschafft, mehrere Firmen für Kooperationen zu gewinnen. Er schloss sich demnach mit dem Jenaer Glaswerk Schott & Gen, der Porzellanmanufakturen Fürstenberg / Weser (1934) und der Rosenthal AG / Selb, (1938) zusammen.
    1935 löste Wagenfeld den Vertrag mit dem Jenaer Glaswerk auf, dennoch einigte man sich darauf, Ausführungen von Einzelaufträgen bis 1937 anzufertigen. Das größere und wichtigere Ereignis war dennoch die Übernahme der künstlerischen Leitung der Vereinigten Lausitzer Glaswerke in Weißwasser/Oberlausitz. Es war die größte Glashütte Europas. Durch sein starkes soziales Engagement und seine Arbeit im Betrieb gelang es ihm, Änderungen und Bewegung reinzubringen. Wagenfelds Einführung des Qualitätssektors der „Rautengläser“ gelang es ihm, die Hütte wirtschaftlich wieder stabil zu erhalten, ein Erfolg, welcher zu internationalen Preisen und Anerkennungen führte.`;
	const right2 = `Wagenfeld gelang eine Berufung an das Institut für Bauwesen der Deutschen Akademie der Wissenschaften in Berlin. Dies geschah durch den Architekten Hans Scharoun, welcher ebenfalls aus Bremen stammt. Zu dieser Zeit übernahm Wagenfeld die Leitung der Abteilung Typisierung und Normung.
    Zwei Jahre später kam es zu einer Kooperation der Sendlinger Optische Glaswerke GmbH aus Berlin. Zusätzlich gelang Wagenfeld die Zusammenarbeit mit der Württembergischen Metallwarenfabrik (WMF) in Geislingen. Dort war er als künstlerischer Leiter eines zukünftiges Qualitätssektors im Bereich Metall und Glas zuständig. Im gleichen Zeitraum war Wagenfeld als Berater für sämtliche Firmen wie zum Beispiel Carl Hugo Pott zuständig.
    Nachdem Wagenfeld 1931 eine Zusammenarbeit mit der Rosenthal-Porzellan AG in Selb für Porzellan einging, folgte 11 Jahre später die Stelle als Berater bis 1955. Auch für Peill & Putzler Glashütten GmbH in Düren war er bis 1958 tätig. Dort war er für die Entwicklung eines Trinkglas- und Leuchtenprogramms zuständig.`;
	const right3 = `In den nächsten Jahren entwickelte sich Wagenfeld immer mehr zu einem Berater. 1955 unterzeichnete er einen Vertrag bis 1970 als Berater für Lindner / Bramberg und half bei dir Entwicklung Lindner / Bamberg. Obwohl Wagenfeld die letzten Jahre viel als Berater tätig war, gab es immer wieder Entwürfe für Firmen in Sachen Industriedesign. Außerdem steigerte sich sein Ansehen durch seine Arbeit der letzten Jahrzehnte sowohl international als auch national. Beispielsweise war er als einziger Deutscher Gestalter zur International Design Conference in Aspen, Colorado eingeladen. Im selben Jahr wurde er Mitglied im Verein «Industrieform» in Essen.
    1964 wurde er Ehrensenator der TU Stuttgart. Noch in selbem Jahr beteiligte er sich maßgeblich an der Documenta III in Kassel. Das darauffolgende Jahr wurde er Mitglied in der Akademie der Künste in Berlin.`;
	const right4 = `Am 28. Mai 1990 ist Wilhelm Wagenfeld als einer der bedeutsamsten deutschen Produktdesignern verstorben. Drei Jahre später folgte die Gründung der Wilhelm Wagenfeld Stiftung in Bremen, die Stifter waren hierbei seine Frau Erika Wagenfeld, die Stadt Stuttgart und die Stadtgemeinde der Freien Hansestadt Bremen. 1998 folgte die Eröffnung des Wilhelm Wagenfeld Hauses in Bremen, welches noch bis heute viele seiner Werke, Ideen und Entwürfe ausstellt.`;
</script>

<svelte:head>
	<title>Wagenfeld - Biographie</title>
</svelte:head>

<div id="content" class="relative w-screen min-h-screen overflow-hidden" in:fade>
	<div class="flex justify-center w-screen">
		<p
			class="absolute z-40 pt-[3.9rem] font-bold tracking-widest text-center text-white text-xl md:text-8xl xl:text-8xl"
		>
			BIOGRAPHIE
		</p>
	</div>

	<div class="flex flex-col items-center justify-center w-screen h-screen gap-7">
		<p
			class="text-4xl font-bold text-white transition duration-300 group"
			on:mouseenter={() => {
				popupShow('INTRO', intro, true);
			}}
			on:mouseleave={function () {
				showPopup.set(false);
			}}
		>
			INTRO
			<span
				class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
			/>
		</p>
		<div class="flex gap-72">
			<div id="left" class="flex flex-col text-4xl font-bold text-white gap-7">
				<p
					class="transition duration-300 group"
					on:mouseenter={() => {
						popupShow('1914 - 1919', left1, true);
					}}
					on:mouseleave={function () {
						showPopup.set(false);
					}}
				>
					1914 - 1919
					<span
						class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
					/>
				</p>
				<p
					class="transition duration-300 group"
					on:mouseenter={() => {
						popupShow('1919 - 1922', left2, true);
					}}
					on:mouseleave={function () {
						showPopup.set(false);
					}}
				>
					1919 - 1922
					<span
						class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
					/>
				</p>
				<p
					class="transition duration-300 group"
					on:mouseenter={() => {
						popupShow('1923 - 1925', left3, true);
					}}
					on:mouseleave={function () {
						showPopup.set(false);
					}}
				>
					1923 - 1925
					<span
						class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
					/>
				</p>
				<p
					class="transition duration-300 group"
					on:mouseenter={() => {
						popupShow('1926 - 1930', left4, true);
					}}
					on:mouseleave={function () {
						showPopup.set(false);
					}}
				>
					1926 - 1930
					<span
						class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
					/>
				</p>
			</div>

			<div id="right" class="flex flex-col text-4xl font-bold text-white gap-7">
				<p
					class="transition duration-300 group"
					on:mouseenter={() => {
						popupShow('1931 - 1935', right1);
					}}
					on:mouseleave={function () {
						showPopup.set(false);
					}}
				>
					1931 - 1935
					<span
						class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
					/>
				</p>

				<p
					class="transition duration-300 group"
					on:mouseenter={() => {
						popupShow('1947 - 1952', right2);
					}}
					on:mouseleave={function () {
						showPopup.set(false);
					}}
				>
					1947 - 1952
					<span
						class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
					/>
				</p>
				<p
					class="transition duration-300 group"
					on:mouseenter={() => {
						popupShow('1955 - 1968', right3);
					}}
					on:mouseleave={function () {
						showPopup.set(false);
					}}
				>
					1955 - 1968
					<span
						class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
					/>
				</p>
				<p
					class="transition duration-300 group"
					on:mouseenter={() => {
						popupShow('1990 - 1998', right4);
					}}
					on:mouseleave={function () {
						showPopup.set(false);
					}}
				>
					1990 - 1998
					<span
						class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
					/>
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	#content {
		background-color: #0a0a0a;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23EA4CD5' stroke-width='0.7' stroke-opacity='0.13' %3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	}
</style>
