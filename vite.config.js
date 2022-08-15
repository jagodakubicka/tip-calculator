import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // https://stackoverflow.com/questions/70849338/how-to-use-sass-global-variables-from-other-components-in-vite-vue3
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/main.scss";'
      }
    }
  }
})
