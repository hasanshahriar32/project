import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

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
          <p className="m-3">checkout id: {data.id}</p>
          {/* The button to open modal */}
          <label htmlFor="my-modal-6" className="btn btn-success">
            Get Receipt
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Congratulations {user.displayName}!
              </h3>
              <p className="py-4">
                An email with the receipt has been sent to your email address!
                If you have any further query, please don't forget to reply to
                that mail.
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
