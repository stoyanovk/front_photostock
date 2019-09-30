const initialState = {
  categories: [],
  
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        categories: action.payload
      };
    default:
      return state;
  }
}

export default categoryReducer;
