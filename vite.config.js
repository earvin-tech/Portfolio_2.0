import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    }
  },
  base: '/',
  plugins: [react()],
});
