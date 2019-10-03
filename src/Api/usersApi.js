import {apiCall} from './common';
const url = 'api/users';
class UsersApi {
    getUsers = ()=>{
        return apiCall({url, method:'get'})
    }
    getOneUser = (id)=>{
        return apiCall({url:`${url}/${id}`, method:'get'})
    }
    addNewUser = (data)=>{
        return apiCall({url,method:'post',data})
    }
    deleteUser = (id)=>{
        return apiCall({url:`${url}/${id}`, method:'delete'})
    }
    editUser = (id,data)=>{
        return apiCall({url:`${url}/${id}`, method:'put',data})
    }
    getUserLike = (id)=>{
        return apiCall({url:`${url}/${id}/liked_photos`, method:'get'})
    }
    getUserPhotos = (id)=>{
        return apiCall({url:`${url}/${id}/photos`, method:'get'})
    }
}
export default UsersApi