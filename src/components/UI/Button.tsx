import clsx from "clsx";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  variant: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant,
  disabled,
}) => {
  if (variant.toLowerCase() === "secondary")
    return (
      <button
        className={clsx(
          "h-[46px] w-[227px] rounded-lg border border-primary bg-white text-center font-semibold capitalize text-primary transition-all duration-300 focus:bg-light-purple",
          disabled === true && "border-opacity-25 text-opacity-25",
        )}
      >
        {text}
      </button>
    );
  return (
    <button
      className={clsx(
        "h-[46px] w-[227px] rounded-lg bg-primary text-center font-semibold capitalize text-white transition-all duration-300 focus:bg-purple-hover focus:text-opacity-25",
        disabled === true && "cursor-not-allowed bg-opacity-25 text-opacity-25",
      )}
    >
      {text}
    </button>
  );
};

export default Button;
