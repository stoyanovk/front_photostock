import { apiCall } from "./common";
const url = "tags";
class PhotosApi {
  getTags = () => {
    return apiCall({ url, method: "get" });
  };
  getFilteredTags = (data) => {
    return apiCall({ url, method: "get", data });
  };
}
export default PhotosApi;
