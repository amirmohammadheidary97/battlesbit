/// <reference types="vitest" />
import path from 'path';

import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {},
      include: '**/*.svg?react',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        maximumFileSizeToCacheInBytes: 15000000, // 5MB
      },
      manifest: {
        name: 'Ghalam',
        short_name: 'Ghalam',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/config/tests/setup.ts',
  },
  server: {
    host: true,
    port: 8100,
  },
  build: {
    outDir: 'build',
  },
});
