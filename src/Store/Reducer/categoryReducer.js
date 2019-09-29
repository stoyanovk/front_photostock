const initialState = {
  categories: []
};

function categoryReducer(state = initialState, action) {
  console.log(state);

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