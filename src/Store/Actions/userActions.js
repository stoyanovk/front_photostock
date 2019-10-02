import { authApi } from "../../Api";
const onLoadLogin = () => async dispatch => {
  const {
    data: {
      data: { user }
    }
  } = await authApi.onLoadLogin();

  const token = localStorage.getItem("token");
  return dispatch({
    type: "ON_LOAD_LOGIN",
    payload: user,
    token
  });
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
export { login, logout, onLoadLogin };
