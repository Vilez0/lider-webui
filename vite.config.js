
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  //...
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

