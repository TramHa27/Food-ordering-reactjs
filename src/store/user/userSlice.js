import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, SignIn } from "../../firebase";

const initialState = {
  isLoggedIn: false,
  email: null,
  useName: null,
  userID: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSignIn: (state, action) => {
      const { email, userName, userID } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.userID = userID;
    },
  },
});

export const { handleSignIn } = userSlice.actions;

export default userSlice.reducer;
