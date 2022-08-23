<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { showPopup, popupText, popupHeadline, navOpen } from '../store/stores';
	import VanillaTilt from 'vanilla-tilt';

	onMount(() => {
		showPopup.set(false);

		//@ts-ignore
		VanillaTilt.init(document.querySelectorAll('img'));
	});

	function popupShow(subheadline, subheadlineText) {
		if (!$navOpen) {
			showPopup.set(true);
			if ($showPopup) {
				popupHeadline.set(subheadline);
				popupText.set(subheadlineText);
				// if (position) {
				// 	popupPositionLeft.set(true);
				// } else {
				// 	popupPositionLeft.set(false);
				// }
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

<div id="content" class="relative w-screen h-screen overflow-hidden">
	<div class="flex justify-center w-screen">
		<p
			class="absolute z-40 pt-[3.9rem] font-bold tracking-widest text-center text-white text-xl md:text-8xl xl:text-8xl"
		>
			AUSSTELLUNGEN
		</p>
	</div>

	<div class="flex items-center justify-between w-screen h-screen px-24 mt-12">
		<div class="flex flex-col items-center justify-center gap-10">
			<div class="flex justify-between w-full gap-10">
				<div id="popup" class="flex flex-col w-full h-auto px-6 pb-8 bg-white md:px-12 indicator">
					<h1 class="text-2xl lg:text-3xl xl:text-[2.4rem] text-accent font-bold  pt-12 pb-5">
						Wilhelm Wagenfeld A bis Z
					</h1>

					<p class="text-lg font-semibold text-justify">
						Die neue Ausstellung „Wilhelm Wagenfeld A bis Z“ wagt ein Experiment und nutzt die
						Ordnungsform des Alphabets – von A wie „Aladin-Kanne“ bis Z wie „Zweckleuchten“. So
						können die Objekte ganz neue Beziehungen eingehen – mal spielerisch, mal ernsthaft, mal
						unerwartet. Damit bietet die Ausstellung einen neuen Zugang zu Wagenfelds Werk, berührt
						aber zugleich zentrale Design-Themen des 20. Jahrhunderts.
					</p>

					<div class="flex justify-end pt-6">
						<span class="text-lg font-bold bg-white text-accent">27.11.2021 - 18.09.2022</span>
					</div>
				</div>

				<img
					id="popup"
					src="https://wilhelm-wagenfeld-stiftung.de/images/285/WW_A-Z_foto%40jens-weyers.jpg?1653470995"
					alt=""
					srcset=""
				/>
			</div>

			<div class="flex justify-between w-full gap-10">
				<div id="popup" class="flex flex-col w-full h-auto px-6 pb-8 bg-white md:px-12">
					<h1 class="text-2xl lg:text-3xl xl:text-[2.4rem] text-accent font-bold pt-12 pb-5">
						Mein Wagenfeld
					</h1>
					<p class="text-lg font-semibold text-justify">
						"Wilhelm Wagenfeld A bis Z" breitet den vielfältigen Kontext von Alltagsdingen aus. Die
						Ausstellung untersucht die Gestaltung, Produktion, Materialität, den Verkauf und die
						Nutzung von Objekten, aber sie möchte auch die individuelle Dimension in den Blick
						nehmen: Die Erzählebene „Mein Wagenfeld“ stellt Menschen und ihre Lieblingsstücke in den
						Mittelpunkt und bietet so einen emotionalen Zugang zum Leben mit Wagenfeld-Objekten.
					</p>

					<div class="flex justify-end pt-6">
						<span class="text-lg font-bold bg-white text-accent">bis 18.09.2022</span>
					</div>
				</div>

				<img
					id="popup"
					src="https://wilhelm-wagenfeld-stiftung.de/images/281/02b-wws-A%E2%80%93Z-fotos%C2%A9JensWeyers.jpg?1637514254"
					alt=""
					srcset=""
				/>
			</div>
		</div>
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

	#popup {
		box-shadow: 13px 13px 0 0 #ff03ed;
	}
</style>
