// Analysis of the Clans and major factions of the Warriors saga. Rendered on the
// "Clans" page. Each entry characterises a Clan's territory, temperament,
// values, strengths, flaws, notable leaders, and role across the saga.

export const CLANS = [
  {
    key: "thunderclan", name: "ThunderClan", color: "#e07b39",
    territory: "Deciduous woodland — dense forest of oak and bramble (forest era), then leafy woodland by the lake. Camp: a sandy ravine, later a stone hollow (an abandoned quarry).",
    prey: "Mice, voles, squirrels, and birds hunted by stalking through thick undergrowth.",
    character: "Warm, fiercely loyal, and famously willing to help other Clans — sometimes to the point of self-righteousness. ThunderClan prizes compassion and the spirit of the warrior code over its letter, and it has a soft spot for outsiders, having been led to greatness by a former kittypet.",
    values: "Loyalty, courage, mercy, and the conviction that the code's purpose is to protect the weak, not merely to enforce hierarchy.",
    strengths: "Adaptable fighters who use cover and cunning; open to new blood and new ideas, which keeps the Clan vital across generations; produces the saga's central heroes.",
    flaws: "Self-righteous and meddlesome — quick to believe it knows what is best for everyone; its openness to outsiders breeds suspicion and division within and resentment without.",
    notableLeaders: "Thunderstar (founder), Bluestar, Firestar, Bramblestar.",
    roleInSaga: "The saga's home Clan and moral center: most protagonists, prophecies, and central conflicts run through ThunderClan, from Firestar's rise to the impostor crisis of The Broken Code.",
    quote: "Compassion, in ThunderClan's telling, is the truest reading of the warrior code."
  },
  {
    key: "shadowclan", name: "ShadowClan", color: "#6f7d5e",
    territory: "Dark pine forest and marshland — shadowy, cold, and hard to hunt. Bordered by Twoleg places, giving ShadowClan an edge of the worldly and the wary.",
    prey: "Frogs, lizards, and small prey of the pine floor and marsh; ShadowClan cats are famed for eating what others won't.",
    character: "Proud, tough, independent, and easily cast as the villain — yet repeatedly shown to be as capable of loyalty and honor as any Clan. ShadowClan endures hardship and distrust, and it has both produced great tyrants (Brokenstar, Tigerstar) and survived near-dissolution to rebuild.",
    values: "Self-reliance, resilience, ambition, and fierce Clan pride.",
    strengths: "Hardened by a harsh territory; resilient and resourceful; willing to make the difficult choices other Clans shrink from.",
    flaws: "Susceptible to ambitious, tyrannical leaders and to the seduction of the lawless (Brokenstar, Darktail's Kin); its pride and the others' prejudice keep it isolated.",
    notableLeaders: "Shadowstar (founder), Raggedstar, Brokenstar, Blackstar, Rowanstar, Tigerstar (the second).",
    roleInSaga: "The saga's recurring crucible of ambition and resilience — source of major villains and of one of its most affecting redemption stories (its fall to Darktail and rebuilding under the second Tigerstar).",
    quote: "Cast as the shadow against the others' light, yet never simply dark."
  },
  {
    key: "riverclan", name: "RiverClan", color: "#3f7fd6",
    territory: "Rivers, streams, reed-beds, and an island — lush, well-fed, and water-bound. RiverClan cats are the saga's swimmers, at home where others fear to tread.",
    prey: "Fish above all, plus water voles and birds — a rich, reliable diet that makes RiverClan comfortable and a touch complacent.",
    character: "Comfort-loving, somewhat aloof, self-sufficient, and proud of its difference. Founded by a peaceable loner (River Ripple), RiverClan keeps a half-step apart from the others and values its own ease and independence.",
    values: "Independence, self-sufficiency, comfort, and a quiet pride in being unlike the rest.",
    strengths: "Unmatched in and around water; well-fed and resilient in hard seasons; capable of standing alone.",
    flaws: "Aloofness shades into isolation and complacency; its self-sufficiency can curdle into a dangerous insularity, exploited disastrously by Splashtail in A Starless Clan.",
    notableLeaders: "Riverstar (founder), Crookedstar, Leopardstar, Mistystar.",
    roleInSaga: "The independent outlier whose isolation becomes the central crisis of the most recent arc; home to tragic figures like Crookedstar and the faithless healer Mothwing.",
    quote: "A Clan content to live apart by the water — for good and for ill."
  },
  {
    key: "windclan", name: "WindClan", color: "#c7a23f",
    territory: "Open moorland — windswept hills, heather, and rabbit-runs, with old tunnels beneath. WindClan lives exposed to sky and weather, swift and lean.",
    prey: "Rabbits and hares, run down across the open moor by the fastest cats in the forest.",
    character: "Swift, proud, skittish, and intensely loyal to its own — the most insular and easily wounded of the Clans. WindClan's openness of land makes it feel vulnerable, and it guards its borders and its pride jealously.",
    values: "Speed, loyalty, freedom of the open moor, and a fierce, defensive Clan pride.",
    strengths: "The fastest warriors in the forest; deeply loyal; hardy in exposed country.",
    flaws: "Skittish, defensive, and quick to take offense; vulnerable to proud, guilt-ridden leadership (Onestar) and to manipulation, and prone to insularity.",
    notableLeaders: "Windstar (founder), Tallstar, Onestar, Harestar.",
    roleInSaga: "The proud, defensive moor Clan; source of the tragic Crowfeather and of Onestar, whose hidden son Darktail nearly destroys the Clans.",
    quote: "Swift and proud on the open moor, and quick to feel the wind's chill of suspicion."
  },
  {
    key: "skyclan", name: "SkyClan", color: "#6fae5a",
    territory: "Originally the tree-tops and tall oaks of the old forest; later a river gorge far away, and finally a home by the lake. SkyClan are leapers and climbers, at home in the air.",
    prey: "Birds, squirrels, and tree-prey caught with prodigious leaps — SkyClan's enormous spring is its signature.",
    character: "Resilient, adaptable, and twice-reborn — the forgotten fifth Clan, banished and rebuilt, whose history is one of exile and return. SkyClan blends Clan tradition with outsider blood and unconventional customs (the daylight-warriors).",
    values: "Resilience, adaptability, inclusion, and the determination to endure and belong despite being cast out.",
    strengths: "Extraordinary leaping and climbing; adaptable and inclusive; survives repeated catastrophe and exile.",
    flaws: "Burdened by displacement and the others' forgetfulness; its blended, unconventional nature breeds friction over what a true Clan should be.",
    notableLeaders: "Skystar / Clear Sky (founder), Cloudstar (the exile), Leafstar.",
    roleInSaga: "The lost-and-restored fifth Clan: banished in the deep past (Cloudstar's Journey), rebuilt by Firestar (Firestar's Quest), and returned to the lake in A Vision of Shadows, its long arc a meditation on exile, injustice, and belonging.",
    quote: "Twice banished, twice reborn — the Clan that would not be forgotten."
  },
  {
    key: "starclan", name: "StarClan", color: "#74b6d6",
    territory: "The night sky and a starlit, eternal hunting ground beyond death; reached by the living at the Moonpool (and, in the forest era, the Moonstone).",
    prey: "Endless and effortless — StarClan's hunting ground knows no hunger; it is paradise for the honored dead.",
    character: "The ancestral spirits of all the Clans, who guide the living through dreams, prophecy, and signs — wise but fallible, divided, and sometimes silent or wrong. The saga increasingly questions StarClan's authority and reliability.",
    values: "Continuity, guidance, the warrior code's spiritual sanction, and the bond between the living and the dead.",
    strengths: "Grants prophecy, healing-knowledge, and a leader's nine lives; preserves the saga's memory and moral order.",
    flaws: "Fallible, divided, and limited — capable of injustice (abandoning SkyClan), silence (The Broken Code), and powerlessness; the later saga interrogates whether it deserves the Clans' faith.",
    notableLeaders: "Not led but populated by the honored dead of every Clan, from Bluestar to Spottedleaf to Firestar.",
    roleInSaga: "The saga's spiritual order and source of prophecy — and, increasingly, the object of its deepest questions about faith, doubt, and authority.",
    quote: "The stars guide the Clans — but the saga asks, ever more sharply, whether they should."
  },
  {
    key: "dark-forest", name: "The Dark Forest", color: "#8a4b4b",
    territory: "The Place of No Stars: a dark, rotting afterworld with no starlight, where the wicked dead linger and fade. The shadow-mirror of StarClan.",
    prey: "Scarce and bitter — the Dark Forest is a place of hunger, decay, and endless resentment.",
    character: "The collective of the saga's damned: murderers, tyrants, and the unrepentant, who do not fade peacefully but scheme, train the living in dreams, and hunger to overthrow StarClan and the Clans. Led across the arcs by the spirit of Tigerstar.",
    values: "Ambition, vengeance, domination, and contempt for the warrior code — a perversion of every Clan virtue.",
    strengths: "Patient, insidious corruption; able to reach and train the living through dreams; nearly destroys the Clans in the Great Battle.",
    flaws: "Bound by hatred and mutual treachery; ultimately defeated by the unity and sacrifice of the living and StarClan.",
    notableLeaders: "Tigerstar (the first), Mapleshade, Hawkfrost, Brokenstar, Ashfur.",
    roleInSaga: "The saga's reservoir of evil and its great existential threat — the festering afterlife of its villains, culminating in the Great Battle (Omen of the Stars) and the impostor crisis (The Broken Code).",
    quote: "Where the wicked dead refuse to fade, and hunger still for the world they lost."
  },
  {
    key: "tribe", name: "Tribe of Rushing Water", color: "#8f96a3",
    territory: "A cave behind a mountain waterfall, high in the peaks far from the Clans — a harsh, beautiful realm of stone and falling water.",
    prey: "Birds (caught by cave-guards) and fish and small prey (caught by prey-hunters); the Tribe divides its cats by these roles.",
    character: "An ancient mountain society related to the Clans by a shared deep ancestry, with its own customs, descriptive names, and spiritual order — guided by the Tribe of Endless Hunting and led by the healer-leader, the Stoneteller.",
    values: "Survival in a brutal land, role-based cooperation (cave-guards and prey-hunters), and devotion to its own ancestors and prophecies.",
    strengths: "Hardy and cooperative; deeply rooted in its mountain home; a living link to the cat peoples' shared origins.",
    flaws: "Isolated and vulnerable to predators (Sharptooth) and rogues; bound by rigid roles and by prophecies that can be misread.",
    notableLeaders: "The Stoneteller (the title passed down through generations of healer-leaders).",
    roleInSaga: "The saga's parallel society and a recurring refuge and trial — bound to the Clans by deep ancestry (revealed through Jayfeather), and the site of Feathertail's sacrifice in The New Prophecy.",
    quote: "A people of stone and water, kin to the Clans across forgotten ages."
  }
];

export const CLAN_BY_KEY = Object.fromEntries(CLANS.map((c) => [c.key, c]));
