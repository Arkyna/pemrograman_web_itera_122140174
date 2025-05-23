import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production'
    ? '/pemrograman_web_itera_122140174/Jhoel_122140174_pertemuan3/'
    : '/',
  build: {
    outDir: 'build_output',
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
}));
