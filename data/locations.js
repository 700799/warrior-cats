// Pinnable places in the 3D world.
//
// `pos` is [x, y, z] in scene units (y is up; pins are raised at build time).
// Many books share one location, which is what drives marker "clustering" — a
// single pin per place can represent any number of books. The 3D world renders
// terrain/landmarks for every entry, but only places with at least one book get
// a clickable pin (so the map fills in as more arcs are authored).
//
// Layout convention: the Forest Territories sit to the west (negative x) and
// the Lake Territories to the east (positive x), echoing the cats' Great
// Journey across the saga. The mountains lie to the north, the gorge to the
// south.

export const LOCATIONS = {
  // --- Forest Territories (arcs set before the Great Journey) ---
  "forest-thunderclan": { name: "ThunderClan Camp (Forest)", region: "forest", pos: [-22, 0, 6],  color: "#e07b39" },
  "forest-riverclan":   { name: "RiverClan & Sunningrocks",  region: "forest", pos: [-11, 0, 12], color: "#3f7fd6" },
  "forest-shadowclan":  { name: "ShadowClan (Pine Forest)",  region: "forest", pos: [-14, 0, -11], color: "#5a6b54" },
  "forest-windclan":    { name: "WindClan Moor",             region: "forest", pos: [-27, 0, -8], color: "#c7a23f" },
  "fourtrees":          { name: "Fourtrees",                 region: "forest", pos: [-18, 0, 0],  color: "#6fae5a" },
  "highstones":         { name: "Highstones & the Moonstone",region: "forest", pos: [-31, 0, 5],  color: "#9aa6b2" },
  "twolegplace":        { name: "Twolegplace (BloodClan)",   region: "forest", pos: [-34, 0, -3], color: "#b03b3b" },

  // --- Lake Territories (arcs set after the Great Journey) ---
  "lake-thunderclan":   { name: "ThunderClan Camp (Lake)",   region: "lake",   pos: [18, 0, 8],   color: "#e07b39" },
  "lake-riverclan":     { name: "RiverClan (Lake)",          region: "lake",   pos: [27, 0, 11],  color: "#3f7fd6" },
  "lake-shadowclan":    { name: "ShadowClan (Lake)",         region: "lake",   pos: [23, 0, -9],  color: "#5a6b54" },
  "lake-windclan":      { name: "WindClan (Lake)",           region: "lake",   pos: [13, 0, -12], color: "#c7a23f" },
  "lake-skyclan":       { name: "SkyClan (Lake)",            region: "lake",   pos: [15, 0, 17],  color: "#6fae5a" },
  "lake-island":        { name: "The Island (Gatherings)",   region: "lake",   pos: [20, 0, 2],   color: "#6fae5a" },
  "moonpool":           { name: "The Moonpool",              region: "lake",   pos: [31, 0, 9],   color: "#9fd8ff" },

  // --- Outlying places (Super Editions, special settings) ---
  "mountains":          { name: "The Mountains (Tribe)",     region: "outland", pos: [-2, 0, 30], color: "#8f96a3" },
  "gorge":              { name: "The Gorge (SkyClan)",       region: "outland", pos: [-3, 0, -24], color: "#b08a5a" },
  "dark-forest":        { name: "The Dark Forest (Place of No Stars)", region: "outland", pos: [11, 0, -27], color: "#7a3b3b" },
  "ancient-lake":       { name: "The Ancient Forest",        region: "outland", pos: [6, 0, 26],  color: "#7a9e6f" }
};
