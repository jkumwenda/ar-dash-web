import { FC } from "react";
import SpaceForm from "../components/space.form";

type IProps = {
  isOpen: boolean;
  onCancel: () => void;
};

const SpaceAdd: FC<IProps> = ({ isOpen, onCancel }) => {
  const initialValues = {
    space_id: "",
    size: "",
  };
  const handleSubmit = () => {};

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
