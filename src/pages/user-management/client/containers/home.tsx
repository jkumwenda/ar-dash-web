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
import { getClients, loadClients } from "../../../../store/slices/client";
import { useAppSelector } from "../../../../hooks/redux-hooks";

export default function () {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data: clients, loading } = useAppSelector(getClients);

  useEffect(() => {
    dispatch(loadClients());
  }, []);

  return (
    <>
      <PageWrapper title="client" showBackIcon={false}>
        <PageBar title="List of All clients">
          <div className="pr-1 flex flex-grow items-center justify-end">
            <Button
              Icon={DocumentAddIcon}
              title="new client"
              onClick={() =>
                history.push(routes.USER_MANAGEMENT_CLIENTS_CREATE)
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
          records={clients}
          loading={loading}
          options={tableOptions}
          recordId="client_id"
        />
      </PageWrapper>
    </>
  );
}

const headings = [
  { label: "first Name", key: "user.first_name", className: "w-3/12" },
  { label: "last name", key: "user.last_name", className: "w-3/12" },
  { label: "email", key: "user.email", className: "w-3/12" },
  { label: "phone number", key: "phone_number", className: "w-3/12" },
  { label: "postal address", key: "postal_address", className: "w-3/12" },
];

const tableOptions = [
  { label: "edit", url: routes.USER_MANAGEMENT_CLIENTS_EDIT },
  { label: "delete", url: routes.USER_MANAGEMENT_CLIENTS_EDIT },
];
