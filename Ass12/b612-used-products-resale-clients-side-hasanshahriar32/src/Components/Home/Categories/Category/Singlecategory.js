import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../../Authentication/Context/UserContext";
import SinglePart from "../../../CarParts/SinglePart";

const Singlecategory = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = useContext(AuthContext);
  const multipleHandler = () =>
    alert(
      "Multiple order feature coming soon! 🚀 since we are in beta version"
    );

  return (
    <div className="flex flex-wrap justify-evenly items-center">
      {data.map((service) => (
        <SinglePart key={service._id} service={service}></SinglePart>
      ))}
    </div>
  );
};

export default Singlecategory;
