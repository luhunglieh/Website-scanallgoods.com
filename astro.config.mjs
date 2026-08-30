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
  }
});