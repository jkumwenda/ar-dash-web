import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { editStatus, getStatus } from "../../../../store/slices/status";
import StatusForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const buildingType = useAppSelector(getStatus(Number(params.id)));

  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(editStatus({ ...values, instance_id: 1 }, Number(params.id)));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="edit status" titleDetails="status details">
      <StatusForm initialValues={buildingType} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
