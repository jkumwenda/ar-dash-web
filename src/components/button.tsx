import { FC } from "react";

type IProps = {
  className?: string;
  title: any;
  Icon?: any;
  onClick: () => void;
  iconClassName?: string;
  type?: "button" | "submit" | "reset";
  padding?: string;
};

const Button: FC<IProps> = ({
  Icon,
  className,
  title,
  onClick,
  iconClassName = "text-blue-400",
  type = "button",
  padding = "py-4 px-4",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        flex flex-row
        rounded-xl
        border border-gray-200 border-1 
        leading-tight
        focus:outline-none focus:shadow-outline
        capitalize
        ${padding}
        ${className}
  `}
    >
      {Icon && <Icon class={`w-5 h-5 mr-2 font-extrabold  ${iconClassName}`} />}
      {title}
    </button>
  );
};

export default Button;
