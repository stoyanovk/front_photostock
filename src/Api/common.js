import axios from "axios";

function getHeaders(data) {
  const token = window.localStorage.getItem("token");
  const ContentType = { "Content-type": "Access-Control-Allow-Origin: *"}
  return {
    Authorization: `Bearer ${token}`,
    // mode: 'no-cors',
    ...ContentType,
    ...data
  };
}
const HOST = "https://photostock-back.herokuapp.com/";
const apiCall = async ({ url, method, data,headersData }) => {
  const result = await axios({
    method,
    url: `${HOST}${url}`,
    data,
    headers: getHeaders(headersData)
  });
  return result;
};
export { apiCall };
