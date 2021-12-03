import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { ProjectSpace } from "../../../../types";

type IProps = {
  projectSpace: ProjectSpace;
  onClickEdit: (id: number) => void;
};

const SpaceView: FC<IProps> = ({ projectSpace, onClickEdit }) => {
  return (
    <div className="py-3 px-6 bg-gray-100 rounded-xl m-1">
      <p className="font-semibold">{projectSpace.space.space}</p>
      <p>{projectSpace.size}</p>
      <p>
        <button
          className="
        rounded-full
        bg-gradient-to-r
        from-blue-400
        to-blue-700
        p-1
      "
          onClick={() => {
            onClickEdit(projectSpace.project_space_id);
          }}
        >
          <PencilIcon className="w-4 h-4 text-white" />
        </button>
        <button
          className="
        rounded-full
        bg-gradient-to-r
        from-red-400
        to-red-700
        p-1
      "
        >
          <TrashIcon className="w-4 h-4 text-white" />
        </button>
      </p>
    </div>
  );
};

export default SpaceView;
