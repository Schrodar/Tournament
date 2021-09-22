import { createAction } from "@reduxjs/toolkit";

export const getTournamentCallBegan = createAction("middelware/tournamentBegan");
export const getTournamentCallSuccsess = createAction("middelware/tournamentSuccsess");
export const getTournamentCallFailed = createAction("middelware/tournamentFailed");

export const authUserBegan = createAction("middelware/authUserBegan");
export const authUserSuccess = createAction("middelware/authUserSuccess");
export const authUserFailed = createAction("middelware/authUserFailed");

export const addUserBegan = createAction("middelware/addUserBegan");
export const addUserSuccsess = createAction("middelware/addUserSuccsess");
export const addUserFailed = createAction("middelware/addUserFailed");
 
export const logOuteBegan = createAction("middelware/logOuteBegan");
export const logOuteSuccsess = createAction("middelware/logOuteSuccsess");
export const logOuteFailed = createAction("middelware/logOuteFailed");