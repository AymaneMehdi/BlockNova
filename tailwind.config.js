import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.html"
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    fontFamily: {
      heading: ["Inter", "sans-serif"],
      body: ["Karla", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        sm: "1.5rem",
        md: "2rem",
        lg: "5.5rem",
      },
    },
    extend: {
    },
  },
  plugins: [
    typography,
  ],
};
