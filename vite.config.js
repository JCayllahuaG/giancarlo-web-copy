import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@public/components': fileURLToPath(new URL('./src/public/components', import.meta.url)),
      '@service-catalog/components': fileURLToPath(
        new URL('./src/service-catalog/components', import.meta.url)
      ),
      '@iam': fileURLToPath(new URL('./src/iam', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  }
})
