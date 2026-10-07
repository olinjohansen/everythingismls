// Episode data — the single source of truth for the front page list and for
// every episode page. Newest episode is index 0.
//
// Full shape of an episode object:
//
//   number      '001'          zero-padded, shown large in cyan
//   slug        'my-episode'   becomes /episodes/my-episode, and must match
//                              the filename of src/shownotes/<slug>.md
//   season      1
//   title       string
//   date        'June 2, 2026' display string, shown as-is
//   guest       string | null  rendered as "With <guest>"
//   hosts       [string, …]
//   duration    '1h 25m'       optional, shown next to the date
//   image       '/images/…'    card + page artwork (put files in public/images)
//   description string         the intro paragraph: used on the card, at the
//                              top of the episode page, and for <meta>
//   youtubeId   'dQw4w9WgXcQ'  when set, the episode page embeds the player
//                              AND every chapter timestamp deep-links into it
//   links       { youtube, spotify, apple }  per-episode listen links
//   chapters    [{ time, title, note? }, …]  the timestamp list
//   transcript  string | null  paste the full transcript here when ready
//
// Everything else — guest bio, awards, corrections, stats, the full reference
// list, music, credits — lives in src/shownotes/<slug>.md and is rendered
// below the chapters. Chapters are here rather than in the markdown so each
// timestamp can become a YouTube deep link.
export const episodes = [
  {
    number: '001',
    slug: 'tinbergens-four-questions',
    season: 1,
    title: 'Raise Your Hand if You’re a Dumbass A/K/A Tinbergen’s Four Questions',
    // TODO: set the real release date before launch.
    date: 'October 2026',
    guest: 'David Sloan Wilson',
    hosts: ['Olin', 'Andy Poehlman'],
    duration: '1h 25m',
    // No `image`: the card and og:image use the YouTube thumbnail.

    description:
      'In our first episode, evolutionary biologist David Sloan Wilson walks us through Tinbergen’s four questions: mechanism, function, development and evolutionary history. Ask all four about anything and you can explain why it exists. We test it on ice cream, lactose tolerance, an E. coli experiment that has run since 1988 and a Paper Plane cocktail. Andy can’t help himself from asking David about Calvinism.',
    youtubeId: '2MJqiBGPHQM',
    links: {
      youtube: 'https://www.youtube.com/watch?v=2MJqiBGPHQM',
      // ?si=… share-tracking param dropped; the bare episode URL is canonical.
      spotify: 'https://open.spotify.com/episode/1BUloP404CZSXfylP6SJkd',
      apple: '', // no Apple feed yet; the button is left out rather than dead

    },

    chapters: [
      { time: '0:00', title: 'Intro' },
      { time: '1:31', title: 'Why everything is MLS' },
      { time: '5:15', title: 'Tinbergen’s four questions, in brief' },
      { time: '11:19', title: 'The four questions with David' },
      { time: '16:49', title: 'Who was Niko Tinbergen?' },
      { time: '17:05', title: 'Ethology and the 1973 Nobel Prize' },
      { time: '18:55', title: 'How vs. why: Mayr’s proximate and ultimate causes' },
      { time: '22:14', title: 'Evolutionary mismatch: why ice cream tastes so good' },
      { time: '27:22', title: 'Mendel and the modern synthesis' },
      { time: '28:07', title: 'Dobzhansky and the fruit fly' },
      { time: '37:50', title: 'Two bird brains: why ecology matters' },
      { time: '40:20', title: 'The E. coli long-term evolution experiment' },
      { time: '45:30', title: 'Path dependence and lactose tolerance' },
      { time: '51:38', title: 'Design principles for cooperative groups' },
      { time: '53:27', title: 'Drink break: the Paper Plane and the Last Word' },
      { time: '1:02:14', title: 'Darwin’s Cathedral' },
      { time: '1:04:41', title: 'Multilevel selection and superorganisms' },
      { time: '1:06:05', title: 'The body of Christ' },
      { time: '1:07:03', title: 'Holism vs. the selfish gene' },
      { time: '1:14:51', title: 'Where the word “religion” comes from' },
      { time: '1:15:46', title: 'The Axial Age' },
      { time: '1:18:28', title: 'Symbotypes: a genotype for culture' },
      { time: '1:19:39', title: 'Seven neck vertebrae' },
      { time: '1:21:05', title: 'Gulliver’s Travels and Calvin’s catechism' },
    ],

    // Paste the full transcript here when it's ready; until then the page shows
    // a "coming soon" note instead of an empty section.
    transcript: null,
  },
];

export const getEpisode = (slug) => episodes.find((e) => e.slug === slug);
