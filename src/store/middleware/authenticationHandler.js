import axios from "axios";
import  * as actions from "../createAction";

const authHandler = ({ dispatch }) => next => async action => {
    
     // if action is not == authUserBegan  then next action in the middleware array 
    if (action.type !== actions.authUserBegan.type) return next(action);
    
    // extracting thees methods from the actions paylode
    const { url, method, data ,onSuccess, onError} = action.payload;
   

    next(action)
    try {
        const respons = await axios.request({
        baseURL: "http://localhost:3009",
        url,
        method,
        data,
        })
        if (onSuccess) dispatch({ type: onSuccess, payload: respons.data });
    } 
    

    catch (err) {
       dispatch(actions.authUserFailed(err));

       if (onError) dispatch({ type: onError, payload: err })
    }
   
}

export default authHandler;