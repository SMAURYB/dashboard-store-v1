import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsyc_kDwn7C6AGnGcqvNCPRjAsQ6kL9yQ",
  authDomain: "ecommercesmb-a3ae7.firebaseapp.com",
  projectId: "ecommercesmb-a3ae7",
  storageBucket: "ecommercesmb-a3ae7.appspot.com",
  messagingSenderId: "229679312767",
  appId: "1:229679312767:web:078a412f8b1470b784344a"
};

// Se inicializa la aplicación de Firebase con la configuración proporcionada
export const app = initializeApp(firebaseConfig);

// Se obtiene una instancia de Firestore utilizando la aplicación de Firebase
export const db = getFirestore(app);
export const firestore = getFirestore(app)

// Se obtiene una instancia del servicio de autenticación de Firebase utilizando la aplicación de Firebase
export const auth = getAuth(app);

export const storage = getStorage(app);
