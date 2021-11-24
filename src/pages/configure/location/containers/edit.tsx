import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { editLocation, getLocation } from "../../../../store/slices/location";
import LocationForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const buildingType = useAppSelector(getLocation(Number(params.id)));

  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(editLocation({ ...values, instance_id: 1 }, Number(params.id)));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="edit location" titleDetails="location details">
      <LocationForm initialValues={buildingType} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
