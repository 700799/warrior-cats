// Per-book relationship graphs, keyed by book id. Rendered at the end of each
// book's drawer by js/graph.js. Kept decoupled from the arc data files so the
// long-form analyses stay untouched.
//
// Shape:
//   "<book-id>": {
//     nodes: [{ id, name, clan, role }],
//     links: [{ a, b, type }]   // type: family | mate | mentor | ally | rival
//   }
// For "mentor", the link is directional: a mentors b. Clan names must match
// keys in CLAN_STYLE (js/graph.js); unknown clans fall back to a neutral grey.

export const RELATIONSHIPS = {
  // ===================== THE PROPHECIES BEGIN =====================
  "tpb-1-into-the-wild": {
    nodes: [
      { id: "firepaw", name: "Firepaw", clan: "ThunderClan", role: "Apprentice (ex-kittypet)" },
      { id: "bluestar", name: "Bluestar", clan: "ThunderClan", role: "Leader" },
      { id: "graypaw", name: "Graypaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "ravenpaw", name: "Ravenpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "tigerclaw", name: "Tigerclaw", clan: "ThunderClan", role: "Warrior" },
      { id: "redtail", name: "Redtail", clan: "ThunderClan", role: "Deputy (slain)" },
      { id: "spottedleaf", name: "Spottedleaf", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "yellowfang", name: "Yellowfang", clan: "ShadowClan", role: "Medicine Cat (exiled)" },
      { id: "brokenstar", name: "Brokenstar", clan: "ShadowClan", role: "Leader (tyrant)" }
    ],
    links: [
      { a: "bluestar", b: "firepaw", type: "mentor" },
      { a: "firepaw", b: "graypaw", type: "ally" },
      { a: "firepaw", b: "ravenpaw", type: "ally" },
      { a: "tigerclaw", b: "ravenpaw", type: "mentor" },
      { a: "tigerclaw", b: "firepaw", type: "rival" },
      { a: "tigerclaw", b: "redtail", type: "rival" },
      { a: "firepaw", b: "spottedleaf", type: "ally" },
      { a: "firepaw", b: "yellowfang", type: "ally" },
      { a: "brokenstar", b: "yellowfang", type: "rival" }
    ]
  },
  "tpb-2-fire-and-ice": {
    nodes: [
      { id: "fireheart", name: "Fireheart", clan: "ThunderClan", role: "Warrior" },
      { id: "graystripe", name: "Graystripe", clan: "ThunderClan", role: "Warrior" },
      { id: "cinderpaw", name: "Cinderpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "bluestar", name: "Bluestar", clan: "ThunderClan", role: "Leader" },
      { id: "tigerclaw", name: "Tigerclaw", clan: "ThunderClan", role: "Warrior" },
      { id: "silverstream", name: "Silverstream", clan: "RiverClan", role: "Warrior" }
    ],
    links: [
      { a: "fireheart", b: "graystripe", type: "ally" },
      { a: "fireheart", b: "cinderpaw", type: "mentor" },
      { a: "graystripe", b: "silverstream", type: "mate" },
      { a: "bluestar", b: "fireheart", type: "ally" },
      { a: "tigerclaw", b: "fireheart", type: "rival" },
      { a: "tigerclaw", b: "cinderpaw", type: "rival" }
    ]
  },
  "tpb-3-forest-of-secrets": {
    nodes: [
      { id: "fireheart", name: "Fireheart", clan: "ThunderClan", role: "Warrior" },
      { id: "graystripe", name: "Graystripe", clan: "ThunderClan", role: "Warrior" },
      { id: "bluestar", name: "Bluestar", clan: "ThunderClan", role: "Leader" },
      { id: "tigerclaw", name: "Tigerclaw", clan: "ThunderClan", role: "Deputy (exiled)" },
      { id: "cinderpelt", name: "Cinderpelt", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "silverstream", name: "Silverstream", clan: "RiverClan", role: "Warrior (dies)" },
      { id: "ravenpaw", name: "Ravenpaw", clan: "Loner / Rogue", role: "Loner (witness)" }
    ],
    links: [
      { a: "fireheart", b: "graystripe", type: "ally" },
      { a: "graystripe", b: "silverstream", type: "mate" },
      { a: "tigerclaw", b: "fireheart", type: "rival" },
      { a: "tigerclaw", b: "bluestar", type: "rival" },
      { a: "fireheart", b: "ravenpaw", type: "ally" },
      { a: "bluestar", b: "cinderpelt", type: "ally" }
    ]
  },
  "tpb-4-rising-storm": {
    nodes: [
      { id: "fireheart", name: "Fireheart", clan: "ThunderClan", role: "Deputy" },
      { id: "bluestar", name: "Bluestar", clan: "ThunderClan", role: "Leader (declining)" },
      { id: "cinderpelt", name: "Cinderpelt", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "cloudpaw", name: "Cloudpaw", clan: "ThunderClan", role: "Apprentice (kin)" },
      { id: "graystripe", name: "Graystripe", clan: "ThunderClan", role: "Warrior" },
      { id: "tigerstar", name: "Tigerstar", clan: "ShadowClan", role: "Leader" }
    ],
    links: [
      { a: "bluestar", b: "fireheart", type: "ally" },
      { a: "fireheart", b: "cloudpaw", type: "mentor" },
      { a: "fireheart", b: "cloudpaw", type: "family" },
      { a: "fireheart", b: "cinderpelt", type: "ally" },
      { a: "fireheart", b: "graystripe", type: "ally" },
      { a: "tigerstar", b: "fireheart", type: "rival" }
    ]
  },
  "tpb-5-a-dangerous-path": {
    nodes: [
      { id: "fireheart", name: "Fireheart", clan: "ThunderClan", role: "Deputy" },
      { id: "bluestar", name: "Bluestar", clan: "ThunderClan", role: "Leader (dies)" },
      { id: "sandstorm", name: "Sandstorm", clan: "ThunderClan", role: "Warrior" },
      { id: "graystripe", name: "Graystripe", clan: "ThunderClan", role: "Warrior" },
      { id: "cinderpelt", name: "Cinderpelt", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "tigerstar", name: "Tigerstar", clan: "ShadowClan", role: "Leader" }
    ],
    links: [
      { a: "bluestar", b: "fireheart", type: "ally" },
      { a: "fireheart", b: "sandstorm", type: "mate" },
      { a: "fireheart", b: "graystripe", type: "ally" },
      { a: "fireheart", b: "cinderpelt", type: "ally" },
      { a: "tigerstar", b: "fireheart", type: "rival" },
      { a: "tigerstar", b: "bluestar", type: "rival" }
    ]
  },
  "tpb-6-the-darkest-hour": {
    nodes: [
      { id: "firestar", name: "Firestar", clan: "ThunderClan", role: "Leader" },
      { id: "graystripe", name: "Graystripe", clan: "ThunderClan", role: "Deputy" },
      { id: "sandstorm", name: "Sandstorm", clan: "ThunderClan", role: "Warrior" },
      { id: "whitestorm", name: "Whitestorm", clan: "ThunderClan", role: "Deputy (slain)" },
      { id: "tigerstar", name: "Tigerstar", clan: "ShadowClan", role: "Leader of TigerClan" },
      { id: "scourge", name: "Scourge", clan: "BloodClan", role: "Leader" }
    ],
    links: [
      { a: "firestar", b: "graystripe", type: "ally" },
      { a: "firestar", b: "sandstorm", type: "mate" },
      { a: "firestar", b: "whitestorm", type: "ally" },
      { a: "tigerstar", b: "firestar", type: "rival" },
      { a: "scourge", b: "tigerstar", type: "rival" },
      { a: "scourge", b: "firestar", type: "rival" }
    ]
  },

  // ===================== THE NEW PROPHECY =====================
  "tnp-1-midnight": {
    nodes: [
      { id: "brambleclaw", name: "Brambleclaw", clan: "ThunderClan", role: "Warrior" },
      { id: "squirrelpaw", name: "Squirrelpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "leafpaw", name: "Leafpaw", clan: "ThunderClan", role: "Medicine apprentice" },
      { id: "firestar", name: "Firestar", clan: "ThunderClan", role: "Leader" },
      { id: "feathertail", name: "Feathertail", clan: "RiverClan", role: "Warrior" },
      { id: "stormfur", name: "Stormfur", clan: "RiverClan", role: "Warrior" },
      { id: "crowpaw", name: "Crowpaw", clan: "WindClan", role: "Apprentice" },
      { id: "tawnypelt", name: "Tawnypelt", clan: "ShadowClan", role: "Warrior" }
    ],
    links: [
      { a: "firestar", b: "squirrelpaw", type: "family" },
      { a: "firestar", b: "leafpaw", type: "family" },
      { a: "squirrelpaw", b: "leafpaw", type: "family" },
      { a: "brambleclaw", b: "squirrelpaw", type: "ally" },
      { a: "feathertail", b: "stormfur", type: "family" },
      { a: "brambleclaw", b: "feathertail", type: "ally" },
      { a: "brambleclaw", b: "crowpaw", type: "ally" },
      { a: "brambleclaw", b: "tawnypelt", type: "ally" }
    ]
  },
  "tnp-2-moonrise": {
    nodes: [
      { id: "feathertail", name: "Feathertail", clan: "RiverClan", role: "Warrior (dies)" },
      { id: "stormfur", name: "Stormfur", clan: "RiverClan", role: "Warrior" },
      { id: "crowpaw", name: "Crowpaw", clan: "WindClan", role: "Apprentice" },
      { id: "brambleclaw", name: "Brambleclaw", clan: "ThunderClan", role: "Warrior" },
      { id: "squirrelpaw", name: "Squirrelpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "brook", name: "Brook", clan: "Tribe", role: "Prey-hunter" },
      { id: "stoneteller", name: "Stoneteller", clan: "Tribe", role: "Healer-leader" }
    ],
    links: [
      { a: "feathertail", b: "stormfur", type: "family" },
      { a: "feathertail", b: "crowpaw", type: "mate" },
      { a: "stormfur", b: "brook", type: "mate" },
      { a: "brambleclaw", b: "squirrelpaw", type: "ally" },
      { a: "stoneteller", b: "brook", type: "ally" },
      { a: "brambleclaw", b: "feathertail", type: "ally" }
    ]
  },
  "tnp-3-dawn": {
    nodes: [
      { id: "brambleclaw", name: "Brambleclaw", clan: "ThunderClan", role: "Warrior" },
      { id: "squirrelpaw", name: "Squirrelpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "leafpaw", name: "Leafpaw", clan: "ThunderClan", role: "Medicine apprentice" },
      { id: "firestar", name: "Firestar", clan: "ThunderClan", role: "Leader" },
      { id: "graystripe", name: "Graystripe", clan: "ThunderClan", role: "Deputy (captured)" },
      { id: "crowpaw", name: "Crowpaw", clan: "WindClan", role: "Apprentice" },
      { id: "tawnypelt", name: "Tawnypelt", clan: "ShadowClan", role: "Warrior" }
    ],
    links: [
      { a: "firestar", b: "squirrelpaw", type: "family" },
      { a: "firestar", b: "leafpaw", type: "family" },
      { a: "firestar", b: "graystripe", type: "ally" },
      { a: "brambleclaw", b: "squirrelpaw", type: "ally" },
      { a: "brambleclaw", b: "crowpaw", type: "ally" },
      { a: "brambleclaw", b: "tawnypelt", type: "ally" }
    ]
  },
  "tnp-4-starlight": {
    nodes: [
      { id: "brambleclaw", name: "Brambleclaw", clan: "ThunderClan", role: "Warrior" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Warrior" },
      { id: "leafpool", name: "Leafpool", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "firestar", name: "Firestar", clan: "ThunderClan", role: "Leader" },
      { id: "crowfeather", name: "Crowfeather", clan: "WindClan", role: "Warrior" },
      { id: "hawkfrost", name: "Hawkfrost", clan: "RiverClan", role: "Warrior" }
    ],
    links: [
      { a: "brambleclaw", b: "squirrelflight", type: "mate" },
      { a: "leafpool", b: "crowfeather", type: "mate" },
      { a: "firestar", b: "squirrelflight", type: "family" },
      { a: "firestar", b: "leafpool", type: "family" },
      { a: "hawkfrost", b: "brambleclaw", type: "family" },
      { a: "hawkfrost", b: "brambleclaw", type: "rival" }
    ]
  },
  "tnp-5-twilight": {
    nodes: [
      { id: "leafpool", name: "Leafpool", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "cinderpelt", name: "Cinderpelt", clan: "ThunderClan", role: "Medicine Cat (dies)" },
      { id: "sorreltail", name: "Sorreltail", clan: "ThunderClan", role: "Queen" },
      { id: "brambleclaw", name: "Brambleclaw", clan: "ThunderClan", role: "Deputy" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Warrior" },
      { id: "crowfeather", name: "Crowfeather", clan: "WindClan", role: "Warrior" },
      { id: "hawkfrost", name: "Hawkfrost", clan: "RiverClan", role: "Warrior" }
    ],
    links: [
      { a: "cinderpelt", b: "leafpool", type: "mentor" },
      { a: "cinderpelt", b: "sorreltail", type: "ally" },
      { a: "leafpool", b: "crowfeather", type: "mate" },
      { a: "brambleclaw", b: "squirrelflight", type: "mate" },
      { a: "hawkfrost", b: "brambleclaw", type: "family" },
      { a: "hawkfrost", b: "squirrelflight", type: "rival" }
    ]
  },
  "tnp-6-sunset": {
    nodes: [
      { id: "brambleclaw", name: "Brambleclaw", clan: "ThunderClan", role: "Deputy" },
      { id: "firestar", name: "Firestar", clan: "ThunderClan", role: "Leader" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Warrior" },
      { id: "leafpool", name: "Leafpool", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "crowfeather", name: "Crowfeather", clan: "WindClan", role: "Warrior" },
      { id: "hawkfrost", name: "Hawkfrost", clan: "RiverClan", role: "Warrior (slain)" },
      { id: "tigerstar", name: "Tigerstar", clan: "Dark Forest", role: "Spirit (father)" }
    ],
    links: [
      { a: "tigerstar", b: "brambleclaw", type: "family" },
      { a: "tigerstar", b: "hawkfrost", type: "family" },
      { a: "hawkfrost", b: "brambleclaw", type: "rival" },
      { a: "hawkfrost", b: "firestar", type: "rival" },
      { a: "brambleclaw", b: "firestar", type: "ally" },
      { a: "brambleclaw", b: "squirrelflight", type: "mate" },
      { a: "leafpool", b: "crowfeather", type: "mate" }
    ]
  },

  // ===================== POWER OF THREE =====================
  "pot-1-the-sight": {
    nodes: [
      { id: "jaypaw", name: "Jaypaw", clan: "ThunderClan", role: "Medicine apprentice" },
      { id: "lionpaw", name: "Lionpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "hollypaw", name: "Hollypaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Warrior ('mother')" },
      { id: "brambleclaw", name: "Brambleclaw", clan: "ThunderClan", role: "Deputy" },
      { id: "leafpool", name: "Leafpool", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "firestar", name: "Firestar", clan: "ThunderClan", role: "Leader" }
    ],
    links: [
      { a: "jaypaw", b: "lionpaw", type: "family" },
      { a: "lionpaw", b: "hollypaw", type: "family" },
      { a: "jaypaw", b: "hollypaw", type: "family" },
      { a: "squirrelflight", b: "jaypaw", type: "family" },
      { a: "brambleclaw", b: "squirrelflight", type: "mate" },
      { a: "leafpool", b: "jaypaw", type: "mentor" },
      { a: "firestar", b: "squirrelflight", type: "family" }
    ]
  },
  "pot-2-dark-river": {
    nodes: [
      { id: "jaypaw", name: "Jaypaw", clan: "ThunderClan", role: "Medicine apprentice" },
      { id: "lionpaw", name: "Lionpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "hollypaw", name: "Hollypaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "heathertail", name: "Heatherpaw", clan: "WindClan", role: "Apprentice" },
      { id: "tigerstar", name: "Tigerstar", clan: "Dark Forest", role: "Spirit (dark mentor)" }
    ],
    links: [
      { a: "jaypaw", b: "lionpaw", type: "family" },
      { a: "lionpaw", b: "hollypaw", type: "family" },
      { a: "jaypaw", b: "hollypaw", type: "family" },
      { a: "lionpaw", b: "heathertail", type: "ally" },
      { a: "tigerstar", b: "lionpaw", type: "mentor" }
    ]
  },
  "pot-3-outcast": {
    nodes: [
      { id: "jaypaw", name: "Jaypaw", clan: "ThunderClan", role: "Medicine apprentice" },
      { id: "lionpaw", name: "Lionpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "hollypaw", name: "Hollypaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "tawnypelt", name: "Tawnypelt", clan: "ShadowClan", role: "Warrior" },
      { id: "stormfur", name: "Stormfur", clan: "Tribe", role: "To-be (ex-RiverClan)" },
      { id: "brook", name: "Brook", clan: "Tribe", role: "To-be" }
    ],
    links: [
      { a: "jaypaw", b: "lionpaw", type: "family" },
      { a: "lionpaw", b: "hollypaw", type: "family" },
      { a: "jaypaw", b: "hollypaw", type: "family" },
      { a: "stormfur", b: "brook", type: "mate" },
      { a: "lionpaw", b: "tawnypelt", type: "ally" },
      { a: "jaypaw", b: "stormfur", type: "ally" }
    ]
  },
  "pot-4-eclipse": {
    nodes: [
      { id: "jaypaw", name: "Jaypaw", clan: "ThunderClan", role: "Medicine apprentice" },
      { id: "lionpaw", name: "Lionpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "hollypaw", name: "Hollypaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "ashfur", name: "Ashfur", clan: "ThunderClan", role: "Warrior" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Warrior" },
      { id: "sol", name: "Sol", clan: "Loner / Rogue", role: "Manipulator" }
    ],
    links: [
      { a: "jaypaw", b: "lionpaw", type: "family" },
      { a: "lionpaw", b: "hollypaw", type: "family" },
      { a: "jaypaw", b: "hollypaw", type: "family" },
      { a: "ashfur", b: "lionpaw", type: "mentor" },
      { a: "ashfur", b: "squirrelflight", type: "rival" },
      { a: "sol", b: "hollypaw", type: "rival" }
    ]
  },
  "pot-5-long-shadows": {
    nodes: [
      { id: "hollyleaf", name: "Hollyleaf", clan: "ThunderClan", role: "Warrior" },
      { id: "jayfeather", name: "Jayfeather", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "lionblaze", name: "Lionblaze", clan: "ThunderClan", role: "Warrior" },
      { id: "ashfur", name: "Ashfur", clan: "ThunderClan", role: "Warrior (slain)" },
      { id: "leafpool", name: "Leafpool", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "sol", name: "Sol", clan: "Loner / Rogue", role: "Manipulator" },
      { id: "blackstar", name: "Blackstar", clan: "ShadowClan", role: "Leader" }
    ],
    links: [
      { a: "hollyleaf", b: "jayfeather", type: "family" },
      { a: "jayfeather", b: "lionblaze", type: "family" },
      { a: "hollyleaf", b: "lionblaze", type: "family" },
      { a: "hollyleaf", b: "ashfur", type: "rival" },
      { a: "leafpool", b: "hollyleaf", type: "family" },
      { a: "sol", b: "blackstar", type: "rival" }
    ]
  },
  "pot-6-sunrise": {
    nodes: [
      { id: "hollyleaf", name: "Hollyleaf", clan: "ThunderClan", role: "Warrior (flees)" },
      { id: "jayfeather", name: "Jayfeather", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "lionblaze", name: "Lionblaze", clan: "ThunderClan", role: "Warrior" },
      { id: "leafpool", name: "Leafpool", clan: "ThunderClan", role: "Medicine Cat (true mother)" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Warrior (foster)" },
      { id: "crowfeather", name: "Crowfeather", clan: "WindClan", role: "Warrior (father)" }
    ],
    links: [
      { a: "leafpool", b: "crowfeather", type: "mate" },
      { a: "leafpool", b: "hollyleaf", type: "family" },
      { a: "crowfeather", b: "hollyleaf", type: "family" },
      { a: "hollyleaf", b: "jayfeather", type: "family" },
      { a: "hollyleaf", b: "lionblaze", type: "family" },
      { a: "squirrelflight", b: "hollyleaf", type: "family" },
      { a: "hollyleaf", b: "leafpool", type: "rival" }
    ]
  },

  // ===================== OMEN OF THE STARS =====================
  "oots-1-the-fourth-apprentice": {
    nodes: [
      { id: "dovepaw", name: "Dovepaw", clan: "ThunderClan", role: "Apprentice (the Third)" },
      { id: "ivypaw", name: "Ivypaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "jayfeather", name: "Jayfeather", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "lionblaze", name: "Lionblaze", clan: "ThunderClan", role: "Warrior" },
      { id: "brambleclaw", name: "Brambleclaw", clan: "ThunderClan", role: "Deputy" },
      { id: "whitewing", name: "Whitewing", clan: "ThunderClan", role: "Warrior (mother)" }
    ],
    links: [
      { a: "dovepaw", b: "ivypaw", type: "family" },
      { a: "whitewing", b: "dovepaw", type: "family" },
      { a: "whitewing", b: "ivypaw", type: "family" },
      { a: "jayfeather", b: "lionblaze", type: "family" },
      { a: "lionblaze", b: "dovepaw", type: "ally" },
      { a: "dovepaw", b: "ivypaw", type: "rival" }
    ]
  },
  "oots-2-fading-echoes": {
    nodes: [
      { id: "ivypaw", name: "Ivypaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "dovepaw", name: "Dovepaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "firestar", name: "Firestar", clan: "ThunderClan", role: "Leader" },
      { id: "briarlight", name: "Briarpaw", clan: "ThunderClan", role: "Apprentice (crippled)" },
      { id: "tigerstar", name: "Tigerstar", clan: "Dark Forest", role: "Spirit (dark trainer)" },
      { id: "hawkfrost", name: "Hawkfrost", clan: "Dark Forest", role: "Spirit (dark trainer)" },
      { id: "russetfur", name: "Russetfur", clan: "ShadowClan", role: "Deputy (slain)" }
    ],
    links: [
      { a: "dovepaw", b: "ivypaw", type: "family" },
      { a: "tigerstar", b: "ivypaw", type: "mentor" },
      { a: "hawkfrost", b: "ivypaw", type: "mentor" },
      { a: "firestar", b: "russetfur", type: "rival" },
      { a: "tigerstar", b: "hawkfrost", type: "family" }
    ]
  },
  "oots-3-night-whispers": {
    nodes: [
      { id: "ivypool", name: "Ivypool", clan: "ThunderClan", role: "Warrior (spy)" },
      { id: "dovewing", name: "Dovewing", clan: "ThunderClan", role: "Warrior" },
      { id: "jayfeather", name: "Jayfeather", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "flametail", name: "Flametail", clan: "ShadowClan", role: "Medicine Cat (drowns)" },
      { id: "tawnypelt", name: "Tawnypelt", clan: "ShadowClan", role: "Warrior (mother)" },
      { id: "tigerstar", name: "Tigerstar", clan: "Dark Forest", role: "Spirit" }
    ],
    links: [
      { a: "dovewing", b: "ivypool", type: "family" },
      { a: "jayfeather", b: "flametail", type: "ally" },
      { a: "tawnypelt", b: "flametail", type: "family" },
      { a: "tigerstar", b: "ivypool", type: "rival" },
      { a: "ivypool", b: "dovewing", type: "ally" }
    ]
  },
  "oots-4-sign-of-the-moon": {
    nodes: [
      { id: "jayfeather", name: "Jayfeather", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "lionblaze", name: "Lionblaze", clan: "ThunderClan", role: "Warrior" },
      { id: "dovewing", name: "Dovewing", clan: "ThunderClan", role: "Warrior" },
      { id: "halfmoon", name: "Half Moon", clan: "Tribe", role: "Ancient cat (love)" },
      { id: "stoneteller", name: "Stoneteller", clan: "Tribe", role: "Healer-leader" }
    ],
    links: [
      { a: "jayfeather", b: "lionblaze", type: "family" },
      { a: "jayfeather", b: "halfmoon", type: "mate" },
      { a: "stoneteller", b: "halfmoon", type: "ally" },
      { a: "jayfeather", b: "dovewing", type: "ally" }
    ]
  },
  "oots-5-the-forgotten-warrior": {
    nodes: [
      { id: "hollyleaf", name: "Hollyleaf", clan: "ThunderClan", role: "Warrior (returned)" },
      { id: "jayfeather", name: "Jayfeather", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "lionblaze", name: "Lionblaze", clan: "ThunderClan", role: "Warrior" },
      { id: "ivypool", name: "Ivypool", clan: "ThunderClan", role: "Warrior (spy)" },
      { id: "dovewing", name: "Dovewing", clan: "ThunderClan", role: "Warrior" },
      { id: "leafpool", name: "Leafpool", clan: "ThunderClan", role: "Warrior (mother)" },
      { id: "sol", name: "Sol", clan: "Loner / Rogue", role: "Manipulator" }
    ],
    links: [
      { a: "hollyleaf", b: "jayfeather", type: "family" },
      { a: "hollyleaf", b: "lionblaze", type: "family" },
      { a: "leafpool", b: "hollyleaf", type: "family" },
      { a: "dovewing", b: "ivypool", type: "family" },
      { a: "sol", b: "hollyleaf", type: "rival" }
    ]
  },
  "oots-6-the-last-hope": {
    nodes: [
      { id: "firestar", name: "Firestar", clan: "ThunderClan", role: "Leader (dies)" },
      { id: "bramblestar", name: "Brambleclaw", clan: "ThunderClan", role: "Deputy → Leader" },
      { id: "hollyleaf", name: "Hollyleaf", clan: "ThunderClan", role: "Warrior (dies)" },
      { id: "ivypool", name: "Ivypool", clan: "ThunderClan", role: "Warrior (spy)" },
      { id: "tigerstar", name: "Tigerstar", clan: "Dark Forest", role: "Spirit leader" },
      { id: "hawkfrost", name: "Hawkfrost", clan: "Dark Forest", role: "Spirit" }
    ],
    links: [
      { a: "firestar", b: "tigerstar", type: "rival" },
      { a: "tigerstar", b: "bramblestar", type: "family" },
      { a: "tigerstar", b: "hawkfrost", type: "family" },
      { a: "hawkfrost", b: "hollyleaf", type: "rival" },
      { a: "hollyleaf", b: "ivypool", type: "ally" },
      { a: "firestar", b: "bramblestar", type: "ally" }
    ]
  },

  // ===================== DAWN OF THE CLANS (prequel) =====================
  "dotc-1-the-sun-trail": {
    nodes: [
      { id: "graywing", name: "Gray Wing", clan: "Moor Group", role: "Settler (protagonist)" },
      { id: "clearsky", name: "Clear Sky", clan: "Forest Group", role: "Settler (brother)" },
      { id: "tallshadow", name: "Tall Shadow", clan: "Moor Group", role: "Leader of travelers" },
      { id: "turtletail", name: "Turtle Tail", clan: "Moor Group", role: "Settler (love)" },
      { id: "shadedmoss", name: "Shaded Moss", clan: "Mountain Cats", role: "First leader (dies)" },
      { id: "quietrain", name: "Quiet Rain", clan: "Mountain Cats", role: "Mother (stays)" }
    ],
    links: [
      { a: "graywing", b: "clearsky", type: "family" },
      { a: "quietrain", b: "graywing", type: "family" },
      { a: "quietrain", b: "clearsky", type: "family" },
      { a: "graywing", b: "turtletail", type: "mate" },
      { a: "tallshadow", b: "graywing", type: "ally" },
      { a: "shadedmoss", b: "tallshadow", type: "ally" }
    ]
  },
  "dotc-2-thunder-rising": {
    nodes: [
      { id: "thunder", name: "Thunder", clan: "Moor Group", role: "Young cat (raised here)" },
      { id: "clearsky", name: "Clear Sky", clan: "Forest Group", role: "Forest leader (father)" },
      { id: "graywing", name: "Gray Wing", clan: "Moor Group", role: "Settler (adoptive kin)" },
      { id: "storm", name: "Storm", clan: "Forest Group", role: "Mother (dies)" },
      { id: "turtletail", name: "Turtle Tail", clan: "Moor Group", role: "Settler" }
    ],
    links: [
      { a: "clearsky", b: "thunder", type: "family" },
      { a: "clearsky", b: "thunder", type: "rival" },
      { a: "graywing", b: "thunder", type: "family" },
      { a: "clearsky", b: "storm", type: "mate" },
      { a: "storm", b: "thunder", type: "family" },
      { a: "graywing", b: "turtletail", type: "mate" }
    ]
  },
  "dotc-3-the-first-battle": {
    nodes: [
      { id: "graywing", name: "Gray Wing", clan: "Moor Group", role: "Settler" },
      { id: "clearsky", name: "Clear Sky", clan: "Forest Group", role: "Forest leader" },
      { id: "thunder", name: "Thunder", clan: "Moor Group", role: "Young warrior" },
      { id: "tallshadow", name: "Tall Shadow", clan: "Moor Group", role: "Leader" },
      { id: "turtletail", name: "Turtle Tail", clan: "Moor Group", role: "Settler (dies)" },
      { id: "riverripple", name: "River Ripple", clan: "River Group", role: "Loner of the river" }
    ],
    links: [
      { a: "graywing", b: "clearsky", type: "family" },
      { a: "graywing", b: "clearsky", type: "rival" },
      { a: "clearsky", b: "thunder", type: "family" },
      { a: "graywing", b: "turtletail", type: "mate" },
      { a: "tallshadow", b: "graywing", type: "ally" },
      { a: "graywing", b: "thunder", type: "family" }
    ]
  },
  "dotc-4-the-blazing-star": {
    nodes: [
      { id: "graywing", name: "Gray Wing", clan: "Moor Group", role: "Settler" },
      { id: "clearsky", name: "Clear Sky", clan: "Forest Group", role: "Forest leader" },
      { id: "thunder", name: "Thunder", clan: "Forest Group", role: "Young warrior" },
      { id: "petal", name: "Petal", clan: "Forest Group", role: "Settler (dies saving kits)" },
      { id: "starflower", name: "Star Flower", clan: "Loner / Rogue", role: "Rogue's daughter" },
      { id: "oneeye", name: "One Eye", clan: "Loner / Rogue", role: "Rogue tyrant" }
    ],
    links: [
      { a: "graywing", b: "clearsky", type: "family" },
      { a: "clearsky", b: "thunder", type: "family" },
      { a: "starflower", b: "thunder", type: "mate" },
      { a: "oneeye", b: "starflower", type: "family" },
      { a: "oneeye", b: "clearsky", type: "rival" },
      { a: "petal", b: "clearsky", type: "ally" }
    ]
  },
  "dotc-5-a-forest-divided": {
    nodes: [
      { id: "graywing", name: "Gray Wing", clan: "Moor Group", role: "Settler" },
      { id: "clearsky", name: "Clear Sky", clan: "Forest Group", role: "Forest leader" },
      { id: "thunder", name: "Thunder", clan: "Forest Group", role: "Young leader" },
      { id: "quietrain", name: "Quiet Rain", clan: "Mountain Cats", role: "Mother (reunites, dies)" },
      { id: "windrunner", name: "Wind Runner", clan: "Moor Group", role: "Moor leader" },
      { id: "riverripple", name: "River Ripple", clan: "River Group", role: "River leader" },
      { id: "tallshadow", name: "Tall Shadow", clan: "Pine Group", role: "Pine leader" }
    ],
    links: [
      { a: "graywing", b: "clearsky", type: "family" },
      { a: "quietrain", b: "graywing", type: "family" },
      { a: "quietrain", b: "clearsky", type: "family" },
      { a: "clearsky", b: "thunder", type: "family" },
      { a: "graywing", b: "windrunner", type: "ally" },
      { a: "graywing", b: "tallshadow", type: "ally" }
    ]
  },
  "dotc-6-path-of-stars": {
    nodes: [
      { id: "graywing", name: "Gray Wing", clan: "Moor Group", role: "Founder (dies, names Clans)" },
      { id: "thunderstar", name: "Thunder → Thunderstar", clan: "ThunderClan", role: "First leader" },
      { id: "skystar", name: "Clear Sky → Skystar", clan: "SkyClan", role: "First leader (brother)" },
      { id: "windstar", name: "Wind Runner → Windstar", clan: "WindClan", role: "First leader" },
      { id: "riverstar", name: "River Ripple → Riverstar", clan: "RiverClan", role: "First leader" },
      { id: "shadowstar", name: "Tall Shadow → Shadowstar", clan: "ShadowClan", role: "First leader" }
    ],
    links: [
      { a: "graywing", b: "skystar", type: "family" },
      { a: "graywing", b: "thunderstar", type: "family" },
      { a: "skystar", b: "thunderstar", type: "family" },
      { a: "graywing", b: "windstar", type: "ally" },
      { a: "graywing", b: "riverstar", type: "ally" },
      { a: "graywing", b: "shadowstar", type: "ally" }
    ]
  },

  // ===================== A VISION OF SHADOWS =====================
  "avos-1-the-apprentices-quest": {
    nodes: [
      { id: "alderpaw", name: "Alderpaw", clan: "ThunderClan", role: "Medicine apprentice" },
      { id: "bramblestar", name: "Bramblestar", clan: "ThunderClan", role: "Leader (father)" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Deputy (mother)" },
      { id: "needlepaw", name: "Needlepaw", clan: "ShadowClan", role: "Apprentice" },
      { id: "twigkit", name: "Twigkit", clan: "ThunderClan", role: "Found kit" },
      { id: "violetkit", name: "Violetkit", clan: "ShadowClan", role: "Found kit" }
    ],
    links: [
      { a: "bramblestar", b: "alderpaw", type: "family" },
      { a: "squirrelflight", b: "alderpaw", type: "family" },
      { a: "bramblestar", b: "squirrelflight", type: "mate" },
      { a: "alderpaw", b: "needlepaw", type: "ally" },
      { a: "twigkit", b: "violetkit", type: "family" },
      { a: "alderpaw", b: "twigkit", type: "ally" }
    ]
  },
  "avos-2-thunder-and-shadow": {
    nodes: [
      { id: "twigpaw", name: "Twigpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "violetpaw", name: "Violetpaw", clan: "ShadowClan", role: "Apprentice" },
      { id: "alderheart", name: "Alderheart", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "needlepaw", name: "Needlepaw", clan: "ShadowClan", role: "Apprentice" },
      { id: "rowanstar", name: "Rowanstar", clan: "ShadowClan", role: "Leader (failing)" },
      { id: "darktail", name: "Darktail", clan: "Loner / Rogue", role: "Rogue leader" }
    ],
    links: [
      { a: "twigpaw", b: "violetpaw", type: "family" },
      { a: "alderheart", b: "twigpaw", type: "ally" },
      { a: "violetpaw", b: "needlepaw", type: "ally" },
      { a: "darktail", b: "violetpaw", type: "rival" },
      { a: "darktail", b: "rowanstar", type: "rival" },
      { a: "violetpaw", b: "rowanstar", type: "ally" }
    ]
  },
  "avos-3-shattered-sky": {
    nodes: [
      { id: "alderheart", name: "Alderheart", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "twigpaw", name: "Twigpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "violetpaw", name: "Violetpaw", clan: "ShadowClan", role: "Apprentice" },
      { id: "needletail", name: "Needletail", clan: "ShadowClan", role: "Warrior (dies)" },
      { id: "sandstorm", name: "Sandstorm", clan: "ThunderClan", role: "Elder (dies)" },
      { id: "darktail", name: "Darktail", clan: "Loner / Rogue", role: "Leader of the Kin" },
      { id: "leafstar", name: "Leafstar", clan: "SkyClan", role: "Leader" }
    ],
    links: [
      { a: "twigpaw", b: "violetpaw", type: "family" },
      { a: "violetpaw", b: "needletail", type: "ally" },
      { a: "darktail", b: "needletail", type: "rival" },
      { a: "alderheart", b: "leafstar", type: "ally" },
      { a: "darktail", b: "leafstar", type: "rival" },
      { a: "alderheart", b: "sandstorm", type: "family" }
    ]
  },
  "avos-4-darkest-night": {
    nodes: [
      { id: "alderheart", name: "Alderheart", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "twigpaw", name: "Twigpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "violetpaw", name: "Violetpaw", clan: "SkyClan", role: "Apprentice" },
      { id: "hawkwing", name: "Hawkwing", clan: "SkyClan", role: "Warrior (father)" },
      { id: "leafstar", name: "Leafstar", clan: "SkyClan", role: "Leader" },
      { id: "darktail", name: "Darktail", clan: "Loner / Rogue", role: "Leader of the Kin" }
    ],
    links: [
      { a: "twigpaw", b: "violetpaw", type: "family" },
      { a: "hawkwing", b: "twigpaw", type: "family" },
      { a: "hawkwing", b: "violetpaw", type: "family" },
      { a: "leafstar", b: "hawkwing", type: "ally" },
      { a: "alderheart", b: "leafstar", type: "ally" },
      { a: "darktail", b: "hawkwing", type: "rival" }
    ]
  },
  "avos-5-river-of-fire": {
    nodes: [
      { id: "onestar", name: "Onestar", clan: "WindClan", role: "Leader (dies)" },
      { id: "darktail", name: "Darktail", clan: "Loner / Rogue", role: "Leader of the Kin (son)" },
      { id: "alderheart", name: "Alderheart", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "violetshine", name: "Violetshine", clan: "SkyClan", role: "Warrior" },
      { id: "twigpaw", name: "Twigpaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "tigerheart", name: "Tigerheart", clan: "ShadowClan", role: "Warrior" }
    ],
    links: [
      { a: "onestar", b: "darktail", type: "family" },
      { a: "onestar", b: "darktail", type: "rival" },
      { a: "twigpaw", b: "violetshine", type: "family" },
      { a: "alderheart", b: "violetshine", type: "ally" },
      { a: "darktail", b: "tigerheart", type: "rival" }
    ]
  },
  "avos-6-the-raging-storm": {
    nodes: [
      { id: "twigbranch", name: "Twigbranch", clan: "ThunderClan", role: "Warrior" },
      { id: "violetshine", name: "Violetshine", clan: "SkyClan", role: "Warrior" },
      { id: "alderheart", name: "Alderheart", clan: "ThunderClan", role: "Medicine Cat" },
      { id: "tigerstar2", name: "Tigerheart → Tigerstar", clan: "ShadowClan", role: "Leader" },
      { id: "leafstar", name: "Leafstar", clan: "SkyClan", role: "Leader" },
      { id: "tree", name: "Tree", clan: "Loner / Rogue", role: "Loner (sees the dead)" }
    ],
    links: [
      { a: "twigbranch", b: "violetshine", type: "family" },
      { a: "violetshine", b: "tree", type: "mate" },
      { a: "alderheart", b: "twigbranch", type: "ally" },
      { a: "leafstar", b: "violetshine", type: "ally" },
      { a: "tigerstar2", b: "leafstar", type: "ally" },
      { a: "violetshine", b: "tigerstar2", type: "ally" }
    ]
  },

  // ===================== THE BROKEN CODE =====================
  "tbc-1-lost-stars": {
    nodes: [
      { id: "bristlepaw", name: "Bristlepaw", clan: "ThunderClan", role: "Apprentice" },
      { id: "rootpaw", name: "Rootpaw", clan: "SkyClan", role: "Apprentice (sees ghosts)" },
      { id: "shadowpaw", name: "Shadowpaw", clan: "ShadowClan", role: "Medicine apprentice" },
      { id: "impostor", name: "'Bramblestar'", clan: "ThunderClan", role: "Leader (impostor)" },
      { id: "bramblestar_ghost", name: "Bramblestar", clan: "StarClan", role: "Trapped spirit" },
      { id: "tigerstar2", name: "Tigerstar", clan: "ShadowClan", role: "Leader (father)" }
    ],
    links: [
      { a: "rootpaw", b: "bramblestar_ghost", type: "ally" },
      { a: "impostor", b: "bramblestar_ghost", type: "rival" },
      { a: "tigerstar2", b: "shadowpaw", type: "family" },
      { a: "impostor", b: "shadowpaw", type: "rival" },
      { a: "bristlepaw", b: "impostor", type: "ally" }
    ]
  },
  "tbc-2-the-silent-thaw": {
    nodes: [
      { id: "rootspring", name: "Rootspring", clan: "SkyClan", role: "Warrior (sees ghosts)" },
      { id: "bristlefrost", name: "Bristlefrost", clan: "ThunderClan", role: "Warrior" },
      { id: "shadowsight", name: "Shadowsight", clan: "ShadowClan", role: "Medicine Cat" },
      { id: "impostor", name: "'Bramblestar'", clan: "ThunderClan", role: "Leader (impostor)" },
      { id: "bramblestar_ghost", name: "Bramblestar", clan: "StarClan", role: "Trapped spirit" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Deputy" }
    ],
    links: [
      { a: "rootspring", b: "bramblestar_ghost", type: "ally" },
      { a: "impostor", b: "squirrelflight", type: "mate" },
      { a: "impostor", b: "bramblestar_ghost", type: "rival" },
      { a: "bristlefrost", b: "rootspring", type: "ally" },
      { a: "impostor", b: "shadowsight", type: "rival" }
    ]
  },
  "tbc-3-veil-of-shadows": {
    nodes: [
      { id: "bristlefrost", name: "Bristlefrost", clan: "ThunderClan", role: "Warrior (double agent)" },
      { id: "rootspring", name: "Rootspring", clan: "SkyClan", role: "Warrior" },
      { id: "shadowsight", name: "Shadowsight", clan: "ShadowClan", role: "Medicine Cat" },
      { id: "impostor", name: "'Bramblestar'", clan: "ThunderClan", role: "Leader (impostor)" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Deputy" },
      { id: "tigerstar2", name: "Tigerstar", clan: "ShadowClan", role: "Leader" }
    ],
    links: [
      { a: "bristlefrost", b: "impostor", type: "rival" },
      { a: "bristlefrost", b: "rootspring", type: "ally" },
      { a: "shadowsight", b: "impostor", type: "rival" },
      { a: "tigerstar2", b: "impostor", type: "rival" },
      { a: "impostor", b: "squirrelflight", type: "rival" }
    ]
  },
  "tbc-4-darkness-within": {
    nodes: [
      { id: "ashfur", name: "Ashfur", clan: "Dark Forest", role: "Villain (in Bramblestar's body)" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Deputy" },
      { id: "bristlefrost", name: "Bristlefrost", clan: "ThunderClan", role: "Warrior (double agent)" },
      { id: "rootspring", name: "Rootspring", clan: "SkyClan", role: "Warrior" },
      { id: "shadowsight", name: "Shadowsight", clan: "ShadowClan", role: "Medicine Cat" },
      { id: "bramblestar_ghost", name: "Bramblestar", clan: "StarClan", role: "Trapped spirit" }
    ],
    links: [
      { a: "ashfur", b: "squirrelflight", type: "rival" },
      { a: "ashfur", b: "bramblestar_ghost", type: "rival" },
      { a: "bristlefrost", b: "ashfur", type: "rival" },
      { a: "bristlefrost", b: "rootspring", type: "ally" },
      { a: "shadowsight", b: "ashfur", type: "rival" },
      { a: "squirrelflight", b: "bramblestar_ghost", type: "mate" }
    ]
  },
  "tbc-5-the-place-of-no-stars": {
    nodes: [
      { id: "bristlefrost", name: "Bristlefrost", clan: "ThunderClan", role: "Warrior" },
      { id: "rootspring", name: "Rootspring", clan: "SkyClan", role: "Warrior" },
      { id: "shadowsight", name: "Shadowsight", clan: "ShadowClan", role: "Medicine Cat" },
      { id: "ashfur", name: "Ashfur", clan: "Dark Forest", role: "Villain" },
      { id: "bramblestar_ghost", name: "Bramblestar", clan: "StarClan", role: "Trapped spirit" }
    ],
    links: [
      { a: "bristlefrost", b: "rootspring", type: "mate" },
      { a: "bristlefrost", b: "ashfur", type: "rival" },
      { a: "rootspring", b: "bramblestar_ghost", type: "ally" },
      { a: "shadowsight", b: "ashfur", type: "rival" },
      { a: "bristlefrost", b: "shadowsight", type: "ally" }
    ]
  },
  "tbc-6-a-light-in-the-mist": {
    nodes: [
      { id: "bristlefrost", name: "Bristlefrost", clan: "ThunderClan", role: "Warrior (dies utterly)" },
      { id: "rootspring", name: "Rootspring", clan: "SkyClan", role: "Warrior" },
      { id: "shadowsight", name: "Shadowsight", clan: "ShadowClan", role: "Medicine Cat" },
      { id: "ashfur", name: "Ashfur", clan: "Dark Forest", role: "Villain (defeated)" },
      { id: "bramblestar", name: "Bramblestar", clan: "ThunderClan", role: "Leader (restored)" },
      { id: "squirrelflight", name: "Squirrelflight", clan: "ThunderClan", role: "Deputy" }
    ],
    links: [
      { a: "bristlefrost", b: "ashfur", type: "rival" },
      { a: "bristlefrost", b: "rootspring", type: "mate" },
      { a: "bramblestar", b: "squirrelflight", type: "mate" },
      { a: "ashfur", b: "squirrelflight", type: "rival" },
      { a: "shadowsight", b: "bristlefrost", type: "ally" }
    ]
  }
};
