import {apiCall} from './common';
const url = 'api/categories';
class CategoriesApi {
    getCategories = ()=>{
        return apiCall({url, method:'get'})
    }
    getOneCategory = (id)=>{
        return apiCall({url:`${url}/${id}`, method:'get'})
    }
    addNewCategory = (data)=>{
        return apiCall({url,method:'post',data})
    }
    deleteCategory = (id)=>{
        return apiCall({url:`${url}/${id}`, method:'delete'})
    }
}
export default CategoriesApi