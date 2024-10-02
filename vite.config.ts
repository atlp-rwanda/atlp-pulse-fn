import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import viteTsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  resolve: {
    alias: {
      'chart.js': 'chart.js/auto',
      crypto: 'crypto-browserify',
    },
  },
  server: {
    port: 3001,
    open: true,
    strictPort: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  define: {
    'process.env': JSON.stringify(process.env),
  },
});
