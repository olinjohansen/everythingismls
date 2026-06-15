// Paper library data. relatedEpisodes back-links each paper to the episodes
// that reference it (number + slug for the badge link).
export const papers = [
  {
    slug: 'ostrom-governing-commons',
    title: 'Governing the Commons',
    authors: 'Elinor Ostrom',
    year: 1990,
    summary:
      'People sharing a limited resource — a fishery, a forest, a budget — don’t always wreck it. Given the right rules, ordinary communities govern themselves better than markets or governments do.',
    tags: ['Governance', 'Cooperation'],
    addedBy: 'Andy',
    relatedEpisodes: [{ number: '007', slug: 'seattle-is-a-superorganism' }],
  },
  {
    slug: 'wilson-sober-altruism',
    title: 'Unto Others',
    authors: 'Sober & Wilson',
    year: 1998,
    summary:
      'The book that put group selection back on the table. Real altruism exists, and natural selection can favor it — as long as it’s selection between groups, not just within them.',
    tags: ['Altruism', 'Group Selection'],
    addedBy: 'DSW',
    relatedEpisodes: [{ number: '007', slug: 'seattle-is-a-superorganism' }],
  },
  {
    slug: 'major-transitions',
    title: 'The Major Transitions in Evolution',
    authors: 'Maynard Smith & Szathmáry',
    year: 1995,
    summary:
      'Every big leap in life’s history — genes into cells, cells into bodies, bodies into societies — is the same trick repeated: a crowd of competitors becomes a single cooperating unit.',
    tags: ['Transitions', 'Cooperation'],
    addedBy: 'Olin',
    relatedEpisodes: [{ number: '007', slug: 'seattle-is-a-superorganism' }],
  },
];

export const getPaper = (slug) => papers.find((p) => p.slug === slug);
