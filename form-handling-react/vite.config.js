import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
    resolve: {
    // This helps with module resolution
    alias: {
      // Add any necessary aliases if needed
    }
  }
})
