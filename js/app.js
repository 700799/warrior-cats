// Entry point: boots the 3D world, wires the UI modules to the shared store,
// runs the dev-only data validator, and syncs the selected book with the URL
// hash so books are deep-linkable and the browser Back button works.

import { store } from "./store.js";
import { createWorld } from "./scene.js";
import { initPanel } from "./panel.js";
import { initPills } from "./pills.js";
import { coverArt } from "./art.js";
import { initBookMap } from "./bookmap.js";
import { BOOK_BY_ID, validateBooks } from "../data/books/index.js";

// Illustrated cover splash on the landing view; hides once a book is open.
function initCover() {
  const el = document.createElement("div");
  el.id = "cover-splash";
  el.innerHTML = coverArt() +
    `<p class="cover-caption">A literary atlas of the Clans — pick a book above or click a pin on the map.</p>`;
  document.body.appendChild(el);
  store.subscribe((s) => {
    el.classList.toggle("hidden", Boolean(s.selectedBookId) || (s.chooserBookIds && s.chooserBookIds.length > 1));
  });
}

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
  initCover();
  initBookMap();
  buildSeoIndex();
  bootHashRouting();
});

// Build a crawlable, indexable list of every book with its plot summary, so
// search engines and AI tools can discover the catalogue (the canvas/JS UI is
// otherwise opaque to crawlers). Visually hidden; semantically rich.
function buildSeoIndex() {
  const mount = document.getElementById("seo-book-list");
  if (!mount) return;
  const ordered = Object.values(BOOK_BY_ID).sort((a, b) => a.timelineOrder - b.timelineOrder);
  const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  mount.innerHTML = ordered
    .map((b) => {
      const a = b.analysis || {};
      const themes = (a.themes || []).map((t) => t.name).join(", ");
      return `<article>
        <h3>${esc(b.title)} (${esc(b.arc)}, ${esc(b.publicationYear)})</h3>
        <p><strong>Point of view:</strong> ${esc(b.povCharacter)}.
           <strong>Themes:</strong> ${esc(themes)}.</p>
        <p>${esc(a.plotSummary || "")}</p>
      </article>`;
    })
    .join("");
}
