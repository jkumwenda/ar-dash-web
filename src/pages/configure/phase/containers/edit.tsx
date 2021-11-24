import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { editPhase, getPhase } from "../../../../store/slices/phase";
import PhaseForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const buildingType = useAppSelector(getPhase(Number(params.id)));

  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(editPhase({ ...values, instance_id: 1 }, Number(params.id)));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="edit phase" titleDetails="Phase details">
      <PhaseForm initialValues={buildingType} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
