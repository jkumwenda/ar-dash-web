const projects = "/projects";
const userManagement = "/user-management";
const configureDesign = "/configure/design";
const configureConstruction = "/configure/construction";

const routes = {
  PROJECT: projects,
  PROJECT_DESIGN: `${projects}/design`,
  PROJECT_DESIGN_CREATE: `${projects}/design/create`,
  PROJECT_CONSTRUCTION: `${projects}/construction`,
  USER_MANAGEMENT: userManagement,
  USER_MANAGEMENT_PROFILES: `${userManagement}/profiles`,
  USER_MANAGEMENT_ROLES: `${userManagement}/roles`,
  USER_MANAGEMENT_CLIENTS: `${userManagement}/clients`,
  CONFIGURE: "/configure",
  CONFIGURE_DESIGN_BUILDING_TYPES: `${configureDesign}/building-types`,
  CONFIGURE_DESIGN_BUILDING_TYPES_CREATE: `${configureDesign}/building-types/create`,
  CONFIGURE_DESIGN_BUILDING_TYPES_EDIT: `${configureDesign}/building-types/edit`,
  CONFIGURE_DESIGN_BUILDING_TYPES_DELETE: `${configureDesign}/building-types/delete`,
  CONFIGURE_DESIGN_SPACES: `${configureDesign}/spaces`,
  CONFIGURE_DESIGN_PHASES: `${configureDesign}/phases`,
  CONFIGURE_DESIGN_STATUS: `${configureDesign}/status`,
  CONFIGURE_DESIGN_LOCATIONS: `${configureDesign}/locations`,
  CONFIGURE_CONSTRUCTION_PHASES: `${configureConstruction}/phases`,
  CONFIGURE_CONSTRUCTION_MATERIALS: `${configureConstruction}/materials`,
};

export default routes;
