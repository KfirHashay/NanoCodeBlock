import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [svelte(), dts({ entryRoot: 'packages/svelte/src', outDir: 'packages/svelte/dist' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/svelte/src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['svelte', '@nano-codeblock/core'],
    },
    outDir: 'packages/svelte/dist',
    emptyOutDir: true,
  },
});
