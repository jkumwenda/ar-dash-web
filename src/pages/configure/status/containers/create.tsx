import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageWrapper } from "../../../../containers";
import { addStatus } from "../../../../store/slices/status";
import StatusForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = { status: "" };
  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(addStatus({ ...values, instance_id: 1 }));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="new status" titleDetails="status details">
      <StatusForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
