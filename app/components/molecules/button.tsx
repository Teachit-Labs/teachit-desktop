import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "px-4 py-2 text-sm font-normal rounded-lg transition-shadow transition-colors duration-150",
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

type ButtonProps = VariantProps<typeof button> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, color } = props;
  return (
    <button className={button({ color })} {...props}>
      {children}
    </button>
  );
};
