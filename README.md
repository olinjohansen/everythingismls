# everythingismls

Astro + Tailwind site for the *Everything is MLS* podcast. Static build, deployed on Netlify.

```
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
```

## Structure

The site is two templates deep:

- **`/`** — brand header plus the full episode list (`src/pages/index.astro`).
- **`/episodes/<slug>`** — one page per episode: player, listen links, summary,
  key takeaways, show notes, references, transcript (`src/pages/episodes/[slug].astro`).

`/episodes` redirects to `/` (configured in `astro.config.mjs`), since the front
page is the archive.

## Adding an episode

Two files per episode:

1. **`src/data/episodes.js`** — add an object to the top of the `episodes`
   array. This carries the page header (number, title, date, guest, artwork),
   the listen links, and the chapter list. The comment block at the top of the
   file documents every field.
2. **`src/shownotes/<slug>.md`** — the show notes. The filename must match the
   episode's `slug`. Everything in it renders below the chapters: guest bio,
   awards, corrections, stats tables, the full reference list, music, credits.
   Write plain markdown; GFM tables, links and nested lists are all styled.

The front page list and the episode page both build from this. Sections with no
data simply don't render.

**Why chapters live in JS, not the markdown**: once an episode has a
`youtubeId`, every chapter timestamp becomes a deep link into the video at that
moment. That needs structured data, so the chapter table is the one part of the
show notes that isn't in the `.md`.

### Two gotchas

- **Heading anchors.** Every `## H2` in the markdown becomes an entry in the
  page's "Jump to" index automatically, and all headings get an id from their
  text. Two headings with the same text collide — the second silently becomes
  `#thing-1`. Watch out for sub-headings that repeat a section name (that's why
  "By the numbers" uses *Reference counts* and *Transcript stats*, not
  *References* and *Transcript*).
- **Don't put `.reveal` on the show-notes wrapper.** The scroll-reveal observer
  needs 12% of an element on screen before it fades it in. The show-notes block
  is many screens tall, so that threshold can never be met and the whole thing
  would stay invisible.

Show-level platform URLs live in `src/data/site.js`; an episode can override
them with its own `links`.

## Dormant pages

`src/pages/mls.astro`, `seattle-project.astro`, `library.astro`, `hosts.astro`
and `guests.astro` still build and are reachable by URL, but are deliberately
not linked from the nav or footer. They're parked for a later expansion of the
site — don't treat them as dead code.
