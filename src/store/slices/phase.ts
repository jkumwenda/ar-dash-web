import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { Phase } from "../../types";
import { apiCallBegun } from "../action/api";
import { RootState } from "../store";

type SliceState = {
  loading: boolean;
  data: Phase[];
};

const initialState: SliceState = {
  loading: false,
  data: [],
};

const slice = createSlice({
  name: "phases",
  initialState,
  reducers: {
    phaseAdded: (phases, action: PayloadAction<Phase>) => {
      phases.data.push(action.payload);
    },
    phaseReceived: (phases, action: PayloadAction<Phase[]>) => {
      phases.data = action.payload;
      phases.loading = false;
    },
    phaseRequested: (phases, action) => {
      phases.loading = true;
    },
    phaseRequestFailed: (phases, action) => {
      phases.loading = false;
    },
    phaseEdited: (phases, action: PayloadAction<Phase>) => {
      const index = phases.data.findIndex(
        (phase) => phase.phase_id === action.payload.phase_id
      );

      phases.data[index] = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  phaseAdded,
  phaseEdited,
  phaseReceived,
  phaseRequestFailed,
  phaseRequested,
} = slice.actions;

export const loadPhases = () => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [phaseReceived.type],
      url: "/phase",
      method: "GET",
      onError: [phaseRequestFailed.type],
      onStart: phaseRequested.type,
    })
  );
};

export const addPhase = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [phaseAdded.type],
      url: "/phase",
      data,
      method: "POST",
      onError: [phaseRequestFailed.type],
      onStart: phaseRequested.type,
    })
  );
};

export const editPhase = (data: any, id: number) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [phaseEdited.type],
      url: "/phase/" + id,
      data,
      method: "PUT",
      onError: [phaseRequestFailed.type],
      onStart: phaseRequested.type,
    })
  );
};

export const getPhases = (state: RootState) => {
  return state.entities.phase.data;
};

export const getPhase = (id: number) => (state: RootState) => {
  return state.entities.phase.data.find((phase) => phase.phase_id === id);
};
