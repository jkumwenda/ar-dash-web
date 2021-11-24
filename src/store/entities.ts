import { combineReducers } from "@reduxjs/toolkit";
import buildingTypeReducer from "./slices/building-type";
import apiCacheReducer from "./slices/cache";
import spaceReducer from "./slices/space";

export const entityReducer = combineReducers({
  buildingType: buildingTypeReducer,
  space: spaceReducer,
  apiCache: apiCacheReducer,
});
