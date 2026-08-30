import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://luhunglieh.github.io',
  base: '/Website-scanallgoods.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  devToolbar: {
    enabled: false,
  },
  compressHTML: true,
  build: {
    format: 'file',
    assets: 'assets', // Use 'assets' instead of '_astro' to prevent GitHub Pages Jekyll underscore filtering
  }
});