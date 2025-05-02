import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from 'astro-icon'
import react from '@astrojs/react';
// import vercel from '@astrojs/vercel';
// import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ftrhost.github.io',
  base: '/fathir',
  integrations: [
    react(),
    mdx(),
    icon({
      iconDir: 'src/icons',
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
  ],
})
