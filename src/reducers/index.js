import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';
import cupActiveReducer from "./ActiveTournamentReducer";
import findId from "./findId";

const rootReducer =  combineReducers({
        Tournament: tournamentReducer,
        listan: cupActiveReducer,
        data: findId,
});

export default rootReducer;
