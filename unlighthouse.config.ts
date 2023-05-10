/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";
export default defineConfig({
  site: "asiseals.pages.dev",
  scanner: {
    sitemap: true,
  },
  debug: true,
});
