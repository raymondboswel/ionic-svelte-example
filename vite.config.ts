import { defineConfig } from "vite";
import { getAliases } from "vite-aliases";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const aliases = getAliases();
const preprocess = require("svelte-preprocess");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      // @ts-ignore
      include: /\.wc\.svelte$/,
      compilerOptions: {
        customElement: true,
      },
    }),
    // Compile Normal Svelte
    svelte({
      // @ts-ignore
      exclude: /\.wc\.svelte$/,
      compilerOptions: {
        customElement: false,
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/variables.scss";',
      },
    },
  },
  publicDir: "./assets/",
  build: {
    outDir: "./public/",
  },
  resolve: {
    alias: aliases,
  },
  optimizeDeps: {
    exclude: ["@roxi/routify", "@urql/svelte"],
    include: ["@ionic/core"],
  },
});
