import { FC } from "react";

type IProps = {
  className?: string;
  title?: string;
};

const PageBar: FC<IProps> = ({ className, title, children }) => {
  return (
    <div className="flex flex-row p-5">
      <div
        className="
      flex flex-none
      pr-1
      lg:pr-5
      items-center
      font-semibold
      justify-left
    "
      >
        {title}
      </div>
      <div className="pr-1 flex flex-grow items-center justify-end">
        <div className="relative inline-block text-left z-10">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageBar;
