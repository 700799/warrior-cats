// Filter pills: a row of arc-group pills plus a book pill cloud and a search
// box. Selecting an arc filters the cloud; clicking a book pill opens it. The
// pill cloud is also the complete keyboard/screen-reader-navigable index of
// every book (the WebGL canvas is invisible to assistive tech).

import { store } from "./store.js";
import { ARCS } from "../data/arcs.js";
import { BOOKS, BOOKS_BY_ARC } from "../data/books/index.js";

const arcBar = document.getElementById("arc-pills");
const cloud = document.getElementById("book-pills");
const search = document.getElementById("book-search");

function arcPill(key, label, color, active) {
  const b = document.createElement("button");
  b.className = "arc-pill" + (active ? " active" : "");
  b.textContent = label;
  b.dataset.arc = key;
  b.style.setProperty("--pill", color);
  b.setAttribute("aria-pressed", String(active));
  b.addEventListener("click", () => store.setFilter(key));
  return b;
}

function bookPill(book) {
  const b = document.createElement("button");
  b.className = "book-pill";
  b.dataset.bookId = book.id;
  b.style.setProperty("--pill", book.accentColor);
  b.innerHTML = `<span class="num">${book.arcOrder}</span>${book.title}`;
  b.addEventListener("click", () => store.selectBook(book.id));
  return b;
}

function renderArcBar(activeArc) {
  arcBar.innerHTML = "";
  arcBar.appendChild(arcPill("all", "All Books", "#cbb994", activeArc === "all"));
  for (const arc of ARCS) {
    const count = BOOKS_BY_ARC[arc.key]?.length || 0;
    const label = count ? `${arc.short} (${count})` : `${arc.short} · soon`;
    arcBar.appendChild(arcPill(arc.key, label, arc.color, activeArc === arc.key));
  }
}

function visibleBooks(activeArc, query) {
  let list = activeArc === "all" ? BOOKS.slice() : BOOKS_BY_ARC[activeArc] || [];
  list = list.slice().sort((a, b) => a.timelineOrder - b.timelineOrder);
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(
      (b) => b.title.toLowerCase().includes(q) || b.arc.toLowerCase().includes(q)
    );
  }
  return list;
}

function renderCloud(activeArc, query) {
  cloud.innerHTML = "";
  const list = visibleBooks(activeArc, query);

  if (list.length === 0) {
    const note = document.createElement("p");
    note.className = "cloud-note";
    note.textContent =
      activeArc !== "all"
        ? "Full analyses for this arc are coming in a future update."
        : "No books match your search.";
    cloud.appendChild(note);
    return;
  }
  for (const book of list) cloud.appendChild(bookPill(book));
}

export function initPills() {
  search.addEventListener("input", () => {
    const s = store.get();
    renderCloud(s.filterArc, search.value.trim());
  });

  store.subscribe((s) => {
    renderArcBar(s.filterArc);
    renderCloud(s.filterArc, search.value.trim());
    // Mark the active book pill.
    for (const pill of cloud.querySelectorAll(".book-pill")) {
      pill.classList.toggle("active", pill.dataset.bookId === s.selectedBookId);
    }
  });

  // Initial paint.
  renderArcBar("all");
  renderCloud("all", "");
}
