import { PlusIcon, PencilIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";
import { getProject } from "../../../../store/slices/project";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const project = useAppSelector(getProject(Number(params.id)));

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
                  {project?.start_date + " - " + project?.end_date}
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
                    console.log("open");
                  }}
                >
                  <PlusIcon className="w-6 h-6 font-extrabold" />
                </button>
              </div>
              <div className="flex flex-wrap flex-grow mt-2">
                <div className="py-3 px-6 bg-gray-100 rounded-xl m-1">
                  <p className="font-semibold">space 1</p>
                  <p>5 m</p>
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
                        console.log("open");
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
            bg-white
            rounded-xl
            border border-gray-200
          "
          >
            Progress bar
            <div className="flex flex-row w-full">
              <div className="bg-blue-400 w-1/12 text-center p-2">1</div>
              <div className="bg-gray-100 11/12">Sketching</div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
