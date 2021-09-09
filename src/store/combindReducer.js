import { combineReducers } from 'redux';
import reducer from './tournament';


const rootReducer =  combineReducers({
        Entities: reducer,
});

export default rootReducer;
