import { FC, useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

type IProps = {
  className?: string;
  options: Array<{ label: string; url: string }>;
};

const TableDropdownOption: FC<IProps> = ({ className, options }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <div
          onClick={() => setOpen((open) => !open)}
          className="inline-flex justify-end w-full cursor-pointer"
        >
          <DotsHorizontalIcon className="w-6 h-6 font-extrabold z-0" />
        </div>
      </div>
      <div
        className={`${
          open ? "origin-top-right" : "hidden"
        } absolute right-0 rounded-md shadow-lg bg-white z-10`}
      >
        <div className="py-1">
          {options.map(({ label, url }, index) => (
            <Link
              key={label + index}
              to={url}
              className="
              text-gray-700
              block
              px-4
              py-1
              text-sm text-center
              hover:bg-gray-100
              cursor-pointer"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableDropdownOption;
