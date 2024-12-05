import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // This will automatically open the app in the default browser
    proxy: {
      '/api': { // Ensure to include the leading slash
        target: 'http://localhost:8000', // The target server to proxy requests to
        changeOrigin: true, // Changes the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, '') // Rewrites the path to remove `/api`
      }
    }
  }
});