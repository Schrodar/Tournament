import axios from "axios";
import  * as actions from "../createAction";

const api = ({ dispatch}) => next => async action => {
    
     // if action is not == apiCalBegan  then next action in the middleware array 
    if (action.type !== actions.apiCallBegan.type) return next(action);
    
    // extracting thees methods from the actions paylode
    const { url, method, data ,onSuccess, onError, onStart} = action.payload;
   
    if (onStart) dispatch({ type: onStart });

    next(action)
    try {
        const respons = await axios.request({
        baseURL: "http://localhost:3009",
        url,
        method,
        data,
        })
        dispatch(actions.apiCallSuccsess(respons.data));
        if (onSuccess) dispatch({ type: onSuccess, payload: respons.data });
    } 
    

    catch (err) {
       dispatch(actions.apiCallFailed(err));

       if (onError) dispatch({ type: onError, payload: err })
    }
   
}

export default api;