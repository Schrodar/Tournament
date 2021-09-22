import { configureStore } from "@reduxjs/toolkit";
import enteties from './enteties'
import thunk from "redux-thunk";
import tournamentHandler from "./middleware/tournamentHandler";
import authHandler from "./middleware/authenticationHandler"
import addUserHandler  from "./middleware/adduserHandler";
import logout from "./middleware/logouteHandler";

const store = configureStore({
  reducer: enteties,
  middleware: [thunk, authHandler, tournamentHandler, addUserHandler, logout ]
});

export default store;