import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.tsx'],
  external: ['react', 'react-dom', 'styled-components'],
  format: ['cjs', 'esm'],
  sourcemap: true,
  esbuildPlugins: [sassPlugin({ type: 'local-css' })],
});
