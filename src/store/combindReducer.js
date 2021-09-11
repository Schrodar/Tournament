import { combineReducers } from 'redux';
import reducer from './tournament';
import reducer2 from './auth'


const reducers =  combineReducers({
        tournament: reducer,
        users: reducer2
});

export default reducers;
