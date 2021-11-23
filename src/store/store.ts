import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import { rootReducer } from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState;
