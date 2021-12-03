import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { PaginatedResults, User } from "../../types";
import { apiCallBegun } from "../action/api";
import { RootState } from "../store";

type SliceState = {
  loading: boolean;
  data: User[];
};

const initialState: SliceState = {
  loading: false,
  data: [],
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdded: (user, action: PayloadAction<User>) => {
      user.data.push(action.payload);
    },
    userReceived: (user, action: PayloadAction<PaginatedResults<User>>) => {
      user.data = action.payload.results;
      user.loading = false;
    },
    userRequested: (user, action) => {
      user.loading = true;
    },
    userRequestFailed: (user, action) => {
      user.loading = false;
    },
    userEdited: (user, action: PayloadAction<User>) => {
      const index = user.data.findIndex(
        (user) => user.id === action.payload.id
      );

      user.data[index] = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  userAdded,
  userEdited,
  userReceived,
  userRequestFailed,
  userRequested,
} = slice.actions;

export const loadUsers = () => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [userReceived.type],
      url: "/user/",
      method: "GET",
      onError: [userRequestFailed.type],
      onStart: userRequested.type,
    })
  );
};

export const addUser = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [userAdded.type],
      url: "/user/",
      data,
      method: "POST",
      onError: [userRequestFailed.type],
      onStart: userRequested.type,
    })
  );
};

export const editUser = (data: any, id: number) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [userEdited.type],
      url: "/user/" + id + "/",
      data,
      method: "PUT",
      onError: [userRequestFailed.type],
      onStart: userRequested.type,
    })
  );
};

export const getUsers = (state: RootState) => {
  return state.entities.user;
};

export const getUser = (id: number) => (state: RootState) => {
  return state.entities.user.data.find((user) => user.id === id);
};
