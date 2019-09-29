import { categoriesApi } from "../../Api";

const getCategories = () => dispatch => {
  return categoriesApi
    .getCategories()
    .then(({ data: { data: { categories } } }) => {
      return dispatch({
        type: "GET_CATEGORIES",
        payload: categories
      });
    });
};
export { getCategories };
