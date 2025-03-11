import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcssPresetEnv from 'postcss-preset-env';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compression()],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 2,
          features: {
            'nesting-rules': true,
          },
        }),
      ],
    },
  },
});