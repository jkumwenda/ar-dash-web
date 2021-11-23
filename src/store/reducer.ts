import { combineReducers } from "redux";
import { entityReducer } from "./entities";

export const rootReducer = combineReducers({
  entities: entityReducer,
});
