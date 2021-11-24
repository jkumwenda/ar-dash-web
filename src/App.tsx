import { Route } from "react-router";
import {
  BasePage,
  ConfigureBuildingTypesPage,
  ConfigureSpacePage,
  ProjectDesignPage,
  ConfigurePhasePage,
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
    </BasePage>
  );
}

export default App;
