import { FC } from "react";
import SpaceForm from "../components/space.form";

type IProps = {
  isOpen: boolean;
  onCancel: () => void;
};

const SpaceEdit: FC<IProps> = ({ isOpen, onCancel }) => {
  const initialValues = {};
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

export default SpaceEdit;
