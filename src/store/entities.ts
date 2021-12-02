import { combineReducers } from "@reduxjs/toolkit";
import buildingTypeReducer from "./slices/building-type";
import apiCacheReducer from "./slices/cache";
import locationReducer from "./slices/location";
import phaseReducer from "./slices/phase";
import spaceReducer from "./slices/space";
import statusReducer from "./slices/status";
import roleReducer from "./slices/role";
import userReducer from "./slices/user";
import clientReducer from "./slices/client";
import projectReducer from "./slices/project";
import loginReducer from "./slices/login";

export const entityReducer = combineReducers({
  buildingType: buildingTypeReducer,
  space: spaceReducer,
  phase: phaseReducer,
  apiCache: apiCacheReducer,
  status: statusReducer,
  location: locationReducer,
  role: roleReducer,
  user: userReducer,
  client: clientReducer,
  project: projectReducer,
  login: loginReducer,
});
