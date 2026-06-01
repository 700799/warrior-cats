# The Warriors Atlas

An immersive, single-page site that maps Erin Hunter's **Warrior Cats** saga and
gives each book a full **SparkNotes / CliffsNotes–style literary analysis**.

- A stylized **3D world** (built with [Babylon.js](https://www.babylonjs.com/))
  shows the Forest and Lake Territories, the mountains, and the lake. Clickable
  pins mark where each book is set.
- **Filter pills** let you browse every book by series arc, or search by title.
- Selecting a book opens a **slide-in reading drawer** with: Plot Summary,
  Themes, Motifs, Critical Analysis, Character Analysis, Study Questions,
  "Most Intriguing", **Quote Cards**, Timeline placement, and Comparisons to
  other famous books — all in full, complete-sentence prose.
- Every book ends with a **Relationship Map**: a clan-grouped SVG graph of that
  book's key cats, colour-coded by Clan and connected by relationship type
  (family, mates, mentor, ally, rival). Hover a cat to highlight its ties. The
  per-book graph data lives in `data/relationships.js`; the renderer is
  `js/graph.js`.

## Status

This site is built and populated **arc by arc**. The full app — 3D world,
filter pills, reading drawer, and data pipeline — is complete. Authored book
analyses currently cover:

- ✅ **The Prophecies Begin** (publication order 1–6)
- ✅ **The New Prophecy** (7–12)
- ✅ **Power of Three** (13–18)
- ✅ **Omen of the Stars** (19–24)
- ✅ **Dawn of the Clans** (the prequel — published 25–30, but *chronologically first*)
- ✅ **A Vision of Shadows** (31–36)
- ✅ **The Broken Code** (37–42)
- ✅ **A Starless Clan** (43–48)

Books are tagged with both a publication order and a **saga (chronological)
order**. Dawn of the Clans, though published fifth, is the earliest story in the
saga (the founding of the Clans), so it sorts first in the "All" view and shows
saga order #1–6.

All eight main arcs are now complete, and the **Super Editions** are being added
in batches (10 so far: Firestar's Quest, Bluestar's Prophecy, SkyClan's Destiny,
Crookedstar's Promise, Yellowfang's Secret, Tallstar's Revenge, Bramblestar's
Storm, Moth Flight's Vision, Hawkwing's Journey, Tigerheart's Shadow). Remaining
Super Editions and the **Novellas** appear in the filter bar marked "soon" and
are added in subsequent updates. Each new batch is a single `data/books/*.js`
file.

Each book's drawer opens with a **hand-coded SVG illustration** (vector cats in
an action pose that ties into the story, tinted to the book's Clan colour) and a
**"Find this book on warriorcats.com" link**. The landing view shows an
illustrated **cover splash**. Art lives in `js/art.js` (no external image files).

Super Editions slot into their true chronological place in the saga (via
fractional `timelineOrder` values), so the "Saga order" shown for each book is a
clean computed rank across the whole catalogue.

## Run it locally

There is **no build step**. Because the app uses ES modules, open it through a
local web server (not `file://`):

```bash
cd warrior-cats
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project layout

```
index.html            # single page: markup + pinned Babylon CDN + module scripts
css/styles.css        # layout, pills, reading drawer, typography, responsive, a11y
js/
  app.js              # entry: boot world, wire store, hash routing, validation
  store.js            # shared selection state + tiny pub-sub
  scene.js            # Babylon engine/scene/camera/lights/procedural terrain
  markers.js          # clickable location pins + floating labels + picking
  panel.js            # renders the analysis drawer from a book object
  pills.js            # arc group pills + book cloud + search
data/
  arcs.js             # arc metadata + ordering + colour
  locations.js        # locationKey -> { name, 3D position, colour }
  books/
    index.js          # aggregates arcs -> BOOKS, lookups, dev validator
    arc-prophecies.js # The Prophecies Begin analyses
assets/favicon.svg
```

## Adding an arc

1. Create `data/books/arc-<name>.js` exporting an array of book objects that
   follow the schema documented at the top of `arc-prophecies.js`.
2. Import and spread it into `BOOKS` in `data/books/index.js`.

Everything else — pills, 3D pins, and the drawer — updates automatically.

## Deploying to GitHub Pages

Settings → Pages → **Deploy from a branch** → branch `main`, folder `/ (root)`.
A `.nojekyll` file is included so all files serve as-is. All asset paths are
relative, so the site works from a project subpath
(`https://<user>.github.io/warrior-cats/`).
