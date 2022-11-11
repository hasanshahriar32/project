import { Button } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Context/UserContext";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  //   console.log(user);
  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App flex justify-center flex-col items-center">
      <h1>Profile</h1>
      <img className="w-20 " src={user?.photoURL} alt={user?.displayName} />
      <h2>{user?.displayName}</h2>
      <h2>{user?.email}</h2>
      <h4>uid: {user?.uid}</h4>
      <h4>{user?.phoneNumber}</h4>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Profile;
