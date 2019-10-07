import { apiCall } from "./common";
const url = "api/images";
class PhotosApi {
  getPhotos = () => {
    return apiCall({ url, method: "get" });
  };
  getOnePhoto = id => {
    return apiCall({ url: `${url}/${id}`, method: "get" });
  };
  addNewPhoto = data => {
    return apiCall({ url, method: "post", data });
  };
  deletePhoto = id => {
    return apiCall({ url: `${url}/${id}`, method: "delete" });
  };
  editPhoto = (id, data) => {
    return apiCall({ url: `${url}/${id}`, method: "put", data });
  };
  getPhotoComments = id => {
    return apiCall({ url: `${url}/${id}/comments`, method: "get" });
  };
  addPhotoComment = (id, data) => {
    return apiCall({ url: `${url}/${id}/comments`, method: "post", data });
  };
}
export default PhotosApi;
