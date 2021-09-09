import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './combindReducer.js'
import thunk from "redux-thunk";
import api from "./middleware/api";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, api]
});

export default store;