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
import { getUsers, loadUsers } from "../../../../store/slices/user";
import { useAppSelector } from "../../../../hooks/redux-hooks";

export default function () {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useAppSelector((state) => getUsers(state));

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <>
      <PageWrapper title="user" showBackIcon={false}>
        <PageBar title="List of All users">
          <div className="pr-1 flex flex-grow items-center justify-end">
            <Button
              Icon={DocumentAddIcon}
              title="new user"
              onClick={() => history.push(routes.USER_MANAGEMENT_USERS_CREATE)}
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
          records={users}
          options={tableOptions}
          recordId="id"
        />
      </PageWrapper>
    </>
  );
}

const headings = [
  { label: "first Name", key: "first_name", className: "w-3/12" },
  { label: "last name", key: "last_name", className: "w-3/12" },
  { label: "email", key: "email", className: "w-3/12" },
  { label: "username", key: "username", className: "w-3/12" },
];

const tableOptions = [
  { label: "edit", url: routes.USER_MANAGEMENT_USERS_EDIT },
  { label: "delete", url: routes.USER_MANAGEMENT_USERS_EDIT },
];
