// Your Three.js code goes here
// For example, you can create a scene, add objects, and animate them
// Don't forget to import Three.js at the beginning of your code
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three/examples/jsm/controls/OrbitControls.js";
// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  50
);
camera.position.z = 5;

//background color of the scene is set to white
scene.background = new THREE.Color(0xffffff);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Create a geometry
const geometry = new THREE.BoxGeometry();

// Create a material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create a mesh
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

//Create a plane that receives shadows and has an image texture
const planeGeometry = new THREE.PlaneGeometry(5, 5);
const screenshot1Material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("./img/screenshots/screenshots-1.jpg"),
  side: THREE.DoubleSide,
});
const screenshot2Material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("./img/screenshots/screenshots-2.jpg"),
  side: THREE.DoubleSide,
});
const screenshot1 = new THREE.Mesh(planeGeometry, screenshot1Material);
const screenshot2 = new THREE.Mesh(planeGeometry, screenshot2Material);

scene.add(screenshot1, screenshot2);

// Animate the cube
function animate() {
  requestAnimationFrame(animate);
  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
