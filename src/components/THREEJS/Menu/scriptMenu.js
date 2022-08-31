import * as THREE from 'three';

import shader from './shader.glsl';
import fragment from './fragment.glsl.js';
import { goto } from '$app/navigation';
import { navOpen, navPosition, showPopup } from '../../../store/stores.js';
import { get } from 'svelte/store';
import gsap from 'gsap';

// import { TimelineMax } from 'gsap';
let images;

export default class Sketch {
	constructor(options) {
		this.scene = new THREE.Scene();
		this.container = options.dom;
		this.width = this.container.offsetWidth;
		this.height = this.container.offsetHeight;
		this.renderer = new THREE.WebGLRenderer({
			antialias: true
		});
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(this.width, this.height);
		// this.renderer.setClearColor(0x0a0a0a, 1);
		this.renderer.setClearColor(0x0a0a0a, 0); // the default

		this.renderer.physicallyCorrectLights = true;
		this.renderer.outputEncoding = THREE.sRGBEncoding;
		this.container.appendChild(this.renderer.domElement);

		this.container.appendChild(this.renderer.domElement);
		this.camera = new THREE.PerspectiveCamera(
			70,
			window.innerWidth / window.innerHeight,
			0.001,
			1000
		);

		this.camera.position.set(0, 0, 2);
		// this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.time = 0;
		this.isPlaying = true;
		this.addObjects();
		this.resize();
		this.render();
		this.setupResize();
		// this.settings();
		this.materials = [];
		this.meshes = [];
		this.groups = [];
		this.links = ['/werke', '/biographie', '/info', '/ausstellungen'];
		this.thirdImageFlipped = false;
		this.handleImages();

		var raycaster = new THREE.Raycaster();
		var mouse = new THREE.Vector2();

		document.addEventListener('click', (event) => {
			event.preventDefault();

			mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
			mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;

			raycaster.setFromCamera(mouse, this.camera);

			var intersects = raycaster.intersectObjects(this.groups);

			if (intersects.length > 0) {
				if (this.links[get(navPosition)] == intersects[0].object.name) {
					if (this.links[get(navPosition)] != '/info') {
						goto(intersects[0].object.name);

						setTimeout(() => {
							navOpen.set(false);
							showPopup.set(false);
						}, 50);
					} else {
						if (this.thirdImageFlipped) {
							this.thirdImageFlipped = false;
							gsap.to(this.meshes[2].rotation, {
								y: 0,
								duration: 1.2,
								ease: 'Back.easeOut',
								onUpdate: () => {
									if (
										Math.round(this.meshes[2].rotation.y * 100) / 100 < 1.9 &&
										Math.round(this.meshes[2].rotation.y * 100) / 100 > 1.52
									)
										this.changeImageFor3rdImage(true);
								}
							});
						} else {
							this.thirdImageFlipped = true;
							gsap.to(this.meshes[2].rotation, {
								y: 3.14,
								duration: 1.2,
								ease: 'Back.easeOut',
								onUpdate: () => {
									if (
										Math.round(this.meshes[2].rotation.y * 100) / 100 < 1.9 &&
										Math.round(this.meshes[2].rotation.y * 100) / 100 > 1.52
									)
										this.changeImageFor3rdImage(false);
								}
							});
						}
					}
				}
			}
		});
	}

	changeImageFor3rdImage(original) {
		if (original) {
			let mat = this.material.clone();
			let CLONED_IMAGE = images[2].cloneNode(true); // this helped when i set image width in JS
			mat.uniforms.texture1.value = new THREE.Texture(CLONED_IMAGE);
			mat.uniforms.texture1.value.needsUpdate = true;
			this.meshes[2].material = mat;
		} else {
			let mat = this.material.clone();
			let CLONED_IMAGE = document.querySelector('.infoCard').cloneNode(true); // this helped when i set image width in JS
			mat.uniforms.texture1.value = new THREE.Texture(CLONED_IMAGE);
			mat.uniforms.texture1.value.needsUpdate = true;
			this.meshes[2].material = mat;
		}
	}

	handleImages() {
		images = [...document.querySelectorAll('.menuImage')];
		images.forEach((im, i) => {
			let mat = this.material.clone();

			let CLONED_IMAGE = im.cloneNode(true); // this helped when i set image width in JS
			mat.uniforms.texture1.value = new THREE.Texture(CLONED_IMAGE);
			mat.uniforms.time.value = Date.now();

			im.onload = function () {
				mat.uniforms.texture1.value.needsUpdate = true;
			};
			mat.uniforms.texture1.value.needsUpdate = true;

			let geo = new THREE.PlaneBufferGeometry(1.25, 1.5, 20, 20);
			let mesh = new THREE.Mesh(geo, mat);

			let url = '';
			if (images[i].dataset.url != null) {
				url = images[i].dataset.url;
			}
			mesh.name = '/' + url;

			let group = new THREE.Group();

			group.add(mesh);
			this.groups.push(group);
			this.materials.push(mat);
			this.meshes.push(mesh);
			this.scene.add(group);

			mesh.position.x = i * 1.6;

			// mesh.rotation.x = -0.05;
			// mesh.rotation.y = -0.5;
			// mesh.rotation.z = -0.1;
		});
	}

	settings() {
		let that = this;
		this.settings = {
			progress: 0
		};
		// this.gui = new dat.GUI();
		// this.gui.add(this.settings, 'progress', 0, 1, 0.01);
	}
	setupResize() {
		window.addEventListener('resize', this.resize.bind(this));
	}

	resize() {
		this.width = this.container.offsetWidth;
		this.height = this.container.offsetHeight;
		this.renderer.setSize(this.width, this.height);
		this.camera.aspect = this.width / this.height;

		// image cover
		this.imageAspect = 1.25 / 1.5;
		let a1;
		let a2;
		if (this.height / this.width > this.imageAspect) {
			a1 = (this.width / this.height) * this.imageAspect;
			a2 = 1;
		} else {
			a1 = 1;
			a2 = this.height / this.width / this.imageAspect;
		}

		this.material.uniforms.resolution.value.x = this.width;
		this.material.uniforms.resolution.value.y = this.height;
		this.material.uniforms.resolution.value.z = a1;
		this.material.uniforms.resolution.value.w = a2;

		this.camera.updateProjectionMatrix();
	}

	addObjects() {
		let that = this;
		this.material = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL OES_standard_derivatives:enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: { type: 'f', value: 0.0 },
				distanceFromCenter: { type: 'f', value: 0.0 },
				texture1: { type: 't', value: null },
				resolution: { type: 'v4', value: new THREE.Vector4() },
				uvRatel: {
					value: new THREE.Vector2(1, 1)
				}
			},
			transparent: true,
			vertexShader: shader,
			fragmentShader: fragment
		});
	}

	stop() {
		this.isPlaying = false;
	}

	play() {
		if (!this.isPlaying) {
			this.render();
			this.isPlaying = true;
		}
	}
	render() {
		if (!this.isPlaying) return;

		this.time += 0.05;

		if (this.materials)
			this.materials.forEach((m) => {
				m.uniforms.time.value = this.time;
			});

		this.material.uniforms.time.value = this.time;
		requestAnimationFrame(this.render.bind(this));
		this.renderer.render(this.scene, this.camera);
	}
}
