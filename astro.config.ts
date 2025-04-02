import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro";
import tailwindcss from "@tailwindcss/vite";

const getSiteAndBase = (): Pick<AstroUserConfig, "site" | "base"> => {
  if (import.meta.env.DEV) {
    return {
      base: "/2025",
    };
  }

  // Cloudflare Pagesの場合はCF_PAGES_URLを使用
  if (process.env.CF_PAGES_URL) {
    return {
      site: process.env.CF_PAGES_URL,
    };
  }

  // それ以外の場合は本番環境のURLを使用
  return {
    site: "https://gwc.gocon.jp",
    base: "/2025",
  };
};

// https://astro.build/config
export default defineConfig({
  ...getSiteAndBase(),
  vite: {
    plugins: [tailwindcss()],
  },
});
