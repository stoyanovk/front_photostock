const initialState = {
  auth: false,
  token: ""
};
const isAutorized = token => {
  switch (token) {
    case undefined:
      return false;
    case null:
      return false;
    case "":
      return false;
    default:
      return true;
  }
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case "ON_LOAD_LOGIN":
      console.log(isAutorized(action.payload));
      return {
        token: action.payload,
        auth: isAutorized(action.payload)
      };
    case "LOGIN":
      return {
        token: action.payload,
        auth: true
      };
    case "LOGOUT":
      console.log('LOGOUT')
      return {
        token: "",
        auth: false
      };
    default:
      return state;
  }
}

export default userReducer;
