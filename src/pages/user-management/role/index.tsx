import { Route, Switch } from "react-router";
import routes from "../../../fixtures/routes";
import create from "./containers/create";
import edit from "./containers/edit";
import home from "./containers/home";

export default function () {
  return (
    <div className="flex flex-col">
      <Switch>
        <Route path={`${routes.USER_MANAGEMENT_ROLES_EDIT}`} component={edit} />
        <Route path={routes.USER_MANAGEMENT_ROLES_CREATE} component={create} />
        <Route path={routes.USER_MANAGEMENT_ROLES} component={home} />
      </Switch>
    </div>
  );
}
