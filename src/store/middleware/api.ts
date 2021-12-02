import { Middleware, Action, Store } from "redux";
import { create } from "apisauce";
import * as actions from "../action/api";
import { isArray } from "lodash";
import { environments } from "../../utils/env.adapter";
import localStorage from "../../utils/localstorage.helper";
import { userLogout } from "../slices/login";

//@ts-ignore
const api: Middleware =
  ({ dispatch }: Store) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegun.type) return next(action);

    const { url, method, onStart, onSuccess, onError, data } = action.payload;
    const { BASE_API_URL } = environments;

    if (onStart) dispatch({ type: onStart });

    next(action);

    const api = create({
      baseURL: BASE_API_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getKey("token"),
      },
    });

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
      //@ts-ignore
      if (responseData.code && responseData.code === "token_not_valid") {
        localStorage.removeKey("token");
        dispatch({ type: userLogout.type, payload: {} });
      }
      dispatch(actions.apiCallFailed(problem));

      if (isArray(onError)) {
        onError.forEach((action) =>
          dispatch({ type: action, payload: problem })
        );
      }
    }
  };

export default api;
