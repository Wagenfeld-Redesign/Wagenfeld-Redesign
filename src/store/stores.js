// import { writable } from 'svelte/store';

// let gltfLampUpdated;

// export const gltfLamp = writable(gltfLampUpdated);

// export const updateLamp = (newLamp) => {
// 	// a writable store has a `set` method to change its value
// 	gltfLampUpdated = newLamp;
// };

import { writable, readable } from 'svelte/store';

export const gltfLamp = writable(null);
export const navOpen = writable(false);
export const navPosition = writable(0);
export const showPopup = writable(false);
export const popupText = writable('');

export const mousePosition = readable(null, function start(set) {
	document.body.addEventListener('mousemove', move);

	function move(event) {
		set({
			x: event.clientX,
			y: event.clientY
		});
	}

	return () => {
		document.body.removeEventListener('mousemove', move);
	};
});
