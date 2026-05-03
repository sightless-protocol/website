import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sightlessprotocol.com",
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
});
