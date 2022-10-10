import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      } else {
        state.cartItems.push(action.payload);
      }
      // state.totalAmount = state.cartItems.reduce((total, item) => {
      //   // total + Number(item.price) * Number(item.quantity);
      // });
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
