import { apiCall } from "./common";
const url = "api/auth/";
class AuthApi {
  signUp(data, headersData) {
    return apiCall({
      url: `${url}registration`,
      method: "post",
      data,
      headersData
    });
  }
  signIn(data) {
    return apiCall({ url: `${url}login`, method: "post", data });
  }
  onLoadLogin() {
    return apiCall({ url: `${url}get-user-by-token`, method: "get" });
  }
}
export default AuthApi;
