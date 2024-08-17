import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import inject from '@rollup/plugin-inject';

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
    'process.env': {},
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      plugins: [
        inject({
          process: 'process',
          Buffer: ['buffer', 'Buffer'],
        }),
      ],
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
