import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: [
      { find:'/@', replacement: resolve(__dirname, 'src') }
    ]
  },
  server: {
    proxy: {
      '/api': {
        target: "http://120.77.245.193/blog-system-hou",
        changeOrigin: true,
        secure: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/local': {
        target: "http://localhost:80/Blog-System-Hou",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/local/, '')
      }
    },
    cors: true
  },
  build: {
    outDir: resolve(__dirname, 'blog-system'),
    assetsDir: './assets'
  },
})
