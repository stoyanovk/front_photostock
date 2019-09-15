import CategoriesApi from './categoriesApi'
import TagsApi from './tagsApi'
import PhotosApi from './photosApi'
import UsersApi from './usersApi'

const categoriesApi = new CategoriesApi();
const tagsApi = new TagsApi();
const photosApi = new PhotosApi();
const usersApi = new UsersApi();

export { categoriesApi, tagsApi, photosApi, usersApi}