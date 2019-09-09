import axios from "axios";
export default class Api {
  static url = "";
  getCategory = url => {
    axios
      .get(url)
      .then(res => res)
      .catch(err => new Error("somthing went wrong "));
  };
  getKeyword = word => {
    axios
      .get(`api/${word}`)
      .then(res => res)
      .catch(err => new Error("somthing went wrong "));
  };
}
