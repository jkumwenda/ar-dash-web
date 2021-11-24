import { Route, Switch } from "react-router";
import routes from "../../../fixtures/routes";
import create from "./containers/create";
import edit from "./containers/edit";
import home from "./containers/home";

export default function () {
  return (
    <div className="flex flex-col">
      <Switch>
        <Route
          path={`${routes.CONFIGURE_DESIGN_SPACE_EDIT}`}
          component={edit}
        />
        <Route path={routes.CONFIGURE_DESIGN_SPACE_CREATE} component={create} />
        <Route path={routes.CONFIGURE_DESIGN_SPACE} component={home} />
      </Switch>
    </div>
  );
}