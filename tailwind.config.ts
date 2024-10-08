import type { Config } from "tailwindcss";

import color from "./app/components/atoms/color";
import typescale from "./app/components/atoms/typescale";
import shadow from "./app/components/atoms/shadow";
import typography from "./app/components/atoms/typography";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: color,
    fontSize: typescale,
    fontFamily: typography,
    boxShadow: shadow["box-shadow"],
    blur: shadow.blur,
  },
} satisfies Config;
