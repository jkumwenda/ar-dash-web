import { PlusIcon, ArrowNarrowDownIcon } from "@heroicons/react/outline";
import { PencilAltIcon, ChatAlt2Icon, TrashIcon } from "@heroicons/react/solid";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { getProject } from "../../../../store/slices/project";
import { readableDate } from "../../../../utils/dates.helper";
import SpaceView from "../components/space-view";
import SpaceAddForm from "./space-add";
import SpaceEditForm from "./space-edit";

export default function () {
  const params = useParams<{ id: string }>();
  const project = useAppSelector(getProject(Number(params.id)));
  const [addSpaceVisible, setAddSpaceVisible] = useState(false);
  const [editSpaceVisible, setEditSpaceVisible] = useState(false);
  const [projectSpaceId, setProjectSpaceId] = useState<number | undefined>(); // edited project space

  return (
    <PageWrapper title="Projects">
      <div className="flex flex-col lg:flex-row flex-grow">
        <div className="w-12/12 lg:w-8/12">
          <div className="flex space-y-6">
            <div
              className="
              flex flex-col flex-grow
              m-5
              p-6
              rounded-xl
              border border-gray-200
              text-white
              bg-gradient-to-r
              from-blue-700
              to-blue-500
            "
            >
              <h2 className="flex-grow text-xl pb-2 text-blue-200">
                Project details
              </h2>
              <div className="flex flex-row flex-grow">
                <p className="font-semibold pr-5 capitalize">project name</p>
                <p>{project?.project_name}</p>
              </div>

              <div className="flex flex-row flex-grow">
                <p className="font-semibold pr-5">Project Manager</p>
                <p>
                  {project?.manager.first_name +
                    " " +
                    project?.manager.last_name}
                </p>
              </div>
              <div className="flex flex-row flex-grow items-center ">
                <p className="font-semibold pr-5">Duration</p>
                <p className="text-sm">
                  {readableDate(project?.start_date) +
                    " - " +
                    readableDate(project?.end_date)}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row flex-grow text-gray-500">
            <div
              className="
              w-12/12
              lg:w-6/12
              m-5
              p-6
              bg-white
              rounded-xl
              border border-gray-200
            "
            >
              <h2 className="flex-grow text-xl pb-2">Client details</h2>
              <div className="flex flex-row flex-grow">
                <p className="font-semibold pr-5">Name</p>
                <p>
                  {project?.client.user.first_name +
                    " " +
                    project?.client.user.first_name}
                </p>
              </div>
              <div className="flex flex-row flex-grow">
                <p className="font-semibold pr-5">Email</p>
                <p>{project?.client.user.email}</p>
              </div>
              <div className="flex flex-row flex-grow">
                <p className="font-semibold pr-5">Phone</p>
                {project?.client.phone_number}
              </div>
            </div>
            <div
              className="
              w-12/12
              lg:w-6/12
              m-5
              p-6
              bg-white
              rounded-xl
              border border-gray-200
            "
            >
              <h2 className="flex-grow text-xl pb-2 text-gray-500">
                Location details
              </h2>

              <div className="flex flex-row flex-grow">
                <p className="font-semibold pr-5">Location</p>
                {project?.location.location}
              </div>
              <div className="flex flex-row flex-grow">
                <p className="font-semibold pr-5">District</p>
                {project?.location.district.district}
              </div>
            </div>
          </div>

          <SpaceAddForm
            isOpen={addSpaceVisible}
            onCancel={() => setAddSpaceVisible(false)}
          />

          <SpaceEditForm
            isOpen={editSpaceVisible}
            onCancel={() => {
              setEditSpaceVisible(false);
              setProjectSpaceId(undefined);
            }}
            //@ts-ignore
            projectSpaceId={projectSpaceId}
          />

          <div className="flex space-y-6 text-gray-500">
            <div
              className="
              flex flex-col flex-grow
              m-5
              p-6
              rounded-xl
              border border-gray-200
              bg-white
            "
            >
              <div className="flex flex-row">
                <h2 className="flex-grow text-xl pb-2">Project Spaces</h2>
                <button
                  className="
                  bg-gradient-to-r
                  from-blue-600
                  to-blue-800
                  p-2
                  text-2xl text-blue-100
                  rounded-full
                "
                  onClick={() => {
                    setAddSpaceVisible(true);
                  }}
                >
                  <PlusIcon className="w-6 h-6 font-extrabold" />
                </button>
              </div>
              <div className="flex flex-wrap flex-grow mt-2">
                {project?.spaces.map((projectSpace, index) => (
                  <SpaceView
                    key={projectSpace.space_id + index}
                    projectSpace={projectSpace}
                    onClickEdit={() => {
                      setProjectSpaceId(projectSpace.project_space_id);
                      setEditSpaceVisible(true);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-12/12 lg:w-4/12">
          <div
            className="
            flex flex-col flex-grow
            m-5
            p-4
            py-5
            bg-white
            rounded-xl
            border border-gray-200
          "
          >
            <h2
              className="
              flex-grow
              text-md
              bg-blue-500
              font-xl
              p-4
              border border-xl
              text-blue-100
              rounded-2xl
              mb-4
              mx-1
            "
            >
              Project Stages
            </h2>
            <div className="flex flex-row w-full">
              <div
                className="
                bg-white
                flex-none
                text-center text-gray-500
                rounded-full
                inline-block
                align-middle
                border-2 border-blue-400
                font-semibold
                px-4
                p-2
                mx-1
              "
              >
                1
              </div>
              <div
                className="
                bg-gray-100
                flex-grow
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-100
                px-4
                p-2
              "
              >
                Sketching
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div
                className="
                flex-none
                text-center text-gray-500
                inline-block
                align-middle
                border-1 border-blue-400
                font-semibold
                px-2
                mx-1
                py-0
                my-0
              "
              >
                <ArrowNarrowDownIcon className="w-6 h-10 text-blue-400" />
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div
                className="
                bg-white
                flex-none
                text-center text-gray-500
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-400
                font-semibold
                px-4
                p-2
                mx-1
              "
              >
                2
              </div>
              <div
                className="
                bg-gray-100
                flex-grow
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-100
                px-4
                p-2
              "
              >
                Drawing
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div
                className="
                flex-none
                text-center text-gray-500
                inline-block
                align-middle
                border-1 border-gray-400
                font-semibold
                px-2
                mx-1
                py-0
                my-0
              "
              >
                <ArrowNarrowDownIcon className="w-6 h-10 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div
                className="
                bg-white
                flex-none
                text-center text-gray-500
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-400
                font-semibold
                px-4
                p-2
                mx-1
              "
              >
                3
              </div>
              <div
                className="
                bg-gray-100
                flex-grow
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-100
                px-4
                p-2
              "
              >
                3D Modeling
              </div>
              <div
                className="
                bg-gray-100
                flex-none
                rounded-full
                inline-block
                align-middle
                border-2 border-gray-100
                px-3
                p-2
                pt-3
                mx-1
                pb-1
              "
              >
                <button className="rounded-lg m-0">
                  <PencilAltIcon className="w-4 h-4 text-blue-500 font-bold" />
                </button>
                <button className="rounded-lg m-0">
                  <ChatAlt2Icon className="w-4 h-4 text-blue-500 font-bold" />
                </button>
                <button className="rounded-lg m-0">
                  <TrashIcon className="w-4 h-4 text-blue-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
