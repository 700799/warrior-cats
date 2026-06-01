// Curated "best of" categories — editorial lists that let the reader browse the
// saga by quality and flavour rather than by arc. Each category is a ranked list
// of book ids (best first) with a short blurb explaining why each book earns its
// place. These appear as special pills in the filter bar (after the arcs) and
// render a ranked, annotated list in the cloud.
//
// Ids must match book ids in data/books/*. The app validates this at load.

export const CATEGORIES = [
  {
    key: "top-rated",
    name: "Top 5 Rated",
    short: "★ Top 5",
    color: "#d9a13a",
    blurb: "The five books most beloved by fans and critics alike — the high-water marks of the saga.",
    picks: [
      { id: "tpb-1-into-the-wild", note: "The beloved beginning: a near-perfect entry point whose mystery, world-building, and heart launched a phenomenon." },
      { id: "se-bluestars-prophecy", note: "Widely held to be the finest Super Edition — a devastating tragedy that recontextualizes the whole original arc." },
      { id: "oots-6-the-last-hope", note: "The monumental Dark Forest climax, killing its central hero at the moment of victory; an unforgettable payoff." },
      { id: "tbc-6-a-light-in-the-mist", note: "The bravest finale in the series — Bristlefrost's total sacrifice and the reform of the warrior code itself." },
      { id: "tpb-3-forest-of-secrets", note: "The original arc's tightest, most satisfying installment, where the Tigerclaw mystery finally breaks open." }
    ]
  },
  {
    key: "most-humorous",
    name: "Most Humorous",
    short: "😺 Funniest",
    color: "#6fae5a",
    blurb: "Lighter in tone, full of banter, warmth, and the saga's most charming character comedy.",
    picks: [
      { id: "tnp-1-midnight", note: "Squirrelpaw's irrepressible wit and the odd-couple questers give this journey the series' liveliest banter." },
      { id: "se-firestars-quest", note: "Firestar and Sandstorm's warm, teasing partnership makes this gentle quest the coziest book in the saga." },
      { id: "se-graystripes-vow", note: "Graystripe's good humor and the warmth of old friendships give this late-life tribute a genial, affectionate charm." },
      { id: "se-tallstars-revenge", note: "The road-trip friendship with the easygoing Jake brings unexpected lightness to a story about vengeance." },
      { id: "asc-2-sky", note: "Nightheart's fish-out-of-water fumbling as he tries to fit into a new Clan supplies gentle, relatable comedy." }
    ]
  },
  {
    key: "most-suspenseful",
    name: "Most Suspenseful",
    short: "😱 Tense",
    color: "#c5544a",
    blurb: "White-knuckle dread, slow-burning menace, and the most heart-pounding climaxes in the saga.",
    picks: [
      { id: "tbc-1-lost-stars", note: "A masterclass in creeping wrongness: a trusted leader returns subtly, chillingly changed, and no one can name it." },
      { id: "tpb-5-a-dangerous-path", note: "Tigerstar's dog-pack scheme and Bluestar's unraveling converge into a relentless, ticking-clock climax at the gorge." },
      { id: "oots-3-night-whispers", note: "Ivypool's deadly double life among the murderous Dark Forest spirits sustains nerve-shredding tension throughout." },
      { id: "tbc-5-the-place-of-no-stars", note: "The living venture into the starless realm of the dead — an eerie, dread-soaked descent toward an inevitable sacrifice." },
      { id: "asc-4-thunder", note: "Splashtail's veiled scheme erupts into shocking, violent usurpation; the dread of betrayal pays off brutally." }
    ]
  },
  {
    key: "most-unique",
    name: "Most Unique",
    short: "✦ Unique",
    color: "#8e5cc7",
    blurb: "The boldest formal and conceptual swings — books that do something the rest of the saga never tries.",
    picks: [
      { id: "oots-4-sign-of-the-moon", note: "Jayfeather time-travels into the deep past to live among the first cats — the saga's most daring imaginative leap." },
      { id: "se-onestars-confession", note: "Narrated as a confession from beyond death, it reframes a whole life and the origin of a villain in one stroke." },
      { id: "se-tigerhearts-shadow", note: "Much of it unfolds among city cats in a Twolegplace — a setting unlike anywhere else in the saga." },
      { id: "pot-4-eclipse", note: "A villain who weaponizes knowledge over force, using a predicted eclipse to dissolve faith itself — a rare philosophical menace." },
      { id: "se-moth-flights-vision", note: "An origin story that invents an entire institution (the medicine cats) and derives its sacred vow from one cat's heartbreak." }
    ]
  },
  {
    key: "best-plot",
    name: "Best Plot",
    short: "✍ Best Plot",
    color: "#2f8fd6",
    blurb: "The most expertly constructed stories — tight mysteries, perfect payoffs, and airtight dramatic architecture.",
    picks: [
      { id: "pot-6-sunrise", note: "A flawlessly sprung trap of a plot: every secret detonates at once, and the warrior-code zealot is destroyed by the code itself." },
      { id: "tpb-6-the-darkest-hour", note: "Two arcs of Tigerstar's ambition pay off in a shocking, perfectly timed double climax against BloodClan." },
      { id: "tnp-3-dawn", note: "The Great Journey is structurally audacious — it destroys the founding setting and reroutes the entire saga." },
      { id: "se-crookedstars-promise", note: "A meticulously cruel Faustian structure: a curse whose terms reveal themselves only as each loved one is taken." },
      { id: "avos-5-river-of-fire", note: "The Darktail war's climax lands a perfectly seeded revelation — the tyrant is the abandoned son of the cat who must kill him." }
    ]
  }
];

export const CATEGORY_BY_KEY = Object.fromEntries(CATEGORIES.map((c) => [c.key, c]));
