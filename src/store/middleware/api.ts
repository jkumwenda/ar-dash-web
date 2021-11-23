import { Middleware, Action, Store } from "redux";
import { create } from "apisauce";
import * as actions from "../action/api";
import { isArray } from "lodash";

//@ts-ignore
const api: Middleware =
  ({ dispatch }: Store) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegun.type) return next(action);

    const { url, method, onStart, onSuccess, onError, data } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    const api = create({ baseURL: "http://localhost:4001" });

    const {
      ok,
      data: responseData,
      problem,
    } = await api.any({ url, method, data });

    if (ok) {
      if (isArray(onSuccess)) {
        onSuccess.forEach((action) =>
          dispatch({ type: action, payload: responseData })
        );
        return;
      }
      dispatch({ type: onSuccess, payload: responseData });
    }
    if (problem) {
      dispatch(actions.apiCallFailed(problem));

      if (isArray(onError)) {
        onError.forEach((action) =>
          dispatch({ type: action, payload: problem })
        );
      }
    }
  };

export default api;
