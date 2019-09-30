const onLoadLogin = () => {
  let token = window.localStorage.getItem("token");

  return {
    type: "ON_LOAD_LOGIN",
    payload: token
  };
};
const login = token => {
  return {
    type: "LOGIN",
    payload: token
  };
};
const logout = () => {
  localStorage.removeItem("token");
  return {
    type: "LOGOUT"
  };
};
export { login, logout, onLoadLogin };
