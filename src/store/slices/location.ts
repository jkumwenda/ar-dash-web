import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { Location, PaginatedResults } from "../../types";
import { apiCallBegun } from "../action/api";
import { RootState } from "../store";

type SliceState = {
  loading: boolean;
  data: Location[];
};

const initialState: SliceState = {
  loading: false,
  data: [],
};

const slice = createSlice({
  name: "location",
  initialState,
  reducers: {
    locationAdded: (location, action: PayloadAction<Location>) => {
      location.data.push(action.payload);
      location.loading = false;
    },
    locationReceived: (
      location,
      action: PayloadAction<PaginatedResults<Location>>
    ) => {
      location.data = action.payload.results;
      location.loading = false;
    },
    locationDeleted: (locations, action: PayloadAction<number>) => {
      const newFiltered = locations.data.filter(
        (location) => location.location_id !== action.payload
      );

      locations.data = newFiltered;
      locations.loading = false;
    },
    locationRequested: (location, action) => {
      location.loading = true;
    },
    locationRequestFailed: (location, action) => {
      location.loading = false;
    },
    locationEdited: (location, action: PayloadAction<Location>) => {
      const index = location.data.findIndex(
        (location) => location.location_id === action.payload.location_id
      );

      location.data[index] = action.payload;
      location.loading = false;
    },
  },
});

export default slice.reducer;

export const {
  locationAdded,
  locationEdited,
  locationReceived,
  locationRequestFailed,
  locationRequested,
  locationDeleted,
} = slice.actions;

export const loadLocations = () => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [locationReceived.type],
      url: "/location",
      method: "GET",
      onError: [locationRequestFailed.type],
      onStart: locationRequested.type,
    })
  );
};

export const addLocation = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [locationAdded.type],
      url: "/location/",
      data,
      method: "POST",
      onError: [locationRequestFailed.type],
      onStart: locationRequested.type,
    })
  );
};

export const editLocation = (data: any, id: number) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [locationEdited.type],
      url: "/location/" + id + "/",
      data,
      method: "PUT",
      onError: [locationRequestFailed.type],
      onStart: locationRequested.type,
    })
  );
};

export const deleteLocation = (id: number) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [locationDeleted.type],
      url: "/location/" + id + "/",
      method: "DELETE",
      deletedId: id,
      onError: [locationRequestFailed.type],
      onStart: locationRequested.type,
    })
  );
};

export const getLocations = (state: RootState) => {
  return state.entities.location;
};

export const getLocation = (id: number) => (state: RootState) => {
  return state.entities.location.data.find(
    (location) => location.location_id === id
  );
};
