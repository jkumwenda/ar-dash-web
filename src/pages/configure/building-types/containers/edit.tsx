import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import {
  addBuildingType,
  editBuildingType,
  getBuildingType,
} from "../../../../store/slices/building-type";
import BuildingTypeForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const buildingType = useAppSelector(getBuildingType(Number(params.id)));

  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(
        editBuildingType({ ...values, instance_id: 1 }, Number(params.id))
      );
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper
      title="edit building type"
      titleDetails="building type details"
    >
      <BuildingTypeForm initialValues={buildingType} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
