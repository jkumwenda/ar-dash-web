import { FC } from "react";

type IProps = {
  className?: string;
  title: string;
  Icon?: any;
  onClick: () => void;
  iconClassName?: string;
};

const Button: FC<IProps> = ({
  Icon,
  className,
  title,
  onClick,
  iconClassName = "text-blue-400",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-row
        py-4
        px-4
        rounded-xl
        border border-gray-200 border-1 
        ml-2
        leading-tight
        focus:outline-none focus:shadow-outline
        capitalize
        ${className}
  `}
    >
      {Icon && <Icon class={`w-5 h-5 mr-2 font-extrabold  ${iconClassName}`} />}
      {title}
    </button>
  );
};

export default Button;
