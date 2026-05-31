// Arc metadata for the Warriors saga.
//
// Each arc is a "sub-series." The first eight arcs are six books each; Super
// Editions and Novellas are grouped as pseudo-arcs so the filter pills can
// treat every book uniformly. `order` controls display order in the pill bar;
// `color` themes the arc's group pill. Arcs whose books are not yet authored
// still appear (so the reader can see the full map of the project) and render a
// "coming soon" note when selected.

export const ARCS = [
  { key: "prophecies",  name: "The Prophecies Begin", short: "Prophecies",   order: 1,  color: "#e07b39" },
  { key: "newprophecy", name: "The New Prophecy",     short: "New Prophecy", order: 2,  color: "#2f8fd6" },
  { key: "poweroft3",   name: "Power of Three",       short: "Power of 3",   order: 3,  color: "#8e5cc7" },
  { key: "omenstars",   name: "Omen of the Stars",    short: "Omen",         order: 4,  color: "#3fb6a8" },
  { key: "dawnclans",   name: "Dawn of the Clans",    short: "Dawn",         order: 5,  color: "#c7913f" },
  { key: "visionshadow",name: "A Vision of Shadows",  short: "Vision",       order: 6,  color: "#6d6fb0" },
  { key: "brokencode",  name: "The Broken Code",      short: "Broken Code",  order: 7,  color: "#c75c7a" },
  { key: "starlessclan",name: "A Starless Clan",      short: "Starless",     order: 8,  color: "#5c83c7" },
  { key: "super",       name: "Super Editions",       short: "Super Ed.",    order: 90, color: "#b8902f" },
  { key: "novellas",    name: "Novellas",             short: "Novellas",     order: 91, color: "#7a8a99" }
];

// Quick lookup by key.
export const ARC_BY_KEY = Object.fromEntries(ARCS.map((a) => [a.key, a]));
