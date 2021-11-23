import { createAction } from "@reduxjs/toolkit";

export const apiCallBegun = createAction<object>("api/callBegun");

export const apiCallSuccess = createAction<object>("api/callSuccess");

export const apiCallFailed = createAction<object | string>("api/callFailed");
