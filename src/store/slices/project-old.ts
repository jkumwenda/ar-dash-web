import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
// import { PaginatedResults, Project } from "../../types";
// import { apiCallBegun } from "../action/api";

// type SliceState = {
//   loading: boolean;
//   data: { [pageNumber: number]: PaginatedResults<Project> };
//   currentPage: number;
// };

// const initialState: SliceState = {
//   loading: false,
//   data: [],
//   currentPage: 0,
// };

// const slice = createSlice({
//   name: "project",
//   initialState,
//   reducers: {
//     projectAdded: (project, action: PayloadAction<Project>) => {
//       const sorted = Object.keys(project.data).reverse();
//       project.data[Number(sorted[0])].results.push(action.payload);
//     },
//     projectReceived: (
//       project,
//       action: PayloadAction<PaginatedResults<Project>>
//     ) => {
//       const currentPage = action.payload.current;
//       project.data[action.payload.current] = action.payload;
//       project.loading = false;
//       project.currentPage = currentPage;
//     },
//     projectRequested: (project, action) => {
//       project.loading = true;
//     },
//     projectRequestFailed: (project, action) => {
//       project.loading = false;
//     },
//     projectEdited: (project, action: PayloadAction<Project>) => {
//       const index = project.data[0].findIndex(
//         (project) => project.project_id === action.payload.project_id
//       );

//       project.data[index] = action.payload;
//     },
//   },
// });

// export default slice.reducer;

// export const {
//   projectAdded,
//   projectEdited,
//   projectReceived,
//   projectRequestFailed,
//   projectRequested,
// } = slice.actions;

// export const loadproject = () => (dispatch: Dispatch) => {
//   dispatch(
//     apiCallBegun({
//       onSuccess: [projectReceived.type],
//       url: "/project",
//       method: "GET",
//       onError: [projectRequestFailed.type],
//       onStart: projectRequested.type,
//     })
//   );
// };

// export const addproject = (data: any) => (dispatch: Dispatch) => {
//   dispatch(
//     apiCallBegun({
//       onSuccess: [projectAdded.type],
//       url: "/project",
//       data,
//       method: "POST",
//       onError: [projectRequestFailed.type],
//       onStart: projectRequested.type,
//     })
//   );
// };

// export const editproject = (data: any, id: number) => (dispatch: Dispatch) => {
//   dispatch(
//     apiCallBegun({
//       onSuccess: [projectEdited.type],
//       url: "/project/" + id,
//       data,
//       method: "PUT",
//       onError: [projectRequestFailed.type],
//       onStart: projectRequested.type,
//     })
//   );
// };

// export const getprojectes = (state: RootState) => {
//   return state.entities.project.data;
// };

// export const getproject = (id: number) => (state: RootState) => {
//   return state.entities.project.data.find(
//     (project) => project.project_id === id
//   );
// };
