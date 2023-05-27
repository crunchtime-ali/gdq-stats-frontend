import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import type { UserConfig } from 'vite';
import { resolve } from 'path';

const config: UserConfig = {
  plugins: [houdini(), sveltekit()],
  resolve: {
    alias: {
      $fonts: resolve('./static/fonts')
    }
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
};
export default config;

