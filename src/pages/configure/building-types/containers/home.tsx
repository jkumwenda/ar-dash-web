import { Button, Panel, Table } from "../../../../components";
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
import {
  getBuildingTypes,
  loadBuildingTypes,
} from "../../../../store/slices/building-type";
import { useAppSelector } from "../../../../hooks/redux-hooks";

export default function () {
  const history = useHistory();
  const dispatch = useDispatch();
  const buildingTypes = useAppSelector((state) => getBuildingTypes(state));

  useEffect(() => {
    dispatch(loadBuildingTypes());
  }, []);

  return (
    <>
      <PageWrapper title="building types" showBackIcon={false}>
        <PageBar title="List of All Building Types">
          <div className="pr-1 flex flex-grow items-center justify-end">
            <Button
              Icon={DocumentAddIcon}
              title="new building type"
              onClick={() =>
                history.push(routes.CONFIGURE_DESIGN_BUILDING_TYPES_CREATE)
              }
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
          records={buildingTypes}
          options={tableOptions}
          recordId="building_type_id"
        />
      </PageWrapper>
    </>
  );
}

const headings = [
  { label: "Building Type", key: "building_type", className: "w-11/12" },
];

const tableOptions = [
  { label: "edit", url: routes.CONFIGURE_DESIGN_BUILDING_TYPES_EDIT },
  { label: "delete", url: routes.CONFIGURE_DESIGN_BUILDING_TYPES_EDIT },
];
