import { createSlice } from "@reduxjs/toolkit";
import { addUserBegan } from "./createAction";

import {  addUserFailed } from "./createAction";

const url = "/users"

const slice = createSlice({
  name: "createUser",
  initialState: {
    added: []
  },
  reducers: {
    userCreated: (state, action) => {
        state.added = action.payload.name
      },
      
    }
  })

  export const onePlus= (data) => addUserBegan({
    url,
    method: 'post',
    data,
    onSuccess: userCreated.type,
    onError: addUserFailed.type
  })
export const { userCreated } = slice.actions;
export default slice.reducer;