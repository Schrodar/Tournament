import { createSlice } from "@reduxjs/toolkit";
import { authUserBegan, authUserFailed } from "./createAction";

const url = "/users/login"

const slice = createSlice({
  name: "user",
  initialState: {
    LoggedIn: false
  },
  reducers: {
    userAdded: (state, action) => {
      state.user = action.payload
      state.LoggedIn = true
      },
      
    }
  })

export const { userAdded } = slice.actions;
export default slice.reducer;

// Action Creator



export const logginBegan = (data) => authUserBegan({
    url,
    method: 'post',
    data,
    onSuccess: userAdded.type,
    onError: authUserFailed.type
})



  
