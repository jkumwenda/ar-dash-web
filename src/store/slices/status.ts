import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { Status } from "../../types";
import { apiCallBegun } from "../action/api";
import { RootState } from "../store";

type SliceState = {
  loading: boolean;
  data: Status[];
};

const initialState: SliceState = {
  loading: false,
  data: [],
};

const slice = createSlice({
  name: "status",
  initialState,
  reducers: {
    statusAdded: (status, action: PayloadAction<Status>) => {
      status.data.push(action.payload);
    },
    statusReceived: (status, action: PayloadAction<Status[]>) => {
      status.data = action.payload;
      status.loading = false;
    },
    statusRequested: (status, action) => {
      status.loading = true;
    },
    statusRequestFailed: (status, action) => {
      status.loading = false;
    },
    statusEdited: (status, action: PayloadAction<Status>) => {
      const index = status.data.findIndex(
        (status) => status.status_id === action.payload.status_id
      );

      status.data[index] = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  statusAdded,
  statusEdited,
  statusReceived,
  statusRequestFailed,
  statusRequested,
} = slice.actions;

export const loadStatus = () => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [statusReceived.type],
      url: "/status",
      method: "GET",
      onError: [statusRequestFailed.type],
      onStart: statusRequested.type,
    })
  );
};

export const addStatus = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [statusAdded.type],
      url: "/status",
      data,
      method: "POST",
      onError: [statusRequestFailed.type],
      onStart: statusRequested.type,
    })
  );
};

export const editStatus = (data: any, id: number) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [statusEdited.type],
      url: "/status/" + id,
      data,
      method: "PUT",
      onError: [statusRequestFailed.type],
      onStart: statusRequested.type,
    })
  );
};

export const getStatuses = (state: RootState) => {
  return state.entities.status.data;
};

export const getStatus = (id: number) => (state: RootState) => {
  return state.entities.status.data.find((status) => status.status_id === id);
};
