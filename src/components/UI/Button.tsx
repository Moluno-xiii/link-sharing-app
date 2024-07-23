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
          "w-[227px] h-[46px] text-center font-semibold capitalize bg-white border border-primary text-primary focus:bg-light-purple transition-all duration-300 rounded-lg",
          disabled === true && "text-opacity-25 border-opacity-25"
        )}
      >
        {text}
      </button>
    );
  return (
    <button
      className={clsx(
        "w-[227px] h-[46px] font-semibold transition-all duration-300 text-center text-white capitalize bg-primary focus:bg-purple-hover focus:text-opacity-25 rounded-lg",
        disabled === true && "bg-opacity-25 text-opacity-25 cursor-not-allowed"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
