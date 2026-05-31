// Entry point: boots the 3D world, wires the UI modules to the shared store,
// runs the dev-only data validator, and syncs the selected book with the URL
// hash so books are deep-linkable and the browser Back button works.

import { store } from "./store.js";
import { createWorld } from "./scene.js";
import { initPanel } from "./panel.js";
import { initPills } from "./pills.js";
import { BOOK_BY_ID, validateBooks } from "../data/books/index.js";

function bootHashRouting() {
  // hash -> store (guarded so echoing our own hash write is a no-op)
  const applyHash = () => {
    const id = decodeURIComponent(location.hash.replace(/^#/, ""));
    const current = store.get().selectedBookId;
    if (id && BOOK_BY_ID[id]) {
      if (id !== current) store.selectBook(id);
    } else if (!id && current) {
      store.clear();
    }
  };
  window.addEventListener("hashchange", applyHash);

  // store -> hash (only when it actually changes, to avoid loops)
  store.subscribe((s) => {
    const want = s.selectedBookId ? "#" + encodeURIComponent(s.selectedBookId) : "";
    if (location.hash !== want) {
      if (want) location.hash = want;
      else history.replaceState(null, "", location.pathname + location.search);
    }
  });

  applyHash(); // honor a deep link on first load
}

window.addEventListener("DOMContentLoaded", () => {
  validateBooks(); // dev integrity check (logs, never throws)

  const canvas = document.getElementById("renderCanvas");
  if (window.BABYLON && canvas) {
    try {
      createWorld(canvas);
    } catch (err) {
      console.error("Babylon world failed to initialize:", err);
      document.getElementById("webgl-fallback")?.removeAttribute("hidden");
    }
  } else {
    document.getElementById("webgl-fallback")?.removeAttribute("hidden");
  }

  initPills();
  initPanel();
  bootHashRouting();
});
