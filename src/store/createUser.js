import { createSlice } from "@reduxjs/toolkit";

import { authUserBegan, authUserFailed } from "./createAction";

const url = "/users/login"

const slice = createSlice({
  name: "createUser",
  initialState: {
    user: [],
    LoggedIn: false,
    token: []
  },
  reducers: {
    userAdded: (state, action) => {
      state.user = action.payload.user.name
      state.token = action.payload.token
      state.LoggedIn = true
      },
      
    }
  })

export const { userAdded } = slice.actions;
export default slice.reducer;