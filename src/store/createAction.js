import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSuccsess = createAction("api/callSuccsess");
export const apiCallFailed = createAction("api/callFailed");