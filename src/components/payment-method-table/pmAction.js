import { toast } from "react-toastify";
import { fetchPM, PostPM } from "../../helpers/axiosHelper";
import { setModalShow } from "../../pages/system-state/SystemSlice";
import { setPaymentMethod } from "./pmSlice";

export const getPmsAction = () => async (dispatch) => {
  const { status, pm } = await fetchPM();

  status === "success" && dispatch(setPaymentMethod(pm));
};
export const postPmsAction = (data) => async (dispatch) => {
  const promisePending = PostPM(data);
  toast.promise(promisePending, { pending: "Please wait..." });
  const { status, message } = await promisePending;
  toast[status](message);

  status === "success" && dispatch(setModalShow()) && dispatch(getPmsAction());
};
