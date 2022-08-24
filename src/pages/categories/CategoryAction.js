import { toast } from "react-toastify";
import {
  deleteCategory,
  fetchCategory,
  postCategory,
  updateCategory,
} from "../../helpers/axiosHelper";
import { setCategories } from "./CategorySlice";

export const getCategoryAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategory();
  console.log(categories);

  status === "success" && dispatch(setCategories(categories));
};
export const postCategoryAction = (data) => async (dispatch) => {
  const promisePending = postCategory(data);
  toast.promise(promisePending, { pending: "please wait..." });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoryAction());
};
export const updateCategoryAction = (data) => async (dispatch) => {
  const promisePending = updateCategory(data);
  toast.promise(promisePending, { pending: "please wait..." });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoryAction());
};
export const deleteCategoryAction = (_id) => async (dispatch) => {
  const promisePending = deleteCategory(_id);
  toast.promise(promisePending, { pending: "please wait..." });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoryAction());
};
