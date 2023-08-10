/// <reference types="vitest" />
///<reference types="vite/client" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/**/*.test.*'],
    setupFiles: ['jest.setup.js']
  },
  resolve: {
    alias: {
      '@/core-components': resolve(__dirname, 'src/app/features/core/components'),
      '@': resolve(__dirname, 'src/app'),
    },
  },
  root: resolve(__dirname, '.'),
});
