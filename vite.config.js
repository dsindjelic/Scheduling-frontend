import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        '/__/firebase/7.15.1/firebase-app.js',
        '/__/firebase/init.js'
      ],
    outDir: 'dist',
  },
}
})
