// Site-wide constants. The show's platform URLs live here only — the header,
// footer and the hero read from this one place.
export const site = {
  name: 'Everything is MLS',
  tagline: 'A podcast about Multi-Level Selection',
  description:
    'A podcast about David Sloan Wilson’s Multi-Level Selection — and everything it explains.',
  platforms: {
    spotify: 'https://open.spotify.com/show/4XQMhP3tUH2sFpxqb4Xi6S',
    youtube: 'https://www.youtube.com/@Everything_is_MLS',
    // Set this to the Apple Podcasts show URL and the Apple link reappears in
    // the nav and footer on its own. Left empty it is simply not rendered,
    // rather than shipping a link that goes nowhere.
    apple: '',
  },
};

const ORDER = [
  { key: 'spotify', label: 'Spotify' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'apple', label: 'Apple' },
];

// Only platforms with a real URL get a link — an empty entry is dropped.
export const platformLinks = ORDER.filter(({ key }) => site.platforms[key]).map((p) => ({
  ...p,
  href: site.platforms[p.key],
}));
