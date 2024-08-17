import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      stream: 'stream-browserify',
      events: 'events',
      assert: 'assert',
      crypto: 'crypto-browserify',
      util: 'util',
      'near-api-js': 'near-api-js/dist/near-api-js.js',
    },
  },
  define: {
    'process.env': process.env ?? {},
  },
  build: {
    target: 'esnext',
    rollupOptions: {
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true, 
        }),
      ],
    },
  },
});