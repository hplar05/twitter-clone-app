interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outLine?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outLine,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 ${
        fullWidth ? "w-full" : "w-fit"
      } ${secondary ? "bg-white" : "bg-sky-500"} ${
        secondary ? "text-black" : "text-white"
      } ${secondary ? "border-black" : "border-sky-500"} ${
        large ? "text-xl" : "text-md"
      } ${large ? "px-5" : "px-4"}
      ${large ? "py-3" : "py-2"}
      ${outLine ? "bg-transparent" : ""}
      ${outLine ? "border-white" : ""}
      ${outLine ? "text-white" : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
