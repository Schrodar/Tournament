import  axios  from "axios";
import { cupsURL } from "../api";

// actions  Creator

export const loadTournament = () => async (dispatch) => {
    // Fetch witdh axios    
    try {
        dispatch({
            type: "LOADING_DATA",
        });
    const TournamentInfo = await axios.get(cupsURL())
    dispatch({
        type: "FETCH_TOURNAMENT",
        payload: {
            Tournament: TournamentInfo.data
        },
    });


    }
    catch{
        console.error("whatt")
    }
     
};