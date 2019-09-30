import { categoriesApi } from "../../Api";

const $getCategories = () => async (dispatch) => {
  const { data: { data: { categories } } } = await categoriesApi.getCategories();
  return dispatch({
    type: "GET_CATEGORIES",
    payload: categories
  });
};
export { $getCategories };
