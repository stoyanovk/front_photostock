const initialState = {
  auth: false,
  token: ""
};
const isAutorized = token => {
  return token !== null || token !== '' ? true : false;
};
function UserReducer(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case "ON_LOAD_LOGIN":
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
      return {
        token: "",
        auth: action.payload
      };
    default:
      return state;
  }
}

export default UserReducer;
