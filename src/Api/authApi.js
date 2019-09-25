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
  signIn(data, headersData) {
    return apiCall({ url: `${url}login`, method: "post", data, headersData });
  }
}
export default AuthApi;
