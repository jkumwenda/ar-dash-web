import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { ProjectSpace } from "../../../../types";

type IProps = {
  projectSpace: ProjectSpace;
  onClickEdit: (id: number) => void;
};

const SpaceView: FC<IProps> = ({ projectSpace, onClickEdit }) => {
  return (
    <div className="bg-gray-100 rounded-xl m-1">
      <div className="py-3 px-4 m-1">
        <p className="font-semibold">{projectSpace.space.space}</p>
        <p>{projectSpace.size}</p>
      </div>

      <div className="bg-blue-600 px-4 pt-1 rounded-b-xl">
        <button
          className="
            rounded-lg m-0"
          onClick={() => {
            onClickEdit(projectSpace.project_space_id);
          }}
        >
          <PencilIcon className="w-5 h-5 text-blue-200" />
        </button>
        <button
          className="
            rounded-lg m-0
      "
        >
          <TrashIcon className="w-5 h-5 text-blue-200" />
        </button>
      </div>
    </div>
  );
};

export default SpaceView;
