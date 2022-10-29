import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({ children }) => {
  //   const user = { email: "abc" };
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signeduser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
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
  const authInfo = { user, auth, createUser, setUser, signin, loading, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
