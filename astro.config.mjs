// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Deployed to GitHub Pages under a custom domain (public/CNAME), so no `base` is needed.
export default defineConfig({
  site: "https://getjabuti.com",
  integrations: [sitemap()],
  // Fonts are downloaded at build time and served from the site itself:
  // visitors' browsers never call Google.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Hanken Grotesk",
      cssVariable: "--font-sans",
      weights: [400, 500, 600, 700],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      weights: [400, 500, 600],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
});
