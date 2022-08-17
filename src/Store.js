import { configure, configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/userSlice";
import systemReducer from "./pages/system-state/SystemSlice.js";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
  },
});
export default store;
