import { FC, useState } from "react";
import { FilterIcon, SearchIcon } from "@heroicons/react/solid";
import { Button } from "../components";
interface IProps {
  className?: string;
}

const FilterSearch: FC<IProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative inline-block text-left z-10">
        <div>
          <Button
            Icon={FilterIcon}
            title="filter"
            onClick={() => {
              setOpen((open) => !open);
            }}
            iconClassName="text-blue-500"
            className="bg-white border shadow-md border-white hover:bg-gray-100 hover:border-gray-100
            text-gray-500 font-semibold"
          />
        </div>

        <div
          className={`
              ${open ? "origin-top-right" : "hidden"}
              absolute
              right-0
              mt-2
              w-80
              border border-gray-200
              rounded-xl
              border border-gray-50
              shadow-lg
              bg-white
            `}
          id="filterSearch"
        >
          <div className="p-4 px-2">
            <div className="flex items-center border-b border-gray-200 m-2 pb-2">
              <div className="flex-none font-extrabold">
                <div
                  className="
                      py-2
                      items-center
                      justify-center
                      text-md
                      focus:outline-none
                    "
                >
                  <SearchIcon className="w-7 h-7 text-blue-800 font-extrabold" />
                </div>
              </div>
              <div className="flex-grow mx-2 items-center justify-center">
                <input
                  className="
                      block
                      w-full
                      text-gray-500 text-sm
                      font-semibold
                      rounded-lg
                      py-3
                      focus:outline-none
                    "
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div className="flex-none items-center justify-center">
                <Button
                  onClick={() => setOpen(false)}
                  title="esc"
                  className="
                      p-1
                      px-3
                      border border-gray-300
                      bg-white
                      hover:bg-gray-200
                      rounded-md
                      items-center
                      justify-center
                      focus:outline-none
                      text-sm
                    "
                />
              </div>
            </div>
            <div className="font-bold text-gray-600 m-2">Results</div>
            <div
              className="
                  bg-blue-200
                  hover:bg-blue-300
                  text-gray-600
                  rounded-xl
                  border border-gray-200
                  mt-2
                  mx-2
                  p-4
                "
            >
              Another searched item
            </div>
            <div
              className="
                  bg-gray-100
                  hover:bg-gray-200
                  text-gray-600
                  rounded-xl
                  border border-gray-200
                  mt-2
                  mx-2
                  p-4
                "
            >
              Searched item
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSearch;
