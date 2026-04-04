import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Karena akan menggunakan custom domain di root (rentalkita.landercreative.org), base menjadi '/'
  base: '/',
})
