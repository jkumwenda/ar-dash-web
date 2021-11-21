import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  TableIcon,
  UsersIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import DropDown from "../../components/drop-down";
import NavLinkButton from "../../components/nav-link-button";
import DropCard from "./components/drop-card";
import { useState } from "react";
import routes from "../../fixtures/routes";

const SideBar = () => {
  const [projectOpen, setProjectOpen] = useState(false);
  const [userManagementOpen, setUserManagementOpen] = useState(false);
  const [configureOpen, setConfigureOpen] = useState(false);

  const ProjectsLink = (
    <NavLinkButton
      title="Projects"
      to={routes.PROJECT}
      Icon={TableIcon}
      onClick={() => setProjectOpen((isOpen) => !isOpen)}
    />
  );
  const ProjectsContent = (
    <DropCard
      links={[
        {
          content: [
            { title: "design", url: routes.PROJECT_DESIGN },
            { title: "construction", url: routes.PROJECT_CONSTRUCTION },
          ],
        },
      ]}
    />
  );
  const UserManagementLink = (
    <NavLinkButton
      title="user management"
      to="/user-management"
      Icon={UsersIcon}
      onClick={() => setUserManagementOpen((isOpen) => !isOpen)}
    />
  );
  const UserManagementContent = (
    <DropCard
      links={[
        {
          content: [
            { title: "system users", url: "/projects/design" },
            { title: "roles", url: "/projects/construction" },
            { title: "client management", url: "/projects/construction" },
          ],
        },
      ]}
    />
  );
  const ConfigureLink = (
    <NavLinkButton
      to="/configure"
      title="configure"
      Icon={CogIcon}
      onClick={() => setConfigureOpen((isOpen) => !isOpen)}
    />
  );
  const ConfigureContent = (
    <DropCard
      links={[
        {
          heading: "Design",
          content: [
            { title: "building types", url: "/projects/design" },
            { title: "spaces", url: "/projects/construction" },
            { title: "phases", url: "/projects/construction" },
            { title: "status", url: "/projects/construction" },
            { title: "locations", url: "/projects/construction" },
          ],
        },
        {
          heading: "Construction",
          content: [
            { title: "phases", url: "/projects/design" },
            { title: "materials", url: "/projects/construction" },
          ],
        },
      ]}
    />
  );
  return (
    <>
      <div className="text-gray-600 lg:pt-10 flex flex-col flex-grow">
        <NavLinkButton Icon={HomeIcon} title="Dashboard" to="/dashboard" />
        <DropDown
          isOpen={projectOpen}
          button={ProjectsLink}
          dropDownContent={ProjectsContent}
        />
        <NavLinkButton Icon={HomeIcon} title="reports" to="/reports" />
        <DropDown
          isOpen={userManagementOpen}
          button={UserManagementLink}
          dropDownContent={UserManagementContent}
        />
        <DropDown
          isOpen={configureOpen}
          button={ConfigureLink}
          dropDownContent={ConfigureContent}
        />
        <NavLinkButton Icon={QuestionMarkCircleIcon} title="help" to="help" />
      </div>
    </>
  );
};

export default SideBar;
