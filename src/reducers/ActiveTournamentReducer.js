const initState = {
    listan: []    
  }
    
    const cupActiveReducer = (state = initState, action) => {
      switch (action.type) {
        case "GET_TOURNAMENT_ID":
          return {
            ...state,
             ...action.payload,
        };
        default:
          return { 
              ...state 
          };
      };
    };
    
    export default cupActiveReducer;
  