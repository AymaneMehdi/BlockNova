import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
export default defineConfig({
  trailingSlash: "always",
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});