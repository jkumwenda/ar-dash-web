const projects = "/projects";
const userManagement = "/user-management";
const userManagementRole = userManagement + "/roles";
const userManagementUser = userManagement + "/users";
const configureConstruction = "/configure/construction";
const configureDesign = "/configure/design";
const configureSpace = "/configure/spaces";
const configurePhase = "/configure/phases";
const configureStatus = "/configure/status";
const configureLocation = "/configure/locations";

const routes = {
  PROJECT: projects,
  PROJECT_DESIGN: `${projects}/design`,
  PROJECT_DESIGN_CREATE: `${projects}/design/create`,
  PROJECT_CONSTRUCTION: `${projects}/construction`,
  USER_MANAGEMENT: userManagement,
  USER_MANAGEMENT_PROFILES: `${userManagement}/profiles`,
  USER_MANAGEMENT_CLIENTS: `${userManagement}/clients`,

  CONFIGURE: "/configure",
  CONFIGURE_DESIGN_BUILDING_TYPES: `${configureDesign}/building-types`,
  CONFIGURE_DESIGN_BUILDING_TYPES_CREATE: `${configureDesign}/building-types/create`,
  CONFIGURE_DESIGN_BUILDING_TYPES_EDIT: `${configureDesign}/building-types/:id/edit`,
  CONFIGURE_DESIGN_BUILDING_TYPES_DELETE: `${configureDesign}/building-types/:id/delete`,

  CONFIGURE_DESIGN_SPACE: configureSpace,
  CONFIGURE_DESIGN_SPACE_CREATE: `${configureSpace}/create`,
  CONFIGURE_DESIGN_SPACE_EDIT: `${configureSpace}/:id/edit`,
  CONFIGURE_DESIGN_SPACE_DELETE: `${configureSpace}/:id/delete`,

  CONFIGURE_DESIGN_PHASES: configurePhase,
  CONFIGURE_DESIGN_PHASE_CREATE: `${configurePhase}/create`,
  CONFIGURE_DESIGN_PHASE_EDIT: `${configurePhase}/:id/edit`,
  CONFIGURE_DESIGN_PHASE_DELETE: `${configurePhase}/:id/delete`,

  CONFIGURE_DESIGN_STATUSES: configureStatus,
  CONFIGURE_DESIGN_STATUS_CREATE: `${configureStatus}/create`,
  CONFIGURE_DESIGN_STATUS_EDIT: `${configureStatus}/:id/edit`,
  CONFIGURE_DESIGN_STATUS_DELETE: `${configureStatus}/:id/delete`,

  CONFIGURE_DESIGN_LOCATIONS: configureLocation,
  CONFIGURE_DESIGN_LOCATIONS_CREATE: `${configureLocation}/create`,
  CONFIGURE_DESIGN_LOCATIONS_EDIT: `${configureLocation}/:id/edit`,
  CONFIGURE_DESIGN_LOCATIONS_DELETE: `${configureLocation}/:id/delete`,

  USER_MANAGEMENT_ROLES: userManagementRole,
  USER_MANAGEMENT_ROLES_CREATE: `${userManagementRole}/create`,
  USER_MANAGEMENT_ROLES_EDIT: `${userManagementRole}/:id/edit`,
  USER_MANAGEMENT_ROLES_DELETE: `${userManagementRole}/:id/delete`,

  USER_MANAGEMENT_USERS: userManagementUser,
  USER_MANAGEMENT_USERS_CREATE: `${userManagementUser}/create`,
  USER_MANAGEMENT_USERS_EDIT: `${userManagementUser}/:id/edit`,
  USER_MANAGEMENT_USERS_DELETE: `${userManagementUser}/:id/delete`,

  CONFIGURE_CONSTRUCTION_PHASES: `${configureConstruction}/phases`,
  CONFIGURE_CONSTRUCTION_MATERIALS: `${configureConstruction}/materials`,
};

export default routes;
