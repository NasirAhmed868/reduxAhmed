import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    Cart: userReducer,
  },
});
