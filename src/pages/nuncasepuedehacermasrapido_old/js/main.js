import { MSDFTextGeometry, MSDFTextMaterial } from "three-msdf-text-utils";
import { FontLoader } from "https://cdn.jsdelivr.net/npm/three/src/loaders/FontLoader.js";
import * as THREE from "three";

import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three/examples/jsm/controls/OrbitControls.js";

import fnt from "../../nuncasepuedehacermasrapido/fonts/BradleyHandBold.fnt";
import atlasURL from "../../nuncasepuedehacermasrapido/fonts/BradleyHandBold.png";
console.log(fnt);
console.log(atlasURL);
// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Create a plane geometry
const geometry = new THREE.PlaneGeometry(1, 1);

// Create a shader material
const material = new THREE.ShaderMaterial({
  vertexShader: `void main() { 
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
    }`,
  fragmentShader: `void main() { 
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); 
    }`,
  wireframe: true,
  side: THREE.DoubleSide,
});

// Create a mesh with the geometry and material
const plane = new THREE.Mesh(geometry, material);

// Add the plane to the scene
scene.add(plane);

// Create a cube
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  controls.update();
  // Rotate the cube
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;

  // Render the scene with the camera
  renderer.render(scene, camera);
}

// Start the animation loop
animate();
