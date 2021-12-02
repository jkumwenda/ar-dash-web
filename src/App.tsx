import { Redirect, Route, useHistory } from "react-router";
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
  LoginPage,
} from "./pages/";
import routes from "./fixtures/routes";
import { useLogin } from "./hooks/";

function App() {
  const logged = useLogin();

  return (
    <>
      <Route path="/login" component={LoginPage} />
      <BasePage>
        <Route path={routes.PROJECT_DESIGN} component={ProjectDesign} />
        <Route
          path={routes.CONFIGURE_DESIGN_BUILDING_TYPES}
          component={ConfigureBuildingTypes}
        />
        <Route
          path={routes.CONFIGURE_DESIGN_SPACE}
          component={ConfigureSpace}
        />
        <Route
          path={routes.CONFIGURE_DESIGN_PHASES}
          component={ConfigurePhase}
        />
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

        <Route exact path={routes.CONFIGURE}>
          <Redirect to={routes.CONFIGURE_DESIGN_BUILDING_TYPES} />
        </Route>
        <Route exact path={routes.PROJECT}>
          <Redirect to={routes.PROJECT_DESIGN} />
        </Route>
        <Route exact path={routes.USER_MANAGEMENT}>
          <Redirect to={routes.USER_MANAGEMENT_USERS} />
        </Route>
      </BasePage>
    </>
  );
}

export default App;
