import { combineReducers } from "@reduxjs/toolkit";
import buildingTypeReducer from "./slices/building-type";
import apiCacheReducer from "./slices/cache";
import locationReducer from "./slices/location";
import phaseReducer from "./slices/phase";
import spaceReducer from "./slices/space";
import statusReducer from "./slices/status";
import roleReducer from "./slices/role";

export const entityReducer = combineReducers({
  buildingType: buildingTypeReducer,
  space: spaceReducer,
  phase: phaseReducer,
  apiCache: apiCacheReducer,
  status: statusReducer,
  location: locationReducer,
  role: roleReducer,
});
