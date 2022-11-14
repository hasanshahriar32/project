import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);
  const signout = () => {
    logOut();
  };
  return (
    <div>
      <h2>Secret about us!!!</h2>
      <h1>{user?.displayName}</h1>
      <img src={user?.photoURL} alt="" />
      <h3>{user?.email}</h3>
      <h3>{user?.phoneNumber}</h3>
      <h3>{user?.uid}</h3>
      <h3>{user?.reloadUserInfo?.passwordHash}</h3>
      <button onClick={signout}>Logout</button>
    </div>
  );
};

export default About;
