// Aggregates every arc's book module into the flat structures the app consumes.
//
// To add an arc: author a `data/books/arc-*.js` module that exports an array of
// book objects, import it here, and spread it into BOOKS. Everything else
// (pills, markers, panel) updates automatically.

import { ARCS } from "../arcs.js";
import { LOCATIONS } from "../locations.js";
import { prophecies } from "./arc-prophecies.js";
import { newProphecy } from "./arc-new-prophecy.js";

// As future arcs are authored, import and spread them here.
export const BOOKS = [
  ...prophecies,
  ...newProphecy
];

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
  }
}
