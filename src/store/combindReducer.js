import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';
import authReducer from './authReducer'
import userAddedReducer from "./addUserReducer";

const reducers =  combineReducers({
        tournament: tournamentReducer,
        users: authReducer,
        addedUser: userAddedReducer
});

export default reducers;
