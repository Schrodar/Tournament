const initState = {
  Tournament: [],
  isLoading: true,
}
  
  const tournamentReducer = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_TOURNAMENT":
        return {
           ...action.payload,
           isLoading: false,
      };
      case "LOADING_DATA":
        return{
          ...state,
          isLoading: true,
        }
      default:
        return { 
            ...state 
        };
    };
  };
  
  export default tournamentReducer;

  

