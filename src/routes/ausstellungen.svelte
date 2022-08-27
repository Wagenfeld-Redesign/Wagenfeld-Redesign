<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { showPopup, popupText, popupHeadline, navOpen, popupPositionLeft } from '../store/stores';

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

	let dataLeft = [
		{
			headline: 'Wilhelm Wagenfeld A bis Z',
			text: `Die neue Ausstellung „Wilhelm Wagenfeld A bis Z“ wagt ein Experiment und nutzt die
						Ordnungsform des Alphabets – von A wie „Aladin-Kanne“ bis Z wie „Zweckleuchten“. So
						können die Objekte ganz neue Beziehungen eingehen – mal spielerisch, mal ernsthaft, mal
						unerwartet. Damit bietet die Ausstellung einen neuen Zugang zu Wagenfelds Werk, berührt
						aber zugleich zentrale Design-Themen des 20. Jahrhunderts.`,
			date: '27.11.2021 - 18.09.2022',
			img: 'https://wilhelm-wagenfeld-stiftung.de/images/285/WW_A-Z_foto%40jens-weyers.jpg?1653470995'
		},
		{
			headline: 'Graphic Novel mit Battle of Print',
			text: `In den letzten Jahren hat die Kunst, Geschichten mit Bildern und Texten zu erzählen,
						neue Themen und Adressatenkreise erobert. Ob die Bezeichnung "Graphic Novel" ein reiner
						Markerting Coup ist oder doch eine neue Form des Comics bezeichnet - das Interesse an
						sequentiellen Bilderzählungen ist enorm gewachsen. Die Ausstellung möchte die aktuelle
						Vielfalt der Graphic Novels daher einem breiteren Publikum vorstellen.`,
			date: '26.03.2021 - 29.08.2021',
			img: 'https://wilhelm-wagenfeld-stiftung.de/images/257/9_Blick_in_GRAPHIC_NOVEL_foto_JensWeyers.jpg?1614849873'
		},
		{
			headline: '100 Beste Plakate 18. Deutschland Österreich Schweiz',
			text: `Eine Besonderheit der Station im Wilhelm Wagenfeld Haus stellt die Präsentation der
						Plakate dar. Die ausgezeichneten Arbeiten sind nach Themen gegliedert, so dass formale
						und inhaltliche Merkmale hervorgehoben werden. Das Kapitel „Das politische Plakat“ zeigt
						beispielsweise, dass Gestalter*innen das Medium heute wieder vermehrt nutzen, um
						politische Meinungen und gesellschaftliche Anliegen in den öffentlichen Raum tragen.
						Die Gruppe „Schrift als Bildmedium“ versammelt Plakate, die Buchstaben nicht nur als
						Informationsträger einsetzen, sondern mit ihrer Form und den Größenverhältnissen
						experimentieren...`,
			date: '05.05.2020 - 27.09.2020',
			img: 'https://wilhelm-wagenfeld-stiftung.de/images/246/04-wws-100beste-plakate-2020-WEB-foto%C2%A9JensWeyers.jpg?1588853934'
		},
		{
			headline: 'Wilhelm Wagenfeld: Leuchten',
			text: `Eine Tischleuchte als Symbol für das Bauhaus Im Rahmen des 100jährigen Bauhausjubiläums
						widmet sich die Ausstellung den Leuchtenentwürfen Wilhelm Wagenfelds. Am Anfang steht
						seine berühmte Tischleuchte von 1924, die wie kaum ein anderes Objekt mit dem Bauhaus
						verbunden wird. Doch wie hat sich die Bauhausidee in den 1950er bis 1970er Jahren im
						Werk Wagenfelds weiterentwickelt? Führt er das Bauhaus-Projekt fort oder erarbeitet er
						neue Ansätze?`,
			date: '24.05.2019 - 23.02.2020',
			img: 'https://www.lampe.de/magazin/wp-content/uploads/2019/09/wagenfeld.jpg'
		},
		{
			headline: 'einfach gut. Design aus Dänemark',
			text: `Designmagazine und -blogs berichten wöchentlich über dänisches Design. Sie feiern die Klassiker der 1950er/60er Jahre und verankern den Begriff „Hygge“ im deutschen Vokabular. Offensichtlich spricht dänisches Design die Sehnsucht vieler Menschen nach Geborgenheit, nach langlebiger Qualität und dem sorgsamen Umgang mit natürlichen Materialien an.`,
			date: '26.10.2018 - 22.04.2019',
			img: 'https://wilhelm-wagenfeld-stiftung.de/images/285/WW_A-Z_foto%40jens-weyers.jpg?1653470995'
		}
	];

	let dataRight = [
		{
			headline: 'Neue Standards. Zehn Thesen zum Wohnen',
			text: `Zehn Architektinnen und Architekten formulierten aus ihrem persönlichen Erfahrungshintergrund einen relevanten „Neuen Standard“ für den Wohnungsbau – sie stehen für ein Wohnen, das sich auf Essenzielles besinnt und reich an Atmosphäre ist, für ein flächenkompaktes Wohnen und für ein Wohnen mit anpassungsfähigen Raumstrukturen. Wie Wohnen weiterhin leistbar bleibt, wie Menschen am Werden ihrer Stadt teilhaben können, sind ebenso Themen wie Dichte als Möglichkeit für städtisches Leben.`,
			date: '15.05.2018 - 24.06.2018',
			img: 'https://wilhelm-wagenfeld-stiftung.de/images/281/02b-wws-A%E2%80%93Z-fotos%C2%A9JensWeyers.jpg?1637514254'
		},
		{
			headline: 'Bremer Wohnbaupreis 2018',
			text: `Mit dem Bremer Wohnbaupreis 2018 wird unter dem Leitspruch "Qualität sichern, Vielfalt fördern, Gemeinschaft ermöglichen" zum vierten Mal seit der Einführung 2005 das Engagement der bremischen Baufrauen und Bauherren sowie der betreuenden Architekturbüros in verschiedenen Kategorien ausgezeichnet und gewürdigt. Dies betrifft städtebauliche Qualitäten von Quartieren und Standorten, Gebäudetypen und Grundrisse sowie Fassadengestaltungen und die Ausführung von Ausstattungen.`,
			date: '15.05.2018 - 24.06.2018',
			img: 'https://wilhelm-wagenfeld-stiftung.de/images/257/9_Blick_in_GRAPHIC_NOVEL_foto_JensWeyers.jpg?1614849873'
		},
		{
			headline: 'Welt aus Glas. Transparentes Design',
			text: `„Transparenz“ gehört zu den Schlüsselbegriffen unserer Gegenwart. Was wir mit dem Begriff verbinden, sagt viel über unsere Gesellschaft aus. Fordern wir transparentere Prozesse in Wirtschaft und Politik oder befürchten wir den Verlust von Privatsphäre in­mitten einer gläser­nen Kontrollgesellschaft? Die Ausstellung thematisiert, welche Hoffnun­gen, Wünsche und Gefahren wir mit dem Konzept der Transparenz verbinden. Warum faszi­nieren uns auch im Alltag Objekte aus Glas und klarem Kunststoff? Die Ausstellung blickt zunächst zurück auf das 20. Jahr­hundert und verfolgt die Entwicklungslinien bis zu aktuellen Diskussionen über eine gläserne Welt.`,
			date: '24.11.2017 - 22.04.2018',
			img: 'https://wilhelm-wagenfeld-stiftung.de/images/246/04-wws-100beste-plakate-2020-WEB-foto%C2%A9JensWeyers.jpg?1588853934'
		},
		{
			headline: 'Logo. Die Kunst mit dem Zeichen.',
			text: `„Ein Logo ist dann gut, wenn man es mit dem großen Zeh in den Sand kratzen kann“, stellt der Gestalter Kurt Weidemann fest. Tatsächlich entscheidet über den Erfolg eines Logos wie verständlich, unverwechselbar, einprägsam und reproduzierbar es ist. Daher nutzen Designer häufig dieselben Mittel, die in der Konkreten Kunst Anwendung finden: Sie arbeiten mit Grundformen, setzen auf Signalfarben und erreichen eine immer stärkere Vereinfachung.`,
			date: '19.05.2017 - 08.10.2017',
			img: 'https://www.lampe.de/magazin/wp-content/uploads/2019/09/wagenfeld.jpg'
		},
		{
			headline: 'Stapeln. Ein Prinzip der Moderne',
			text: `Wir alle stapeln Dinge: ungelesene Zeitungen, Brennholz, ordentlich gefaltete Pullover oder Suppendosen im Vorratsschrank. Das Stapeln ist eine grundlegende Kultur­­­technik.
			Umso erstaunlicher ist es, dass dieses Phänomen bisher nur wenig erforscht und ausgestellt wurde. Dabei wird seit Anfang des 20. Jahrhunderts so systematisch gestapelt, dass viele Bereiche unseres Lebens davon beeinflusst werden. Das Kubus-Geschirr aus Pressglas von Wilhelm Wagenfeld ist eines der frühesten Beispiele für stapelbares Indus­trie­design und verdeutlicht zugleich, dass das Stapelprinzip mehr bedeutet, als nur Dinge übereinanderzustellen.`,
			date: '18.11.2016 - 17.04.2017',
			img: 'https://wilhelm-wagenfeld-stiftung.de/images/281/02b-wws-A%E2%80%93Z-fotos%C2%A9JensWeyers.jpg?1637514254'
		}
	];
</script>

<svelte:head>
	<title>Wagenfeld - Ausstellungen</title>
</svelte:head>

<div id="content" class="relative w-screen min-h-screen overflow-hidden">
	<div class="flex justify-center w-screen">
		<p
			class="absolute z-40 pt-[3.9rem] font-bold tracking-widest text-center text-white text-xl md:text-8xl xl:text-8xl"
		>
			AUSSTELLUNGEN
		</p>
	</div>

	<div class="flex items-center justify-center w-screen min-h-screen px-24">
		<div class="flex flex-col items-center justify-center w-screen h-screen">
			<div class="flex gap-48">
				<div id="left" class="flex flex-col text-4xl font-bold text-white gap-7">
					{#each dataLeft as item}
						<p
							class="transition duration-300 group"
							on:mouseenter={() => {
								popupShow(item.headline, item.text, true);
							}}
							on:mouseleave={function () {
								showPopup.set(false);
							}}
						>
							{item.date}
							<span
								class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
							/>
						</p>
					{/each}
				</div>

				<div id="right" class="flex flex-col text-4xl font-bold text-white gap-7">
					{#each dataRight as item}
						<p
							class="transition duration-300 group"
							on:mouseenter={() => {
								popupShow(item.headline, item.text);
							}}
							on:mouseleave={function () {
								showPopup.set(false);
							}}
						>
							{item.date}
							<span
								class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
							/>
						</p>
					{/each}
				</div>
			</div>
			<a
				rel="external"
				href="https://wilhelm-wagenfeld-stiftung.de/ausstellungen/review/"
				target="_blank"
				class="mt-32 -mb-32 text-4xl font-bold text-white transition duration-300 cursor-pointer group"
			>
				für mehr, klick auf mich
				<span
					class="block h-1 transition-all duration-300 max-w-0 group-hover:max-w-full bg-accent"
				/>
			</a>
		</div>

		<!-- <div class="flex flex-col items-center justify-center gap-10">
			{#each data as item}
				<div class="flex justify-between w-full gap-10">
					<div id="popup" class="flex flex-col w-3/4 h-full px-6 pb-0 bg-white md:px-12 indicator">
						<h1 class="text-2xl lg:text-3xl xl:text-[2.4rem] text-accent font-bold  pt-12 pb-5">
							{item.headline}
						</h1>

						<p class="text-lg font-semibold text-justify">
							{item.text}
						</p>

						<div class="self-end flex-1 pt-6 place-self-end">
							<span class="text-lg font-bold bg-white text-accent">{item.date}</span>
						</div>
					</div>

					<img class="w-1/4" id="popup" src={item.img} alt="" srcset="" />
				</div>
			{/each}
		</div> -->
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

	#content {
		background-color: #0a0a0a;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23EA4CD5' stroke-width='0.7' stroke-opacity='0.13' %3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%230a0a0a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230A0A0A' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	}
</style>
