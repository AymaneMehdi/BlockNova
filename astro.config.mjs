import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
<<<<<<< HEAD
  site: "https://aymanemehdi.github.io/BlockNova",
=======
  site: "https://aymanemehdi.github.io/BlockNova", 
  base: "/BlockNova",                              
  site: "https://BlockNova.github.io",
>>>>>>> 91d3d10b5992db964b66ea0a4c4f87e7740213ee
  base: "/BlockNova",
  trailingSlash: "always",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
