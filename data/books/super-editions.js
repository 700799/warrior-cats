// =============================================================================
// SUPER EDITIONS  (Warriors — standalone novels)  ·  Batch 1
// =============================================================================
//
// Standalone, longer novels that fill in the saga's history. They are grouped
// under the "super" pseudo-arc for the filter pills. Because each is set at a
// specific point in the saga's chronology, timelineOrder uses fractional values
// to slot each book into its correct chronological place among the main arcs
// (the panel shows a clean computed "saga rank", so the decimals never appear).
// arcOrder = publication order among Super Editions. Full prose; schema as in
// data/books/arc-prophecies.js.
// -----------------------------------------------------------------------------

export const superEditions = [
  {
    id: "se-firestars-quest",
    title: "Firestar's Quest",
    arc: "Super Editions",
    arcKey: "super",
    pubOrder: 49,
    arcOrder: 1,
    timelineOrder: 12.5, // between The Darkest Hour and Midnight
    publicationYear: 2008,
    povCharacter: "Firestar",
    locationKey: "gorge",
    accentColor: "#b8902f",
    type: "superEdition",
    analysis: {
      plotSummary:
        "In the uneasy peace after the defeat of BloodClan, Firestar — now the established leader of ThunderClan — is troubled by cryptic dreams and the sense that something in the Clans' history has been lost. He learns of a long-buried secret: there were once five Clans in the forest, not four, and the fifth, SkyClan, was driven out generations ago when Twolegs destroyed its territory, an injustice the other Clans chose to forget. Compelled by a message from a mysterious gray-and-white StarClan cat to right this ancient wrong, Firestar sets out with his mate Sandstorm on a long journey beyond the forest to a distant gorge, the refuge to which SkyClan's survivors had fled. There they find SkyClan scattered and forgotten, its descendants living as loners and kittypets, and Firestar undertakes the painstaking work of rebuilding the lost Clan from the ground up — recruiting cats, teaching them the warrior code, appointing a leader (Leafstar), and helping them defeat a plague of rats that threatens their survival. Along the way Firestar uncovers painful truths about the Clans' past and his own connection to it, and he returns home having restored a Clan and, unbeknownst to him at first, with Sandstorm expecting the kits who will become Leafpool and Squirrelflight.",
      themes: [
        { name: "Restoring a Forgotten Wrong", text: "The novel's central theme is the moral duty to repair an old injustice: SkyClan's banishment was a wrong the Clans chose to forget, and Firestar's quest dramatizes how confronting and rebuilding what was lost is an act of justice and remembrance." },
        { name: "Founding and the Warrior Code", text: "By rebuilding a Clan from scattered loners and kittypets, the novel revisits the founding of Clan life and the meaning of the warrior code, showing how tradition is transmitted and a community is forged from nothing." },
        { name: "Memory and Buried History", text: "The forgotten fifth Clan develops the theme of buried history, the novel insisting that a people's past, however inconvenient, must be remembered and reckoned with." }
      ],
      motifs: [
        { name: "The Gorge", text: "SkyClan's gorge refuge recurs as the novel's defining setting, a place apart where the lost Clan endured and is reborn." },
        { name: "The Lost Clan", text: "SkyClan itself recurs as a motif of the forgotten and the reclaimed, its restoration the heart of the quest." },
        { name: "Fire and Leadership", text: "Firestar's flame imagery recurs as he carries the warrior code to a new Clan, the savior of the forest now the restorer of what the forest forgot." }
      ],
      criticalAnalysis:
        "Firestar's Quest, the first Super Edition, expands the saga's scope and mythology by sending its central hero on a self-contained quest that both deepens his character and retcons a rich new piece of Clan history into being. The novel's most consequential contribution is the invention of SkyClan, the forgotten fifth Clan, a piece of world-building that enlarges the saga's past and plants a seed — SkyClan's eventual return — that will not be harvested until A Vision of Shadows, many years later. As a standalone, the book benefits from its tighter focus on Firestar and Sandstorm, giving the couple room the ensemble arcs rarely allow, and the rebuilding of SkyClan revisits the series' foundational concerns — the transmission of the warrior code, the forging of community — from a fresh angle. The quest structure provides reliable momentum, and the moral framing of SkyClan's restoration as the repair of an old injustice gives the adventure thematic weight. If the novel's leisurely length and its essentially restorative (rather than tragic) stakes make it gentler than the main arcs, it succeeds as both a satisfying hero's interlude and a crucial act of mythological expansion, demonstrating the Super Editions' value as deep-history supplements to the central saga.",
      characterAnalysis: [
        { name: "Firestar", text: "Freed from the ensemble for a focused quest, Firestar reveals new depths as a leader driven by conscience to right an ancient wrong; rebuilding SkyClan tests his understanding of the warrior code and confirms his role as both savior and restorer." },
        { name: "Sandstorm", text: "Firestar's mate and companion on the quest, Sandstorm is given rare prominence, her steadiness, courage, and partnership with Firestar grounding the adventure and deepening their bond." },
        { name: "Leafstar", text: "A cat of mixed Clan and kittypet heritage who becomes the leader of the reborn SkyClan, Leafstar embodies the new Clan's blended identity and carries SkyClan's future beyond the novel." },
        { name: "The Gray-and-White StarClan Cat", text: "The mysterious ancestral messenger who sets Firestar's quest in motion, this figure embodies the buried history SkyClan represents and the duty to restore it." }
      ],
      studyQuestions: [
        "SkyClan's banishment was a wrong the Clans chose to forget. How does the novel frame Firestar's quest as an act of justice and remembrance?",
        "Rebuilding a Clan from loners and kittypets revisits the founding of Clan life. What does the novel reveal about how the warrior code is transmitted?",
        "How does the invention of a forgotten fifth Clan enlarge the saga's history and plant seeds for the future?",
        "The standalone format gives Firestar and Sandstorm room the ensemble arcs rarely allow. What does the novel reveal about them as a couple?",
        "Why does the novel frame buried history as something that must be remembered and reckoned with rather than left forgotten?"
      ],
      mostIntriguing:
        "The most intriguing element is the revelation that the forest once held five Clans, not four, and that SkyClan's banishment was an injustice the other Clans deliberately forgot. By retroactively inserting a lost Clan into the saga's history, the novel reframes the four-Clan world the reader has always known as incomplete and morally compromised, and it plants a seed — SkyClan's eventual return to the lake — that would not pay off for nearly a decade of publication, a remarkable act of long-range world-building.",
      quoteCards: [
        { quote: "There were five Clans in the forest once — and the warriors who forgot the fifth left a wound that only you can heal.", speaker: "StarClan's charge to Firestar", context: "The revelation of the forgotten SkyClan that sends Firestar on his quest to restore the lost Clan." }
      ],
      timelinePlacement:
        "Firestar's Quest is set between The Darkest Hour and Midnight, in the interval after Firestar secures the forest and before the Great Journey. It invents SkyClan and the gorge, establishes Leafstar, and quietly sets up the birth of Leafpool and Squirrelflight, whose storylines drive The New Prophecy and Power of Three. SkyClan's restoration here is the distant seed of the fifth Clan's return in A Vision of Shadows.",
      comparisons: [
        { work: "The Aeneid", author: "Virgil", text: "A hero charged by the divine to found or restore a people, undertaking a long journey to build a community destined to endure, parallels Firestar's quest to rebuild SkyClan." },
        { work: "The Lord of the Rings: The Return of the King", author: "J. R. R. Tolkien", text: "The restoration of a lost or diminished people and the righting of an ancient wrong, framed as the rightful work of a proven hero, echoes the novel's themes of renewal and remembrance." }
      ]
    }
  },

  {
    id: "se-bluestars-prophecy",
    title: "Bluestar's Prophecy",
    arc: "Super Editions",
    arcKey: "super",
    pubOrder: 50,
    arcOrder: 2,
    timelineOrder: 6.4, // ends just as Into the Wild begins
    publicationYear: 2009,
    povCharacter: "Bluestar (Bluekit / Bluefur)",
    locationKey: "forest-thunderclan",
    accentColor: "#b8902f",
    type: "superEdition",
    analysis: {
      plotSummary:
        "This prequel traces the long, tragic life of Bluestar, from her kithood as Bluekit through her rise to leadership of ThunderClan, ending at the very moment Into the Wild begins. As a young cat, Bluefur is shaped by love and loss: the death of her mother, and most devastatingly the death of her beloved sister Snowfur, mark her early life with grief. As she matures into a gifted and ambitious warrior, she comes into conflict with the brutal, power-hungry Thistleclaw, whose violent vision for ThunderClan she is determined to thwart. To do so, Bluefur makes the most agonizing sacrifice of her life: she gives up her three newborn kits — Mistykit, Stonekit, and Mosskit — sending them across the river to be raised in RiverClan by their father Oakheart, so that she can become deputy and block Thistleclaw's path to power, though the journey costs little Mosskit her life. Bluefur's sacrifice secures her the deputyship and, in time, the leadership, but it leaves her forever marked by guilt and hidden grief. The novel ends as Bluestar, now leader, receives the prophecy that fire will save her Clan and first glimpses the kittypet Rusty — the threshold of the entire saga.",
      themes: [
        { name: "Sacrifice and Its Cost", text: "Bluestar's giving up of her kits to thwart Thistleclaw makes sacrifice the novel's central theme, dramatizing the terrible price of putting Clan above self and the lifelong guilt and grief such a sacrifice exacts." },
        { name: "Ambition and Its Dangers", text: "Thistleclaw's brutal hunger for power develops the theme of dangerous ambition, the violent vision Bluefur sacrifices everything to prevent, foreshadowing the tyrants the saga will face." },
        { name: "Grief and Endurance", text: "The deaths of Snowfur, Mosskit, and others make grief a sustained theme, the accumulating losses that shape Bluestar into the wise but sorrow-haunted leader the original arc inherits." }
      ],
      motifs: [
        { name: "The River Crossing", text: "Bluefur's carrying of her kits across the river recurs as the novel's defining, heartbreaking image, the boundary at which she surrenders her family for her Clan." },
        { name: "Hidden Grief", text: "Bluestar's concealed sorrow recurs as a motif throughout, the private cost of her public sacrifice carried in silence." },
        { name: "Fire Foretold", text: "The closing prophecy of fire recurs as the motif binding the prequel to the saga's beginning, Bluestar's life converging on the moment Rusty enters the forest." }
      ],
      criticalAnalysis:
        "Bluestar's Prophecy is among the most admired Super Editions, a prequel that transforms a beloved but somewhat distant figure from the original arc into a fully realized tragic protagonist whose sacrifices retroactively deepen everything the reader thought they knew. The novel's great achievement is dramatic irony at the level of the whole saga: readers of Into the Wild know Bluestar as a wise, weary, ultimately unraveling leader, and this book supplies the devastating backstory — the dead sister, the surrendered kits, the lost daughter, the thwarting of Thistleclaw — that explains her hidden grief and foreshadows her later collapse. The central sacrifice, Bluefur's surrender of her kits across the river, is rendered with genuine anguish and ranks among the saga's most affecting sequences. By ending precisely where Into the Wild begins, the novel functions as a seamless prologue, recontextualizing the original arc's opening and enriching the reader's understanding of Bluestar's choices, particularly her instant trust in the kittypet Rusty. If the prequel's outcome is foreordained, that inevitability is the source of its tragic power; the reader watches a young cat's idealism and love eroded by loss and sacrifice into the burdened leader they already know, making the book a masterclass in how a prequel can deepen rather than merely extend a story.",
      characterAnalysis: [
        { name: "Bluefur / Bluestar", text: "The novel's tragic protagonist, Bluefur is transformed from an idealistic young cat into ThunderClan's sorrow-haunted leader through a series of devastating losses and the supreme sacrifice of her kits, her hidden grief explaining the wise, weary Bluestar of the original arc." },
        { name: "Snowfur", text: "Bluefur's beloved sister, whose early death is one of the formative griefs of Bluestar's life, embodying the love and loss that shape the protagonist." },
        { name: "Thistleclaw", text: "The brutal, power-hungry warrior whose violent vision for ThunderClan Bluefur sacrifices everything to thwart, his ambition the danger that drives the novel's central choice." },
        { name: "Oakheart", text: "The RiverClan warrior Bluefur loves and the father of her kits, to whom she surrenders them; their forbidden bond and the children it produces (including Mistystar) ripple through the saga." }
      ],
      studyQuestions: [
        "Bluefur gives up her kits to thwart Thistleclaw. How does the novel dramatize the terrible cost of putting Clan above self?",
        "How does knowing Bluestar's backstory recontextualize her choices in Into the Wild, particularly her trust in Rusty?",
        "Thistleclaw embodies dangerous ambition. How does his threat foreshadow the tyrants the saga will face?",
        "The novel ends exactly where Into the Wild begins. How does this structure make it function as a prologue to the whole saga?",
        "How does the accumulation of grief across the novel shape Bluestar into the leader the original arc inherits?"
      ],
      mostIntriguing:
        "The most intriguing element is the novel's saga-wide dramatic irony: because the reader already knows Bluestar's eventual fate — her wisdom, her hidden sorrow, her tragic unraveling in A Dangerous Path — every loss and sacrifice in the prequel lands with foreordained weight. The surrender of her kits across the river is devastating precisely because the reader understands it as the wound that will define the rest of her life, making the book a study in how a prequel can deepen a known story by revealing the cost behind a familiar face.",
      quoteCards: [
        { quote: "I gave up my kits to save my Clan — and I have carried that grief in silence ever since.", speaker: "Bluestar", context: "The hidden sorrow at the heart of Bluestar's sacrifice, surrendering her kits to RiverClan to thwart Thistleclaw and become deputy." }
      ],
      timelinePlacement:
        "Bluestar's Prophecy is a prequel set in the generation before The Prophecies Begin, ending at the exact moment Into the Wild opens with the fire prophecy and Rusty's arrival. It supplies the backstory for Bluestar, Mistystar, and the long shadow of Thistleclaw, and it deepens the original arc by revealing the grief and sacrifice behind ThunderClan's leader, making it an essential companion to the saga's beginning.",
      comparisons: [
        { work: "The Godfather Part II", author: "Mario Puzo / Francis Ford Coppola", text: "A prequel that deepens a known figure by tracing the formative sacrifices and losses that hardened them into the powerful, burdened character the audience already knows, parallels the structure and effect of Bluestar's Prophecy." },
        { work: "Sophie's Choice", author: "William Styron", text: "The unbearable sacrifice of giving up one's own children, and the lifelong, concealed grief that follows, resonates powerfully with Bluefur's surrender of her kits across the river." }
      ]
    }
  },

  {
    id: "se-skyclans-destiny",
    title: "SkyClan's Destiny",
    arc: "Super Editions",
    arcKey: "super",
    pubOrder: 51,
    arcOrder: 3,
    timelineOrder: 12.7, // after Firestar's Quest, the rebuilt SkyClan in the gorge
    publicationYear: 2010,
    povCharacter: "Leafstar",
    locationKey: "gorge",
    accentColor: "#b8902f",
    type: "superEdition",
    analysis: {
      plotSummary:
        "Set after Firestar's departure, this novel follows Leafstar and the reborn SkyClan as they struggle to establish a stable, lasting community in the gorge and to define what kind of Clan they will be. Leafstar grapples with the challenges of leadership: enforcing the warrior code among cats of mixed heritage, integrating the 'daylight-warriors' (cats who live partly as kittypets with Twolegs and serve the Clan by day), and holding her young Clan together against internal tensions and external threats. When a mysterious and persuasive cat arrives stirring discontent and challenging Leafstar's authority and the Clan's fragile unity, she must defend both the warrior code and her own fitness to lead, navigating doubt, dissent, and danger. The novel tests whether the restored SkyClan can become a true Clan in its own right rather than merely a project of Firestar's, and it deepens Leafstar as a leader forging her Clan's identity through trial. It ends with SkyClan more firmly established and Leafstar more confident in her leadership, the gorge Clan having weathered the challenges to its cohesion and proven its right to endure.",
      themes: [
        { name: "Forging a Clan's Identity", text: "The novel's central theme is the work of becoming a true Clan, Leafstar and SkyClan defining their own identity and traditions rather than merely inheriting Firestar's blueprint, and proving they can endure on their own." },
        { name: "The Code and Its Adaptation", text: "The integration of daylight-warriors develops the theme of the warrior code's adaptation, SkyClan's unusual circumstances forcing questions about how rigid or flexible Clan law must be to fit a community's real life." },
        { name: "Leadership and Self-Doubt", text: "Leafstar's struggles with dissent and her own fitness to lead frame the theme of leadership tested by doubt, the maturing of a leader who must defend her authority and her Clan's unity." }
      ],
      motifs: [
        { name: "The Gorge", text: "SkyClan's gorge home recurs as the novel's setting and symbol, the distinctive territory shaping the Clan's identity and challenges." },
        { name: "Daylight-Warriors", text: "The cats who live partly with Twolegs recur as a motif of SkyClan's blended, unconventional nature, embodying the questions of belonging and the code the novel raises." },
        { name: "The Disruptive Stranger", text: "The persuasive newcomer who stirs discontent recurs as a motif of the threat to fragile unity, testing Leafstar's leadership and the Clan's cohesion." }
      ],
      criticalAnalysis:
        "SkyClan's Destiny continues the SkyClan thread begun in Firestar's Quest, shifting focus to Leafstar and the difficult, unglamorous work of making a restored Clan into a self-sustaining community. The novel's most interesting contribution is thematic: by centering the 'daylight-warriors' and the integration of cats with one paw in the Twoleg world, it pushes the saga's perennial questions about the warrior code in a fresh direction, asking how rigidly the code must be applied to a Clan whose circumstances differ from the lake and forest norms — a question of adaptation that anticipates the code reforms of much later arcs. Leafstar is developed with care as a leader learning to trust her own judgment amid dissent and self-doubt, and the novel's focus on internal cohesion rather than external war gives it a quieter, more political character than most Super Editions. As a standalone, it can feel somewhat insular — its stakes are SkyClan's stability rather than the saga's fate — and readers invested mainly in the lake Clans may find it a detour, but its thoughtful engagement with how a community forges its own identity and adapts its traditions gives it real value, and it strengthens SkyClan as a Clan in its own right ahead of its eventual return to the central saga.",
      characterAnalysis: [
        { name: "Leafstar", text: "The leader of the reborn SkyClan, Leafstar matures across the novel from Firestar's appointee into a confident leader in her own right, defending the warrior code and her Clan's unity against dissent and doubt." },
        { name: "The Daylight-Warriors", text: "Cats who live partly with Twolegs and serve SkyClan by day, they collectively embody the Clan's blended identity and the novel's questions about belonging and the adaptability of the code." },
        { name: "The Disruptive Newcomer", text: "A persuasive cat who challenges Leafstar's authority and stirs discontent, testing the fragile unity of the young Clan and forcing Leafstar to prove her leadership." },
        { name: "SkyClan", text: "The reborn Clan functions almost as a collective protagonist, its struggle to become a true and lasting community the heart of the novel." }
      ],
      studyQuestions: [
        "SkyClan must become a true Clan rather than merely Firestar's project. How does the novel dramatize the work of forging a community's own identity?",
        "The daylight-warriors raise questions about the warrior code's flexibility. How does SkyClan's situation push the saga's treatment of the code in a new direction?",
        "How does Leafstar's struggle with dissent and self-doubt develop the theme of leadership tested?",
        "Why does the novel's focus on internal cohesion rather than external war give it a different character from most Super Editions?",
        "How does strengthening SkyClan as a Clan in its own right prepare for its eventual return to the central saga?"
      ],
      mostIntriguing:
        "The most intriguing element is the daylight-warriors — cats who live partly as kittypets with Twolegs yet serve SkyClan as warriors by day. This unconventional arrangement directly challenges the saga's usually rigid line between Clan cat and kittypet, forcing SkyClan to adapt the warrior code to its real circumstances, and it anticipates by many years the saga's later willingness, in The Broken Code and A Starless Clan, to question and revise the code itself — making this quieter Super Edition an early, thoughtful exploration of whether tradition must bend to fit a community's life.",
      quoteCards: [
        { quote: "A Clan is not built by one cat's command, but by every cat who chooses, each day, to belong to it.", speaker: "Leafstar", context: "Her dawning understanding that SkyClan must forge its own identity and earn its cohesion, not merely inherit Firestar's blueprint." }
      ],
      timelinePlacement:
        "SkyClan's Destiny is set after Firestar's Quest, following the reborn SkyClan in the gorge before the events of the lake-era arcs. It develops Leafstar and SkyClan's identity in the years before the Clan's eventual journey to the lake in A Vision of Shadows, and its exploration of adapting the warrior code anticipates the code reforms of the saga's later arcs.",
      comparisons: [
        { work: "The Federalist Papers", author: "Hamilton, Madison, and Jay", text: "The working-out of how a newly founded community should govern itself, adapt its laws, and hold together against internal faction parallels SkyClan's struggle to forge a stable identity." },
        { work: "Little Town on the Prairie", author: "Laura Ingalls Wilder", text: "The patient labor of building a stable community and its institutions in a distinctive frontier setting, against practical and social challenges, resonates with SkyClan's establishment in the gorge." }
      ]
    }
  },

  {
    id: "se-crookedstars-promise",
    title: "Crookedstar's Promise",
    arc: "Super Editions",
    arcKey: "super",
    pubOrder: 52,
    arcOrder: 4,
    timelineOrder: 6.0, // RiverClan in the generation before the original arc
    publicationYear: 2011,
    povCharacter: "Crookedstar (Stormkit / Crookedjaw)",
    locationKey: "forest-riverclan",
    accentColor: "#b8902f",
    type: "superEdition",
    analysis: {
      plotSummary:
        "This prequel chronicles the tragic life of Crookedstar, the RiverClan leader, from his kithood as Stormkit. After an accident shatters his jaw and leaves him disfigured, the young cat — now called Crookedjaw — is rejected by his bitter mother and made to feel worthless, and into this vulnerability steps Mapleshade, a vengeful spirit from the Dark Forest who appears to him in dreams as a guide. Mapleshade extracts from him a terrible promise: in exchange for the greatness she dangles before him — strength, status, and the leadership of RiverClan — Crookedjaw unknowingly binds himself to a curse, and one by one the cats he loves most are taken from him through a string of deaths that haunt his rise. He becomes a warrior, then deputy, then Crookedstar, leader of RiverClan, achieving everything Mapleshade promised, but at the devastating cost of his loved ones, including, in time, his daughter Silverstream, who dies giving birth to Graystripe's kits. Only late in his life does Crookedstar grasp the full cruelty of the bargain and confront Mapleshade, refusing her hold over him, and the novel ends with his death and his reunion in StarClan with the loved ones his promise had cost him.",
      themes: [
        { name: "Manipulation and the Faustian Bargain", text: "Mapleshade's exploitation of a vulnerable cat makes the corrupting bargain the novel's central theme, a Faustian deal in which promised greatness is paid for in the lives of loved ones, dramatizing how despair and the hunger for worth can be weaponized by evil." },
        { name: "Rejection and the Hunger for Worth", text: "Crookedjaw's rejection by his mother and his disfigurement develop the theme of the wound of feeling worthless, the vulnerability through which Mapleshade gains her hold and which drives his desperate ambition." },
        { name: "Grief and the Price of Greatness", text: "The string of deaths that accompanies Crookedstar's rise frames the theme of greatness bought with loss, the unbearable cost of a destiny achieved at the expense of everything one loves." }
      ],
      motifs: [
        { name: "The Broken Jaw", text: "Crookedstar's disfigurement recurs as the novel's defining image, the wound that marks him as an outsider and opens the door to Mapleshade's manipulation." },
        { name: "Mapleshade's Whispers", text: "The Dark Forest spirit's dream-visitations recur as a motif of insidious corruption, the false guidance that binds Crookedstar to his ruinous promise." },
        { name: "Loved Ones Lost", text: "The recurring deaths of those Crookedstar holds dear recur as the motif of his curse, the price exacted for the greatness he was promised." }
      ],
      criticalAnalysis:
        "Crookedstar's Promise is among the darkest and most emotionally harrowing Super Editions, a tragedy that uses the life of a secondary figure from the original arc to explore manipulation, despair, and the unbearable cost of ambition extracted from vulnerability. The novel's central achievement is its villain: Mapleshade, a Dark Forest spirit, preys on a disfigured, rejected kit's hunger for worth, binding him to a Faustian promise whose true terms — the deaths of his loved ones — are revealed only gradually and cruelly, making her one of the saga's most chilling antagonists and deepening the Dark Forest mythology that Omen of the Stars would later expand. By framing Crookedstar's entire celebrated rise as the product of a curse he did not understand, the novel reframes achievement itself as potentially tragic, and the accumulating deaths — culminating in Silverstream's, which the reader of the original arc already knows — give the book a relentless, foreordained sorrow. Hunter handles Crookedstar's eventual recognition and defiance of Mapleshade with care, granting him a measure of redemption and a consoling reunion in StarClan that tempers the darkness. As a standalone, the novel's unremitting tragedy makes it a demanding read, but its psychological depth, its memorable villain, and its exploration of how evil exploits pain make it one of the most substantial Super Editions.",
      characterAnalysis: [
        { name: "Crookedstar", text: "The novel's tragic protagonist, Crookedstar rises from a rejected, disfigured kit to the leadership of RiverClan, achieving greatness at the devastating cost of his loved ones; his late recognition and defiance of Mapleshade grant him hard-won redemption." },
        { name: "Mapleshade", text: "The vengeful Dark Forest spirit who manipulates Crookedstar through a Faustian promise, Mapleshade is one of the saga's most chilling villains, preying on vulnerability and exacting a cruel price for promised greatness." },
        { name: "Silverstream", text: "Crookedstar's daughter, whose death giving birth to Graystripe's kits — known to readers of the original arc — is one of the curse's cruelest tolls, linking the prequel to the saga's established tragedies." },
        { name: "Oakheart", text: "Crookedstar's brother, part of the family whose bonds and losses shape the protagonist's tragic life within RiverClan." }
      ],
      studyQuestions: [
        "Mapleshade extracts a Faustian promise from a vulnerable kit. How does the novel dramatize the way evil exploits despair and the hunger for worth?",
        "Crookedjaw's rejection and disfigurement open the door to manipulation. How does the novel develop the wound of feeling worthless?",
        "Crookedstar's celebrated rise is revealed to be a curse. How does the novel reframe achievement itself as potentially tragic?",
        "Silverstream's death is already known to readers of the original arc. How does that foreknowledge deepen the novel's sorrow?",
        "How does Crookedstar's late defiance of Mapleshade grant him redemption, and how does the StarClan reunion temper the tragedy?"
      ],
      mostIntriguing:
        "The most intriguing element is the cruelty of Mapleshade's bargain: Crookedstar is promised greatness and achieves all of it, yet the unspoken price is the death of everyone he loves, a curse whose terms he does not understand until they have nearly all been paid. By making the villain's manipulation a Faustian deal whose horror lies in its hidden cost, the novel turns a celebrated leader's entire life into a tragedy and deepens the Dark Forest mythology, revealing the patient, intimate evil that Omen of the Stars would later unleash on all the Clans.",
      quoteCards: [
        { quote: "I promised you greatness — I never promised it would not cost you everything you love.", speaker: "Mapleshade", context: "The cruel revelation of the true terms of the bargain that shaped Crookedstar's tragic rise to leadership." }
      ],
      timelinePlacement:
        "Crookedstar's Promise is a prequel set in the generation before The Prophecies Begin, chronicling RiverClan's leader across the years leading up to the original arc. It deepens the Dark Forest mythology through Mapleshade, provides the backstory for Silverstream (whose death drives Forest of Secrets), and enriches the RiverClan history the saga assumes, making it a key companion to the early arcs.",
      comparisons: [
        { work: "The Tragical History of Doctor Faustus", author: "Christopher Marlowe", text: "The bargain in which a vulnerable figure trades his soul, in effect, for promised greatness and power, only to pay a ruinous price, directly parallels Crookedstar's Faustian promise to Mapleshade." },
        { work: "The Picture of Dorian Gray", author: "Oscar Wilde", text: "The theme of a corrupting bargain that grants worldly success while exacting a hidden, devastating moral and personal cost resonates with the curse that shapes Crookedstar's life." }
      ]
    }
  },

  {
    id: "se-yellowfangs-secret",
    title: "Yellowfang's Secret",
    arc: "Super Editions",
    arcKey: "super",
    pubOrder: 53,
    arcOrder: 5,
    timelineOrder: 6.2, // ShadowClan in the generation before the original arc
    publicationYear: 2012,
    povCharacter: "Yellowfang (Yellowkit / Yellowpaw)",
    locationKey: "forest-shadowclan",
    accentColor: "#b8902f",
    type: "superEdition",
    analysis: {
      plotSummary:
        "This prequel tells the tragic life of Yellowfang, the cantankerous ShadowClan medicine cat readers first meet in Into the Wild. Born Yellowkit to ShadowClan, she discovers as a young cat that she possesses an unusual and burdensome gift: the ability to feel other cats' physical pain as if it were her own. Though urged toward the medicine-cat path because of this sensitivity, the headstrong Yellowpaw is determined to be a warrior, but the agony she experiences in battle, feeling every wound she inflicts and receives, eventually drives her to accept her destiny as a healer. Her life is marked by a forbidden love affair with the ShadowClan warrior Raggedstar, which violates the medicine cat's vow of celibacy and produces kits she must give up — most fatefully Brokenkit, who grows into Brokenstar, the brutal tyrant whose cruelty Yellowfang will one day be forced to confront. The novel traces the accumulating griefs and secrets of Yellowfang's life — her hidden motherhood, her doomed love, and her dawning horror at the monster her son becomes — culminating in the tragedies that drive her toward exile and, ultimately, toward the ThunderClan refuge where the original arc finds her.",
      themes: [
        { name: "Burden of Empathy", text: "Yellowfang's power to feel others' pain makes empathy as burden the novel's central theme, the gift that makes her a healer also a source of suffering, dramatizing the cost of feeling others' wounds as one's own." },
        { name: "Forbidden Love and Secret Motherhood", text: "Yellowfang's affair with Raggedstar and the kits she must hide develop the theme of forbidden love and concealed motherhood, the medicine cat's broken vow and the secret children that shape her grief." },
        { name: "A Mother and a Monster", text: "Yellowfang's relationship to Brokenstar frames the theme of a parent confronting the evil of her child, the unbearable horror of having borne the tyrant she must oppose." }
      ],
      motifs: [
        { name: "Feeling Others' Pain", text: "Yellowfang's empathic power recurs as the novel's defining motif, the gift and curse that shapes her path from would-be warrior to healer." },
        { name: "Hidden Kits", text: "Yellowfang's secret motherhood recurs as a motif of concealment and grief, the children she cannot acknowledge, above all the son who becomes a monster." },
        { name: "The Coming Tyrant", text: "Brokenkit's growth toward the tyrant Brokenstar recurs as a motif of dread, the monster taking shape from the kit Yellowfang was forced to give up." }
      ],
      criticalAnalysis:
        "Yellowfang's Secret deepens one of the original arc's most memorable supporting characters, transforming the gruff, exiled medicine cat of Into the Wild into a tragic figure whose backstory recontextualizes her every later appearance. The novel's most affecting achievement is the saga-wide dramatic irony it shares with Bluestar's Prophecy: readers know Yellowfang as the cat who will help bring down Brokenstar and later serve ThunderClan, and this prequel supplies the devastating private history — her empathic burden, her forbidden love, her secret motherhood, and above all her horror at having borne the tyrant Brokenstar — that explains her bitterness and her grief. The central tragedy, a mother forced to confront the monstrousness of the son she was made to give up, is among the saga's darkest premises, and Hunter handles it with appropriate gravity. The empathic gift is a clever device, making Yellowfang's turn from warrior to healer both literal and thematic, and grounding her medicine-cat vocation in a genuinely original source of suffering. As a standalone, the novel's relentless accumulation of grief and secrecy makes it a heavy read, and its outcome is foreordained for anyone who knows the original arc, but that inevitability is its tragic engine, and the book stands as a strong example of the Super Editions' power to deepen the saga's established figures.",
      characterAnalysis: [
        { name: "Yellowfang", text: "The novel's tragic protagonist, Yellowfang is transformed from a headstrong would-be warrior into a grief-burdened medicine cat by her empathic gift, her forbidden love, and her secret motherhood, her backstory explaining the bitter, sorrowful cat of the original arc." },
        { name: "Raggedstar", text: "The ShadowClan warrior and leader Yellowfang loves in violation of her vows, the father of her hidden kits, whose affair shapes her grief and produces the son who becomes Brokenstar." },
        { name: "Brokenstar", text: "Yellowfang's son, given up as a kit and grown into the brutal tyrant of the original arc; her dawning horror at the monster she bore is the novel's darkest and most tragic thread." },
        { name: "ShadowClan", text: "Yellowfang's birth Clan, whose harsh world and politics shape her life and her eventual exile toward the ThunderClan refuge where the original arc finds her." }
      ],
      studyQuestions: [
        "Yellowfang's power to feel others' pain is both gift and curse. How does the novel develop the theme of empathy as burden?",
        "How does Yellowfang's forbidden love and secret motherhood shape her grief and her character?",
        "Yellowfang must confront the monstrousness of the son she bore. Why is this one of the saga's darkest premises?",
        "How does knowing Yellowfang from the original arc create dramatic irony throughout the prequel?",
        "How does the empathic gift make Yellowfang's turn from warrior to healer both literal and thematic?"
      ],
      mostIntriguing:
        "The most intriguing element is the tragic irony of Yellowfang's motherhood: forced to give up her kits because of her medicine-cat vows, she watches the son she could not raise grow into Brokenstar, the very tyrant she will later help destroy. That a healer defined by her power to feel others' pain must bear the unique anguish of having birthed the saga's cruelest villain — and ultimately oppose him — gives the novel a devastating moral weight, and it transforms the gruff exile of Into the Wild into one of the saga's most quietly tragic figures.",
      quoteCards: [
        { quote: "I gave life to the cruelest cat the forest has ever known — and I must be the one to stop him.", speaker: "Yellowfang", context: "The tragic heart of Yellowfang's secret: the tyrant Brokenstar is the son she was forced to give up." }
      ],
      timelinePlacement:
        "Yellowfang's Secret is a prequel set in the generation before The Prophecies Begin, tracing ShadowClan's future medicine cat up to the period when the original arc finds her exiled in ThunderClan. It supplies the backstory for Yellowfang and Brokenstar, deepening the ShadowClan conflict of Into the Wild and Fire and Ice, and enriching the reader's understanding of the cat who helps Firepaw from the saga's earliest books.",
      comparisons: [
        { work: "Frankenstein", author: "Mary Shelley", text: "The anguish of a creator confronting the monstrousness of the being they brought into the world, and the responsibility to stop it, resonates with Yellowfang's relationship to the son who becomes Brokenstar." },
        { work: "Beloved", author: "Toni Morrison", text: "The depiction of motherhood shadowed by impossible choices, loss, and the haunting consequences of a child given up under unbearable circumstances resonates with Yellowfang's secret and its grief." }
      ]
    }
  }
];
