import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./others/loadingSlice";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartUi: cartUiSlice,
    loading: loadingSlice,
  },
});

export default store;
