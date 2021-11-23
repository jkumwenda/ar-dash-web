import { combineReducers } from "@reduxjs/toolkit";
import buildingTypeReducer from "./slices/building-type";
import apiCacheReducer from "./slices/cache";

export const entityReducer = combineReducers({
  buildingType: buildingTypeReducer,
  apiCache: apiCacheReducer,
});
