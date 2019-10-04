const initialState = {
  auth: false,
  token: "",
  user:{}
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "ON_LOAD_LOGIN":
      return {
        token: action.payload,
        auth: true,
        user: action.payload,
      };
    case "LOGIN":
      return {
        token: action.token,
        auth: true,
        user: action.user
      };
    case "LOGOUT":
      console.log('LOGOUT')
      return {
        token: "",
        auth: false,
        user:{},
      };
    default:
      return state;
  }
}

export default userReducer;
