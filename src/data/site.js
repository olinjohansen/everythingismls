// Site-wide constants. The show's platform URLs live here only — the header,
// footer and the hero read from this one place.
// TODO: replace the remaining '#' entries once those feeds are live.
export const site = {
  name: 'Everything is MLS',
  tagline: 'A podcast about Multi-Level Selection',
  description:
    'A podcast about David Sloan Wilson’s Multi-Level Selection — and everything it explains.',
  platforms: {
    spotify: 'https://open.spotify.com/show/4XQMhP3tUH2sFpxqb4Xi6S',
    youtube: 'https://www.youtube.com/@Everything_is_MLS',
    apple: '#', // TODO: the last dead link — nav and footer only.
  },
};

// Only the platforms with a real URL get a button; '#' entries still render
// so the layout is stable before launch.
export const platformLinks = [
  { key: 'spotify', label: 'Spotify', href: site.platforms.spotify },
  { key: 'youtube', label: 'YouTube', href: site.platforms.youtube },
  { key: 'apple', label: 'Apple', href: site.platforms.apple },
];
