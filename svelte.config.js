import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter({
      // will create a Netlify Edge Function using Deno-based
      // rather than using standard Node-based functions
      edge: true
    }),
    alias: {
      $houdini: './$houdini'
    }
  }
};

export default config;
