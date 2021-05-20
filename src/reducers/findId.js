const initail = {
    id: [],
}


const findId = (state = initail, action) => {
    switch (action.type) {
      case "DATA_IN":
        return {
            ...action.payload,
      };
      default:
        return { 
            ...state 
        };
    };
  };
  
  export default findId;