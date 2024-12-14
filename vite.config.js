import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Default is the root of the project
  build: {
    outDir: 'dist', // Ensure the output directory is correctly configured
  },
})
