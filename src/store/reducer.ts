import { combineReducers } from "redux";
import { entityReducer } from "./entities";
import { notificationReducer } from "./notification";

export const rootReducer = combineReducers({
  entities: entityReducer,
  notifications: notificationReducer,
});
