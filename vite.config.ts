import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { resolve } from 'path';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [houdini(), sveltekit()],
  resolve: {
    alias: {
      $fonts: resolve('./fonts'),
    },
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
};
export default config;
