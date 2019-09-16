import axios from "axios";

function getHeaders() {
  const token = window.localStorage.getItem("token");

  return {
    Authorization: `Bearer ${token}`,
    // mode: 'no-cors',
    "Content-type": "Access-Control-Allow-Origin: *"
  };
}
const HOST = "https://photostock-back.herokuapp.com/api/";
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
