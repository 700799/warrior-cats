// Builds clickable location pins and floating labels, and wires picking into
// the store. One pin per location keeps the mesh count tiny no matter how many
// books share a place ("clustering"). Only locations that currently have at
// least one book get a pin, so the map fills in as more arcs are authored.

import { store } from "./store.js";
import { BOOKS_BY_LOCATION } from "../data/books/index.js";

export function buildMarkers(scene, ui, LOCATIONS) {
  const pins = new Map(); // locationKey -> pin mesh (for highlight on selection)

  for (const [key, loc] of Object.entries(LOCATIONS)) {
    const bookIds = BOOKS_BY_LOCATION[key] || [];
    if (bookIds.length === 0) continue; // no books here yet — no pin

    // Inverted cone "map pin".
    const pin = BABYLON.MeshBuilder.CreateCylinder(
      "pin-" + key,
      { diameterTop: 0, diameterBottom: 1.7, height: 3.4, tessellation: 6 },
      scene
    );
    pin.position = new BABYLON.Vector3(loc.pos[0], 3.0, loc.pos[2]);
    pin.rotation.x = Math.PI; // point downward onto the map
    pin.convertToFlatShadedMesh();

    const base = BABYLON.Color3.FromHexString(loc.color);
    const mat = new BABYLON.StandardMaterial("pinMat-" + key, scene);
    mat.diffuseColor = base;
    mat.specularColor = new BABYLON.Color3(0, 0, 0);
    mat.emissiveColor = base.scale(0.25);
    pin.material = mat;
    pin.metadata = { locationKey: key, bookIds, baseEmissive: 0.25 };
    pins.set(key, pin);

    // A gentle bob so live pins read as interactive.
    let t = Math.random() * Math.PI * 2;
    scene.onBeforeRenderObservable.add(() => {
      t += 0.03;
      pin.position.y = 3.0 + Math.sin(t) * 0.18;
    });

    // Floating label that tracks the pin as the camera moves. The label is also
    // a large, reliable tap/click target (the pin cones are small, especially on
    // mobile), so clicking it opens the location's book(s).
    const rect = new BABYLON.GUI.Rectangle("label-" + key);
    rect.adaptWidthToChildren = true;
    rect.height = "30px";
    rect.cornerRadius = 8;
    rect.thickness = 2;
    rect.color = loc.color;
    rect.background = "rgba(8, 14, 18, 0.82)";
    rect.isPointerBlocker = true;
    rect.hoverCursor = "pointer";
    rect.onPointerUpObservable.add(() => store.selectLocation(key, bookIds));
    ui.addControl(rect);

    const text = new BABYLON.GUI.TextBlock();
    text.text = `${loc.name}  ·  ${bookIds.length}`;
    text.color = "#f3efe6";
    text.fontSize = 13;
    text.fontFamily = "Georgia, 'Times New Roman', serif";
    text.paddingLeft = "10px";
    text.paddingRight = "10px";
    rect.addControl(text);

    rect.linkWithMesh(pin);
    rect.linkOffsetY = -46;
  }

  // Single picking observable for every pin (scales better than per-mesh handlers).
  scene.onPointerObservable.add((pi) => {
    if (pi.type !== BABYLON.PointerEventTypes.POINTERPICK) return;
    const md = pi.pickInfo?.pickedMesh?.metadata;
    if (md?.locationKey) store.selectLocation(md.locationKey, md.bookIds);
  });

  // Hover affordance: pointer cursor + brighter pin.
  let hovered = null;
  scene.onPointerMove = () => {
    const hit = scene.pick(scene.pointerX, scene.pointerY, (m) => m?.metadata?.locationKey);
    const key = hit?.pickedMesh?.metadata?.locationKey || null;
    const canvas = scene.getEngine().getRenderingCanvas();
    canvas.style.cursor = key ? "pointer" : "default";
    if (key !== hovered) {
      if (hovered && pins.has(hovered)) setEmissive(pins.get(hovered), false);
      if (key && pins.has(key)) setEmissive(pins.get(key), true);
      hovered = key;
    }
  };

  // Highlight the pin matching the currently selected location.
  store.subscribe((s) => {
    for (const [key, pin] of pins) {
      const active = key === s.selectedLocation;
      pin.scaling.setAll(active ? 1.25 : 1);
    }
  });

  function setEmissive(pin, on) {
    const base = pin.material.diffuseColor;
    pin.material.emissiveColor = base.scale(on ? 0.6 : pin.metadata.baseEmissive);
  }
}
