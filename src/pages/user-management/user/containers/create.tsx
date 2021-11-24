import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageWrapper } from "../../../../containers";
import { addUser } from "../../../../store/slices/user";
import UserForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    username: "",
  };

  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(addUser({ ...values, instance_id: 1 }));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="new user" titleDetails="user details">
      <UserForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
