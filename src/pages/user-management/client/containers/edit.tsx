import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { editClient, getClient } from "../../../../store/slices/client";
import ClientForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const client = useAppSelector(getClient(Number(params.id)));

  const initialValues = {
    ...client,
    first_name: client?.user.first_name,
    last_name: client?.user.last_name,
    email: client?.user.email,
  };

  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(editClient({ ...values, instance_id: 1 }, Number(params.id)));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="edit client" titleDetails="client details">
      <ClientForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
