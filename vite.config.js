import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-video',
      writeBundle() {
        if (existsSync('public/bsc.mp4')) {
          copyFileSync('public/bsc.mp4', 'dist/bsc.mp4')
          console.log('✓ Video copied to dist folder')
        }
      }
    }
  ],
  publicDir: 'public'
})