import { Button, Panel } from "../../../components";
import { DocumentAddIcon, FilterIcon } from "@heroicons/react/solid";
import PageBar from "../../../components/page-bar";

export default function () {
  return (
    <div className="flex flex-col">
      <Panel content="Projects" />
      <PageBar title="List of All Projects">
        <div className="pr-1 flex flex-grow items-center justify-end">
          <Button
            Icon={DocumentAddIcon}
            title="new project"
            onClick={() => {}}
            className="
            bg-gradient-to-r
            from-blue-800
            to-blue-600
            hover:bg-blue-800
            text-blue-50"
          />
          <Button
            Icon={FilterIcon}
            title="filter"
            onClick={() => {}}
            iconClassName="text-blue-500"
            className="bg-white border shadow-md border-white hover:bg-gray-100 hover:border-gray-100
            text-gray-500 font-semibold"
          />
        </div>
      </PageBar>
    </div>
  );
}
