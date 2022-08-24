import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "/admin-user";
const categoryEp = rootUrl + "/category";

const apiProcessor = async ({ method, url, data, isPrivate }) => {
  try {
    let headers = isPrivate
      ? { Authorization: sessionStorage.getItem("accessJWT") }
      : null;

    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
// post new user
export const postUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEP,
    data,
  };
  return apiProcessor(option);
};
// verify admin user
export const emailVerifiyAdminUser = (data) => {
  const option = {
    method: "patch",
    url: adminUserEP + "/verify-email",
    data,
  };
  return apiProcessor(option);
};
// Login user
export const loginAdminUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEP + "/login",
    data,
  };
  return apiProcessor(option);
};

// Categroies api calls
// fetch category
export const fetchCategory = (_id) => {
  const option = {
    method: "get",
    url: _id ? categoryEp + "/" + _id : categoryEp,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// post new category
export const postCategory = (data) => {
  const option = {
    method: "post",
    url: categoryEp,
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};
export const updateCategory = (data) => {
  const option = {
    method: "put",
    url: categoryEp,
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};
export const deleteCategory = (_id) => {
  const option = {
    method: "delete",
    url: categoryEp + "/" + _id,
    isPrivate: true,
  };
  return apiProcessor(option);
};
