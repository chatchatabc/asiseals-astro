/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";
export default defineConfig({
  site: "asiseal.com",
  scanner: {
    device: "mobile",
    sitemap: true,
  },
  debug: true,
});
