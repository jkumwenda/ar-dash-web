import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { editSpace, getSpace } from "../../../../store/slices/space";
import SpaceForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const buildingType = useAppSelector(getSpace(Number(params.id)));

  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(editSpace({ ...values, instance_id: 1 }, Number(params.id)));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="edit space" titleDetails="space details">
      <SpaceForm initialValues={buildingType} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
