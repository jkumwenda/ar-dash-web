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
import { getStatuses, loadStatus } from "../../../../store/slices/status";
import { useAppSelector } from "../../../../hooks/redux-hooks";

export default function () {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data: statuses, loading } = useAppSelector(getStatuses);

  useEffect(() => {
    dispatch(loadStatus());
  }, []);

  return (
    <>
      <PageWrapper title="status" showBackIcon={false}>
        <PageBar title="List of All statuss">
          <div className="pr-1 flex flex-grow items-center justify-end">
            <Button
              Icon={DocumentAddIcon}
              title="new status"
              onClick={() =>
                history.push(routes.CONFIGURE_DESIGN_STATUS_CREATE)
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
          records={statuses}
          loading={loading}
          options={tableOptions}
          recordId="status_id"
        />
      </PageWrapper>
    </>
  );
}

const headings = [{ label: "status", key: "status", className: "w-11/12" }];

const tableOptions = [
  { label: "edit", url: routes.CONFIGURE_DESIGN_STATUS_EDIT },
  { label: "delete", url: routes.CONFIGURE_DESIGN_STATUS_EDIT },
];
