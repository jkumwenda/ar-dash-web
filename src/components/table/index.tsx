import _ from "lodash";
import { FC } from "react";
import TableDropdownOption from "./options";
import { Loader } from "..";
import PaginationBar from "../pagination-bar";
import { Pagination } from "../../types";

type IProp = {
  className?: string;
  headings: Array<{ label: string; key: string; className?: string }>;
  records: Array<any>;
  options: Array<{ label: string; url: string }>;
  recordId: string;
  loading?: boolean;
  pagination?: any;
  onLoadNextPage?: (pageNumber: number) => void;
  setCurrentPage?: (pageNumber: number) => void;
};
const Table: FC<IProp> = ({
  className,
  headings,
  records,
  options,
  recordId,
  loading,
  pagination,
  onLoadNextPage,
  setCurrentPage,
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
        {loading ? (
          <Loader />
        ) : (
          records.map((record) => (
            <div
              key={record[recordId]}
              className="flex flex-row bg-gray-100 px-5 py-5 mt-2 hover:bg-gray-200"
            >
              {headings.map(({ key, label, className }) => (
                <div key={label} className={className ? className : "w-3/12"}>
                  {_.get(record, key)}
                </div>
              ))}
              <div className="w-1/12 flex flex-col flex-end">
                <TableDropdownOption
                  options={options.map(({ label, url }) => ({
                    label: label,
                    url: url.replace(":id", record[recordId]),
                  }))}
                />
              </div>
            </div>
          ))
        )}

        {/* end table body */}
      </div>
      {onLoadNextPage && setCurrentPage && (
        <PaginationBar
          pagination={pagination}
          onLoadNextPage={onLoadNextPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default Table;
