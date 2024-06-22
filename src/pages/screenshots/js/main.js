import * as THREE from "three";

import Stats from "three/addons/libs/stats.module.js";

import { NURBSCurve } from "three/addons/curves/NURBSCurve.js";
import { NURBSSurface } from "three/addons/curves/NURBSSurface.js";
import { NURBSVolume } from "three/addons/curves/NURBSVolume.js";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { TrackballControls } from "https://cdn.jsdelivr.net/npm/three/examples/jsm/controls/TrackballControls.js";
import { TextGeometry } from "https://cdn.jsdelivr.net/npm/three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "https://cdn.jsdelivr.net/npm/three/examples/jsm/loaders/FontLoader.js";

import { DRACOLoader } from "https://cdn.jsdelivr.net/npm/three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "https://cdn.skypack.dev/gsap";
// import GUI from "https://cdn.jsdelivr.net/npm/three/examples/jsm/libs/dat.gui.module.js";

// const gui = new GUI.GUI();

let container;
let stats;

let camera, scene, renderer;
let group;
let controls;
let text;

let particleGroup;

let targetRotation = 0;
let targetRotationOnPointerDown = 0;

let pointerX = 0;
let pointerXOnPointerDown = 0;

let windowHalfX = window.innerWidth / 2;

init();
animate();

function init() {
  container = document.createElement("div");
  //add a class to the container
  container.classList.add("container");
  document.body.appendChild(container);

  container.width = window.innerWidth;
  container.height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    1,
    3000
  );

  camera.position.set(0, 400, 450);

  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x27fff2);

  scene.add(new THREE.AmbientLight(0xffffff));

  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(1, 1, 1);
  scene.add(light);

  group = new THREE.Group();
  group.position.y = 50;
  scene.add(group);

  // Overlay intro screen
  // Create a video element
  const video = document.createElement("video");
  video.src = "./screenshots/assets/img/screenshots/videos/loading.mp4";
  video.load();
  video.muted = true;
  video.play();
  video.loop = true;

  // Create a video texture
  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBFormat;

  // Overlay intro screen
  const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
  const overlayMaterial = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uAlpha: { value: 1.0 },
      uTexture: { value: videoTexture },
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform float uAlpha;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    void main() {
      vec4 texture = texture2D(uTexture, vUv);
      gl_FragColor = vec4(texture.rgb, uAlpha);
    }
  `,
  });

  const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);

  scene.add(overlay);

  // Loaders
  const loadingManager = new THREE.LoadingManager(
    // Loaded
    () => {
      gsap.to(overlayMaterial.uniforms.uAlpha, {
        value: 0,
        duration: 3,
        delay: 0.5,
      });
      // console.log("loaded");
    },

    // Progress
    () => {
      // console.log("progress");
    }
  );

  /**
   * Cube Texture Loader
   */
  // ...
  const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager);
  /**
   * Environment map
   */
  // LDR cube texture
  const environmentMap = cubeTextureLoader.load([
    "./screenshots/assets/img/screenshots/environmentMaps/sky/px.png",
    "./screenshots/assets/img/screenshots/environmentMaps/sky/nx.png",
    "./screenshots/assets/img/screenshots/environmentMaps/sky/py.png",
    "./screenshots/assets/img/screenshots/environmentMaps/sky/ny.png",
    "./screenshots/assets/img/screenshots/environmentMaps/sky/pz.png",
    "./screenshots/assets/img/screenshots/environmentMaps/sky/nz.png",
  ]);

  scene.environment = environmentMap;
  scene.background = environmentMap;

  // Text geometry

  const loader = new FontLoader(loadingManager);
  loader.load(
    "./screenshots/assets/img/screenshots/img/fonts/gentilis_regular.typeface.json",
    function (font) {
      var geometry = new TextGeometry("screenshots", {
        font: font,
        size: 80,
        height: 2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 2,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      // Create a material
      var material = new THREE.MeshBasicMaterial({ color: 0xffb6c1 });

      // Create a mesh with the geometry and material
      text = new THREE.Mesh(geometry, material);

      // Add the text to the scene
      scene.add(text);

      //change the scale of the text
      text.scale.set(0.5, 0.5, 0.5);

      //change the position of the text
      text.position.set(-75, 100, 0);
    }
  );

  // Load GLTF model with DRACO compression
  const gltfLoader = new GLTFLoader(loadingManager);
  const dracoLoader = new DRACOLoader(loadingManager);
  dracoLoader.setDecoderPath(
    "https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/libs/draco/"
  );
  gltfLoader.setDRACOLoader(dracoLoader);
  // Define your models
  const models = [
    {
      path: "./screenshots/assets/img/screenshots/models/monobloc_chair/scene.gltf",
      position: { x: -41, y: 96, z: 1 },
      rotation: { x: 0, y: 495, z: 0 },
      scale: 100.5,
    },
    {
      path: "./screenshots/assets/img/screenshots/models/marlboro_cigarettes/scene.gltf",
      position: { x: 45, y: 133, z: 100 },
      rotation: { x: 0, y: 10, z: 0 },
      scale: 0.6,
    },
    {
      path: "./screenshots/assets/img/screenshots/models/snake-plant/scene.gltf",
      position: { x: 67, y: 100, z: 133 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 55,
    },
    {
      path: "./screenshots/assets/img/screenshots/models/trash_bag/scene.gltf",
      position: { x: -127, y: 100, z: 45 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 14,
    },
  ];

  // Create a new dat.GUI instance
  // const gui = new dat.GUI();

  // Load the models
  models.forEach((model, index) => {
    gltfLoader.load(
      model.path,
      function (gltf) {
        gltf.scene.scale.set(model.scale, model.scale, model.scale);
        gltf.scene.position.set(
          model.position.x,
          model.position.y,
          model.position.z
        );
        gltf.scene.rotation.set(
          model.rotation.x,
          model.rotation.y,
          model.rotation.z
        );
        scene.add(gltf.scene);

        // Add the model to the GUI
        // const folder = gui.addFolder(`Model ${index + 1}`);
        // folder.add(gltf.scene.position, "x", -500, 500);
        // folder.add(gltf.scene.position, "y", -500, 500);
        // folder.add(gltf.scene.position, "z", -500, 500);
        // folder.open();
      },
      undefined,
      function (error) {
        console.error("Error loading model:", error);
      }
    );
  });

  // Particles snow

  // Define sphere geometry and material outside the loop for efficiency
  const sphereGeometry = new THREE.SphereGeometry(66, 32, 32); // Radius, widthSegments, heightSegments

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "./screenshots/assets/img/screenshots/img/blue.png"
  );

  // Create the material with the texture
  const sphereMaterial = new THREE.MeshBasicMaterial({
    map: texture,
  });

  // Create a group for all particles
  particleGroup = new THREE.Group();

  // Create and position particles
  const particles = 30; // Number of particles
  for (let i = 0; i < particles; i++) {
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.position.set(
      Math.random() * 2000 - 1000, // x
      Math.random() * 2000 - 1000, // y
      Math.random() * 2000 - 1000 // z
    );
    particleGroup.add(sphereMesh); // Add each sphere to the group
  }

  particleGroup.position.set(0, 0, 0); // Center the group (optional

  // Add the group to the scene
  scene.add(particleGroup);

  // NURBS curve

  const nurbsControlPoints = [];
  const nurbsKnots = [];
  const nurbsDegree = 3;

  for (let i = 0; i <= nurbsDegree; i++) {
    nurbsKnots.push(0);
  }

  for (let i = 0, j = 20; i < j; i++) {
    nurbsControlPoints.push(
      new THREE.Vector4(
        Math.random() * 400 - 200,
        Math.random() * 400,
        Math.random() * 400 - 200,
        1 // weight of control point: higher means stronger attraction
      )
    );

    const knot = (i + 1) / (j - nurbsDegree);
    nurbsKnots.push(THREE.MathUtils.clamp(knot, 0, 1));
  }

  const nurbsCurve = new NURBSCurve(
    nurbsDegree,
    nurbsKnots,
    nurbsControlPoints
  );

  const nurbsGeometry = new THREE.BufferGeometry();
  nurbsGeometry.setFromPoints(nurbsCurve.getPoints(200));

  const nurbsMaterial = new THREE.LineBasicMaterial({ color: 0x52b6f9 });

  const nurbsLine = new THREE.Line(nurbsGeometry, nurbsMaterial);
  nurbsLine.position.set(0, -100, 0);
  group.add(nurbsLine);

  const nurbsControlPointsGeometry = new THREE.BufferGeometry();
  nurbsControlPointsGeometry.setFromPoints(nurbsCurve.controlPoints);

  const nurbsControlPointsMaterial = new THREE.LineBasicMaterial({
    color: 0xffb6c1,
    opacity: 0.25,
    // transparent: true,
  });

  const nurbsControlPointsLine = new THREE.Line(
    nurbsControlPointsGeometry,
    nurbsControlPointsMaterial
  );
  nurbsControlPointsLine.position.copy(nurbsLine.position);
  group.add(nurbsControlPointsLine);

  // NURBS surface
  {
    const nsControlPoints = [
      [
        new THREE.Vector4(-200, -200, 100, 1),
        new THREE.Vector4(-200, -100, -200, 1),
        new THREE.Vector4(-200, 100, 250, 1),
        new THREE.Vector4(-200, 200, -100, 1),
      ],
      [
        new THREE.Vector4(0, -200, 0, 1),
        new THREE.Vector4(0, -100, -100, 5),
        new THREE.Vector4(0, 100, 150, 5),
        new THREE.Vector4(0, 200, 0, 1),
      ],
      [
        new THREE.Vector4(200, -200, -100, 1),
        new THREE.Vector4(200, -100, 200, 1),
        new THREE.Vector4(200, 100, -250, 1),
        new THREE.Vector4(200, 200, 100, 1),
      ],
    ];
    const degree1 = 2;
    const degree2 = 3;
    const knots1 = [0, 0, 0, 1, 1, 1];
    const knots2 = [0, 0, 0, 0, 1, 1, 1, 1];
    const nurbsSurface = new NURBSSurface(
      degree1,
      degree2,
      knots1,
      knots2,
      nsControlPoints
    );

    const map = new THREE.TextureLoader().load(
      "./screenshots/assets/img/screenshots/img/screenshots-1.png"
    );
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 16;
    map.colorSpace = THREE.SRGBColorSpace;

    function getSurfacePoint(u, v, target) {
      return nurbsSurface.getPoint(u, v, target);
    }

    const geometry = new ParametricGeometry(getSurfacePoint, 20, 20);
    const material = new THREE.MeshLambertMaterial({
      map: map,
      side: THREE.DoubleSide,
    });
    const object = new THREE.Mesh(geometry, material);
    object.position.set(-400, 100, 0);
    object.scale.multiplyScalar(1);
    group.add(object);
  }

  // NURBS volume
  {
    const nsControlPoints = [
      [
        [
          new THREE.Vector4(-200, -200, -200, 1),
          new THREE.Vector4(-200, -200, 200, 1),
        ],
        [
          new THREE.Vector4(-200, -100, -200, 1),
          new THREE.Vector4(-200, -100, 200, 1),
        ],
        [
          new THREE.Vector4(-200, 100, -200, 1),
          new THREE.Vector4(-200, 100, 200, 1),
        ],
        [
          new THREE.Vector4(-200, 200, -200, 1),
          new THREE.Vector4(-200, 200, 200, 1),
        ],
      ],
      [
        [
          new THREE.Vector4(0, -200, -200, 1),
          new THREE.Vector4(0, -200, 200, 1),
        ],
        [
          new THREE.Vector4(0, -100, -200, 1),
          new THREE.Vector4(0, -100, 200, 1),
        ],
        [new THREE.Vector4(0, 100, -200, 1), new THREE.Vector4(0, 100, 200, 1)],
        [new THREE.Vector4(0, 200, -200, 1), new THREE.Vector4(0, 200, 200, 1)],
      ],
      [
        [
          new THREE.Vector4(200, -200, -200, 1),
          new THREE.Vector4(200, -200, 200, 1),
        ],
        [
          new THREE.Vector4(200, -100, 0, 1),
          new THREE.Vector4(200, -100, 100, 1),
        ],
        [
          new THREE.Vector4(200, 100, 0, 1),
          new THREE.Vector4(200, 100, 100, 1),
        ],
        [
          new THREE.Vector4(200, 200, 0, 1),
          new THREE.Vector4(200, 200, 100, 1),
        ],
      ],
    ];
    const degree1 = 2;
    const degree2 = 3;
    const degree3 = 1;
    const knots1 = [0, 0, 0, 1, 1, 1];
    const knots2 = [0, 0, 0, 0, 1, 1, 1, 1];
    const knots3 = [0, 0, 1, 1];
    const nurbsVolume = new NURBSVolume(
      degree1,
      degree2,
      degree3,
      knots1,
      knots2,
      knots3,
      nsControlPoints
    );

    const map = new THREE.TextureLoader().load(
      "./screenshots/assets/img/screenshots/img/screenshots-2.jpg"
    );
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 16;
    map.colorSpace = THREE.SRGBColorSpace;

    // Since ParametricGeometry() only support bi-variate parametric geometries
    // we create evaluation functions for different surfaces with one of the three
    // parameter values (u, v, w) kept constant and create multiple THREE.Mesh
    // objects one for each surface
    function getSurfacePointFront(u, v, target) {
      return nurbsVolume.getPoint(u, v, 0, target);
    }

    function getSurfacePointMiddle(u, v, target) {
      return nurbsVolume.getPoint(u, v, 0.5, target);
    }

    function getSurfacePointBack(u, v, target) {
      return nurbsVolume.getPoint(u, v, 1, target);
    }

    function getSurfacePointTop(u, w, target) {
      return nurbsVolume.getPoint(u, 1, w, target);
    }

    function getSurfacePointSide(v, w, target) {
      return nurbsVolume.getPoint(0, v, w, target);
    }

    const geometryFront = new ParametricGeometry(getSurfacePointFront, 20, 20);
    const materialFront = new THREE.MeshLambertMaterial({
      map: map,
      side: THREE.DoubleSide,
    });
    const objectFront = new THREE.Mesh(geometryFront, materialFront);
    objectFront.position.set(310, -10, 144);
    objectFront.scale.multiplyScalar(0.5);
    group.add(objectFront);

    const geometryMiddle = new ParametricGeometry(
      getSurfacePointMiddle,
      20,
      20
    );
    const materialMiddle = new THREE.MeshLambertMaterial({
      map: map,
      side: THREE.DoubleSide,
    });
    const objectMiddle = new THREE.Mesh(geometryMiddle, materialMiddle);
    objectMiddle.position.set(365, 67, 100);
    objectMiddle.scale.multiplyScalar(0.5);
    group.add(objectMiddle);

    const geometryBack = new ParametricGeometry(getSurfacePointBack, 20, 20);
    const materialBack = new THREE.MeshLambertMaterial({
      map: map,
      side: THREE.DoubleSide,
    });
    const objectBack = new THREE.Mesh(geometryBack, materialBack);
    objectBack.position.set(243, 100, 0);
    objectBack.scale.multiplyScalar(0.5);
    group.add(objectBack);

    const geometryTop = new ParametricGeometry(getSurfacePointTop, 20, 20);
    const materialTop = new THREE.MeshLambertMaterial({
      map: map,
      side: THREE.DoubleSide,
    });
    const objectTop = new THREE.Mesh(geometryTop, materialTop);
    objectTop.position.set(400, 100, 0);
    objectTop.scale.multiplyScalar(0.5);
    group.add(objectTop);

    const geometrySide = new ParametricGeometry(getSurfacePointSide, 20, 20);
    const materialSide = new THREE.MeshLambertMaterial({
      map: map,
      side: THREE.DoubleSide,
    });
    const objectSide = new THREE.Mesh(geometrySide, materialSide);
    objectSide.position.set(400, 100, 0);
    objectSide.scale.multiplyScalar(0.5);
    group.add(objectSide);
  }

  //

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  createControls(camera);

  stats = new Stats();
  container.appendChild(stats.dom);

  container.style.touchAction = "none";
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.outline = "none";
  container.addEventListener("pointerdown", onPointerDown);

  //

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  const aspect = window.innerWidth / window.innerHeight;

  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  controls.handleResize();
}

function createControls(camera) {
  controls = new TrackballControls(camera, renderer.domElement);

  controls.panSpeed = 0.8;
  controls.maxDistance = 1200;

  controls.keys = ["KeyA", "KeyS", "KeyD"];
}

//

function onPointerDown(event) {
  if (event.isPrimary === false) return;

  pointerXOnPointerDown = event.clientX - windowHalfX;
  targetRotationOnPointerDown = targetRotation;

  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);
}

function onPointerMove(event) {
  if (event.isPrimary === false) return;

  pointerX = event.clientX - windowHalfX;

  targetRotation =
    targetRotationOnPointerDown + (pointerX - pointerXOnPointerDown) * 0.02;
}

function onPointerUp() {
  if (event.isPrimary === false) return;

  document.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("pointerup", onPointerUp);
}

//

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  // Rotate the text
  if (text) {
    text.rotation.y += 0.01;
  }
  // For more complex animations, iterate over each particle
  // and update properties like position, rotation, or scale
  for (let i = 0; i < particleGroup.children.length; i++) {
    const particle = particleGroup.children[i];

    // Example: Move particles up and reset after they reach a certain height
    particle.position.y += 1;
    if (particle.position.y > 1000) {
      particle.position.y = -1000;
    }

    // Add random rotation
    if (!particle.rotationSpeed) {
      // Assign a random rotation speed if not already assigned
      particle.rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      };
    }
    // Apply the rotation speed
    particle.rotation.x += particle.rotationSpeed.x;
    particle.rotation.y += particle.rotationSpeed.y;
    particle.rotation.z += particle.rotationSpeed.z;
  }

  render();
  stats.update();
}

function render() {
  renderer.render(scene, camera);
}
