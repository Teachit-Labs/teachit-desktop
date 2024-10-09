// TODO
import { tv } from "tailwind-variants";

export const button = tv({
  base: "px-4 py-2 text-sm font-normal rounded-lg transition-all duration-150",
  variants: {
    color: {
      primary:
        "bg-primary-500 text-white hover:bg-primary-700 hover:text-secondary-200 hover:shadow-sm",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});
