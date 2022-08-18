import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "/admin-user";
const categoryEp = rootUrl + "/category";

const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
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
  };
  return apiProcessor(option);
};

// post new category
export const postCategory = (data) => {
  const option = {
    method: "post",
    url: categoryEp,
    data,
  };
  return apiProcessor(option);
};
