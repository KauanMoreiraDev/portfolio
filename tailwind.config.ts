import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
    extend: {
      colors: {
        'primary': '#A21CAF',
        'secoundary': '#840090',
      },

      fontFamily: {
        Playfair: ['Playfair Display', 'serif'],
        Playfair_italic: ['Playfair Display italic', 'serif'],
        Oswald: ['Oswald', 'sans-serif'],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
