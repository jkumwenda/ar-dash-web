import { Route, Switch } from "react-router";
import routes from "../../../fixtures/routes";
import create from "./containers/create";
import edit from "./containers/edit";
import Home from "./containers/home";

export default function () {
  return (
    <div className="flex flex-col">
      <Switch>
        <Route path={routes.PROJECT_DESIGN_EDIT} component={edit} />
        <Route path={routes.PROJECT_DESIGN_CREATE} component={create} />
        <Route path={routes.PROJECT_DESIGN} component={Home} />
      </Switch>
    </div>
  );
}

// <div className="flex flex-row p-5">
//         <NavLink
//           to="/"
//           className="
//           h-11
//           w-11
//           text-blue-100
//           rounded-xl
//           border border-gray-50
//           shadow
//           bg-blue-800
//           hover:bg-blue-700
//           flex
//           items-center
//           justify-center
//           text-xs
//           font-semibold
//         "
//         >
//           <ArrowCircleLeftIcon className="w-5 h-5 mx-2 font-extrabold text-blue-100" />
//         </NavLink>
//         <div
//           className="
//           h-11
//           w-11
//           mx-3
//           text-gray-500
//           font-semibold
//           rounded-xl
//           border border-gray-200 border-2 border-blue-800
//           flex
//           items-center
//           justify-center
//         "
//         >
//           3
//         </div>
//         <NavLink
//           to="/"
//           className="
//           h-11
//           w-11
//           text-blue-200
//           rounded-xl
//           border border-gray-50
//           shadow
//           bg-blue-800
//           hover:bg-blue-700
//           flex
//           items-center
//           justify-center
//           text-xs
//           font-semibold
//         "
//         >
//           <ArrowCircleRightIcon className="w-5 h-5 mx-2 font-extrabold text-blue-100" />
//         </NavLink>
//       </div>
