import { FC } from "react";

type IProp = {
  className?: string;
  content?: string;
};

const Panel: FC<IProp> = ({ className, content }) => {
  return (
    <div
      className={`
      flex flex-row
      bg-white
      text-gray-600
      border border-gray-200
      rounded-xl
      mx-5
      p-5
      ${className}
    `}
    >
      <div className="text-xl">{content}</div>
    </div>
  );
};

export default Panel;
