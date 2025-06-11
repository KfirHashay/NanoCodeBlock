import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue(), dts({ entryRoot: 'packages/vue/src', outDir: 'packages/vue/dist' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/vue/src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['vue', '@nano-codeblock/core'],
    },
    outDir: 'packages/vue/dist',
    emptyOutDir: true,
  },
});
