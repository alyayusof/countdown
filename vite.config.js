import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // if got CNAME or deploying to https://<USERNAME>.github.io/
  // base: '/',
  // if deploying to https://<USERNAME>.github.io/<REPO>/
  // base: '/<REPO>/',
  base: '/countdown/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
