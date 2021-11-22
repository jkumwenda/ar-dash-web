import { FC } from "react";
import { InformationCircleIcon } from "@heroicons/react/solid";

type IProp = {
  className?: string;
  content?: string;
  contentDetails?: string;
};

const Panel: FC<IProp> = ({ className, content, contentDetails }) => {
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
      capitalize
      ${className}
    `}
    >
      <div className="text-xl">
        {content}

        {contentDetails && (
          <p className="text-sm flex flex-row">
            <InformationCircleIcon className="w-4 h-4" />
            {contentDetails}
          </p>
        )}
      </div>
    </div>
  );
};

export default Panel;
