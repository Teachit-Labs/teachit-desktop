// styles are exported to tailwind.config.ts

import { KeyValuePair } from "tailwindcss/types/config";

export default {
  "5xl": [
    "3.831rem",
    { lineHeight: "5rem", letterSpacing: "0", fontWeight: "regular" },
  ],
  "4xl": [
    "3.063rem",
    { lineHeight: "4.5rem", letterSpacing: "0", fontWeight: "regular" },
  ],
  "3xl": [
    "2.438rem",
    { lineHeight: "3.5rem", letterSpacing: "0", fontWeight: "regular" },
  ],
  "2xl": [
    "1.938rem",
    { lineHeight: "3rem", letterSpacing: "0", fontWeight: "regular" },
  ],
  xl: [
    "1.563rem",
    { lineHeight: "2rem", letterSpacing: "0", fontWeight: "regular" },
  ],
  lg: [
    "1.313rem",
    { lineHeight: "2rem", letterSpacing: "0", fontWeight: "regular" },
  ],
  // paragraph-1
  md: [
    "1.125rem",
    { lineHeight: "2rem", letterSpacing: "0", fontWeight: "regular" },
  ],
  // paragraph-2
  sm: [
    "1rem",
    { lineHeight: "1.5rem", letterSpacing: "0", fontWeight: "regular" },
  ],
  // paragraph-3
  xs: [
    "0.875rem",
    { lineHeight: "1.5rem", letterSpacing: "0", fontWeight: "regular" },
  ],
  subheading: [
    "0.875rem",
    { lineHeight: "1.5rem", letterSpacing: "5%", fontWeight: 500 },
  ],
} as KeyValuePair<
  string,
  [
    fontSize: string,
    configuration: {
      lineHeight: string;
      letterSpacing: string;
      fontWeight: string | number;
    }
  ]
>;
