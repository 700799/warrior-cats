// "Pages": Timeline, Clans, and Characters — each a clean, vertical, high-
// contrast document shown in a full-screen overlay, navigated from the top bar.
// Plus the deep character profiles with 1–5 ratings, arcs, comparisons, and
// clickable most/least-similar cross-links.

import { store } from "./store.js";
import { BOOKS, SAGA_RANK } from "./../data/books/index.js";
import { CLANS } from "../data/clans.js";
import { CHARACTERS, CHARACTER_BY_ID } from "../data/characters.js";
import { openBookMap } from "./bookmap.js";

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

let overlay, content, titleEl;

function open(title, html) {
  titleEl.textContent = title;
  content.innerHTML = html;
  content.scrollTop = 0;
  overlay.hidden = false;
}
function close() { overlay.hidden = true; }

// ---------- Timeline ----------
function eraOf(rank, t) {
  if (t < 7) return "I · The Founding of the Clans";
  if (t < 13) return "II · The Forest Era — The Prophecies Begin";
  if (t < 19) return "III · The Great Journey — The New Prophecy";
  if (t < 25) return "IV · Power of Three";
  if (t < 31) return "V · The Dark Forest War — Omen of the Stars";
  if (t < 37) return "VI · A Vision of Shadows";
  if (t < 43) return "VII · The Broken Code";
  return "VIII · A Starless Clan (present day)";
}
function timelineHtml() {
  const ordered = BOOKS.slice().sort((a, b) => a.timelineOrder - b.timelineOrder);
  let html = `<p class="page-lead">Every book in the order the story happens — from the founding of the Clans to the present day. Tap any entry to read its full analysis.</p>`;
  let era = null;
  for (const b of ordered) {
    const e = eraOf(SAGA_RANK[b.id], b.timelineOrder);
    if (e !== era) { era = e; html += `<h3 class="tl-era">${esc(era)}</h3>`; }
    html += `<button class="tl-item" data-book-id="${esc(b.id)}" style="--accent:${b.accentColor}">
      <span class="tl-rank">${SAGA_RANK[b.id]}</span>
      <span class="tl-body"><span class="tl-title">${esc(b.title)}</span>
      <span class="tl-meta">${esc(b.arc)} · ${esc(b.publicationYear)}</span></span>
    </button>`;
  }
  return html;
}

// ---------- Clans ----------
function clansHtml() {
  let html = `<p class="page-lead">The five warrior Clans and the great factions of the saga — their territory, temperament, values, strengths, and flaws.</p>`;
  for (const c of CLANS) {
    html += `<section class="clan-card" style="--accent:${c.color}">
      <h3 class="clan-name">${esc(c.name)}</h3>
      <dl class="clan-grid">
        <dt>Territory</dt><dd>${esc(c.territory)}</dd>
        <dt>Prey</dt><dd>${esc(c.prey)}</dd>
        <dt>Character</dt><dd>${esc(c.character)}</dd>
        <dt>Values</dt><dd>${esc(c.values)}</dd>
        <dt>Strengths</dt><dd>${esc(c.strengths)}</dd>
        <dt>Flaws</dt><dd>${esc(c.flaws)}</dd>
        <dt>Notable leaders</dt><dd>${esc(c.notableLeaders)}</dd>
        <dt>Role in the saga</dt><dd>${esc(c.roleInSaga)}</dd>
      </dl>
      <p class="clan-quote">“${esc(c.quote)}”</p>
    </section>`;
  }
  return html;
}

// ---------- Characters ----------
function charactersHtml() {
  // group by clan (first-seen order)
  const order = [];
  const byClan = new Map();
  for (const ch of CHARACTERS) {
    if (!byClan.has(ch.clan)) { byClan.set(ch.clan, []); order.push(ch.clan); }
    byClan.get(ch.clan).push(ch);
  }
  let html = `<p class="page-lead">In-depth profiles — ratings (with the why), character arc, strengths, weaknesses, fears, study questions, a famous look-alike, and who they're most and least like. Tap a cat to open the full profile. <em>More characters are added in each update.</em></p>`;
  for (const clan of order) {
    html += `<h3 class="char-clan">${esc(clan)}</h3><div class="char-row">`;
    for (const ch of byClan.get(clan)) {
      html += `<button class="char-chip" data-char-id="${esc(ch.id)}">
        <span class="char-name">${esc(ch.name)}</span>
        <span class="char-role">${esc(ch.role)}</span>
      </button>`;
    }
    html += `</div>`;
  }
  return html;
}

function dots(v) {
  let s = "";
  for (let i = 1; i <= 5; i++) s += `<span class="dot${i <= v ? " on" : ""}"></span>`;
  return s;
}

function characterDetailHtml(ch) {
  const ratings = ch.ratings.map((r) =>
    `<div class="rate">
      <div class="rate-top"><span class="rate-label">${esc(r.label)}</span>
        <span class="rate-dots">${dots(r.value)}</span><span class="rate-num">${r.value}/5</span></div>
      <p class="rate-why">${esc(r.why)}</p>
    </div>`).join("");

  const simLink = (s) => {
    const t = CHARACTER_BY_ID[s.id];
    return `<button class="sim-chip" data-char-id="${esc(s.id)}">
      <strong>${esc(t ? t.name : s.id)}</strong><span>${esc(s.why)}</span></button>`;
  };

  const quotes = (ch.quotes || []).map((q) =>
    `<figure class="char-quote"><blockquote>“${esc(q.quote)}”</blockquote>
     <figcaption>${esc(q.context)}</figcaption></figure>`).join("");

  const questions = ch.studyQuestions.map((q) => `<li>${esc(q)}</li>`).join("");

  return `<button class="page-back" data-back="characters">← All characters</button>
    <div class="char-detail">
      <p class="char-d-clan">${esc(ch.clan)} · ${esc(ch.role)} · ${esc(ch.era)}</p>
      <h2 class="char-d-name">${esc(ch.name)}</h2>
      <p class="char-d-tag">${esc(ch.tagline)}</p>

      <h3>Ratings</h3>
      <div class="rate-grid">${ratings}</div>

      <h3>Character arc</h3><p>${esc(ch.arc)}</p>
      <h3>Strengths</h3><p>${esc(ch.strengths)}</p>
      <h3>Weaknesses</h3><p>${esc(ch.weaknesses)}</p>
      <h3>Fears</h3><p>${esc(ch.fears)}</p>

      <h3>Most like…</h3>
      <p class="famous"><strong>A famous look-alike:</strong> ${esc(ch.famous.name)} — ${esc(ch.famous.why)}</p>
      <div class="sim-grid">${ch.mostSimilar.map(simLink).join("")}</div>

      <h3>Least like…</h3>
      <div class="sim-grid">${ch.leastSimilar.map(simLink).join("")}</div>

      <h3>Study questions</h3><ol class="char-q">${questions}</ol>

      ${quotes ? `<h3>Best quotes</h3>${quotes}` : ""}
    </div>`;
}

function openCharacter(id) {
  const ch = CHARACTER_BY_ID[id];
  if (ch) open("Character: " + ch.name, characterDetailHtml(ch));
}

export function initPages() {
  // Nav buttons in the top bar.
  const nav = document.getElementById("page-nav");
  const buttons = [
    ["🗺 3D Map", () => document.querySelector(".map-section")?.scrollIntoView({ behavior: "smooth" })],
    ["🕸 Saga Map", () => openBookMap()],
    ["📜 Timeline", () => open("Timeline of the Saga", timelineHtml())],
    ["🐾 Clans", () => open("The Clans", clansHtml())],
    ["😺 Characters", () => open("Characters", charactersHtml())]
  ];
  for (const [label, fn] of buttons) {
    const b = document.createElement("button");
    b.className = "nav-btn";
    b.type = "button";
    b.textContent = label;
    b.addEventListener("click", fn);
    nav?.appendChild(b);
  }

  // Overlay.
  overlay = document.createElement("div");
  overlay.id = "page-overlay";
  overlay.className = "page-overlay";
  overlay.hidden = true;
  overlay.innerHTML =
    `<div class="page-card" role="dialog" aria-modal="true" aria-labelledby="page-title">
       <button class="page-close" aria-label="Close">×</button>
       <h2 id="page-title" class="page-title"></h2>
       <div id="page-content" class="page-content"></div>
     </div>`;
  document.body.appendChild(overlay);
  content = overlay.querySelector("#page-content");
  titleEl = overlay.querySelector("#page-title");

  overlay.querySelector(".page-close").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !overlay.hidden) close(); });

  // Delegated clicks inside pages.
  content.addEventListener("click", (e) => {
    const book = e.target.closest("[data-book-id]");
    if (book) { store.selectBook(book.dataset.bookId); close(); return; }
    const charChip = e.target.closest("[data-char-id]");
    if (charChip) { openCharacter(charChip.dataset.charId); return; }
    const back = e.target.closest("[data-back]");
    if (back) { open("Characters", charactersHtml()); return; }
  });
}
