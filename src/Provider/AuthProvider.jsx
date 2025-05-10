import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const createUserWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        toast.warning("logged out", {
          position: "top-center",
          autoClose: 800,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, " ", errorMessage, {
          position: "top-center",
          autoClose: 1000,
        });
      });
  };
  const updateUser = (updatedUser) => {
    return updateProfile(auth.currentUser, updatedUser);
  };

  // console.log(userInfo);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const [displayName, setDisplayName] = useState(userInfo?.displayName || "");
  const [photoURL, setPhotoURL] = useState(userInfo?.photoURL || "");
  const AuthData = {
    userInfo,
    setUserInfo,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    createUserWithGoogle,
    photoURL,
    setPhotoURL,
    displayName,
    setDisplayName,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
