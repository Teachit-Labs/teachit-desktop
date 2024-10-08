import type { Config } from "tailwindcss";

import color from "./app/components/atoms/color";
import typescale from "./app/components/atoms/typescale";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: color,
    fontSize: typescale,
    fontFamily: {
      sans: [
        "'Work Sans'",
        '"Inter"',
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
  plugins: [],
} satisfies Config;
