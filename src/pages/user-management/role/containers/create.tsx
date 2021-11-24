import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageWrapper } from "../../../../containers";
import { addRole } from "../../../../store/slices/role";
import RoleForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = { role: "" };
  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(addRole({ ...values, instance_id: 1 }));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="new role" titleDetails="role details">
      <RoleForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
