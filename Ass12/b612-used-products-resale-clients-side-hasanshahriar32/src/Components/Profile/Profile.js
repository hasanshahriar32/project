import { Button } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Context/UserContext";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link } from "react-router-dom";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// ..
AOS.init();

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
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="App dark:text-gray-300 flex justify-center flex-col items-center"
    >
      <h1 className="text-5xl font-bold m-5">Profile</h1>
      <img
        className="w-20 "
        title={user?.displayName}
        src={user?.photoURL}
        alt={user?.displayName}
      />
      <h2 className="text-3xl">{user?.displayName}</h2>
      <h2 className="text-xl">{user?.email}</h2>
      <h4 className="text-xl">uid: {user?.uid}</h4>
      <h4 className="text-xl">{user?.phoneNumber}</h4>

      <div className="flex m-3">
        {/* <Link to="/settings">
          <Button className="mr-6 w-28" gradientMonochrome="lime">
            Edit Profile
          </Button>
        </Link> */}
        <Button
          className="w-28"
          gradientMonochrome="failure"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
