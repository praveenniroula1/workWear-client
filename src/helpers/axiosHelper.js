import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "/admin-user";
const categoryEp = rootUrl + "/category";
const PMEP = rootUrl + "/payment-method";

const apiProcessor = async ({ method, url, data, isPrivate, token }) => {
  try {
    const headers = isPrivate
      ? { Authorization: token || sessionStorage.getItem("accessJWT") }
      : null;

    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    let message = error.message;
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
    }
    if (error.response && error.response.data) {
      message = error.response.data.message;
    }
    if (message === "jwt expired") {
      // call the api to get new accessJWT and store in the sesssion and recall the api processor

      const accessJWT = await getNewAccessJWT();
      if (accessJWT) {
        return apiProcessor({ method, url, data, isPrivate, token });
      }
    }
    return { status: "error", message };
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
export const getAdminUser = (token) => {
  const option = {
    method: "get",
    url: adminUserEP,
    isPrivate: true,
    token,
  };
  return apiProcessor(option);
};
export const getNewAccessJWT = async () => {
  const token = localStorage.getItem("refreshJWT");
  const option = {
    method: "get",
    url: adminUserEP + "/accessJWT",
    isPrivate: true,
    token,
  };
  const { status, accessJWT } = await apiProcessor(option);
  status === "success" && sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
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
export const fetchPM = () => {
  const option = {
    method: "get",
    url: PMEP,
    isPrivate: true,
  };
  return apiProcessor(option);
};
