import { Button, Loader, Panel, Table } from "../../../../components";
import { DocumentAddIcon } from "@heroicons/react/solid";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import PageBar from "../../../../components/page-bar";
import { FilterSearch, PageWrapper } from "../../../../containers";
import { useHistory } from "react-router-dom";
import routes from "../../../../fixtures/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProjects, loadProjects } from "../../../../store/slices/project";
import { useAppSelector } from "../../../../hooks/redux-hooks";

export default function () {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data: projects, loading } = useAppSelector(getProjects());

  useEffect(() => {
    dispatch(loadProjects());
  }, []);

  return (
    <>
      <PageWrapper title="Projects" showBackIcon={false}>
        <PageBar title="List of All Projects">
          <div className="pr-1 flex flex-grow items-center justify-end">
            <Button
              Icon={DocumentAddIcon}
              title="new project"
              onClick={() => history.push(routes.PROJECT_DESIGN_CREATE)}
              className="
            bg-gradient-to-r
            from-blue-800
            to-blue-600
            hover:bg-blue-800
            text-blue-50 mr-2"
            />
            <FilterSearch />
          </div>
        </PageBar>

        <Table
          headings={headings}
          records={projects}
          loading={loading}
          recordId="project_id"
          options={tableOptions}
        />
      </PageWrapper>
    </>
  );
}

const headings = [
  { label: "project", key: "project_name" },
  { label: "client.", key: "client.user.first_name" },
  { label: "project type", key: "building_type.building_type" },
  { label: "location ", key: "location.location" },
];

const tableOptions = [
  { label: "edit", url: routes.PROJECT_DESIGN_EDIT },
  { label: "view", url: routes.PROJECT_DESIGN_VIEW },
  { label: "delete", url: routes.PROJECT_DESIGN_EDIT },
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
