import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
      lib: {
        entry:'src/index.ts',
        name: 'morse-code-ts',
        fileName: 'morse-code-ts',
      },
    },
    plugins: [dts()],
  });