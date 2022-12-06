import React from "react";
import "flowbite";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// ..

//   import React from "react";

import Drawer from "./Drawer";
import Popup from "./Popup";
import Update from "../CarParts/Update/Update";
import UpdateProfile from "./UpdateProfile";
import Profile from "../Profile/Profile";
AOS.init();
const Settings = () => {
  const [select, setSelect] = React.useState("profile");
  console.log(select);
  return (
    <div>
      <section className="grid justify-center grid-cols-4">
        {/* <Drawer></Drawer> */}
        <Popup setSelect={setSelect}></Popup>
        <div
          data-aos-duration="3000"
          class="bg-white dark:bg-gray-900"
          data-aos="fade-left"
          className="col-span-4 md:col-span-3 "
        >
          {select === "profile" && <Profile></Profile>}
          {select === "update" && <UpdateProfile></UpdateProfile>}
        </div>
      </section>
    </div>
  );
};

export default Settings;
