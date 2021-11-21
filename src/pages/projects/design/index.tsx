import { Button, Panel, Table } from "../../../components";
import { DocumentAddIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import PageBar from "../../../components/page-bar";
import { FilterSearch } from "../../../containers";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div className="flex flex-col">
      <Panel content="Projects" />
      <PageBar title="List of All Projects">
        <div className="pr-1 flex flex-grow items-center justify-end">
          <Button
            Icon={DocumentAddIcon}
            title="new project"
            onClick={() => {}}
            className="
            bg-gradient-to-r
            from-blue-800
            to-blue-600
            hover:bg-blue-800
            text-blue-50"
          />
          <FilterSearch />
        </div>
      </PageBar>

      <Table headings={headings} records={records} />
    </div>
  );
}

const headings = [
  { label: "project", key: "project" },
  { label: "client", key: "client" },
  { label: "project type", key: "project_type" },
  { label: "location ", key: "location" },
];

const records = [
  {
    project: "prj 1",
    client: "client 1",
    project_type: "design",
    location: "bangwe",
  },
  {
    project: "prj 2",
    client: "client 3",
    project_type: "design",
    location: "bangwe",
  },
  {
    project: "prj 3",
    client: "client 3",
    project_type: "design",
    location: "bangwe",
  },
];

// <div className="flex flex-row p-5">
//         <NavLink
//           to="/"
//           className="
//           h-11
//           w-11
//           text-blue-100
//           rounded-xl
//           border border-gray-50
//           shadow
//           bg-blue-800
//           hover:bg-blue-700
//           flex
//           items-center
//           justify-center
//           text-xs
//           font-semibold
//         "
//         >
//           <ArrowCircleLeftIcon className="w-5 h-5 mx-2 font-extrabold text-blue-100" />
//         </NavLink>
//         <div
//           className="
//           h-11
//           w-11
//           mx-3
//           text-gray-500
//           font-semibold
//           rounded-xl
//           border border-gray-200 border-2 border-blue-800
//           flex
//           items-center
//           justify-center
//         "
//         >
//           3
//         </div>
//         <NavLink
//           to="/"
//           className="
//           h-11
//           w-11
//           text-blue-200
//           rounded-xl
//           border border-gray-50
//           shadow
//           bg-blue-800
//           hover:bg-blue-700
//           flex
//           items-center
//           justify-center
//           text-xs
//           font-semibold
//         "
//         >
//           <ArrowCircleRightIcon className="w-5 h-5 mx-2 font-extrabold text-blue-100" />
//         </NavLink>
//       </div>
