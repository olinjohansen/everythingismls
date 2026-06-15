// Episode data. New episodes get a new object here (and a season number).
// The newest episode is index 0.
export const episodes = [
  {
    number: '007',
    slug: 'seattle-is-a-superorganism',
    season: 1,
    title: 'Seattle Is a Superorganism',
    date: 'June 2, 2026',
    guest: 'David Sloan Wilson',
    description:
      'Why does one city solve collective problems its neighbors can’t? We take MLS down to street level — zoning fights, mutual-aid networks, the unwritten code of a four-way stop — and argue that a city is not a place. It’s a level of selection.',
    image: '/images/episode.jpg',
    youtubeUrl: '#',
    spotifyUrl: '#',
    appleUrl: '#',
    youtubeId: '', // when set, the episode page embeds the player
    highlight: {
      time: '41:18',
      quote:
        'A city doesn’t have a culture. A city is a tournament between cultures, and the ones that cooperate are winning faster than anyone noticed.',
      context: 'DSW on why neighborhoods out-evolve nations',
    },
    // paper slugs referenced in this episode (see src/data/papers.js)
    papers: ['ostrom-governing-commons', 'wilson-sober-altruism', 'major-transitions'],
  },
];

export const getEpisode = (slug) => episodes.find((e) => e.slug === slug);

// Distinct seasons present in the data, newest first — drives the season tabs.
export const seasons = [...new Set(episodes.map((e) => e.season))].sort((a, b) => b - a);
