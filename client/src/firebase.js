// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2b119.firebaseapp.com",
  projectId: "mern-estate-2b119",
  storageBucket: "mern-estate-2b119.appspot.com",
  messagingSenderId: "327849455116",
  appId: "1:327849455116:web:3dc0e86267aea86cf28829"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);