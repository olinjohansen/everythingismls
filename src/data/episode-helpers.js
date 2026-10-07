import { site } from './site.js';

export const episodeHref = (episode) => `/episodes/${episode.slug}`;

// Card artwork and og:image. Defaults to the episode's YouTube thumbnail, so a
// new episode needs no artwork of its own — set `image` on the episode to
// override. maxresdefault is the full 1280x720 frame; it only exists when the
// video was uploaded at 720p or better, which ours are.
export const episodeImage = (episode) =>
  episode.image ||
  (episode.youtubeId
    ? `https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`
    : '/images/hero.jpg');

// Listen buttons for an episode: per-episode link if it has one, otherwise the
// show-level platform URL. Order is fixed so every card reads the same.
const PLATFORMS = [
  { key: 'youtube', label: '▸ YouTube' },
  { key: 'spotify', label: 'Spotify' },
  { key: 'apple', label: 'Apple' },
];

export const listenLinks = (episode) =>
  PLATFORMS.map(({ key, label }) => ({
    key,
    label,
    href: episode.links?.[key] || site.platforms[key] || '#',
  }));

// 'mm:ss' or 'h:mm:ss' → seconds. Returns null on anything unparseable so a
// malformed timestamp degrades to plain text instead of a broken link.
export const timeToSeconds = (time) => {
  const parts = String(time).split(':').map(Number);
  if (parts.length < 2 || parts.length > 3 || parts.some((n) => !Number.isFinite(n))) return null;
  return parts.reduce((total, n) => total * 60 + n, 0);
};

// Deep-link a chapter into the YouTube player when we have a video id.
export const chapterHref = (episode, time) => {
  if (!episode.youtubeId) return null;
  const seconds = timeToSeconds(time);
  if (seconds === null) return null;
  return `https://www.youtube.com/watch?v=${episode.youtubeId}&t=${seconds}s`;
};
