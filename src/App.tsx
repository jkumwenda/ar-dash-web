import { Route } from "react-router";
import {
  BasePage,
  ConfigureBuildingTypesPage,
  ProjectDesignPage,
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
    </BasePage>
  );
}

export default App;
