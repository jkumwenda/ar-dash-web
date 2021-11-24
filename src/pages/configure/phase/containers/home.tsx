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
import { getPhases, loadPhases } from "../../../../store/slices/phase";
import { useAppSelector } from "../../../../hooks/redux-hooks";

export default function () {
  const history = useHistory();
  const dispatch = useDispatch();
  const phase = useAppSelector((state) => getPhases(state));

  useEffect(() => {
    dispatch(loadPhases());
  }, []);

  return (
    <>
      <PageWrapper title="phases" showBackIcon={false}>
        <PageBar title="List of All phases">
          <div className="pr-1 flex flex-grow items-center justify-end">
            <Button
              Icon={DocumentAddIcon}
              title="new phase"
              onClick={() => history.push(routes.CONFIGURE_DESIGN_PHASE_CREATE)}
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
          records={phase}
          options={tableOptions}
          recordId="phase_id"
        />
      </PageWrapper>
    </>
  );
}

const headings = [{ label: "phase", key: "phase", className: "w-11/12" }];

const tableOptions = [
  { label: "edit", url: routes.CONFIGURE_DESIGN_PHASE_EDIT },
  { label: "delete", url: routes.CONFIGURE_DESIGN_PHASE_EDIT },
];
