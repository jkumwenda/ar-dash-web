import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { APICache } from "../../types";
import { apiCallBegun } from "../action/api";
import { RootState } from "../store";

const initialState: APICache[] = [];

const slice = createSlice({
  name: "APICaches",
  initialState,
  reducers: {
    APICacheAdded: (apiCaches, action: PayloadAction<APICache>) => {
      apiCaches.push(action.payload);
    },
    APICacheUpdated: (apiCaches, { payload }: PayloadAction<APICache>) => {
      const index = apiCaches.findIndex(
        (apiCache) => apiCache.endpoint === payload.endpoint
      );

      apiCaches[index] = payload;
    },
  },
});

export default slice.reducer;

export const { APICacheAdded, APICacheUpdated } = slice.actions;

export const getUrl = (url: string) => (state: RootState) => {
  return state.entities.apiCache.find(({ endpoint }) => endpoint === url);
};

export const loadAPICaches = (dispatch: Dispatch, getState: any) => {};
