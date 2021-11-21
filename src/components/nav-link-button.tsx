import { FC } from "react";

type IProps = {
  Icon?: any;
  className?: string;
  title: string;
  onClick?: () => void;
};

const NavLinkButton: FC<IProps> = ({ Icon, className, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
    hover:bg-blue-800 hover:text-blue-100
    rounded-xl
    px-5
    py-4
    my-1
    flex flex-row
    cursor-pointer
    capitalize
    ${className}
  `}
    >
      <Icon className="w-5 h-5 mr-2 text-blue-400" />
      {title}
    </div>
  );
};

export default NavLinkButton;
