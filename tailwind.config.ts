import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screen/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
      },
      screens: {
        xxsm: { min: "300px", max: "380px" },
        // => @media (min-width: 300px and max-width: 380px) { ... }

        xsm: { min: "300px", max: "1100px" },
        // => @media (min-width: 300px and max-width: 640px) { ... }

        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1299px" },
        // => @media (min-width: 1024px and max-width: 1300px) { ... }

        "2lg": { min: "1300px", max: "1399px" },
        // => @media (min-width: 1024px and max-width: 1300px) { ... }

        xl: { min: "1350px", max: "1650px" },
        // => @media (min-width: 1350px and max-width: 1650px) { ... }

        "2xl": { min: "1651px" },
        // => @media (min-width: 1651px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
