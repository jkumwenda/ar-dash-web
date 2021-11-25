import { Route } from "react-router";
import {
  BasePage,
  ConfigureBuildingTypes,
  ConfigureSpace,
  ProjectDesign,
  ConfigurePhase,
  ConfigureStatus,
  ConfigureLocation,
  userManagementRole,
  userManagementSystem,
  userManagementClient,
} from "./pages/";
import routes from "./fixtures/routes";

function App() {
  return (
    <BasePage>
      <Route path={routes.PROJECT_DESIGN} component={ProjectDesign} />
      <Route
        path={routes.CONFIGURE_DESIGN_BUILDING_TYPES}
        component={ConfigureBuildingTypes}
      />
      <Route path={routes.CONFIGURE_DESIGN_SPACE} component={ConfigureSpace} />
      <Route path={routes.CONFIGURE_DESIGN_PHASES} component={ConfigurePhase} />
      <Route
        path={routes.CONFIGURE_DESIGN_STATUSES}
        component={ConfigureStatus}
      />
      <Route
        path={routes.CONFIGURE_DESIGN_LOCATIONS}
        component={ConfigureLocation}
      />
      <Route
        path={routes.USER_MANAGEMENT_ROLES}
        component={userManagementRole}
      />
      <Route
        path={routes.USER_MANAGEMENT_USERS}
        component={userManagementSystem}
      />
      <Route
        path={routes.USER_MANAGEMENT_CLIENTS}
        component={userManagementClient}
      />
    </BasePage>
  );
}

export default App;
