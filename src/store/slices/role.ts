import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { PaginatedResults, Role } from "../../types";
import { apiCallBegun } from "../action/api";
import { RootState } from "../store";

type SliceState = {
  loading: boolean;
  data: Role[];
};

const initialState: SliceState = {
  loading: false,
  data: [],
};

const slice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    roleAdded: (roles, action: PayloadAction<Role>) => {
      roles.data.push(action.payload);
    },
    roleReceived: (roles, action: PayloadAction<PaginatedResults<Role>>) => {
      roles.data = action.payload.results;
      roles.loading = false;
    },
    roleRequested: (roles, action) => {
      roles.loading = true;
    },
    roleRequestFailed: (roles, action) => {
      roles.loading = false;
    },
    roleEdited: (roles, action: PayloadAction<Role>) => {
      const index = roles.data.findIndex(
        (role) => role.role_id === action.payload.role_id
      );

      roles.data[index] = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  roleAdded,
  roleEdited,
  roleReceived,
  roleRequestFailed,
  roleRequested,
} = slice.actions;

export const loadRoles = () => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [roleReceived.type],
      url: "/role",
      method: "GET",
      onError: [roleRequestFailed.type],
      onStart: roleRequested.type,
    })
  );
};

export const addRole = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [roleAdded.type],
      url: "/role/",
      data,
      method: "POST",
      onError: [roleRequestFailed.type],
      onStart: roleRequested.type,
    })
  );
};

export const editRole = (data: any, id: number) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [roleEdited.type],
      url: "/role/" + id + "/",
      data,
      method: "PUT",
      onError: [roleRequestFailed.type],
      onStart: roleRequested.type,
    })
  );
};

export const getRoles = (state: RootState) => {
  return state.entities.role;
};

export const getRole = (id: number) => (state: RootState) => {
  return state.entities.role.data.find((role) => role.role_id === id);
};
