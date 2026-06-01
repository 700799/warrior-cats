// Aggregates every arc's book module into the flat structures the app consumes.
//
// To add an arc: author a `data/books/arc-*.js` module that exports an array of
// book objects, import it here, and spread it into BOOKS. Everything else
// (pills, markers, panel) updates automatically.

import { ARCS } from "../arcs.js";
import { LOCATIONS } from "../locations.js";
import { RELATIONSHIPS } from "../relationships.js";
import { prophecies } from "./arc-prophecies.js";
import { newProphecy } from "./arc-new-prophecy.js";
import { powerOfThree } from "./arc-power-of-three.js";
import { omenOfTheStars } from "./arc-omen-of-the-stars.js";
import { dawnOfTheClans } from "./arc-dawn-of-the-clans.js";
import { visionOfShadows } from "./arc-vision-of-shadows.js";
import { brokenCode } from "./arc-broken-code.js";
import { starlessClan } from "./arc-starless-clan.js";
import { superEditions } from "./super-editions.js";

// As future arcs are authored, import and spread them here. Order here does not
// matter — the UI sorts by timelineOrder (chronological) and arcOrder (within
// an arc). Dawn of the Clans is the chronological prequel (timelineOrder 1–6)
// even though it was published fifth. Super Editions use fractional
// timelineOrder values to slot into their chronological place among the arcs.
export const BOOKS = [
  ...prophecies,
  ...newProphecy,
  ...powerOfThree,
  ...omenOfTheStars,
  ...dawnOfTheClans,
  ...visionOfShadows,
  ...brokenCode,
  ...starlessClan,
  ...superEditions
];

// Saga (chronological) rank: a clean 1..N integer per book, computed by sorting
// every book by its timelineOrder. This lets timelineOrder use fractional values
// for precise chronological insertion (e.g. a Super Edition at 6.4) while the UI
// still shows a tidy "#7 of 53".
export const SAGA_RANK = (() => {
  const ranked = BOOKS.slice().sort((a, b) => a.timelineOrder - b.timelineOrder);
  return Object.fromEntries(ranked.map((b, i) => [b.id, i + 1]));
})();

// Books grouped by arc key, in arc order, with books sorted by arcOrder.
// Arcs with no authored books yet still appear (value is an empty array) so the
// UI can show every arc and render a "coming soon" note.
export const BOOKS_BY_ARC = (() => {
  const grouped = Object.fromEntries(ARCS.map((a) => [a.key, []]));
  for (const book of BOOKS) {
    (grouped[book.arcKey] ||= []).push(book);
  }
  for (const key of Object.keys(grouped)) {
    grouped[key].sort((a, b) => a.arcOrder - b.arcOrder);
  }
  return grouped;
})();

// Book ids grouped by locationKey — drives marker clustering. Only locations
// that appear here get a clickable pin in the 3D world.
export const BOOKS_BY_LOCATION = (() => {
  const grouped = {};
  for (const book of BOOKS) {
    (grouped[book.locationKey] ||= []).push(book.id);
  }
  return grouped;
})();

// Fast id -> book lookup for hash routing and panel rendering.
export const BOOK_BY_ID = Object.fromEntries(BOOKS.map((b) => [b.id, b]));

// -----------------------------------------------------------------------------
// Dev-only integrity check. Logs (does not throw) so a half-finished entry is
// caught early without breaking the page. Required analysis keys mirror the
// SparkNotes sections the panel renders.
// -----------------------------------------------------------------------------
const REQUIRED_ANALYSIS_KEYS = [
  "plotSummary", "themes", "motifs", "criticalAnalysis", "characterAnalysis",
  "studyQuestions", "mostIntriguing", "quoteCards", "timelinePlacement", "comparisons"
];

export function validateBooks() {
  const seenIds = new Set();
  for (const book of BOOKS) {
    const where = `Book "${book.title || book.id || "(unknown)"}"`;
    console.assert(book.id && !seenIds.has(book.id), `${where}: missing or duplicate id`);
    seenIds.add(book.id);
    console.assert(LOCATIONS[book.locationKey], `${where}: invalid locationKey "${book.locationKey}"`);
    console.assert(book.analysis, `${where}: missing analysis block`);
    if (book.analysis) {
      for (const key of REQUIRED_ANALYSIS_KEYS) {
        const v = book.analysis[key];
        const present = Array.isArray(v) ? v.length > 0 : Boolean(v);
        console.assert(present, `${where}: missing or empty analysis.${key}`);
      }
    }

    // Relationship graph: every book should have one, and every link must
    // reference real nodes.
    const rel = RELATIONSHIPS[book.id];
    console.assert(rel, `${where}: missing relationship graph`);
    if (rel) {
      const ids = new Set(rel.nodes.map((n) => n.id));
      for (const lk of rel.links || []) {
        console.assert(ids.has(lk.a) && ids.has(lk.b),
          `${where}: relationship link references unknown node (${lk.a} -> ${lk.b})`);
      }
    }
  }
}
