import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { BuildingType } from "../../types";
import { apiCallBegun } from "../action/api";

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
      action: PayloadAction<BuildingType[]>
    ) => {
      buildingTypes.data = action.payload;
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

export const loadBuildingTypes = () => (dispatch: Dispatch, getState: any) => {
  dispatch(
    apiCallBegun({
      onSuccess: [buildingTypeReceived.type],
      url: "/building_type",
      onError: [buildingTypeRequestFailed.type],
      onStart: buildingTypeRequested.type,
    })
  );
};
