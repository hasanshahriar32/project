import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import CoursePrint from "../Course/CoursePrint";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <div className="m-3 flex justify-center">
        <img className="h-[200px] md:h-80 " src={data.icon} alt="" />
      </div>
      <h1 className="text-center text-4xl m-2">
        Course {data.name} purchase successful!
      </h1>
      <div className="flex justify-center">
        <div>
          <p className="m-3">Course Duration: {data.duration}</p>
          <p className="m-3">
            {" "}
            {data.price} have been deducted from your credit card. We'll send
            you a confirmation email shortly. Thank you for your purchase!{" "}
            <span className="text-success">{user.displayName}</span>
          </p>
          <button className="btn btn-warning m-5">Download Receipt </button>
          <CoursePrint></CoursePrint>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
