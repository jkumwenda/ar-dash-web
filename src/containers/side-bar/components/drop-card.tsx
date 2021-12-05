import { FC, Fragment } from "react";
import { NavLink } from "react-router-dom";

type IProps = {
  links: Array<{
    heading?: string;
    content: Array<{ title: string; url: string }>;
  }>;
};

const DropCard: FC<IProps> = ({ links }) => {
  return (
    <div
      className="
        flex
      bg-white
        border-1
        shadow
        rounded-xl
        px-2
        py-4
        my-2
        mx-4
        flex-col
        text-gray-500"
    >
      {links.map(({ heading, content }) => (
        <>
          {heading ? (
            <div
              key={heading}
              className="p2-1  px-3 p-2 mx-1 text-gray-600 text-lg"
            >
              {heading}
            </div>
          ) : null}
          {content.map(({ title, url }) => (
            <NavLink
              activeClassName="border-2 border-blue-200"
              key={title + heading}
              className="
            p2-1
            p-2
            px-5
            mx-1
            cursor-pointer
            text-sm
            hover:bg-gray-400
            rounded-xl
            hover:text-gray-50
            capitalize
            
          
            "
              to={url}
            >
              {title}
            </NavLink>
          ))}
        </>
      ))}
    </div>
  );
};

export default DropCard;
