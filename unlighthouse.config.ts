/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";
export default defineConfig({
  site: "asiseals.pages.dev",
  scanner: {
    device: "mobile",
    sitemap: true,
  },
  debug: true,
});
