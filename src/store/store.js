import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartUi: cartUiSlice,
    user: userSlice,
  },
});

export default store;
