import { createAction } from "@reduxjs/toolkit";

export const middelwareCallBegan = createAction("middelware/callBegan");
export const middelwareCallSuccsess = createAction("middelware/callSuccsess");
export const middelwareCallFailed = createAction("middelware/callFailed");

export const authUserBegan = createAction("middelware/authUserBegan");
export const authUserSuccess = createAction("middelware/authUserSuccess");
export const authUserFailed = createAction("middelware/authUserFailed");

 