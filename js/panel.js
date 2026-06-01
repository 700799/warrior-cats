// Renders the SparkNotes-style analysis into the slide-in drawer (DOM overlay,
// not Babylon GUI) so the long-form prose gets real typography, native
// selection/copy, scrolling, and screen-reader-friendly headings. Subscribes to
// the store: it opens when a book is selected, shows a chooser when a location
// has several books, and closes otherwise.

import { store } from "./store.js";
import { BOOK_BY_ID, BOOKS_BY_LOCATION, BOOKS, SAGA_RANK } from "../data/books/index.js";
import { LOCATIONS } from "../data/locations.js";
import { ARC_BY_KEY } from "../data/arcs.js";
import { RELATIONSHIPS } from "../data/relationships.js";
import { renderRelationshipGraph } from "./graph.js";
import { bookArt } from "./art.js";

const panel = document.getElementById("panel");
const body = document.getElementById("panel-body");
const closeBtn = document.getElementById("panel-close");

let lastFocused = null; // element to restore focus to when the drawer closes

// --- small HTML helpers (escape everything that comes from data) ----------
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

const paras = (text) =>
  String(text)
    .split(/\n{2,}/)
    .map((p) => `<p>${esc(p.trim())}</p>`)
    .join("");

const namedBlocks = (items) =>
  items
    .map(
      (it) =>
        `<div class="named-block"><h3>${esc(it.name)}</h3><p>${esc(it.text)}</p></div>`
    )
    .join("");

function section(id, title, inner) {
  return `<section id="sec-${id}" aria-labelledby="h-${id}">
    <h2 id="h-${id}">${esc(title)}</h2>${inner}</section>`;
}

function renderBook(book) {
  const a = book.analysis;
  const arc = ARC_BY_KEY[book.arcKey];

  const hasGraph = Boolean(RELATIONSHIPS[book.id]);
  const toc = [
    ["plot", "Plot Summary"], ["themes", "Themes"], ["motifs", "Motifs"],
    ["critical", "Critical Analysis"], ["characters", "Character Analysis"],
    ["questions", "Study Questions"], ["intriguing", "Most Intriguing"],
    ["quotes", "Quote Cards"], ["timeline", "Timeline"], ["comparisons", "Comparisons"]
  ];
  if (hasGraph) toc.push(["relationships", "Relationship Map"]);

  // Official Warriors site search for this title — gives every book a working
  // outbound "Read more" link.
  const officialUrl =
    "https://warriorcats.com/pages/search-results-page?q=" +
    encodeURIComponent(book.title);

  const meta = `
    ${bookArt(book)}
    <p class="book-arc">${esc(book.arc)} · Book ${book.arcOrder}</p>
    <h1 id="panel-title">${esc(book.title)}</h1>
    <ul class="book-facts">
      <li><span>Published</span> ${esc(book.publicationYear)}</li>
      <li><span>Point of view</span> ${esc(book.povCharacter)}</li>
      <li><span>Setting</span> ${esc(LOCATIONS[book.locationKey]?.name || "—")}</li>
      <li><span>Saga order</span> #${SAGA_RANK[book.id]} of ${BOOKS.length}</li>
    </ul>
    <p class="book-links">
      <a class="ext-link" href="${esc(officialUrl)}" target="_blank" rel="noopener noreferrer">
        Find this book on warriorcats.com ↗
      </a>
    </p>
    <nav class="toc" aria-label="Sections">
      ${toc.map(([id, label]) => `<a href="#sec-${id}" class="toc-link" data-target="sec-${id}">${esc(label)}</a>`).join("")}
    </nav>`;

  const quotes = a.quoteCards
    .map(
      (q) => `<figure class="quote-card">
        <blockquote>${esc(q.quote)}</blockquote>
        <figcaption><strong>${esc(q.speaker)}</strong>${q.context ? " — " + esc(q.context) : ""}</figcaption>
      </figure>`
    )
    .join("");

  const questions = `<ol class="study-questions">${a.studyQuestions
    .map((q) => `<li>${esc(q)}</li>`)
    .join("")}</ol>`;

  const comparisons = a.comparisons
    .map(
      (c) => `<div class="named-block"><h3>${esc(c.work)} <span class="cmp-author">— ${esc(c.author)}</span></h3><p>${esc(c.text)}</p></div>`
    )
    .join("");

  return (
    `<div class="panel-meta">${meta}</div>` +
    section("plot", "Plot Summary", paras(a.plotSummary)) +
    section("themes", "Themes", namedBlocks(a.themes)) +
    section("motifs", "Motifs", namedBlocks(a.motifs)) +
    section("critical", "Critical Analysis", paras(a.criticalAnalysis)) +
    section("characters", "Character Analysis", namedBlocks(a.characterAnalysis)) +
    section("questions", "Study Questions", questions) +
    section("intriguing", "Most Intriguing", paras(a.mostIntriguing)) +
    section("quotes", "Quote Cards", `<div class="quote-grid">${quotes}</div>`) +
    section("timeline", "Timeline Placement", paras(a.timelinePlacement)) +
    section("comparisons", "Compared to Famous Books", comparisons) +
    (hasGraph
      ? section(
          "relationships",
          "Relationship Map",
          `<p class="rel-caption">Cats grouped by Clan. Edge colour shows the kind of tie; hover a cat to highlight its connections.</p>
           <div id="rel-graph-mount" class="relgraph"></div>`
        )
      : "")
  );
}

// Renders the SVG graph into its mount after the drawer HTML is in the DOM.
function mountGraph(book) {
  const data = RELATIONSHIPS[book.id];
  const mount = document.getElementById("rel-graph-mount");
  if (data && mount) renderRelationshipGraph(mount, data);
}

function renderChooser(bookIds, locationKey) {
  const place = LOCATIONS[locationKey]?.name || "this place";
  const items = bookIds
    .map((id) => BOOK_BY_ID[id])
    .filter(Boolean)
    .map(
      (b) =>
        `<li><button class="chooser-item" data-book-id="${esc(b.id)}">
          <strong>${esc(b.title)}</strong>
          <span>${esc(b.arc)} · Book ${b.arcOrder}</span>
        </button></li>`
    )
    .join("");
  return `<div class="panel-meta"><h1 id="panel-title">${esc(place)}</h1>
    <p class="book-arc">${bookIds.length} books are set here. Choose one to read.</p></div>
    <ul class="chooser-list">${items}</ul>`;
}

function openDrawer(accent) {
  panel.style.setProperty("--accent", accent || "#e07b39");
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  body.scrollTop = 0;
  closeBtn.focus();
}

function closeDrawer() {
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
}

export function initPanel() {
  closeBtn.addEventListener("click", () => store.clear());

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("open")) store.clear();
  });

  // Chooser clicks + in-drawer table-of-contents smooth-scroll (event
  // delegation). The TOC links are intercepted so their "#sec-..." hrefs never
  // reach the URL hash router (which would treat them as book ids).
  body.addEventListener("click", (e) => {
    const btn = e.target.closest(".chooser-item");
    if (btn) {
      store.selectBook(btn.dataset.bookId);
      return;
    }
    const toc = e.target.closest(".toc-link");
    if (toc) {
      e.preventDefault();
      document.getElementById(toc.dataset.target)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });

  store.subscribe((s) => {
    if (s.selectedBookId && BOOK_BY_ID[s.selectedBookId]) {
      const book = BOOK_BY_ID[s.selectedBookId];
      if (!panel.classList.contains("open")) lastFocused = document.activeElement;
      body.innerHTML = renderBook(book);
      mountGraph(book);
      openDrawer(book.accentColor);
    } else if (s.chooserBookIds && s.chooserBookIds.length > 1) {
      if (!panel.classList.contains("open")) lastFocused = document.activeElement;
      body.innerHTML = renderChooser(s.chooserBookIds, s.selectedLocation);
      openDrawer(LOCATIONS[s.selectedLocation]?.color);
    } else {
      closeDrawer();
    }
  });
}
