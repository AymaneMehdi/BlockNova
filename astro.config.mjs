import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import github from "@astrojs/github";

export default defineConfig({
  site: "https://aymanemehdi.github.io/BlockNova", 
  base: "/BlockNova",                              
  trailingSlash: "always",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    github(),
  ],
});

