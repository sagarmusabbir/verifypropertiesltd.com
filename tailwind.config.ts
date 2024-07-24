import type { Config } from "tailwindcss";
import colors, { amber, orange } from "tailwindcss/colors";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: amber,
        gray: {
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "200": "#e2e8f0",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#5C697D", //#4b5563  #505E75 #6B7687 #5C697D
          "600": "#374151", // #4b5563 #374151 #525F75
          "700": "#282C35", //#303540
          "800": "#1F2229", //#282C35
          "900": "#131519", //#1B1E24 #17191F #1F2229 #131519
          "950": "#0B0C0F", // #0D0E12 #0F0F0F #0B0C0F
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
