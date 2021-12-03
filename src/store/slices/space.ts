import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { Space, PaginatedResults } from "../../types";
import { apiCallBegun } from "../action/api";
import { RootState } from "../store";

type SliceState = {
  loading: boolean;
  data: Space[];
};

const initialState: SliceState = {
  loading: false,
  data: [],
};

const slice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    SpaceAdded: (spaces, action: PayloadAction<Space>) => {
      spaces.data.push(action.payload);
    },
    SpaceReceived: (spaces, action: PayloadAction<PaginatedResults<Space>>) => {
      spaces.data = action.payload.results;
      spaces.loading = false;
    },
    SpaceRequested: (spaces, action) => {
      spaces.loading = true;
    },
    SpaceRequestFailed: (spaces, action) => {
      spaces.loading = false;
    },
    SpaceEdited: (spaces, action: PayloadAction<Space>) => {
      const index = spaces.data.findIndex(
        (space) => space.space_id === action.payload.space_id
      );

      spaces.data[index] = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  SpaceAdded,
  SpaceEdited,
  SpaceReceived,
  SpaceRequestFailed,
  SpaceRequested,
} = slice.actions;

export const loadSpaces = () => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [SpaceReceived.type],
      url: "/space",
      method: "GET",
      onError: [SpaceRequestFailed.type],
      onStart: SpaceRequested.type,
    })
  );
};

export const addSpace = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [SpaceAdded.type],
      url: "/space/",
      data,
      method: "POST",
      onError: [SpaceRequestFailed.type],
      onStart: SpaceRequested.type,
    })
  );
};

export const editSpace = (data: any, id: number) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [SpaceEdited.type],
      url: "/space/" + id + "/",
      data,
      method: "PUT",
      onError: [SpaceRequestFailed.type],
      onStart: SpaceRequested.type,
    })
  );
};

export const getSpaces = (state: RootState) => {
  return state.entities.space;
};

export const getSpace = (id: number) => (state: RootState) => {
  return state.entities.space.data.find((space) => space.space_id === id);
};
