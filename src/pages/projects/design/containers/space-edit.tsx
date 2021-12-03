import { FC } from "react";
import { ProjectSpace } from "../../../../types";
import SpaceForm from "../components/space.form";

type IProps = {
  isOpen: boolean;
  onCancel: () => void;
  projectSpace: ProjectSpace;
};

const SpaceEdit: FC<IProps> = ({ isOpen, onCancel, projectSpace }) => {
  const handleSubmit = () => {};

  return (
    <SpaceForm
      isOpen={isOpen}
      onCancel={onCancel}
      initialValues={projectSpace}
      onSubmit={handleSubmit}
    />
  );
};

export default SpaceEdit;
