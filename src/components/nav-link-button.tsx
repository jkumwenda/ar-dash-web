import { FC } from "react";
import { NavLink } from "react-router-dom";

type IProps = {
  Icon?: any;
  className?: string;
  title: string;
  onClick?: () => void;
  to: string;
};

const NavLinkButton: FC<IProps> = ({ Icon, className, title, onClick, to }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      activeClassName="bg-blue-800 text-blue-100"
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
    </NavLink>
  );
};

export default NavLinkButton;
