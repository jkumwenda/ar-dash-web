import _ from "lodash";
import { FC } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import TableDropdownOption from "./options";

type IProp = {
  className?: string;
  headings: Array<{ label: string; key: string; className?: string }>;
  records: Array<any>;
  options: Array<{ label: string; url: string }>;
  recordId: string;
};
const Table: FC<IProp> = ({
  className,
  headings,
  records,
  options,
  recordId,
}) => {
  return (
    <>
      <div
        className="
        flex flex-col flex-grow
        mx-5
        p-4
        bg-white
        rounded-xl
        border border-gray-200"
      >
        {/* heading */}
        <div className="flex flex-row uppercase bg-gray-300 px-5 py-5 text-xs font-bold">
          {headings.map(({ label, className }) => (
            <div key={label} className={className ? className : "w-3/12"}>
              {label}
            </div>
          ))}
          <div className="w-1/12 text-right justify-items-end">Options</div>
        </div>
        {/* end heading */}

        {/* table body */}
        {records.map((record) => (
          <div className="flex flex-row bg-gray-100 px-5 py-5 mt-2 hover:bg-gray-200">
            {headings.map(({ key, label, className }) => (
              <div key={label} className={className ? className : "w-3/12"}>
                {_.get(record, key)}
              </div>
            ))}
            <div className="w-1/12 flex flex-col flex-end">
              <TableDropdownOption
                options={options.map(({ label, url }) => ({
                  label: label,
                  url: `${url}/${record[recordId]}`,
                }))}
              />
            </div>
          </div>
        ))}

        {/* end table body */}
      </div>
    </>
  );
};

export default Table;
