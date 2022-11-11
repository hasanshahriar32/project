import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Components/Authentication/Firebase/Firebase.init";
import { useEffect } from "react";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  //   const [user, setUser] = useState();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const handleGithubSignIn = () => {
    const githubprovider = new GithubAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, githubprovider);
  };
  const sendPassResetMail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      //   console.log(currentuser);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    handleGoogleSignIn,
    handleGithubSignIn,
    logOut,
    signin,
    createUser,
    user,
    loading,
    sendPassResetMail,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
