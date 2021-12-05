import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { PaginatedResults, Phase } from "../../types";
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
      phases.loading = false;
    },
    phaseReceived: (phases, action: PayloadAction<PaginatedResults<Phase>>) => {
      phases.data = action.payload.results;
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
      phases.loading = false;
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

const endpoint = "/phase/";
export const loadPhases = () => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [phaseReceived.type],
      url: endpoint,
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
      url: endpoint,
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
      url: `${endpoint}${id}/`,
      data,
      method: "PUT",
      onError: [phaseRequestFailed.type],
      onStart: phaseRequested.type,
    })
  );
};

export const getPhases = (state: RootState) => {
  return state.entities.phase;
};

export const getPhase = (id: number) => (state: RootState) => {
  return state.entities.phase.data.find((phase) => phase.phase_id === id);
};
