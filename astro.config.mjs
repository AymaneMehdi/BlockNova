import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({                             
  site: "https://BlockNova.github.io",
  base: "/BlockNova",
  trailingSlash: "always",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
