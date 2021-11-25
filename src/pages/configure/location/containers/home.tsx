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
import { getLocations, loadLocations } from "../../../../store/slices/location";
import { useAppSelector } from "../../../../hooks/redux-hooks";

export default function () {
  const history = useHistory();
  const dispatch = useDispatch();
  const locations = useAppSelector((state) => getLocations(state));

  useEffect(() => {
    if (locations.length === 0) dispatch(loadLocations());
  }, []);

  return (
    <>
      <PageWrapper title="location" showBackIcon={false}>
        <PageBar title="List of All locations">
          <div className="pr-1 flex flex-grow items-center justify-end">
            <Button
              Icon={DocumentAddIcon}
              title="new location"
              onClick={() =>
                history.push(routes.CONFIGURE_DESIGN_LOCATIONS_CREATE)
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
          records={locations}
          options={tableOptions}
          recordId="location_id"
        />
      </PageWrapper>
    </>
  );
}

const headings = [
  { label: "location", key: "location", className: "w-6/12" },
  { label: "district", key: "district.district", className: "w-5/12" },
];

const tableOptions = [
  { label: "edit", url: routes.CONFIGURE_DESIGN_LOCATIONS_EDIT },
  { label: "delete", url: routes.CONFIGURE_DESIGN_LOCATIONS_DELETE },
];
