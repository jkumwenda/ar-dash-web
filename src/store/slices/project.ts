import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { PaginatedResults, Project, ProjectSpace } from "../../types";
import { apiCallBegun } from "../action/api";
import { RootState } from "../store";

type SliceState = {
  loading: boolean;
  data: Project[];
};

const initialState: SliceState = {
  loading: false,
  data: [] as Project[],
};

const slice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    projectAdded: (projects, action: PayloadAction<Project>) => {
      projects.data.push(action.payload);
    },
    projectReceived: (
      projects,
      action: PayloadAction<PaginatedResults<Project>>
    ) => {
      projects.data = action.payload.results;
      projects.loading = false;
    },
    projectRequested: (projects, action) => {
      projects.loading = true;
    },
    projectRequestFailed: (projects, action) => {
      projects.loading = false;
    },
    projectSpaceAdded: (projects, action: PayloadAction<ProjectSpace>) => {
      const project = projects.data.find(
        (project) => project.project_id === action.payload.project_id
      );
      project?.spaces.push(action.payload);
    },
    projectSpaceEdit: (projects, action: PayloadAction<ProjectSpace>) => {
      console.log(action.payload);
      const project = projects.data.find(
        (project) => project.project_id === action.payload.project_id
      );

      if (!project) return;

      const index = project?.spaces.findIndex(
        (space) => space.project_space_id === action.payload.project_space_id
      );

      project.spaces[index] = action.payload;
      projects.loading = false;
    },
    projectEdited: (projects, action: PayloadAction<Project>) => {
      const index = projects.data.findIndex(
        (project) => project.project_id === action.payload.project_id
      );

      projects.data[index] = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  projectAdded,
  projectEdited,
  projectReceived,
  projectRequestFailed,
  projectRequested,
  projectSpaceAdded,
  projectSpaceEdit,
} = slice.actions;

export const loadProjects = () => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [projectReceived.type],
      url: "/project",
      method: "GET",
      onError: [projectRequestFailed.type],
      onStart: projectRequested.type,
    })
  );
};

export const addProject = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [projectAdded.type],
      url: "/project/",
      data,
      method: "POST",
      onError: [projectRequestFailed.type],
      onStart: projectRequested.type,
    })
  );
};
export const addProjectSpace = (data: any) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [projectSpaceAdded.type],
      url: "/project_space/",
      data,
      method: "POST",
      onError: [projectRequestFailed.type],
      onStart: projectRequested.type,
    })
  );
};

export const editProjectSpace =
  (data: any, id: number) => (dispatch: Dispatch) => {
    dispatch(
      apiCallBegun({
        onSuccess: [projectSpaceEdit.type],
        url: "/project_space/" + id + "/",
        data,
        method: "PUT",
        onError: [projectRequestFailed.type],
        onStart: projectRequested.type,
      })
    );
  };

export const editProject = (data: any, id: number) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegun({
      onSuccess: [projectEdited.type],
      url: "/project/" + id + "/",
      data,
      method: "PUT",
      onError: [projectRequestFailed.type],
      onStart: projectRequested.type,
    })
  );
};

export const getProjects = () => (state: RootState) => {
  return state.entities.project;
};

const _getProject = (id: number, state: RootState) => {
  return state.entities.project.data.find(
    (project) => project.project_id === id
  );
};

export const getProject = (id: number) => (state: RootState) => {
  return _getProject(id, state);
};

export const getProjectSpace =
  (projectId: number, spaceId: number) => (state: RootState) => {
    const project = _getProject(projectId, state);
    return project?.spaces.find((space) => space.project_space_id === spaceId);
  };
