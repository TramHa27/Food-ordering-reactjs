import { createSlice } from "@reduxjs/toolkit";

const isLazyLoading = createSlice({
  name: "loading",
  initialState: { loadingIsVisible: false },
  reducers: {
    toggle(state) {
      state.loadingIsVisible = !state.loadingIsVisible;
    },
  },
});

export const { toggleLoading } = isLazyLoading.actions;
export default isLazyLoading.reducer;
