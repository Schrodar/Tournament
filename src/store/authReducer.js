import { createSlice } from "@reduxjs/toolkit";
import { authUserBegan, authUserFailed, logOuteFailed, logOuteBegan } from "./createAction";

const url = "/users/login"

const slice = createSlice({
  name: "user",
  initialState: {
    user: [],
    LoggedIn: false,
    token: [],
    guest: true
  },
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload.user.name
      state.token = action.payload.token
      state.LoggedIn = true
      },
    loginBtn: (state, action) => {
      state.guest = action.payload
    },
    userLogOute: (state, action) => {
      state.guest = action.payload
      state.token = []
      state.LoggedIn = false
    }

  }
});

export const { userLogin, loginBtn, userLogOute, } = slice.actions;
export default slice.reducer;

// Action Creator



export const logginBegan = (data) => authUserBegan({
  url,
  method: 'post',
  data,
  onSuccess: userLogin.type,
  onError: authUserFailed.type,
  loginBtn: loginBtn.type
})


export const logOute = (data) => logOuteBegan({
  url: '/users/logout',
  method: 'post',
  data,
  onSuccess: userLogOute.type,
  onError: logOuteFailed.type,
})



  
