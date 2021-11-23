import { combineReducers } from "@reduxjs/toolkit";
import buildingTypeReducer from "./slices/building-type";

export const entityReducer = combineReducers({
  buildingType: buildingTypeReducer,
});
