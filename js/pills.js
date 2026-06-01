// Filter pills: a row of arc-group pills plus a book pill cloud and a search
// box. Selecting an arc filters the cloud; clicking a book pill opens it. The
// pill cloud is also the complete keyboard/screen-reader-navigable index of
// every book (the WebGL canvas is invisible to assistive tech).

import { store } from "./store.js";
import { ARCS, ARC_BY_KEY } from "../data/arcs.js";
import { BOOKS, BOOKS_BY_ARC, BOOK_BY_ID } from "../data/books/index.js";
import { CATEGORIES, CATEGORY_BY_KEY } from "../data/categories.js";

const arcBar = document.getElementById("arc-pills");
const cloud = document.getElementById("book-pills");
const cloudHeading = document.getElementById("cloud-heading");
const search = document.getElementById("book-search");

// Category filters use the "cat:" prefix in the store's filterArc field, so the
// existing single-filter state needs no schema change.
const isCat = (key) => typeof key === "string" && key.startsWith("cat:");

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
  // Curated "best of" category pills, visually set apart from the arcs.
  const sep = document.createElement("span");
  sep.className = "pill-sep";
  sep.textContent = "Best of:";
  arcBar.appendChild(sep);
  for (const cat of CATEGORIES) {
    const key = "cat:" + cat.key;
    arcBar.appendChild(arcPill(key, cat.short, cat.color, activeArc === key));
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

function renderCategory(catKey) {
  const cat = CATEGORY_BY_KEY[catKey];
  cloud.innerHTML = "";
  if (cloudHeading && cat) {
    cloudHeading.style.setProperty("--accent", cat.color);
    cloudHeading.innerHTML = `<strong>${cat.name}</strong> — ${cat.blurb}`;
  }
  if (!cat) return;
  const ol = document.createElement("ol");
  ol.className = "rank-list";
  cat.picks.forEach((pick, i) => {
    const book = BOOK_BY_ID[pick.id];
    if (!book) return;
    const li = document.createElement("li");
    li.className = "rank-item";
    li.style.setProperty("--pill", cat.color);
    li.innerHTML =
      `<button class="rank-btn" data-book-id="${book.id}">
        <span class="rank-num">${i + 1}</span>
        <span class="rank-body">
          <span class="rank-title">${book.title}</span>
          <span class="rank-arc">${book.arc}</span>
          <span class="rank-note">${pick.note}</span>
        </span>
      </button>`;
    li.querySelector(".rank-btn").addEventListener("click", () => store.selectBook(book.id));
    ol.appendChild(li);
  });
  cloud.appendChild(ol);
}

function renderCloud(activeArc, query) {
  // Category mode: ranked, annotated editorial list.
  if (isCat(activeArc) && !query) {
    renderCategory(activeArc.slice(4));
    cloud.classList.remove("flash"); void cloud.offsetWidth; cloud.classList.add("flash");
    return;
  }

  cloud.innerHTML = "";
  // If searching while a category is active, fall back to searching all books.
  const effectiveArc = isCat(activeArc) ? "all" : activeArc;
  const list = visibleBooks(effectiveArc, query);

  // Obvious "now showing" heading so it's clear a new set appeared on filter.
  if (cloudHeading) {
    const arcName = effectiveArc === "all" ? "All books" : (ARC_BY_KEY[effectiveArc]?.name || effectiveArc);
    const color = effectiveArc === "all" ? "#cbb994" : (ARC_BY_KEY[effectiveArc]?.color || "#cbb994");
    cloudHeading.style.setProperty("--accent", color);
    cloudHeading.innerHTML = query
      ? `Showing <strong>${list.length}</strong> result${list.length === 1 ? "" : "s"} for “${query}” in <strong>${arcName}</strong>`
      : `Showing <strong>${arcName}</strong> — <strong>${list.length}</strong> book${list.length === 1 ? "" : "s"}. Tap any title to read.`;
  }

  if (list.length === 0) {
    const note = document.createElement("p");
    note.className = "cloud-note";
    note.textContent =
      effectiveArc !== "all"
        ? "Full analyses for this arc are coming in a future update."
        : "No books match your search.";
    cloud.appendChild(note);
  } else {
    for (const book of list) cloud.appendChild(bookPill(book));
  }

  // Flash the cloud so the change is visually obvious.
  cloud.classList.remove("flash");
  void cloud.offsetWidth; // restart the animation
  cloud.classList.add("flash");
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
