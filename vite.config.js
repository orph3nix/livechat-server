import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {webSocketServer} from "./webSocketPluginVite.js";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  plugins: [svelte(), webSocketServer],
})
