import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase.config";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        saveUserToLocalStorage(userCredential.user);
      });
  };

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        saveUserToLocalStorage(userCredential.user);
      });
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        setUser(userCredential.user);
        saveUserToLocalStorage(userCredential.user);
      });
  };

  const logout = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      });
  };

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    if (storedUser) {
      setUser(storedUser);
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        saveUserToLocalStorage(currentUser);
      } else {
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
