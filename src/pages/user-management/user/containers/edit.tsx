import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { editUser, getUser } from "../../../../store/slices/user";
import UserForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const buildingType = useAppSelector(getUser(Number(params.id)));

  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(editUser({ ...values, instance_id: 1 }, Number(params.id)));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="edit user" titleDetails="user details">
      <UserForm initialValues={buildingType} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
