import { FC, useState } from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";

type IProps = {
  pagination: any;
  onLoadNextPage: (pageNumber: number) => void;
  onPreviousClick: (pageNumber: number) => void;
};

const PaginationBar: FC<IProps> = ({
  pagination,
  onLoadNextPage,
  onPreviousClick,
}) => {
  const [currentViewedPage, setCurrentViewedPage] = useState(1);

  const nextPage = () => {
    const nextPage = currentViewedPage + 1;

    if (!pagination?.next && pagination.currentPage === currentViewedPage)
      return;

    if (!pagination[nextPage]) {
      onLoadNextPage(nextPage);
    }

    setCurrentViewedPage(nextPage);
  };

  const previousPage = () => {
    onPreviousClick(currentViewedPage - 1);
    setCurrentViewedPage(currentViewedPage - 1);
  };

  return (
    <>
      <div className="flex flex-row p-5">
        <button
          onClick={previousPage}
          className="
          h-11
          w-11
          text-blue-100
          rounded-xl
          border border-gray-50
          shadow
          bg-blue-800
          hover:bg-blue-700
          flex
          items-center
          justify-center
          text-xs
          font-semibold
        "
        >
          <ArrowCircleLeftIcon className="w-5 h-5 mx-2 font-extrabold text-blue-100" />
        </button>
        <div
          className="
          h-11
          w-11
          mx-3
          text-gray-500
          font-semibold
          rounded-xl
          border border-gray-200 border-2 border-blue-800
          flex
          items-center
          justify-center
        "
        >
          {currentViewedPage}
        </div>
        <button
          onClick={nextPage}
          className="
          h-11
          w-11
          text-blue-200
          rounded-xl
          border border-gray-50
          shadow
          bg-blue-800
          hover:bg-blue-700
          flex
          items-center
          justify-center
          text-xs
          font-semibold
        "
        >
          <ArrowCircleRightIcon className="w-5 h-5 mx-2 font-extrabold text-blue-100" />
        </button>
      </div>
    </>
  );
};

export default PaginationBar;
