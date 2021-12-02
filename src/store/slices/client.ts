import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { Client, PaginatedResults } from "../../types";
import { apiCallBegun } from "../action/api";
import { RootState } from "../store";

type SliceState = {
  loading: boolean;
  data: Client[];
};

const initialState: SliceState = {
  loading: false,
  data: [],
};

const slice = createSlice({
  name: "client",
  initialState,
  reducers: {
    clientAdded: (client, action: PayloadAction<Client>) => {
      client.data.push(action.payload);
    },
    clientReceived: (
      client,
      action: PayloadAction<PaginatedResults<Client>>
    ) => {
      client.data = action.payload.results;
      client.loading = false;
    },
    clientRequested: (client, action) => {
      client.loading = true;
    },
    clientRequestFailed: (client, action) => {
      client.loading = false;
    },
    clientEdited: (client, action: PayloadAction<Client>) => {
      const index = client.data.findIndex(
        (client) => client.client_id === action.payload.client_id
      );

      client.data[index] = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  clientAdded,
  clientEdited,
  clientReceived,
  clientRequestFailed,
  clientRequested,
} = slice.actions;

export const loadClients = () => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [clientReceived.type],
      url: "/client",
      method: "GET",
      onError: [clientRequestFailed.type],
      onStart: clientRequested.type,
    })
  );
};

export const addClient = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [clientAdded.type],
      url: "/client/",
      data,
      method: "POST",
      onError: [clientRequestFailed.type],
      onStart: clientRequested.type,
    })
  );
};

export const editClient = (data: any, id: number) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [clientEdited.type],
      url: "/client/" + id + "/",
      data,
      method: "PUT",
      onError: [clientRequestFailed.type],
      onStart: clientRequested.type,
    })
  );
};

export const getClients = (state: RootState) => {
  return state.entities.client.data;
};

export const getClient = (id: number) => (state: RootState) => {
  return state.entities.client.data.find((client) => client.client_id === id);
};
