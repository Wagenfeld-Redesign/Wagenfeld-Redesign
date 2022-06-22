// import { writable } from 'svelte/store';

// let gltfLampUpdated;

// export const gltfLamp = writable(gltfLampUpdated);

// export const updateLamp = (newLamp) => {
// 	// a writable store has a `set` method to change its value
// 	gltfLampUpdated = newLamp;
// };

import { writable } from 'svelte/store';

export const gltfLamp = writable(null);
export const navOpen = writable(false);
export const navPosition = writable(0);
