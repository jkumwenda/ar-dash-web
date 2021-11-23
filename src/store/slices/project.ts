import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { PaginatedResults, Project } from "../../types";

type SliceState = {
  loading: boolean;
  //   data: PaginatedResults<Project>;
};

// const initialState: SliceState = {
//   loading: false,
//     data:{}
// };
