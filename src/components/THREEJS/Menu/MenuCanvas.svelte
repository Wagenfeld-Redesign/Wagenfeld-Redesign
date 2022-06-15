<script lang="ts">
	import Sketch from './scriptMenu';

	let sketch = new Sketch({
		dom: document.getElementById('container')
	});

	let speed = 0;
	let oldPosition = 0;
	let position = 0;
	let rounded = 0;

	// let elems = [...document.querySelectorAll('.n')];

	window.addEventListener('wheel', (e) => {
		if (e.deltaY < 0) {
			if (Math.round(position) >= 1) speed += e.deltaY * 0.0003;
		} else if (e.deltaY > 0) {
			if (Math.round(position) <= 3) speed += e.deltaY * 0.0003;
		}
	});

	let objs = Array(5).fill({ dist: 0 });

	// useFrame(() => {
	// 	try {
	// 		raf();
	// 	} catch (e) {}
	// });

	// Functions
	function raf() {
		try {
			position += speed;
			speed *= 0.89;

			objs.forEach((o, i) => {
				o.dist = Math.min(Math.abs(position - i), 1);
				o.dist = 1 - o.dist ** 2;

				let scale = 1 + 0.1 * o.dist;
				sketch.meshes[i].position.y = i * 1.2 - position * 1.2;
				sketch.meshes[i].scale.set(scale, scale, scale);
				sketch.meshes[i].material.uniforms.distanceFromCenter.value = o.dist;
			});

			rounded = Math.round(position);
			let diff = rounded - position;

			position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.035;

			// sketch.meshes.forEach((mesh, i) => {

			// });

			checkPositionChange();
			window.requestAnimationFrame(raf);
		} catch (e) {}
	}

	function checkPositionChange() {
		let roundedPosition = Math.round(position);
		if (oldPosition != roundedPosition) {
			oldPosition = roundedPosition;
		}
	}

	raf();
</script>
