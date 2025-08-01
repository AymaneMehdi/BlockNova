import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
  ],
  darkMode: "class",
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
      colors: {
        brand: "#6366f1",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e4e4e7",
            a: { color: "#a78bfa" },
          },
        },
      },
    },
  },
  plugins: [typography],
};
