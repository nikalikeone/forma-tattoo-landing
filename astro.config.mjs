// @ts-check
import { defineConfig } from 'astro/config';
import { env } from 'node:process';

const base = env.PUBLIC_BASE_PATH
  ? `${env.PUBLIC_BASE_PATH.replace(/\/+$/, '')}/`
  : '/';

// https://astro.build/config
export default defineConfig({
  site: env.PUBLIC_SITE_URL,
  base,
});
