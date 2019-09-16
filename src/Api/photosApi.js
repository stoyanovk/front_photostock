import {apiCall} from './common';
const url = 'images';
class PhotosApi {
    getPhotos = ()=>{
        return apiCall({url, method:'get'})
    }
    getOnePhoto = (id)=>{
        return apiCall({url:`${url}/${id}`, method:'get'})
    }
    addNewPhoto = (data)=>{
        return apiCall({url,method:'post',data})
    }
    deletePhoto = (id)=>{
        return apiCall({url:`${url}/${id}`, method:'delete'})
    }
    editPhoto = (id,data)=>{
        return apiCall({url:`${url}/${id}`, method:'put',data})
    }
}
export default PhotosApi
const a = new PhotosApi();
a.getPhotos().then(res=>console.log(res))