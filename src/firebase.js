// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcUoBRezgMsy3IXNZYGYz32gP9cprJKjE",
  authDomain: "food-ordering-reactjs.firebaseapp.com",
  projectId: "food-ordering-reactjs",
  storageBucket: "food-ordering-reactjs.appspot.com",
  messagingSenderId: "596378722713",
  appId: "1:596378722713:web:b165904edaf40dff78b308",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
