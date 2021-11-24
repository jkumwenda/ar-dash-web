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
import { getRoles, loadRoles } from "../../../../store/slices/role";
import { useAppSelector } from "../../../../hooks/redux-hooks";

export default function () {
  const history = useHistory();
  const dispatch = useDispatch();
  const roles = useAppSelector((state) => getRoles(state));

  useEffect(() => {
    dispatch(loadRoles());
  }, []);

  return (
    <>
      <PageWrapper title="role" showBackIcon={false}>
        <PageBar title="List of All roles">
          <div className="pr-1 flex flex-grow items-center justify-end">
            <Button
              Icon={DocumentAddIcon}
              title="new role"
              onClick={() => history.push(routes.USER_MANAGEMENT_ROLES_CREATE)}
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
          records={roles}
          options={tableOptions}
          recordId="role_id"
        />
      </PageWrapper>
    </>
  );
}

const headings = [{ label: "role", key: "role", className: "w-11/12" }];

const tableOptions = [
  { label: "edit", url: routes.USER_MANAGEMENT_ROLES_EDIT },
  { label: "delete", url: routes.USER_MANAGEMENT_ROLES_EDIT },
];
