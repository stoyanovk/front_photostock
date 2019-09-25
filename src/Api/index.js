import CategoriesApi from './categoriesApi'
import TagsApi from './tagsApi'
import PhotosApi from './photosApi'
import UsersApi from './usersApi'
import AuthApi from './authApi'

const categoriesApi = new CategoriesApi();
const tagsApi = new TagsApi();
const photosApi = new PhotosApi();
const usersApi = new UsersApi();
const authApi = new AuthApi();

export { categoriesApi, tagsApi, photosApi, usersApi, authApi}