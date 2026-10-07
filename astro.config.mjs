import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://everythingismls.com',
  // The front page is the episode archive now; keep the old /episodes URL alive.
  redirects: {
    '/episodes': '/',
  },
  integrations: [
    tailwind({
      // We control the base layer ourselves in src/styles/global.css
      applyBaseStyles: false,
    }),
  ],
});
