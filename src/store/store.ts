import { configureStore } from "@reduxjs/toolkit";
import { api, apiCache } from "./middleware";

import { rootReducer } from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    apiCache,
    api,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState;
