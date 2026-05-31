// Renders a per-book relationship graph as a dependency-free SVG into a DOM
// container. Nodes are cats (coloured by Clan, labelled with their role);
// edges are relationships (coloured by type). Layout groups cats into columns
// by Clan so the affiliations read clearly, and hovering a cat highlights its
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

  // --- group nodes into columns by Clan (preserving first-seen order) ---
  const clanOrder = [];
  const byClan = new Map();
  for (const n of data.nodes) {
    if (!byClan.has(n.clan)) {
      byClan.set(n.clan, []);
      clanOrder.push(n.clan);
    }
    byClan.get(n.clan).push(n);
  }

  // --- geometry ---
  const W = 640;
  const pad = 14;
  const headerH = 24;
  const chipW = Math.min(150, Math.max(96, (W - pad * 2) / clanOrder.length - 14));
  const chipH = 38;
  const chipGap = 16;
  const maxRows = Math.max(...clanOrder.map((c) => byClan.get(c).length));
  const contentTop = pad + headerH + 8;
  const contentH = maxRows * chipH + (maxRows - 1) * chipGap;
  const legendH = 26;
  const H = contentTop + contentH + 22 + legendH + pad;
  const colW = (W - pad * 2) / clanOrder.length;

  // assign positions
  const pos = new Map(); // id -> {x, y, clan}
  clanOrder.forEach((clan, ci) => {
    const cx = pad + colW * ci + colW / 2;
    const rows = byClan.get(clan);
    const blockH = rows.length * chipH + (rows.length - 1) * chipGap;
    const startY = contentTop + (contentH - blockH) / 2;
    rows.forEach((n, ri) => {
      const y = startY + ri * (chipH + chipGap) + chipH / 2;
      pos.set(n.id, { x: cx, y, clan });
    });
  });

  // --- svg scaffold ---
  const svg = el("svg", {
    viewBox: `0 0 ${W} ${H}`,
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

  // --- column headers (double as the Clan legend) ---
  clanOrder.forEach((clan, ci) => {
    const cx = pad + colW * ci + colW / 2;
    const g = el("g");
    g.appendChild(el("rect", {
      x: cx - chipW / 2, y: pad, width: chipW, height: headerH - 4, rx: 6,
      fill: clanColor(clan), opacity: "0.9"
    }));
    const t = el("text", {
      x: cx, y: pad + (headerH - 4) / 2, class: "relgraph-header",
      "text-anchor": "middle", "dominant-baseline": "central"
    });
    t.textContent = clan;
    g.appendChild(t);
    svg.appendChild(g);
  });

  // --- links (drawn first, behind nodes) ---
  const linkLayer = el("g");
  const usedTypes = new Set();
  (data.links || []).forEach((lk, i) => {
    const a = pos.get(lk.a);
    const b = pos.get(lk.b);
    if (!a || !b) return; // skip dangling
    const style = REL_STYLE[lk.type] || REL_STYLE.ally;
    usedTypes.add(lk.type in REL_STYLE ? lk.type : "ally");

    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    const off = Math.min(70, Math.max(20, len * 0.16)) * (i % 2 ? 1 : -1);
    const mx = (a.x + b.x) / 2 + (-dy / len) * off;
    const my = (a.y + b.y) / 2 + (dx / len) * off;

    const path = el("path", {
      d: `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`,
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

  // --- nodes ---
  const nodeLayer = el("g");
  data.nodes.forEach((n) => {
    const p = pos.get(n.id);
    const g = el("g", { class: "relgraph-node", "data-id": n.id, tabindex: "0" });
    g.appendChild(el("rect", {
      x: p.x - chipW / 2, y: p.y - chipH / 2, width: chipW, height: chipH, rx: 8,
      fill: clanColor(n.clan), "fill-opacity": "0.18",
      stroke: clanColor(n.clan), "stroke-width": "2"
    }));
    const name = el("text", {
      x: p.x, y: p.y - 5, class: "relgraph-name", "text-anchor": "middle"
    });
    name.textContent = n.name;
    g.appendChild(name);
    if (n.role) {
      const role = el("text", {
        x: p.x, y: p.y + 9, class: "relgraph-role", "text-anchor": "middle"
      });
      role.textContent = n.role;
      g.appendChild(role);
    }
    const title = el("title");
    title.textContent = `${n.name} — ${n.role || ""} (${n.clan})`;
    g.appendChild(title);
    nodeLayer.appendChild(g);
  });
  svg.appendChild(nodeLayer);

  // --- relationship-type legend ---
  const legendY = H - pad - legendH / 2;
  let lx = pad;
  const legend = el("g");
  for (const type of Object.keys(REL_STYLE)) {
    if (!usedTypes.has(type)) continue;
    const s = REL_STYLE[type];
    legend.appendChild(el("line", {
      x1: lx, y1: legendY, x2: lx + 24, y2: legendY,
      stroke: s.color, "stroke-width": "2.5", "stroke-dasharray": s.dash,
      "marker-end": s.directed ? "url(#rg-arrow)" : ""
    }));
    const t = el("text", {
      x: lx + 30, y: legendY, class: "relgraph-legend", "dominant-baseline": "central"
    });
    t.textContent = s.label;
    legend.appendChild(t);
    lx += 30 + s.label.length * 6.6 + 22;
  }
  svg.appendChild(legend);

  container.appendChild(svg);

  // --- hover / focus highlighting ---
  const adjacency = new Map(); // id -> Set(neighbour ids)
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
