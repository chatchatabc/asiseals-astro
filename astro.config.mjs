import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";

export default defineConfig({
  site: "https://asiseals.pages.dev", // for sitemap and robots.txt (change to your own domain)
  build: {
    // format: "file",
  },
  integrations: [
    tailwind(),
    svelte(),
    mdx(),
    astroImageTools, // image optimization
    robotsTxt(), // generate robots.txt
    sitemap({
      changefreq: "daily",
      lastmod: new Date(),
    }), // generate sitemap.xml
    compress({
      img: false, // disable image compression, we use astro-imagetools instead
    }),
  ],
});
