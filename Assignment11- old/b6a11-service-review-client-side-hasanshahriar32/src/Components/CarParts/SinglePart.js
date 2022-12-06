import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Button } from "flowbite-react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-toastify/dist/ReactToastify.css";
import "flowbite";
import UserContext, {
  AuthContext,
} from "../../Authentication/Context/UserContext";

// ..
AOS.init();

const SinglePart = ({ service }) => {
  const { user } = useContext(AuthContext);
  // console.log(service.sellerId);
  // console.log(user.uid);
  const advertise = (id) => {
    fetch(`https://books-review-mocha.vercel.app/service/advertise/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ advertise: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // const notify = () => toast.success("Advertise Successful");
        // notify();
        alert("Advertise Updated");
      });
  };
  const multipleHandler = () =>
    alert(
      "Multiple order feature coming soon! 🚀 since we are in beta version"
    );
  // toast.warning(
  //   "Multiple order feature coming soon! 🚀 since we are in beta version"
  // );
  //   console.log(service._id);
  return (
    <div className="my-8" data-aos="zoom-in">
      <div
        id="deleteModal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button
              type="button"
              class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="deleteModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <svg
              class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p class="mb-4 text-gray-500 dark:text-gray-300">
              Are you sure you want to delete this item?
            </p>
            <div class="flex justify-center items-center space-x-4">
              <button
                data-modal-toggle="deleteModal"
                type="button"
                class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
              <button
                type="submit"
                class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-sm bg-white rounded-lg shadow-md hover:shadow-2xl dark:bg-gray-900 dark:border-gray-700">
        <div className="flex gap-2 pt-3 pr-3 items-center  justify-end">
          {/* <div>
            <Link to={`/service/${service._id}`}>
              <button
                pill={true}
                className="btn-ghost text-blue-600"
                color="none"
              >
                <FaInfoCircle></FaInfoCircle>
              </button>
            </Link>
          </div> */}
          {user?.uid && service?.sellerId == user?.uid && (
            <div className="flex gap-2 pt-3 pr-3 items-center  justify-end">
              {!service?.advertise && (
                <button
                  onClick={() => advertise(service._id)}
                  pill={true}
                  className="btn-ghost flex items-center gap-1 hover:text-green-700 text-blue-600"
                  color="none"
                >
                  <FaInfoCircle></FaInfoCircle>
                  <p>ad</p>
                </button>
              )}
              {service?.advertise && (
                <button
                  onClick={() => advertise(service._id)}
                  pill={true}
                  className="btn-ghost flex items-center gap-1 hover:text-red-700 text-red-600"
                  color="none"
                >
                  <FaInfoCircle></FaInfoCircle>
                  <p>remove ad</p>
                </button>
              )}
              <Link to={`/updateService/${service._id}`}>
                <Button pill={true} color="warning">
                  <FaEdit></FaEdit>
                </Button>
              </Link>
            </div>
          )}

          {/* <div>
            <Button
              id="deleteButton"
              data-modal-toggle="deleteModal"
              pill={true}
              color="failure"
            >
              <FaTrashAlt></FaTrashAlt>
            </Button>
          </div> */}
        </div>
        {/* <Link to={`/service/${service?._id}`}> */}

        {/* <PhotoView src={service?.picture}> */}
        <img
          id={`#${service?._id}`}
          className="p-8  rounded-t-lg w-72 h-72 mx-auto"
          src={service?.picture}
          alt="product image"
          // style={{ objectFit: "cover" }}
        />
        {/* </PhotoView> */}

        {/* </Link> */}
        <div class="px-5 pb-5">
          <Link to={`/service/${service?._id}`}>
            <h5 class="text-xl hover:text-cyan-500 h-16 w-60 text-center overflow-x-clip font-semibold tracking-tight text-gray-900 dark:text-white">
              {service?.carName}
            </h5>
            <small className="text-sm">✅ available</small>
          </Link>
          <p class="text-start text-gray-500 dark:text-gray-400 mt-2">
            {" "}
            Made By: {service?.company}
          </p>
          <p class="text-start text-gray-500 dark:text-gray-400 mt-2">
            {" "}
            Quality: {service?.quality}
          </p>
          <p class="text-start text-gray-500 dark:text-gray-400 mt-2">
            {" "}
            Purchased at: {service?.purchaseYear}
          </p>
          <div className="flex items-center justify-between">
            <div class="flex items-center mt-2.5 mb-5">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                5.0
              </span>
            </div>
          </div>
          <div className="w-60 flex justify-center items-center overflow-hidden h-7 ">
            <span class="text-gray-600 dark:text-gray-400">
              Type: {service?.category}
            </span>
          </div>
          <ToastContainer />
          <div class="flex flex-col  ">
            <div className="flex flex-wrap w-full justify-between">
              <div class="text-3xl font-bold text-start text-gray-900 dark:text-white">
                ${service?.price}
              </div>
            </div>
            <br />
            <div className="flex justify-between items-center gap-1">
              <Link>
                <Button
                  onClick={multipleHandler}
                  outline="true"
                  pill="true"
                  color="purple"
                  className="btn btn-ghost"
                >
                  <FaOpencart></FaOpencart>
                </Button>
              </Link>
              {/* <Link to={`/checkout/${service._id}`}>
                <Button className="" pill="true">
                  Buy Now
                </Button>
              </Link> */}
              <Link to={`/service/${service?._id}`}>
                <Button className="" pill="true">
                  Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePart;
