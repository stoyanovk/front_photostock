const initialState = {
  auth: false,
  token: "",
  user: {},
  loaded: false
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "ON_LOAD_LOGIN":

      return {
        ...state,
        token: action.token,
        auth: action.auth,
        user: action.user,
        
      };
    case "LOGIN":
      return {
        ...state,
        token: action.token,
        auth: true,
        user: action.user,
      };
    case "LOGOUT":

      return {
        ...state,
        token: "",
        auth: false,
        user: {},
      };
    case "LOADED":
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
}

export default userReducer;
