import { FC } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addProjectSpace } from "../../../../store/slices/project";
import SpaceForm from "../components/space.form";

type IProps = {
  isOpen: boolean;
  onCancel: () => void;
};

const SpaceAdd: FC<IProps> = ({ isOpen, onCancel }) => {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const initialValues = {
    space_id: "",
    size: "",
    project_id: Number(params.id),
    instance_id: 1,
  };
  const handleSubmit = (values: any) => {
    dispatch(addProjectSpace(values));
    onCancel();
  };

  return (
    <SpaceForm
      isOpen={isOpen}
      onCancel={onCancel}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  );
};

export default SpaceAdd;
