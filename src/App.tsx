import { Route } from "react-router";
import { BasePage, ProjectDesignPage } from "./pages/";
import routes from "./fixtures/routes";

function App() {
  return (
    <BasePage>
      <Route path={routes.PROJECT_DESIGN} component={ProjectDesignPage} />
    </BasePage>
  );
}

export default App;
