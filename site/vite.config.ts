import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/formelio/',
  plugins: [react()],
  root: '.',
  publicDir: 'public',
});
