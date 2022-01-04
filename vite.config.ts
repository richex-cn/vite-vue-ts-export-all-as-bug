import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as volar from '@volar/experimental/compiler';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    target: ['safari11']
  },
  plugins: [vue(volar.vitePluginOptions)],
  server: { host: "0.0.0.0" }
})
