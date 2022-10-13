import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    //==============add item===============
    addToCartAction(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      toast.success("Add to cart successfully");
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
        toast.success("Product updates successfully! ", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        state.cartItems.push(action.payload);
      }
      // state.totalAmount = state.cartItems.reduce((total, item) => {
      //   total + Number(item.price) * Number(item.quantity), 0;
      // });
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    //===============change item===============
    changeQuantityAction(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        // alert('Số lượng nhỏ hơn 1');
        // itemCart.quantity -= quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      toast.success("Product updates successfully! ", {
        position: toast.POSITION.TOP_CENTER,
      });
    },

    //=================delete item==============
    deleteItemAction(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      toast.success("Product updates successfully! ", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  },
});

export const { addToCartAction, changeQuantityAction, deleteItemAction } =
  cartSlice.actions;

export default cartSlice.reducer;
