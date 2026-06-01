// A clickable "Saga Map": every book is a node, threaded together in saga
// (chronological) order along a snaking path and coloured by arc. Clicking a
// node opens that book. This is a reliable, touch-friendly alternative to the
// 3D map — pure DOM/SVG, so taps always work. Opened from a button in the
// masthead; rendered into a full-screen overlay.

import { store } from "./store.js";
import { BOOKS, SAGA_RANK } from "../data/books/index.js";
import { ARCS } from "../data/arcs.js";

const SVGNS = "http://www.w3.org/2000/svg";
const el = (n, a = {}) => {
  const e = document.createElementNS(SVGNS, n);
  for (const [k, v] of Object.entries(a)) e.setAttribute(k, v);
  return e;
};
const truncate = (s, n) => (s.length > n ? s.slice(0, n - 1) + "…" : s);

function buildSvg() {
  const ordered = BOOKS.slice().sort((a, b) => a.timelineOrder - b.timelineOrder);
  const perRow = 5;
  const W = 760;
  const cellW = W / perRow;
  const rowH = 104;
  const top = 16;
  const rows = Math.ceil(ordered.length / perRow);
  const H = top + rows * rowH + 20;

  const pos = []; // {x,y,book}
  ordered.forEach((book, i) => {
    const r = Math.floor(i / perRow);
    let c = i % perRow;
    if (r % 2 === 1) c = perRow - 1 - c; // snake: alternate row direction
    const x = c * cellW + cellW / 2;
    const y = top + r * rowH + 34;
    pos.push({ x, y, book });
  });

  const svg = el("svg", {
    viewBox: `0 0 ${W} ${H}`,
    class: "bookmap-svg",
    role: "list",
    "aria-label": "Every Warrior Cats book in saga order; select one to read."
  });

  // The reading thread: a path connecting consecutive nodes in saga order.
  if (pos.length > 1) {
    let d = `M ${pos[0].x} ${pos[0].y}`;
    for (let i = 1; i < pos.length; i++) d += ` L ${pos[i].x} ${pos[i].y}`;
    svg.appendChild(el("path", { d, class: "bookmap-thread", fill: "none" }));
  }

  // Nodes.
  for (const { x, y, book } of pos) {
    const g = el("g", {
      class: "bookmap-node", role: "listitem", tabindex: "0",
      "data-book-id": book.id, "aria-label": book.title
    });
    g.appendChild(el("circle", {
      cx: x, cy: y, r: 15,
      fill: book.accentColor, stroke: "#0c1318", "stroke-width": "2"
    }));
    const rank = el("text", { x, y: y + 4, class: "bookmap-rank", "text-anchor": "middle" });
    rank.textContent = SAGA_RANK[book.id];
    g.appendChild(rank);
    const label = el("text", { x, y: y + 30, class: "bookmap-label", "text-anchor": "middle" });
    label.textContent = truncate(book.title, 16);
    g.appendChild(label);
    const title = el("title");
    title.textContent = `${book.title} — ${book.arc} (saga #${SAGA_RANK[book.id]})`;
    g.appendChild(title);

    const open = () => { store.selectBook(book.id); close(); };
    g.addEventListener("click", open);
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });
    svg.appendChild(g);
  }
  return svg;
}

function legend() {
  const wrap = document.createElement("div");
  wrap.className = "bookmap-legend";
  for (const arc of ARCS) {
    const span = document.createElement("span");
    span.innerHTML = `<i style="background:${arc.color}"></i>${arc.short}`;
    wrap.appendChild(span);
  }
  return wrap;
}

let overlay;
function close() { if (overlay) overlay.hidden = true; }

export function initBookMap() {
  // Toggle button in the masthead.
  const masthead = document.querySelector(".masthead");
  const btn = document.createElement("button");
  btn.id = "open-bookmap";
  btn.className = "bookmap-btn";
  btn.type = "button";
  btn.textContent = "🕸 Book Map";
  masthead?.appendChild(btn);

  // Overlay.
  overlay = document.createElement("div");
  overlay.id = "bookmap";
  overlay.className = "bookmap-overlay";
  overlay.hidden = true;
  overlay.innerHTML =
    `<div class="bookmap-card" role="dialog" aria-modal="true" aria-label="Book Map">
       <button class="bookmap-close" aria-label="Close book map">×</button>
       <h2 class="bookmap-title">Saga Map — every book in chronological order</h2>
       <p class="bookmap-sub">Follow the thread from the founding of the Clans to the present. Tap any cat-node to read that book.</p>
       <div class="bookmap-legend-mount"></div>
       <div class="bookmap-scroll"></div>
     </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector(".bookmap-legend-mount").appendChild(legend());
  overlay.querySelector(".bookmap-scroll").appendChild(buildSvg());

  btn.addEventListener("click", () => { overlay.hidden = false; });
  overlay.querySelector(".bookmap-close").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) close();
  });
}
