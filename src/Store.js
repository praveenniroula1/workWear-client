import { configure, configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/userSlice";
import systemReducer from "./pages/system-state/SystemSlice.js";
import categoryReducer from "./pages/categories/CategorySlice";
import paymentMethodReducer from "../../client/src/components/payment-method-table/pmSlice";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
    category: categoryReducer,
    paymentMethod: paymentMethodReducer,
  },
});
export default store;
