<script lang="ts">
	import Sketch from './scriptMenu';
	import { TweenMax } from 'gsap/all';
	import { navPosition } from '../../../store/stores.js';
	import { page } from '$app/stores';

	let sketch = new Sketch({
		dom: document.getElementById('container')
	});

	let menuTitles = ['Wilhelm Wagenfelds Werke', 'Biographie', 'Info - Karte', 'Ausstellungen'];

	let leftArrow = document.getElementById('arrow-left');
	let rightArrow = document.getElementById('arrow-right');
	let menuTitleElement = document.getElementById('currentMenuTitle');

	let speed = 0;
	let oldPosition = 0;
	let rounded = 0;
	let position = { value: 0 };

	//Check which site is active => setting the position of the menu
	if ($page.url.pathname === '/werke') position.value = 0;
	else if ($page.url.pathname === '/biographie') position.value = 1;
	else if ($page.url.pathname === '/ausstellungen') position.value = 3;

	rightArrow.addEventListener('click', function () {
		TweenMax.to(position, 0.4, {
			value: position.value + 1,
			ease: 'Circ.easeOut'
		});
	});

	leftArrow.addEventListener('click', function () {
		TweenMax.to(position, 0.4, {
			value: position.value - 1,
			ease: 'Circ.easeOut'
		});
	});

	// let elems = [...document.querySelectorAll('.n')];

	window.addEventListener('wheel', (e) => {
		if (e.deltaY < 0) {
			if (Math.round(position.value) >= 1) speed += e.deltaY * 0.0003;
		} else if (e.deltaY > 0) {
			if (Math.round(position.value) <= 2) speed += e.deltaY * 0.0003;
		}
	});

	let objs = Array(menuTitles.length).fill({ dist: 0 });

	// Functions
	function raf() {
		try {
			position.value += speed;
			speed *= 0.89;

			objs.forEach((o, i) => {
				o.dist = Math.min(Math.abs(position.value - i), 1);
				o.dist = 1 - o.dist ** 2;

				let scale = 1 + 0.1 * o.dist;
				sketch.meshes[i].position.x = i * 1.6 - position.value * 1.6;
				sketch.meshes[i].scale.set(scale, scale, scale);
				sketch.meshes[i].material.uniforms.distanceFromCenter.value = o.dist;
			});

			rounded = Math.round(position.value);
			let diff = rounded - position.value;

			position.value += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.035;

			checkPositionChange();
			window.requestAnimationFrame(raf);
		} catch (e) {}
	}

	function checkPositionChange() {
		let roundedPosition = Math.round(position.value);
		if (oldPosition != roundedPosition) {
			oldPosition = roundedPosition;

			navPosition.set(roundedPosition);
		}

		menuTitleElement.innerHTML = menuTitles[roundedPosition];

		if (roundedPosition == 0) {
			leftArrow.style.visibility = 'hidden';
			rightArrow.style.visibility = 'visible';
		} else if (roundedPosition >= 1 && roundedPosition <= 2) {
			leftArrow.style.visibility = 'visible';
			rightArrow.style.visibility = 'visible';
		} else if (roundedPosition == 3) {
			leftArrow.style.visibility = 'visible';
			rightArrow.style.visibility = 'hidden';
		}
	}

	raf();
</script>
