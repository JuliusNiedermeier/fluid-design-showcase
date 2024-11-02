import type { Config } from "tailwindcss";
import { gray } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "600px",
      desktop: "1200px",
    },
    extend: {
      borderColor: {
        DEFAULT: gray[400],
      },
    },
  },
  plugins: [],
};
export default config;
