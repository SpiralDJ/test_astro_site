// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://spiraldj.github.io/test_astro_site',
  base: '/test_astro_site',
  integrations: [mdx()],
});
