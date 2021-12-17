import { combineReducers } from "@reduxjs/toolkit";
import deleteNotificationReducer from "./slices/delete-notification";

export const notificationReducer = combineReducers({
  deleteNotification: deleteNotificationReducer,
});
