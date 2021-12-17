import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SliceState = {
  isOpen: boolean;
  onYesClick: () => void;
};

const initialState: SliceState = {
  isOpen: false,
  onYesClick: () => {},
};

const slice = createSlice({
  name: "delete-notification",
  initialState,
  reducers: {
    deleteButtonClicked: (
      notification,
      action: PayloadAction<{ onYesClick: () => void }>
    ) => {
      notification.isOpen = true;
      notification.onYesClick = action.payload.onYesClick;
    },
    onCancelButton: (notification, action: PayloadAction) => {
      notification.isOpen = false;
    },
  },
});

export default slice.reducer;
export const { deleteButtonClicked, onCancelButton } = slice.actions;

export const getDeleteNotification = (state: RootState) =>
  state.notifications.deleteNotification;
