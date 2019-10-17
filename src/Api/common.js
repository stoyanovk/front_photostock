import axios from "axios";

function getHeaders() {
  const token = window.localStorage.getItem("token");
  if (token) {
    return {
      "x-access-token": token
    };
  }
  return {};
}



// const HOST = "https://photostock-back.herokuapp.com/";
const HOST = "http://10.0.1.179:3000/";
const apiCall = async ({ url, method, data }) => {
  const result = await axios({
    method,
    url: `${HOST}${url}`,
    data,
    headers: getHeaders()
  });
  return result;
};

export { apiCall };
