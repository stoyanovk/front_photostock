import { authApi } from "../../Api";
const onLoadLogin = () => async dispatch => {
  const {
    data: {
      data: { user }
    }
  } = await authApi.onLoadLogin();

  const token = localStorage.getItem("token");

  if (user !== null || undefined) {
    
    return dispatch({
      type: "ON_LOAD_LOGIN",
      user: user,
      token,
      auth: true
    });
  } else {
    return dispatch({
      type: "ON_LOAD_LOGIN",
      user: {},
      token: "",
      auth: false
    });
  }
};
const login = ({ token, user }) => {
  return {
    type: "LOGIN",
    token,
    user
  };
};
const logout = () => {
  localStorage.removeItem("token");
  return {
    type: "LOGOUT"
  };
};
const loading = () => dispatch => {

  return dispatch({
    type: "LOADED"
  });
};
export { login, logout, onLoadLogin, loading };
