// Hand-coded SVG cat illustrations — no external images, no build step, fully
// themeable. Each book gets a small "scene" header in its drawer showing a cat
// (or cats) in a pose that ties into the story, tinted to the book's Clan/accent
// colour. Also exports a richer cover scene for the landing splash.
//
// The art is deliberately simple and stylised (soft cartoon silhouettes), in the
// spirit of fan-animation linework: rounded bodies, big eyes, expressive tails.

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

// A single cat silhouette in one of several poses. (x,y) is the cat's
// approximate centre; `color` fills the body; `pose` selects the shape.
// Poses: "stand", "leap", "crouch", "sit", "run".
function cat(x, y, scale, color, pose = "stand", flip = false) {
  const dark = shade(color, -34);
  const light = shade(color, 28);
  const t = `translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`;
  let body;
  switch (pose) {
    case "leap":
      body = `
        <path d="M-26,4 Q-30,-10 -16,-12 Q-2,-15 10,-10 Q24,-6 30,-14 Q33,-2 22,4 Q10,8 -4,7 Q-16,7 -26,4 Z" fill="${color}"/>
        <path d="M22,4 Q34,10 40,4" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M-22,6 l-6,12 M-12,8 l-4,12 M6,7 l4,12 M16,5 l8,10" stroke="${dark}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="-22" cy="-14" r="11" fill="${color}"/>
        <path d="M-30,-22 l4,9 8,-6 Z M-14,-22 l-2,9 -8,-5 Z" fill="${color}"/>
        <circle cx="-25" cy="-15" r="1.8" fill="#1a1a1a"/><circle cx="-18" cy="-15" r="1.8" fill="#1a1a1a"/>`;
      break;
    case "crouch":
      body = `
        <path d="M-28,8 Q-30,-2 -18,-3 Q0,-6 18,-3 Q30,-2 28,8 Q14,12 -2,12 Q-16,12 -28,8 Z" fill="${color}"/>
        <path d="M26,6 Q40,4 44,12" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
        <circle cx="-24" cy="-2" r="11" fill="${color}"/>
        <path d="M-32,-10 l4,9 8,-6 Z M-16,-10 l-2,9 -8,-5 Z" fill="${color}"/>
        <circle cx="-27" cy="-3" r="1.9" fill="#1a1a1a"/><circle cx="-20" cy="-3" r="1.9" fill="#1a1a1a"/>`;
      break;
    case "sit":
      body = `
        <path d="M-6,14 Q-18,12 -16,-6 Q-14,-20 0,-20 Q14,-20 14,-2 Q14,12 6,14 Z" fill="${color}"/>
        <path d="M12,12 Q24,14 22,2" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
        <circle cx="0" cy="-22" r="11" fill="${color}"/>
        <path d="M-9,-30 l3,9 7,-6 Z M9,-30 l-3,9 -7,-6 Z" fill="${color}"/>
        <circle cx="-4" cy="-23" r="1.9" fill="#1a1a1a"/><circle cx="4" cy="-23" r="1.9" fill="#1a1a1a"/>`;
      break;
    case "run":
      body = `
        <path d="M-26,2 Q-30,-10 -14,-11 Q4,-13 20,-10 Q30,-8 30,0 Q18,5 0,6 Q-14,6 -26,2 Z" fill="${color}"/>
        <path d="M26,-2 Q40,-8 44,2" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M-20,4 l-8,8 M-8,5 l-4,11 M8,5 l8,9 M18,3 l10,6" stroke="${dark}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="-22" cy="-12" r="11" fill="${color}"/>
        <path d="M-30,-20 l4,9 8,-6 Z M-14,-20 l-2,9 -8,-5 Z" fill="${color}"/>
        <circle cx="-25" cy="-13" r="1.8" fill="#1a1a1a"/><circle cx="-18" cy="-13" r="1.8" fill="#1a1a1a"/>`;
      break;
    default: // stand
      body = `
        <path d="M-26,6 Q-28,-8 -14,-9 Q2,-11 18,-9 Q30,-8 28,6 Q14,10 0,10 Q-14,10 -26,6 Z" fill="${color}"/>
        <path d="M24,2 Q38,-4 40,8" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M-20,8 l0,12 M-8,9 l0,12 M8,9 l0,12 M18,7 l2,12" stroke="${dark}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="-22" cy="-10" r="11" fill="${color}"/>
        <path d="M-30,-18 l4,9 8,-6 Z M-14,-18 l-2,9 -8,-5 Z" fill="${color}"/>
        <circle cx="-25" cy="-11" r="1.9" fill="#1a1a1a"/><circle cx="-18" cy="-11" r="1.9" fill="#1a1a1a"/>
        <path d="M-23,-6 q3,2 6,0" stroke="${dark}" stroke-width="1.4" fill="none"/>`;
  }
  return `<g transform="${t}"><g>${tabby(color, light, pose)}${body}</g></g>`;
}

// A couple of tabby stripes overlaid (drawn under the body via subtle marks).
function tabby() { return ""; }

// Lighten/darken a hex colour by an amount (-100..100).
function shade(hex, amt) {
  const c = hex.replace("#", "");
  const n = parseInt(c.length === 3 ? c.split("").map((x) => x + x).join("") : c, 16);
  let r = (n >> 16) + amt, g = ((n >> 8) & 0xff) + amt, b = (n & 0xff) + amt;
  r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Map a book to a scene "type" so the art ties into the story. Falls back to a
// sensible default per region. Keyed loosely by id fragments / location.
function sceneFor(book) {
  const id = book.id;
  // explicit, story-tied scenes for marquee books
  const map = {
    "tpb-1-into-the-wild": "fence",     // kittypet meets the wild
    "tpb-6-the-darkest-hour": "battle",
    "tnp-3-dawn": "journey",
    "tnp-2-moonrise": "mountain",
    "oots-6-the-last-hope": "battle",
    "tbc-5-the-place-of-no-stars": "starless",
    "dotc-1-the-sun-trail": "journey",
    "dotc-6-path-of-stars": "stars",
    "se-firestars-quest": "journey",
    "se-bluestars-prophecy": "stars"
  };
  if (map[id]) return map[id];
  // region-based defaults
  const loc = book.locationKey || "";
  if (loc.includes("mountains")) return "mountain";
  if (loc === "dark-forest") return "starless";
  if (loc === "moonpool") return "stars";
  if (loc.includes("island")) return "journey";
  if (book.arcKey === "dawnclans") return "journey";
  return "forest";
}

// Build the small illustrated header scene for a book's drawer.
export function bookArt(book) {
  const accent = book.accentColor || "#e07b39";
  const scene = sceneFor(book);
  const W = 560, H = 150;
  let sky, ground, extra = "", cats = "";

  const skyByScene = {
    fence:    ["#9fc6e0", "#bfe0c8"],
    battle:   ["#3a4a32", "#566b46"],
    journey:  ["#274056", "#3f6f57"],
    mountain: ["#5b6675", "#8a93a0"],
    starless: ["#15171f", "#23202b"],
    stars:    ["#14233b", "#21345a"],
    forest:   ["#2f5036", "#496b3f"]
  };
  const [skyTop, grd] = skyByScene[scene] || skyByScene.forest;
  sky = `<rect width="${W}" height="${H}" fill="${skyTop}"/>`;
  ground = `<path d="M0,${H} L0,${H - 46} Q${W / 2},${H - 70} ${W},${H - 46} L${W},${H} Z" fill="${grd}"/>`;

  if (scene === "stars" || scene === "starless") {
    let dots = "";
    for (let i = 0; i < 26; i++) {
      const sx = (i * 97) % W, sy = (i * 53) % (H - 60);
      dots += `<circle cx="${sx}" cy="${sy}" r="${(i % 3) ? 1 : 1.6}" fill="#eef" opacity="${scene === "starless" ? 0.12 : 0.85}"/>`;
    }
    extra += dots;
  }
  if (scene === "forest" || scene === "battle") {
    extra += `<rect x="70" y="${H - 110}" width="16" height="70" fill="#5b3b22"/>
              <rect x="${W - 120}" y="${H - 120}" width="18" height="80" fill="#5b3b22"/>
              <ellipse cx="40" cy="${H - 44}" rx="60" ry="26" fill="${shade(grd, -14)}"/>
              <ellipse cx="${W - 40}" cy="${H - 44}" rx="70" ry="28" fill="${shade(grd, -14)}"/>`;
  }
  if (scene === "mountain") {
    extra += `<path d="M-10,${H - 40} L120,${H - 120} L230,${H - 40} Z" fill="${shade(grd, -10)}"/>
              <path d="M180,${H - 40} L320,${H - 130} L460,${H - 40} Z" fill="${shade(grd, -22)}"/>`;
  }
  if (scene === "fence") {
    extra += `<g fill="#d7d7d7" stroke="#b4b4b4" stroke-width="2">
      ${Array.from({ length: 7 }, (_, i) => `<rect x="${20 + i * 26}" y="${H - 78}" width="18" height="50"/>`).join("")}
      <rect x="14" y="${H - 84}" width="${7 * 26}" height="8"/></g>`;
  }

  // Place cats by scene.
  const c2 = "#7d8a99"; // a neutral second cat
  switch (scene) {
    case "fence":
      cats = cat(90, H - 84, 1.0, "#9aa6b0", "sit") + cat(W - 120, H - 40, 1.15, accent, "stand");
      break;
    case "battle":
      cats = cat(150, H - 40, 1.2, accent, "crouch") + cat(W - 170, H - 44, 1.2, "#8a4b4b", "leap", true);
      break;
    case "journey":
      cats = cat(120, H - 40, 1.0, accent, "run") + cat(220, H - 42, 0.9, c2, "run") + cat(310, H - 40, 0.95, shade(accent, 22), "run");
      break;
    case "mountain":
      cats = cat(W / 2 - 30, H - 44, 1.15, accent, "stand") + cat(W / 2 + 60, H - 42, 0.95, "#8f96a3", "sit");
      break;
    case "starless":
      cats = cat(W / 2, H - 44, 1.25, accent, "stand");
      break;
    case "stars":
      cats = cat(W / 2 - 40, H - 44, 1.1, accent, "sit") + cat(W / 2 + 50, H - 60, 0.9, "#cfe0ff", "leap");
      break;
    default: // forest
      cats = cat(W / 2 - 20, H - 42, 1.2, accent, "stand") + cat(W / 2 + 70, H - 42, 0.9, c2, "crouch");
  }

  return `<figure class="book-art" aria-hidden="true">
    <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img">
      ${sky}${extra}${ground}${cats}
    </svg>
  </figure>`;
}

// Larger cover splash for the landing view (shown until a book is opened).
export function coverArt() {
  const W = 760, H = 260;
  let stars = "";
  for (let i = 0; i < 40; i++) {
    const sx = (i * 131) % W, sy = (i * 71) % 120;
    stars += `<circle cx="${sx}" cy="${sy}" r="${(i % 4) ? 1 : 1.8}" fill="#dfe8ff" opacity="0.8"/>`;
  }
  const trees = `<rect x="60" y="120" width="20" height="120" fill="#4a3120"/>
                 <rect x="${W - 110}" y="100" width="24" height="140" fill="#4a3120"/>
                 <ellipse cx="50" cy="220" rx="90" ry="40" fill="#2f4a30"/>
                 <ellipse cx="${W - 50}" cy="220" rx="100" ry="44" fill="#2f4a30"/>`;
  const cats =
    cat(180, 214, 1.5, "#e07b39", "stand") +          // ThunderClan ginger (Firestar)
    cat(300, 210, 1.2, "#3f7fd6", "crouch") +          // RiverClan
    cat(430, 196, 1.3, "#9aa6b2", "leap") +            // a leaping grey
    cat(560, 214, 1.35, "#c7a23f", "sit");             // WindClan gold
  return `<svg class="cover-art" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustrated warrior cats beneath a starry sky">
    <defs><linearGradient id="coverSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#16233b"/><stop offset="1" stop-color="#33533f"/>
    </linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#coverSky)"/>
    ${stars}
    <path d="M0,${H} L0,170 Q${W / 2},150 ${W},170 L${W},${H} Z" fill="#3a5a3a"/>
    ${trees}
    ${cats}
  </svg>`;
}
