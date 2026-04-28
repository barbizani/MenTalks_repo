import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        relatorio: resolve(__dirname, 'relatorio-2025.html'),
        politica: resolve(__dirname, 'politica.html'),
      },
    },
  },
});
