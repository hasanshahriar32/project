import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const Profile = () => {
  const { logOut, user } = useContext(AuthContext);

  return (
    <div className="">
      <br />
      <h1 className="text-center text-5xl">Profile</h1>
      <br />
      <br />
      <div className="flex justify-center">
        <img className="w-32" src={user?.photoURL} alt="" />
      </div>
      <h2 className="text-center text-3xl">Name: {user?.displayName}</h2>
      <h2 className="text-center text-xl">Email: {user?.email}</h2>
      <h2 className="text-center text-xl">{user?.phoneNumber}</h2>
      <h2 className="text-center text-xl">uid: {user?.uid}</h2>
      <br />
      <div className="flex justify-center">
        <button onClick={logOut} className="btn btn-warning">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
