import { FC } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import {
  editProjectSpace,
  getProjectSpace,
} from "../../../../store/slices/project";

import SpaceForm from "../components/space.form";

type IProps = {
  isOpen: boolean;
  onCancel: () => void;
  projectSpaceId: number;
};

const SpaceEdit: FC<IProps> = ({ isOpen, onCancel, projectSpaceId }) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const space = useAppSelector(getProjectSpace(Number(id), projectSpaceId));
  const handleSubmit = (values: any) => {
    dispatch(editProjectSpace(values, projectSpaceId));
    onCancel();
  };

  return (
    <SpaceForm
      isOpen={isOpen}
      onCancel={onCancel}
      initialValues={space}
      onSubmit={handleSubmit}
    />
  );
};

export default SpaceEdit;
