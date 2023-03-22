import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";

export default defineConfig({
  site: "https://www.asiseal.com",
  integrations: [tailwind(), sitemap(), svelte(), mdx(), astroImageTools],
});
