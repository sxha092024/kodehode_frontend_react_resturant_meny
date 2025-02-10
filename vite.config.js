import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames:
          `[name]` + (Math.floor(Math.random() * 9_000) + 10_000) + `.js`,
        chunkFileNames:
          `[name]` + (Math.floor(Math.random() * 9_000) + 10_000) + `.js`,
        assetFileNames:
          `[name]` + (Math.floor(Math.random() * 9_000) + 10_000) + `.[ext]`,
      },
    },
  },
});
