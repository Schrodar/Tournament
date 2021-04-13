import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';
import cupActiveReducer from "./ActiveTournamentReducer";

const rootReducer =  combineReducers({
        Tournament: tournamentReducer,
        cup: cupActiveReducer,
        
});

export default rootReducer;
