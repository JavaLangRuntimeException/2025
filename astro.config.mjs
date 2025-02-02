// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: process.env.BASE_URL || "/2025",
  vite: {
    plugins: [tailwindcss()],
  },
});
