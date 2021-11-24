import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageWrapper } from "../../../../containers";
import { addSpace } from "../../../../store/slices/space";
import SpaceForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = { space: "" };
  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(addSpace({ ...values, instance_id: 1 }));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="new space" titleDetails="space details">
      <SpaceForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
