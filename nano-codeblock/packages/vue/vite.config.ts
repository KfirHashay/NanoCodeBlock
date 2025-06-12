import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NanoCodeBlockVue',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['vue', '@nano-codeblock/core'],
      output: {
        globals: {
          vue: 'Vue',
          '@nano-codeblock/core': 'NanoCodeBlockCore',
        },
      },
    },
  },
});
