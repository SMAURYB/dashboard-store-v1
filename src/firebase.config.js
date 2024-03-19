import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBsyc_kDwn7C6AGnGcqvNCPRjAsQ6kL9yQ",
  authDomain: "ecommercesmb-a3ae7.firebaseapp.com",
  projectId: "ecommercesmb-a3ae7",
  storageBucket: "ecommercesmb-a3ae7.appspot.com",
  messagingSenderId: "229679312767",
  appId: "1:229679312767:web:078a412f8b1470b784344a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)