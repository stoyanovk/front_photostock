import axios from "axios"

function getHeaders() {
    const token = window.localStorage.getItem("token");
  
    return {
      Authorization: `Bearer ${token}`
    };
  }
const HOST = '/api/'
const apiCall = async({url, method, data})=>{
   const result = await axios({
       withCredentials:true,
       method,
       url:`${HOST}${url}`,
       data,
       headers:getHeaders()
   })
   return result
}
export{apiCall}