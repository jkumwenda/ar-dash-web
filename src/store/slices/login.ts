import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";

import { apiCallBegun } from "../action/api";
import { RootState } from "../store";
import localStorage from "../../utils/localstorage.helper";

type SliceState = {
  loggedIn: Boolean;
  loading: boolean;
};

const initialState: SliceState = {
  loading: false,
  loggedIn: Boolean(localStorage.getKey("token")),
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedInDataReceived: (
      user,
      action: PayloadAction<{ refresh: string; access: string }>
    ) => {
      localStorage.setKey("token", action.payload.access);
      user.loggedIn = true;
    },
    userRequested: (user, action) => {
      user.loading = true;
    },
    userRequestFailed: (user, action) => {
      user.loading = false;
    },
  },
});

export default slice.reducer;

export const { loggedInDataReceived, userRequestFailed, userRequested } =
  slice.actions;

// export const loadusers = () => (dispatch: Dispatch) => {
//   dispatch(
//     apiCallBegun({
//       onSuccess: [userReceived.type],
//       url: "/user",
//       method: "GET",
//       onError: [userRequestFailed.type],
//       onStart: userRequested.type,
//     })
//   );
// };

export const login = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [loggedInDataReceived.type],
      url: "/auth/",
      data,
      method: "POST",
      onError: [userRequestFailed.type],
      onStart: userRequested.type,
    })
  );
};
