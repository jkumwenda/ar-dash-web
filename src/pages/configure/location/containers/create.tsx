import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageWrapper } from "../../../../containers";
import { addLocation } from "../../../../store/slices/location";
import LocationForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = { location: "", district_id: "" };
  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(addLocation({ ...values, instance_id: 1 }));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="new location" titleDetails="location details">
      <LocationForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
