// styles are exported to tailwind.config.ts

const primary = {
  900: "#100431",
  800: "#1A0C43",
  700: "#2C00AC",
  600: "#3300C8",
  500: "#3A00E5",
  400: "#3E2CFF",
  300: "#6B71FF",
  200: "#B0C0FF",
  100: "#F7F5FF",
  50: "#FDFCFF",
} as const;
const secondary = {
  900: "#281208",
  800: "#7B3C1C",
  700: "#D88156",
  600: "#E09B79",
  500: "#EAB195",
  400: "#EDBBA2",
  300: "#ECC4B0",
  200: "#F4D8CA",
  100: "#FDECE3",
  50: "#FCF9F8",
} as const;
const tertiary = {
  900: "#2B3900",
  800: "#6B8F00",
  700: "#86B200",
  600: "#96C800",
  500: "#ABE500",
  400: "#BEEC37",
  300: "#D0F26D",
  200: "#E6F9AE",
  100: "#FBFFEE",
  50: "#FEFFFA",
} as const;
const neutrals = {
  900: "#222222",
  800: "#3B3B3B",
  700: "#515151",
  600: "#626262",
  500: "#7E7E7E",
  400: "#9E9E9E",
  300: "#B1B1B1",
  200: "#CFCFCF",
  100: "#E1E1E1",
  50: "#F7F7F7",
  0: "#FFFFFF",
} as const;
const success = {
  900: "#064E3B",
  800: "#065F46",
  700: "#047857",
  600: "#059669",
  500: "#10B981",
  400: "#34D399",
  300: "#6EE7B7",
  200: "#A7F3D0",
  100: "#D1FAE5",
  50: "#ECFDF5",
} as const;
const warning = {
  900: "#78350F",
  800: "#92400E",
  700: "#B45309",
  600: "#D97706",
  500: "#F59E0B",
  400: "#FBBF24",
  300: "#FCD34D",
  200: "#FDE68A",
  100: "#FEF3C7",
  50: "#FFFBEB",
} as const;
const error = {
  900: "#7F1D1D",
  800: "#991B1B",
  700: "#B91C1C",
  600: "#DC2626",
  500: "#EF4444",
  400: "#F87171",
  300: "#FCA5A5",
  200: "#FECACA",
  100: "#FEE2E2",
  50: "#FEF2F2",
} as const;

export default {
  primary,
  secondary,
  tertiary,
  neutrals,
  success,
  warning,
  error,
  white: neutrals["0"],
  black: neutrals["900"],
};
