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
      to={routes.USER_MANAGEMENT}
      Icon={UsersIcon}
      onClick={() => setUserManagementOpen((isOpen) => !isOpen)}
    />
  );
  const UserManagementContent = (
    <DropCard
      links={[
        {
          content: [
            { title: "system users", url: routes.USER_MANAGEMENT_USERS },
            { title: "roles", url: routes.USER_MANAGEMENT_ROLES },
            { title: "client management", url: routes.USER_MANAGEMENT_CLIENTS },
          ],
        },
      ]}
    />
  );
  const ConfigureLink = (
    <NavLinkButton
      to={routes.CONFIGURE}
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
            {
              title: "building types",
              url: routes.CONFIGURE_DESIGN_BUILDING_TYPES,
            },
            { title: "spaces", url: routes.CONFIGURE_DESIGN_SPACE },
            { title: "phases", url: routes.CONFIGURE_DESIGN_PHASES },
            { title: "status", url: routes.CONFIGURE_DESIGN_STATUSES },
            { title: "locations", url: routes.CONFIGURE_DESIGN_LOCATIONS },
          ],
        },
        {
          heading: "Construction",
          content: [
            { title: "phases", url: routes.CONFIGURE_CONSTRUCTION_PHASES },
            {
              title: "materials",
              url: routes.CONFIGURE_CONSTRUCTION_MATERIALS,
            },
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
