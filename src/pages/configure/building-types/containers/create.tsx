import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageWrapper } from "../../../../containers";
import { addBuildingType } from "../../../../store/slices/building-type";
import BuildingTypeForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = { building_type: "" };
  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(addBuildingType({ ...values, instance_id: 1 }));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="new building type" titleDetails="building type details">
      <BuildingTypeForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
