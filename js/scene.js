// Babylon.js scene: engine, camera, lighting, and the stylized low-poly world.
// Everything is built procedurally — no external 3D model files — so the repo
// stays static-host friendly. Markers/labels are added by markers.js.

import { LOCATIONS } from "../data/locations.js";
import { buildMarkers } from "./markers.js";
import { store } from "./store.js";

const prefersReducedMotion =
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Small deterministic "value noise" so hills look organic but reproducible.
function hill(x, z) {
  return (
    Math.sin(x * 0.13) * Math.cos(z * 0.11) * 1.5 +
    Math.sin(x * 0.31 + z * 0.21) * 0.6
  );
}

function flatMaterial(name, hex, scene, emissiveScale = 0) {
  const m = new BABYLON.StandardMaterial(name, scene);
  const c = BABYLON.Color3.FromHexString(hex);
  m.diffuseColor = c;
  m.specularColor = new BABYLON.Color3(0, 0, 0); // flat, stylized look
  if (emissiveScale) m.emissiveColor = c.scale(emissiveScale);
  return m;
}

function buildGround(scene) {
  const ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { width: 95, height: 80, subdivisions: 60, updatable: true },
    scene
  );
  const pos = ground.getVerticesData(BABYLON.VertexBuffer.PositionKind);
  for (let i = 0; i < pos.length; i += 3) {
    const x = pos[i];
    const z = pos[i + 2];
    // Carve a basin for the eastern lake so the water sits below the hills.
    const lakeDist = Math.hypot(x - 22, z - 2);
    const lakeDip = lakeDist < 16 ? -((16 - lakeDist) * 0.18) : 0;
    pos[i + 1] = hill(x, z) + lakeDip;
  }
  ground.updateVerticesData(BABYLON.VertexBuffer.PositionKind, pos);
  ground.createNormals(true);
  ground.convertToFlatShadedMesh();
  ground.material = flatMaterial("groundMat", "#3c5a3a", scene);
  ground.isPickable = false;
  return ground;
}

function buildLake(scene) {
  const lake = BABYLON.MeshBuilder.CreateDisc("lake", { radius: 13, tessellation: 48 }, scene);
  lake.rotation.x = Math.PI / 2;
  lake.position = new BABYLON.Vector3(22, -0.4, 2);
  const mat = flatMaterial("lakeMat", "#2f6fae", scene, 0.12);
  mat.alpha = 0.78;
  lake.material = mat;
  lake.isPickable = false;
  return lake;
}

function buildMountains(scene) {
  const root = new BABYLON.TransformNode("mountains", scene);
  const mat = flatMaterial("mountMat", "#8f96a3", scene);
  const peaks = [
    [-4, 28, 6.5], [0, 31, 8], [4, 29, 6], [8, 27, 5]
  ];
  for (const [x, z, h] of peaks) {
    const peak = BABYLON.MeshBuilder.CreateCylinder(
      "peak", { diameterTop: 0, diameterBottom: h * 0.9, height: h, tessellation: 5 }, scene
    );
    peak.position = new BABYLON.Vector3(x, h / 2 - 0.5, z);
    peak.material = mat;
    peak.convertToFlatShadedMesh();
    peak.isPickable = false;
    peak.parent = root;
  }
  return root;
}

// A small cluster of low-poly conifers to mark the pine forest (ShadowClan).
function buildPines(scene) {
  const root = new BABYLON.TransformNode("pines", scene);
  const mat = flatMaterial("pineMat", "#2f4a32", scene);
  for (let i = 0; i < 10; i++) {
    const x = -14 + (Math.random() * 8 - 4);
    const z = -11 + (Math.random() * 8 - 4);
    const tree = BABYLON.MeshBuilder.CreateCylinder(
      "pine", { diameterTop: 0, diameterBottom: 1.4, height: 3 + Math.random(), tessellation: 5 }, scene
    );
    tree.position = new BABYLON.Vector3(x, 1.5, z);
    tree.material = mat;
    tree.convertToFlatShadedMesh();
    tree.isPickable = false;
    tree.parent = root;
  }
  return root;
}

let mapEngine = null;
// Resize the Babylon canvas to its container — called when the Map tab is shown
// (the canvas must be visible/sized for resize to take effect).
export function resizeMap() {
  if (mapEngine) requestAnimationFrame(() => mapEngine.resize());
}

export function createWorld(canvas) {
  const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    antialias: true
  });
  mapEngine = engine;
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = BABYLON.Color4.FromHexString("#16222cff");

  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    -Math.PI / 2.2,
    Math.PI / 3.1,
    78,
    new BABYLON.Vector3(-2, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);
  camera.lowerBetaLimit = 0.35;
  camera.upperBetaLimit = Math.PI / 2.3;
  camera.lowerRadiusLimit = 34;
  camera.upperRadiusLimit = 120;
  camera.wheelDeltaPercentage = 0.02;
  // Allow gentle side-to-side panning (drag with right button / two fingers),
  // and keep the orbit shallow so the view stays map-like rather than spinning.
  camera.panningSensibility = 120;
  camera.panningInertia = 0.85;
  // No auto-rotation — a constantly spinning map is disorienting. The view holds
  // still until the user moves it.

  // Slide the map aside when a book drawer opens, so pins stay visible beside the
  // panel instead of being hidden behind it. Animates the camera target on the x
  // axis (left on wide screens; no shift on narrow screens where the drawer is a
  // bottom sheet).
  const baseTargetX = camera.target.x;
  store.subscribe((s) => {
    const drawerOpen = Boolean(s.selectedBookId) || (s.chooserBookIds && s.chooserBookIds.length > 1);
    const wide = window.innerWidth > 640;
    const targetX = drawerOpen && wide ? baseTargetX - 14 : baseTargetX;
    BABYLON.Animation.CreateAndStartAnimation(
      "slideMap", camera, "target.x", 60, 24, camera.target.x, targetX,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
  });

  const hemi = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);
  hemi.intensity = 0.9;
  hemi.groundColor = BABYLON.Color3.FromHexString("#26323a");
  const sun = new BABYLON.DirectionalLight("sun", new BABYLON.Vector3(-0.6, -1, -0.4), scene);
  sun.intensity = 0.55;

  buildGround(scene);
  buildLake(scene);
  buildMountains(scene);
  buildPines(scene);

  // GUI overlay for in-world floating labels.
  const ui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("worldUI", true, scene);

  // Build one clickable pin per location that currently has books.
  buildMarkers(scene, ui, LOCATIONS);

  engine.runRenderLoop(() => scene.render());
  window.addEventListener("resize", () => engine.resize());

  return { engine, scene, camera, ui };
}
