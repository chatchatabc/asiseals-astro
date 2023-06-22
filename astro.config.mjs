import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://asiseal.com",
  // for sitemap and robots.txt (change to your own domain)

  integrations: [
    tailwind(),
    svelte(),
    mdx(),

    // analytics
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),

    // image optimization
    astroImageTools,

    // generate robots.txt
    robotsTxt(),

    // generate sitemap.xml
    sitemap({
      changefreq: "daily",
      lastmod: new Date(),
    }),

    // compress html, css, js
    compress({
      img: false, // disable image compression, we use astro-imagetools instead
    }),
  ],
});
