import { FC } from "react";
import { useHistory } from "react-router";
import { Panel } from "../components";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";

type IProps = {
  title: string;
  titleDetails?: string;
  showBackIcon?: boolean;
};

const PageWrapper: FC<IProps> = ({
  title,
  titleDetails,
  children,
  showBackIcon = true,
}) => {
  const history = useHistory();

  return (
    <>
      <div
        onClick={() => history.goBack()}
        className="w-8 h-8 cursor-pointer ml-4 mb-4 text-gray-700"
      >
        {showBackIcon && <ArrowCircleLeftIcon />}
      </div>
      <Panel content={title} contentDetails={titleDetails} />
      {children}
    </>
  );
};

export default PageWrapper;
