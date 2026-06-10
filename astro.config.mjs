import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://everythingismls.com',
  integrations: [
    tailwind({
      // We control the base layer ourselves in src/styles/global.css
      applyBaseStyles: false,
    }),
  ],
});
