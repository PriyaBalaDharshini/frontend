import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/getAccessToken': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
