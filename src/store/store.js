import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import signupReducer from "./signupSlice";
import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    signup: signupReducer,
    login: loginReducer,
  },
});

export default store;
