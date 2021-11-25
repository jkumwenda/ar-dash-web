import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageWrapper } from "../../../../containers";
import { addClient } from "../../../../store/slices/client";
import ClientForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    postal_address: "",
    phone_number: "",
  };

  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(addClient({ ...values, instance_id: 1 }));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="new client" titleDetails="client details">
      <ClientForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
