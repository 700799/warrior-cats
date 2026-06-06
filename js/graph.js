// Renders a per-book relationship graph as a dependency-free SVG into a DOM
// container. VERTICAL layout (mobile-friendly): cats are full-width chips
// stacked top-to-bottom under Clan headers, and relationship links curve down a
// gutter on the right, coloured by type. Hovering/focusing a cat highlights its
// ties. Data comes from data/relationships.js.

const SVGNS = "http://www.w3.org/2000/svg";

// Clan / group colours. Covers every Clan and faction across the saga, plus the
// pre-Clan groups of the Dawn of the Clans prequel.
export const CLAN_STYLE = {
  "ThunderClan": "#e07b39",
  "ShadowClan": "#6f7d5e",
  "RiverClan": "#3f7fd6",
  "WindClan": "#c7a23f",
  "SkyClan": "#6fae5a",
  "StarClan": "#74b6d6",
  "Dark Forest": "#8a4b4b",
  "Tribe": "#8f96a3",
  "BloodClan": "#b0413b",
  "Kittypet": "#b58a5a",
  "Loner / Rogue": "#9a9a9a",
  // Dawn of the Clans (pre-Clan groups, foreshadowing the future Clans)
  "Mountain Cats": "#8f96a3",
  "Moor Group": "#c7a23f",
  "Forest Group": "#6fae5a",
  "Pine Group": "#6f7d5e",
  "River Group": "#3f7fd6",
  "Other": "#888888"
};

// Relationship types -> colour, legend label, dash pattern, directedness.
export const REL_STYLE = {
  family: { color: "#d9a13a", label: "Family / kin", dash: "", directed: false },
  mate:   { color: "#d56a9c", label: "Mates / love", dash: "", directed: false },
  mentor: { color: "#4f8fd0", label: "Mentor → apprentice", dash: "", directed: true },
  ally:   { color: "#5aa86a", label: "Ally / friend", dash: "", directed: false },
  rival:  { color: "#c5544a", label: "Rival / enemy", dash: "6 5", directed: false }
};

const clanColor = (clan) => CLAN_STYLE[clan] || CLAN_STYLE.Other;

function el(name, attrs = {}) {
  const node = document.createElementNS(SVGNS, name);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  return node;
}

export function renderRelationshipGraph(container, data) {
  container.textContent = "";
  if (!data || !data.nodes || data.nodes.length === 0) return;

  // --- group nodes by Clan (preserving first-seen order) ---
  const clanOrder = [];
  const byClan = new Map();
  for (const n of data.nodes) {
    if (!byClan.has(n.clan)) { byClan.set(n.clan, []); clanOrder.push(n.clan); }
    byClan.get(n.clan).push(n);
  }

  // --- vertical geometry ---
  const W = 560;          // viewBox width; scales to the container
  const pad = 14;
  const gutter = 84;      // right-hand lane for the link arcs
  const headerH = 22;
  const chipH = 44;
  const chipGap = 10;
  const groupGap = 12;
  const chipX = pad;
  const chipW = W - pad * 2 - gutter;
  const rightX = chipX + chipW;       // where links anchor

  // Lay out top-to-bottom: a header per Clan, then its cats stacked.
  const pos = new Map();              // id -> {y, clan}
  const headers = [];                 // {clan, y}
  let cursor = pad;
  clanOrder.forEach((clan, ci) => {
    if (ci > 0) cursor += groupGap;
    headers.push({ clan, y: cursor });
    cursor += headerH + 6;
    for (const n of byClan.get(clan)) {
      pos.set(n.id, { y: cursor + chipH / 2, clan: n.clan });
      cursor += chipH + chipGap;
    }
  });
  const contentBottom = cursor + 6;

  // --- svg scaffold ---
  const svg = el("svg", {
    viewBox: `0 0 ${W} ${contentBottom + 56}`,
    class: "relgraph-svg",
    role: "img",
    "aria-label": "Relationship map of the cats in this book, grouped by Clan."
  });

  // arrowhead marker for directed (mentor) links
  const defs = el("defs");
  const marker = el("marker", {
    id: "rg-arrow", viewBox: "0 0 10 10", refX: "9", refY: "5",
    markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse"
  });
  marker.appendChild(el("path", { d: "M0,0 L10,5 L0,10 z", fill: REL_STYLE.mentor.color }));
  defs.appendChild(marker);
  svg.appendChild(defs);

  // --- Clan headers ---
  for (const { clan, y } of headers) {
    const g = el("g");
    g.appendChild(el("rect", {
      x: chipX, y, width: chipW + gutter, height: headerH, rx: 6,
      fill: clanColor(clan), opacity: "0.9"
    }));
    const t = el("text", {
      x: chipX + 10, y: y + headerH / 2, class: "relgraph-header",
      "dominant-baseline": "central"
    });
    t.textContent = clan;
    g.appendChild(t);
    svg.appendChild(g);
  }

  // --- links (drawn behind chips, curving down the right gutter) ---
  const linkLayer = el("g");
  const usedTypes = new Set();
  (data.links || []).forEach((lk, i) => {
    const a = pos.get(lk.a);
    const b = pos.get(lk.b);
    if (!a || !b) return;
    const style = REL_STYLE[lk.type] || REL_STYLE.ally;
    usedTypes.add(lk.type in REL_STYLE ? lk.type : "ally");

    const dist = Math.abs(b.y - a.y);
    const bulge = Math.min(gutter - 8, 16 + dist * 0.12 + (i % 3) * 9);
    const cx = rightX + bulge;
    const my = (a.y + b.y) / 2;
    const path = el("path", {
      d: `M ${rightX} ${a.y} Q ${cx} ${my} ${rightX} ${b.y}`,
      class: "relgraph-link",
      fill: "none",
      stroke: style.color,
      "stroke-width": "2",
      "stroke-dasharray": style.dash,
      "data-a": lk.a,
      "data-b": lk.b
    });
    if (style.directed) path.setAttribute("marker-end", "url(#rg-arrow)");
    const title = el("title");
    const an = data.nodes.find((n) => n.id === lk.a)?.name || lk.a;
    const bn = data.nodes.find((n) => n.id === lk.b)?.name || lk.b;
    title.textContent = `${an} — ${style.label} — ${bn}`;
    path.appendChild(title);
    linkLayer.appendChild(path);
  });
  svg.appendChild(linkLayer);

  // --- node chips (full-width, left-aligned text) ---
  const nodeLayer = el("g");
  data.nodes.forEach((n) => {
    const p = pos.get(n.id);
    const g = el("g", { class: "relgraph-node", "data-id": n.id, tabindex: "0" });
    g.appendChild(el("rect", {
      x: chipX, y: p.y - chipH / 2, width: chipW, height: chipH, rx: 9,
      fill: clanColor(n.clan), "fill-opacity": "0.20",
      stroke: clanColor(n.clan), "stroke-width": "2"
    }));
    // a colour swatch and the connector node on the right edge
    g.appendChild(el("circle", { cx: rightX, cy: p.y, r: 4, fill: clanColor(n.clan) }));
    const name = el("text", { x: chipX + 12, y: p.y - 4, class: "relgraph-name" });
    name.textContent = n.name;
    g.appendChild(name);
    if (n.role) {
      const role = el("text", { x: chipX + 12, y: p.y + 12, class: "relgraph-role" });
      role.textContent = n.role;
      g.appendChild(role);
    }
    const title = el("title");
    title.textContent = `${n.name} — ${n.role || ""} (${n.clan})`;
    g.appendChild(title);
    nodeLayer.appendChild(g);
  });
  svg.appendChild(nodeLayer);

  // --- relationship-type legend (wraps across up to two lines) ---
  const legend = el("g");
  let lx = pad, ly = contentBottom + 16;
  for (const type of Object.keys(REL_STYLE)) {
    if (!usedTypes.has(type)) continue;
    const s = REL_STYLE[type];
    const itemW = 30 + s.label.length * 6.4 + 18;
    if (lx + itemW > W - pad) { lx = pad; ly += 20; }
    legend.appendChild(el("line", {
      x1: lx, y1: ly, x2: lx + 24, y2: ly,
      stroke: s.color, "stroke-width": "2.5", "stroke-dasharray": s.dash,
      "marker-end": s.directed ? "url(#rg-arrow)" : ""
    }));
    const t = el("text", { x: lx + 30, y: ly, class: "relgraph-legend", "dominant-baseline": "central" });
    t.textContent = s.label;
    legend.appendChild(t);
    lx += itemW;
  }
  svg.appendChild(legend);

  container.appendChild(svg);

  // --- hover / focus highlighting ---
  const adjacency = new Map();
  (data.links || []).forEach((lk) => {
    if (!pos.has(lk.a) || !pos.has(lk.b)) return;
    (adjacency.get(lk.a) || adjacency.set(lk.a, new Set()).get(lk.a)).add(lk.b);
    (adjacency.get(lk.b) || adjacency.set(lk.b, new Set()).get(lk.b)).add(lk.a);
  });

  function focusNode(id) {
    svg.classList.add("relgraph-focus");
    const neighbours = adjacency.get(id) || new Set();
    nodeLayer.querySelectorAll(".relgraph-node").forEach((g) => {
      const gid = g.getAttribute("data-id");
      g.classList.toggle("active", gid === id || neighbours.has(gid));
    });
    linkLayer.querySelectorAll(".relgraph-link").forEach((p) => {
      const active = p.getAttribute("data-a") === id || p.getAttribute("data-b") === id;
      p.classList.toggle("active", active);
    });
  }
  function clearFocus() {
    svg.classList.remove("relgraph-focus");
    svg.querySelectorAll(".active").forEach((n) => n.classList.remove("active"));
  }

  nodeLayer.querySelectorAll(".relgraph-node").forEach((g) => {
    const id = g.getAttribute("data-id");
    g.addEventListener("mouseenter", () => focusNode(id));
    g.addEventListener("mouseleave", clearFocus);
    g.addEventListener("focus", () => focusNode(id));
    g.addEventListener("blur", clearFocus);
  });
}
