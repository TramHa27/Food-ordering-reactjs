import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const initialState = {
  authUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSignIn: (state, action) => {
      signInWithEmailAndPassword(action)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          //   toast.success("Successfully logged in");
          //   navigate("/checkout");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          //   toast.error(error.message);
        });
    },
  },
});

export const { handleSignIn } = userSlice.actions;

export default userSlice.reducer;
