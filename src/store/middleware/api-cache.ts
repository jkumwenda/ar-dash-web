import moment from "moment";
import { Middleware, Store } from "redux";
import { environments } from "../../utils/env-adapter";
import { apiCallBegun } from "../action/api";
import { APICacheAdded, APICacheUpdated, getUrl } from "../slices/cache";

//@ts-ignore
const apiCache: Middleware =
  ({ dispatch, getState }: Store) =>
  (next) =>
  (action) => {
    if (action.type !== apiCallBegun.type) return next(action);

    const { BASE_API_URL, API_CACHE_TIME } = environments;

    let { url, method } = action.payload;

    if (method !== "GET") return next(action);

    url = `${BASE_API_URL}${url}`;

    const cache = getUrl(url)(getState());

    if (cache) {
      const diffInMinutes = moment().diff(
        moment(cache.lastAccessTime),
        "minutes"
      );
      if (diffInMinutes < API_CACHE_TIME) {
        return;
      }

      dispatch(APICacheUpdated({ endpoint: url, lastAccessTime: Date.now() }));
      next(action);
      return;
    }

    dispatch(APICacheAdded({ endpoint: url, lastAccessTime: Date.now() }));
    next(action);
  };

export default apiCache;
