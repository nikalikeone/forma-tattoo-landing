// @ts-check
import { defineConfig } from 'astro/config';
import { env } from 'node:process';

// https://astro.build/config
export default defineConfig({
  site: env.PUBLIC_SITE_URL,
});
