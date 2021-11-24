import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageWrapper } from "../../../../containers";
import { addPhase } from "../../../../store/slices/phase";
import PhaseForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = { phase: "" };
  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(addPhase({ ...values, instance_id: 1 }));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="new phase" titleDetails="phase details">
      <PhaseForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
