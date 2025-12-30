import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // For project sites (repo-name.github.io/project), use '/project/' as the base
  base: '/helelelelena/',
})
