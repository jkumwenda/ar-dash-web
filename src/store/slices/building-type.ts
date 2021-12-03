import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { BuildingType, PaginatedResults } from "../../types";
import { apiCallBegun } from "../action/api";
import { RootState } from "../store";

type SliceState = {
  loading: boolean;
  data: BuildingType[];
};

const initialState: SliceState = {
  loading: false,
  data: [],
};

const slice = createSlice({
  name: "buildingTypes",
  initialState,
  reducers: {
    buildingTypeAdded: (buildingTypes, action: PayloadAction<BuildingType>) => {
      buildingTypes.data.push(action.payload);
    },
    buildingTypeReceived: (
      buildingTypes,
      action: PayloadAction<PaginatedResults<BuildingType>>
    ) => {
      buildingTypes.data = action.payload.results;
      buildingTypes.loading = false;
    },
    buildingTypeRequested: (buildingTypes, action) => {
      buildingTypes.loading = true;
    },
    buildingTypeRequestFailed: (buildingTypes, action) => {
      buildingTypes.loading = false;
    },
    buildingTypeEdited: (
      buildingTypes,
      action: PayloadAction<BuildingType>
    ) => {
      const index = buildingTypes.data.findIndex(
        (buildingType) =>
          buildingType.building_type_id === action.payload.building_type_id
      );

      buildingTypes.data[index] = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  buildingTypeAdded,
  buildingTypeEdited,
  buildingTypeReceived,
  buildingTypeRequestFailed,
  buildingTypeRequested,
} = slice.actions;

export const loadBuildingTypes = () => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [buildingTypeReceived.type],
      url: "/building_type",
      method: "GET",
      onError: [buildingTypeRequestFailed.type],
      onStart: buildingTypeRequested.type,
    })
  );
};

export const addBuildingType = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [buildingTypeAdded.type],
      url: "/building_type/",
      data,
      method: "POST",
      onError: [buildingTypeRequestFailed.type],
      onStart: buildingTypeRequested.type,
    })
  );
};

export const editBuildingType =
  (data: any, id: number) => (dispatch: Dispatch) => {
    dispatch(
      apiCallBegun({
        onSuccess: [buildingTypeEdited.type],
        url: "/building_type/" + id + "/",
        data,
        method: "PUT",
        onError: [buildingTypeRequestFailed.type],
        onStart: buildingTypeRequested.type,
      })
    );
  };

export const getBuildingTypes = (state: RootState) => {
  return state.entities.buildingType;
};

export const getBuildingType = (id: number) => (state: RootState) => {
  return state.entities.buildingType.data.find(
    (building) => building.building_type_id === id
  );
};
