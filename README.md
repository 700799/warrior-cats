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

## Status

This site is built and populated **arc by arc**. The full app — 3D world,
filter pills, reading drawer, and data pipeline — is complete. Authored book
analyses currently cover:

- ✅ **The Prophecies Begin** (books 1–6)
- ✅ **The New Prophecy** (books 7–12)
- ✅ **Power of Three** (books 13–18)
- ✅ **Omen of the Stars** (books 19–24)

Future arcs (Dawn of the Clans, A Vision of Shadows, and the rest, plus Super
Editions and Novellas) appear in the filter bar marked "soon" and are added in
subsequent updates. Each new arc is a single `data/books/arc-*.js` file.

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
