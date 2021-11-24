import { Route } from "react-router";
import {
  BasePage,
  ConfigureBuildingTypesPage,
  ConfigureSpacePage,
  ProjectDesignPage,
  ConfigurePhasePage,
  ConfigureStatusPage,
  ConfigureLocationPage,
  userManagementRolePage,
  userManagementSystemPage,
} from "./pages/";
import routes from "./fixtures/routes";

function App() {
  return (
    <BasePage>
      <Route path={routes.PROJECT_DESIGN} component={ProjectDesignPage} />
      <Route
        path={routes.CONFIGURE_DESIGN_BUILDING_TYPES}
        component={ConfigureBuildingTypesPage}
      />
      <Route
        path={routes.CONFIGURE_DESIGN_SPACE}
        component={ConfigureSpacePage}
      />
      <Route
        path={routes.CONFIGURE_DESIGN_PHASES}
        component={ConfigurePhasePage}
      />
      <Route
        path={routes.CONFIGURE_DESIGN_STATUSES}
        component={ConfigureStatusPage}
      />
      <Route
        path={routes.CONFIGURE_DESIGN_LOCATIONS}
        component={ConfigureLocationPage}
      />
      <Route
        path={routes.USER_MANAGEMENT_ROLES}
        component={userManagementRolePage}
      />
      <Route
        path={routes.USER_MANAGEMENT_USERS}
        component={userManagementSystemPage}
      />
    </BasePage>
  );
}

export default App;
