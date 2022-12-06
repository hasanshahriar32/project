import React from "react";
import "flowbite";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// ..

//   import React from "react";

// import Drawer from "./Drawer";
// import Popup from "./Popup";
// import Update from "../CarParts/Update/Update";
// import UpdateProfile from "./UpdateProfile";
// import Profile from "../Profile/Profile";
import AllCategory from "./AllCategory";
import AllUser from "./AllUser";
import AllSeller from "./AllSeller";
import AllProducts from "./AllProducts";
import AdminPopup from "./AdminPopup";
AOS.init();
const AdminContol = () => {
  const [select, setSelect] = React.useState("profile");
  console.log(select);
  return (
    <div>
      <section className="grid justify-center grid-cols-4">
        {/* <Drawer></Drawer> */}
        <AdminPopup setSelect={setSelect}></AdminPopup>
        <div
          class="bg-white dark:bg-gray-900"
          data-aos-duration="3000"
          data-aos="fade-left"
          className="col-span-4 md:col-span-3 "
        >
          {select === "category" && <AllCategory></AllCategory>}
          {select === "allsellers" && <AllUser></AllUser>}
          {select === "alluser" && <AllSeller></AllSeller>}
          {select === "allproducts" && <AllProducts></AllProducts>}
        </div>
      </section>
    </div>
  );
};

export default AdminContol;
