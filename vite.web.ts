import { defineConfig } from 'vite';
import lit from '@vitejs/plugin-lit';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [lit(), dts({ entryRoot: 'packages/web/src', outDir: 'packages/web/dist' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/web/src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['lit', '@nano-codeblock/core'],
    },
    outDir: 'packages/web/dist',
    emptyOutDir: true,
  },
});
