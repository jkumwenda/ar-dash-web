import { Route, Switch } from "react-router";
import routes from "../../../fixtures/routes";
import create from "./containers/create";
import edit from "./containers/edit";
import home from "./containers/home";

const {
  USER_MANAGEMENT_CLIENTS_EDIT,
  USER_MANAGEMENT_CLIENTS_CREATE,
  USER_MANAGEMENT_CLIENTS,
} = routes;

export default function () {
  return (
    <div className="flex flex-col">
      <Switch>
        <Route path={USER_MANAGEMENT_CLIENTS_EDIT} component={edit} />
        <Route path={USER_MANAGEMENT_CLIENTS_CREATE} component={create} />
        <Route path={USER_MANAGEMENT_CLIENTS} component={home} />
      </Switch>
    </div>
  );
}
