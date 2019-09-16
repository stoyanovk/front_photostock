import { apiCall } from "./common";
const url = "tags";
class PhotosApi {
  getTags = () => {
    return apiCall({ url, method: "get" });
  };
  getFilteredTags = (tagValue) => {
    return apiCall({ url, method: "get", data: { tags: tagValue} });
  };
}
export default PhotosApi;
