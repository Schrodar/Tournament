import { cupInfo } from "../data";
    

    const cupActiveReducer = (state = cupInfo(), action) => {
      switch (action.type) {
        case "GET_TOURNAMENT_ID":
          return {
            ...state, 
        };
        default:
          return { 
              ...state 
          };
      };
    };
    
    export default cupActiveReducer;
  