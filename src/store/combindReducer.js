import { combineReducers } from 'redux';
import reducer from './tournamentReducer';
import reducer2 from './authReducer'


const reducers =  combineReducers({
        tournament: reducer,
        users: reducer2
});

export default reducers;
