// In-depth character profiles for the "Characters" page. Each profile carries
// 1–5 ratings (with the WHY for each), a character arc, strengths / weaknesses /
// fears, study questions, a famous-person / superhero comparison, three most-
// and three least-similar characters (cross-linked by id), and best quotes.
//
// This is the first batch of marquee characters across the Clans; the roster is
// designed to grow. Cross-link ids (mostSimilar / leastSimilar) must reference
// other character ids in this file — the app validates that at load.

export const CHARACTERS = [
  {
    id: "firestar", name: "Firestar", clan: "ThunderClan", role: "Leader",
    era: "The Prophecies Begin – Omen of the Stars",
    tagline: "The kittypet who became the savior of the forest.",
    ratings: [
      { label: "Power", value: 4, why: "No supernatural gift, but the fulfiller of the founding prophecy and a leader granted nine lives; his influence over the whole saga is immense." },
      { label: "Bravery", value: 5, why: "Charges danger without hesitation — from facing Tigerstar to single combat with Scourge — and never asks of others what he won't risk himself." },
      { label: "Strength", value: 4, why: "A formidable, agile fighter, though his edge is tactics and heart rather than raw size." },
      { label: "Leadership", value: 5, why: "Unites four rival Clans into LionClan against BloodClan; leads by example, mercy, and trust, earning fierce devotion." },
      { label: "Loyalty", value: 5, why: "Absolute to ThunderClan and to his friends; his loyalty to the code's spirit defines his every choice." }
    ],
    arc: "Rusty the kittypet abandons comfort for the wild, proves himself against suspicion, exposes Tigerstar's treachery, and rises from apprentice to the leader who saves the forest and, ultimately, dies destroying Tigerstar's spirit in the Great Battle — completing the prophecy that 'fire will save the Clan.'",
    strengths: "Courage, compassion, fairness, charisma, and an outsider's clarity about the Clan's flaws.",
    weaknesses: "Idealism and trust can blind him; his openness to outsiders breeds resentment, and he can be slow to see threats close to home.",
    fears: "Failing his Clan and proving unworthy of the trust placed in a former kittypet; losing those he loves to the violence he fights.",
    studyQuestions: [
      "Firestar's outsider origin is both his strength and the source of others' distrust. How does the saga use his kittypet past to interrogate belonging and worth?",
      "Is Firestar's mercy ever a flaw? Consider his repeated reluctance to act on his suspicions of Tigerstar.",
      "How does dying at the moment of victory complete Firestar's arc — and what does it cost the saga to lose its central hero?",
      "Compare Firestar's reading of the warrior code with Hollyleaf's or Tigerstar's. What does the code mean to him?"
    ],
    famous: { name: "Aragorn (The Lord of the Rings)", why: "A humble-seeming outsider of hidden destiny who rises, through courage and mercy rather than ambition, to unite divided peoples against a great evil and become a beloved king." },
    mostSimilar: [
      { id: "bluestar", why: "A noble, prophecy-bound leader who sacrifices everything for the Clan." },
      { id: "graystripe", why: "Shares his warmth, courage, and devotion to friends above all." },
      { id: "crookedstar", why: "A tragic-noble leader who endures great loss in service of his Clan." }
    ],
    leastSimilar: [
      { id: "tigerstar", why: "His mirror opposite: ambition and cruelty against mercy and selflessness." },
      { id: "mapleshade", why: "Where Firestar turns pain into protection, she turns it into vengeance." },
      { id: "yellowfang", why: "Gruff, secretive, and burdened by hidden guilt, against Firestar's open-hearted clarity." }
    ],
    quotes: [
      { quote: "Fire alone can save our Clan.", context: "The prophecy that names and defines him, fulfilled across his whole life." },
      { quote: "You may have lost a battle, but you have not lost the war.", context: "His characteristic resilience and care for those he leads." }
    ]
  },
  {
    id: "bluestar", name: "Bluestar", clan: "ThunderClan", role: "Leader",
    era: "Bluestar's Prophecy – A Dangerous Path",
    tagline: "The wise, sorrow-haunted leader who gave up her kits for her Clan.",
    ratings: [
      { label: "Power", value: 4, why: "A revered leader with nine lives whose decisions shape the forest for a generation, though she wields no special gift." },
      { label: "Bravery", value: 5, why: "Sacrifices her own kits to thwart Thistleclaw, and dies leaping into the gorge with the lead dog to save her Clan." },
      { label: "Strength", value: 3, why: "A capable warrior in her prime, but the saga catches her aging and declining." },
      { label: "Leadership", value: 5, why: "Guides ThunderClan with wisdom for years and recognizes Firestar's destiny — though betrayal finally erodes her judgment." },
      { label: "Loyalty", value: 5, why: "Her every sacrifice is for ThunderClan; loyalty to her Clan outweighs even motherhood, at terrible personal cost." }
    ],
    arc: "From an idealistic young cat scarred by the deaths of her mother and sister, Bluefur surrenders her kits to RiverClan to become deputy and block the brutal Thistleclaw, rising to a wise leadership undone at last by Tigerstar's betrayal — declining into paranoia before a final, redemptive sacrifice restores her dignity in death.",
    strengths: "Wisdom, foresight, strategic mind, and the capacity for profound sacrifice.",
    weaknesses: "Carries unbearable hidden grief; her trust in Tigerclaw blinds her, and betrayal shatters her faith and her mind.",
    fears: "That her sacrifices were in vain; that StarClan has abandoned her; that she failed her Clan and her lost kits.",
    studyQuestions: [
      "Bluestar gives up her kits for her Clan. Is this her greatest act of loyalty or a tragic mistake — and how does the saga want us to judge it?",
      "How does her decline after Tigerstar's betrayal complicate the saga's vision of strong leadership?",
      "Why is it significant that she dies in a moment of restored clarity and sacrifice?",
      "How does knowing her backstory (Bluestar's Prophecy) change a reader's view of her choices in Into the Wild?"
    ],
    famous: { name: "King Lear", why: "A once-commanding ruler whose judgment unravels after betrayal and loss, descending toward madness before a final, redemptive clarity." },
    mostSimilar: [
      { id: "firestar", why: "A noble, prophecy-guided leader defined by sacrifice for the Clan." },
      { id: "crookedstar", why: "A leader whose life is defined by devastating personal loss endured for duty." },
      { id: "yellowfang", why: "Both are wise elders carrying secret grief and the weight of impossible choices." }
    ],
    leastSimilar: [
      { id: "tigerstar", why: "The betrayer whose treachery destroys her — ambition against sacrifice." },
      { id: "mapleshade", why: "Both lose their kits, but Bluestar turns grief inward to duty while Mapleshade turns it to murder." },
      { id: "graystripe", why: "His uncomplicated warmth contrasts with her burdened, secretive sorrow." }
    ],
    quotes: [
      { quote: "There is no medicine to mend a broken heart.", context: "The grief beneath her wise exterior, sharpened by her decline." }
    ]
  },
  {
    id: "graystripe", name: "Graystripe", clan: "ThunderClan", role: "Deputy / Warrior",
    era: "The Prophecies Begin – The Broken Code",
    tagline: "Firestar's loyal best friend, whose heart repeatedly defies the code.",
    ratings: [
      { label: "Power", value: 2, why: "An ordinary warrior with no special gift, but a beloved fixture whose steadfastness anchors the saga emotionally." },
      { label: "Bravery", value: 4, why: "Returns to fight for ThunderClan in its darkest hours and risks exile and danger for love and friendship." },
      { label: "Strength", value: 4, why: "A big, capable fighter, dependable in any battle line." },
      { label: "Leadership", value: 3, why: "Serves loyally as Firestar's deputy, but follows his heart more readily than he commands others." },
      { label: "Loyalty", value: 5, why: "Devoted utterly to Firestar and to those he loves, even when love pulls him across Clan lines." }
    ],
    arc: "Firestar's first friend falls for the RiverClan Silverstream and loses her in childbirth, follows his kits into RiverClan, returns to ThunderClan, and across a long life endures loss after loss — finally, as an aging elder, journeying to reunite with his kin and find where he still belongs.",
    strengths: "Warmth, humor, steadfast loyalty, and an open, loving heart.",
    weaknesses: "Impulsive and led by his heart against the code; his loves repeatedly cost him dearly.",
    fears: "Losing those he loves; outliving his world and his usefulness as he ages.",
    studyQuestions: [
      "Graystripe repeatedly chooses love over the warrior code. Does the saga endorse or critique his choices?",
      "How does his long life let the saga explore aging and belonging (Graystripe's Vow)?",
      "What does his friendship with Firestar reveal about loyalty as a value in the series?"
    ],
    famous: { name: "Samwise Gamgee (The Lord of the Rings)", why: "The steadfast, warm-hearted best friend whose unwavering loyalty and ordinary decency anchor a hero's epic journey." },
    mostSimilar: [
      { id: "firestar", why: "His closest friend; they share warmth, courage, and loyalty above all." },
      { id: "sandstorm", why: "A dependable, loyal ThunderClan warrior of open heart and steady decency." },
      { id: "bluestar", why: "Shares deep ThunderClan loyalty, though his heart is lighter than her burdened one." }
    ],
    leastSimilar: [
      { id: "tigerstar", why: "Selfless warmth against cold ambition." },
      { id: "mapleshade", why: "Both love across Clan lines, but Graystripe heals while she turns to vengeance." },
      { id: "yellowfang", why: "Open and good-humored against gruff, secretive, and guilt-laden." }
    ],
    quotes: [
      { quote: "I have outlived so many friends and so many homes — but loyalty can find a new place to belong.", context: "His late-life reckoning with aging and belonging." }
    ]
  },
  {
    id: "sandstorm", name: "Sandstorm", clan: "ThunderClan", role: "Warrior",
    era: "The Prophecies Begin – A Vision of Shadows",
    tagline: "Firestar's fierce, grounded mate — pragmatic conscience of ThunderClan.",
    ratings: [
      { label: "Power", value: 2, why: "An ordinary warrior, but an influential one as Firestar's mate and mother of Leafpool and Squirrelflight." },
      { label: "Bravery", value: 4, why: "Steady and fearless in battle and on the perilous quest to rebuild SkyClan." },
      { label: "Strength", value: 4, why: "A skilled, tenacious fighter and hunter, respected across her Clan." },
      { label: "Leadership", value: 3, why: "Not a leader by title, but a strong moral voice whose counsel steadies Firestar." },
      { label: "Loyalty", value: 5, why: "Unwavering to ThunderClan, to Firestar, and to her daughters." }
    ],
    arc: "Initially scornful of the kittypet Firepaw, Sandstorm grows into his fiercely loyal mate and partner, sharing the quest to restore SkyClan and helping raise the next generation of heroes, before dying — a last living link to the founding era — during A Vision of Shadows.",
    strengths: "Pragmatism, honesty, grit, and a clear moral compass.",
    weaknesses: "Sharp-tongued and quick to judge, especially early on; her bluntness can wound.",
    fears: "Harm to her family and her Clan; being unable to protect those she loves.",
    studyQuestions: [
      "How does Sandstorm's early scorn for Firepaw and later devotion chart a path from prejudice to partnership?",
      "What role does she play as a grounded counterweight to Firestar's idealism?",
      "Why is it significant that her death marks the passing of the founding generation?"
    ],
    famous: { name: "Peggy Carter (Marvel)", why: "A tough, principled, no-nonsense partner whose grit and moral clarity make her the grounded equal of a celebrated hero." },
    mostSimilar: [
      { id: "graystripe", why: "A loyal, dependable ThunderClan warrior of steady decency." },
      { id: "firestar", why: "Her partner; they share courage, fairness, and devotion to the Clan." },
      { id: "yellowfang", why: "Both are blunt, sharp-tongued she-cats whose gruffness hides deep loyalty." }
    ],
    leastSimilar: [
      { id: "mapleshade", why: "Grounded loyalty against consuming, destructive obsession." },
      { id: "tigerstar", why: "Honest service against deceitful ambition." },
      { id: "crookedstar", why: "Her pragmatic steadiness contrasts with his curse-haunted tragedy." }
    ],
    quotes: [
      { quote: "I didn't fall in love with a kittypet. I fell in love with the bravest warrior in the forest.", context: "Her fierce, clear-eyed devotion to Firestar." }
    ]
  },
  {
    id: "tigerstar", name: "Tigerstar", clan: "ShadowClan / Dark Forest", role: "Leader / Villain",
    era: "The Prophecies Begin – Omen of the Stars (and beyond, in death)",
    tagline: "The saga's archetypal villain — ambition without conscience.",
    ratings: [
      { label: "Power", value: 5, why: "A dominant force in life and death: ShadowClan leader, near-conqueror of the forest, and the leader of the Dark Forest army that nearly destroys the Clans." },
      { label: "Bravery", value: 4, why: "Fearless in battle, though his courage serves only himself; he never flinches from violence." },
      { label: "Strength", value: 5, why: "Physically magnificent — one of the largest, most powerful fighters in the saga." },
      { label: "Leadership", value: 4, why: "Commands through fear, charisma, and ruthlessness; unites Clans and the dead under him, but his rule rests on terror." },
      { label: "Loyalty", value: 1, why: "Loyal only to his own ambition; betrays mentor, Clan, allies, and kin without hesitation." }
    ],
    arc: "From an ambitious warrior who murders his way toward the deputyship, to the exiled leader of ShadowClan who summons BloodClan and is killed by Scourge, to the vengeful Dark Forest spirit who orchestrates the Great Battle — Tigerstar is destroyed in the end by the very lawlessness and hatred he embodies.",
    strengths: "Strength, cunning, charisma, patience, and an utter absence of restraint.",
    weaknesses: "Consumed by ambition and contempt for the code; his ruthlessness isolates him and ultimately turns his own allies (and the evil he summons) against him.",
    fears: "Powerlessness and irrelevance; being thwarted by those he deems beneath him — above all by Firestar.",
    studyQuestions: [
      "Tigerstar weaponizes the warrior code's trust to commit murder. How does the saga use him to critique blind faith in hierarchy?",
      "Is Tigerstar given any sympathetic dimension, or is he pure villainy? Compare him with Mapleshade.",
      "Why is it significant that Tigerstar is killed by Scourge rather than by Firestar — and how does his death by his own summoned evil function thematically?",
      "How does Tigerstar's legacy (his sons, his name) let the saga explore whether evil is inherited?"
    ],
    famous: { name: "Scar (The Lion King)", why: "A charismatic, ruthlessly ambitious figure who murders for power, rules through fear, and is undone by the very brutality and allies he embraces." },
    mostSimilar: [
      { id: "mapleshade", why: "A fellow Dark Forest villain whose grievance curdles into patient, murderous vengeance." },
      { id: "crookedstar", why: "Shares raw drive and capability — but Crookedstar's is bent toward his Clan, Tigerstar's toward himself." },
      { id: "bluestar", why: "A near-mirror in strength and ambition for leadership, divided only by conscience and selflessness." }
    ],
    leastSimilar: [
      { id: "firestar", why: "His exact opposite and nemesis: mercy and selflessness against cruelty and ambition." },
      { id: "graystripe", why: "Selfless warmth and loyalty against cold, treacherous self-interest." },
      { id: "sandstorm", why: "Honest, grounded service against deceitful hunger for power." }
    ],
    quotes: [
      { quote: "They called me traitor and cast me out. They will learn that they only made me free to take what is mine.", context: "His self-justifying fury after exile, the engine of his villainy." }
    ]
  },
  {
    id: "yellowfang", name: "Yellowfang", clan: "ShadowClan / ThunderClan", role: "Medicine Cat",
    era: "Yellowfang's Secret – Into the Wild (and beyond, in StarClan)",
    tagline: "The gruff healer who bore a tyrant and helped bring him down.",
    ratings: [
      { label: "Power", value: 3, why: "An empath who feels others' pain and a gifted medicine cat with a strong StarClan connection, though her gift is as much burden as power." },
      { label: "Bravery", value: 4, why: "Endures exile, secret motherhood, and the horror of opposing her own monstrous son, Brokenstar." },
      { label: "Strength", value: 2, why: "A healer rather than a fighter, and often elderly when the saga meets her." },
      { label: "Leadership", value: 3, why: "Guides through wisdom and counsel rather than command; a trusted advisor to leaders." },
      { label: "Loyalty", value: 5, why: "Gives her life's devotion to ThunderClan that took her in, and to the code, even against her own kin." }
    ],
    arc: "Born with the burden of feeling others' pain, Yellowfang turns from warrior to medicine cat, bears the tyrant Brokenstar in a forbidden love and must give him up, then — exiled and broken — finds refuge in ThunderClan, where she helps destroy the son she could not save and serves devotedly until her death.",
    strengths: "Empathy, wisdom, healing skill, blunt honesty, and hard-won resilience.",
    weaknesses: "Gruff and secretive, walled off by guilt and grief; her empathic gift exhausts and isolates her.",
    fears: "The monster she birthed; that her secrets and failures will destroy those she now protects.",
    studyQuestions: [
      "Yellowfang must oppose her own son. How does the saga use her to explore the limits of a parent's responsibility for a child's evil?",
      "How does her empathic gift — feeling others' pain — shape her turn from warrior to healer?",
      "Why is her gruff exterior important to how the original arc first presents her?"
    ],
    famous: { name: "Professor Snape (Harry Potter)", why: "A gruff, secretive, seemingly harsh figure carrying hidden grief and guilt, whose prickliness masks a deep, sacrificial loyalty." },
    mostSimilar: [
      { id: "bluestar", why: "A wise elder she-cat carrying secret grief and the weight of giving up her kits." },
      { id: "sandstorm", why: "Both are blunt, sharp-tongued she-cats whose gruffness hides fierce loyalty." },
      { id: "crookedstar", why: "Both are defined by loss and by a relationship with the manipulations of darkness." }
    ],
    leastSimilar: [
      { id: "tigerstar", why: "She helps destroy the tyranny he embodies — and bore his kind in Brokenstar." },
      { id: "graystripe", why: "Open and good-humored against her guarded, guilt-laden gruffness." },
      { id: "mapleshade", why: "Both wronged mothers, but Yellowfang turns to healing where Mapleshade turns to murder." }
    ],
    quotes: [
      { quote: "I gave life to the cruelest cat the forest has ever known — and I must be the one to stop him.", context: "The tragic secret at the heart of her character." }
    ]
  },
  {
    id: "crookedstar", name: "Crookedstar", clan: "RiverClan", role: "Leader",
    era: "Crookedstar's Promise – The Prophecies Begin",
    tagline: "The cursed leader whose greatness cost him everyone he loved.",
    ratings: [
      { label: "Power", value: 4, why: "A long-reigning RiverClan leader with nine lives, though his 'power' is shadowed by the Dark Forest bargain that shaped his rise." },
      { label: "Bravery", value: 4, why: "Endures a lifetime of engineered loss and finally defies Mapleshade, refusing her hold over him." },
      { label: "Strength", value: 4, why: "Overcomes a shattered jaw and rejection to become a strong, capable warrior and leader." },
      { label: "Leadership", value: 4, why: "Guides RiverClan with dedication for many seasons, earning his Clan's respect despite his private torment." },
      { label: "Loyalty", value: 5, why: "Devoted to RiverClan above all — the loyalty Mapleshade exploits by taking everything else he loves." }
    ],
    arc: "Rejected as a disfigured kit and seduced by the Dark Forest spirit Mapleshade with a promise of greatness, Crookedstar rises to lead RiverClan while a string of engineered deaths claims those he loves — until, late in life, he grasps the cruelty of the bargain, defies Mapleshade, and dies reunited in StarClan with the loved ones his promise had cost him.",
    strengths: "Resilience, devotion, perseverance, and an eventual, hard-won moral clarity.",
    weaknesses: "His hunger for worth after rejection makes him prey to manipulation; he carries crushing, isolating guilt.",
    fears: "That he is worthless and unloved; that his ambition has doomed everyone he cares for.",
    studyQuestions: [
      "Crookedstar's success is revealed to be a curse. How does the saga reframe achievement as potentially tragic?",
      "How does Mapleshade exploit his rejection and hunger for worth — and what does that reveal about how evil works in the series?",
      "Is Crookedstar's late defiance of Mapleshade a true redemption? Why or why not?"
    ],
    famous: { name: "Doctor Faustus (Marlowe)", why: "A figure who trades, in effect, everything he loves for promised greatness, and reckons too late with the ruinous cost of the bargain." },
    mostSimilar: [
      { id: "bluestar", why: "A devoted leader whose life is defined by devastating personal loss endured for the Clan." },
      { id: "firestar", why: "A tragic-noble leader of deep loyalty who suffers greatly in his Clan's service." },
      { id: "yellowfang", why: "Both are shaped by loss and by the manipulations of darkness around them." }
    ],
    leastSimilar: [
      { id: "tigerstar", why: "Both are driven and capable, but Crookedstar's heart is for his Clan, not himself." },
      { id: "mapleshade", why: "His tormentor — and his opposite: he resists the vengeance she embodies." },
      { id: "graystripe", why: "Graystripe's light, lucky warmth against Crookedstar's cursed, guilt-ridden tragedy." }
    ],
    quotes: [
      { quote: "I promised you greatness — I never promised it would not cost you everything you love.", context: "Mapleshade's cruel revelation of the bargain that shaped his life." }
    ]
  },
  {
    id: "mapleshade", name: "Mapleshade", clan: "Dark Forest", role: "Villain (spirit)",
    era: "Mapleshade's Vengeance – Omen of the Stars",
    tagline: "Grief made monstrous — the patient architect of others' ruin.",
    ratings: [
      { label: "Power", value: 4, why: "One of the Dark Forest's most patient and effective manipulators, shaping the fates of cats across generations (Crookedstar above all)." },
      { label: "Bravery", value: 3, why: "Fearless in her vengeance, though hers is the recklessness of a cat with nothing left to lose." },
      { label: "Strength", value: 3, why: "A capable fighter in life and a dangerous spirit, but her true weapon is manipulation, not force." },
      { label: "Leadership", value: 2, why: "Works through seduction and scheming rather than command; a corrupter, not a leader of others." },
      { label: "Loyalty", value: 1, why: "Loyal only to her own grief and vengeance; she betrays and destroys without limit." }
    ],
    arc: "A ThunderClan warrior exiled for a forbidden love and broken by the drowning of her kits and her lover's betrayal, Mapleshade turns her grief to murderous vengeance, descends in death to the Dark Forest, and there festers into a patient evil that torments the living — most cruelly Crookedstar — for generations.",
    strengths: "Patience, cunning, psychological insight into others' wounds, and relentless will.",
    weaknesses: "Wholly consumed by grief and vengeance; incapable of healing or of seeing beyond her own wrong.",
    fears: "That her suffering meant nothing; that she will be forgotten and her wrong go unavenged.",
    studyQuestions: [
      "Mapleshade is a villain with a genuinely sympathetic origin. How does the saga balance pity and condemnation?",
      "Compare Mapleshade and Bluestar — both lose their kits. Why does one turn to vengeance and the other to duty?",
      "How does Mapleshade's manipulation of Crookedstar reveal the saga's vision of how evil exploits pain?"
    ],
    famous: { name: "Medea (Euripides)", why: "A wronged, betrayed mother whose grief over the destruction of her family curdles into monstrous, all-consuming vengeance." },
    mostSimilar: [
      { id: "tigerstar", why: "A fellow Dark Forest villain whose grievance becomes patient, murderous evil." },
      { id: "yellowfang", why: "Both are wronged mothers who lose their kits — a dark mirror of the same wound." },
      { id: "bluestar", why: "Both surrender or lose their kits to tragedy; their responses diverge utterly." }
    ],
    leastSimilar: [
      { id: "firestar", why: "He turns pain into protection; she turns it into vengeance." },
      { id: "graystripe", why: "His healing, lucky love against her ruinous, vengeful grief." },
      { id: "sandstorm", why: "Grounded, loyal decency against consuming, destructive obsession." }
    ],
    quotes: [
      { quote: "They took my kits, my love, and my Clan — so I will take everything from them, for as long as death allows.", context: "Her vow of vengeance, the origin of her long evil." }
    ]
  }
];

export const CHARACTER_BY_ID = Object.fromEntries(CHARACTERS.map((c) => [c.id, c]));
