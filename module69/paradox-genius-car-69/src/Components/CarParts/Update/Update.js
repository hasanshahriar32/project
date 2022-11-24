import { Button } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../../Authentication/Context/UserContext";
import { FaTrashAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import "flowbite";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// ..
AOS.init();
const Update = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();
  //   useEffect(() => {}, [data]);
  let location = useLocation();
  const from = location.state?.from?.pathname || "/services";
  const navigate = useNavigate();
  const handleDelete = (dataId) => {
    const agree = window.confirm(`Are you sure to delete ${data.carName}?`);
    if (agree) {
      const id = dataId;
      if (!id) {
        <Navigate to="/services" />;
      }
      fetch(`https://car-server-three.vercel.app/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("deleted successfully");
          //redirect to home
          //   window.location.href = "/services";
          document.getElementById("deleteButton").classList.add("hidden");
          //   return <Navigate to="/services" />;
          navigate(from, { replace: true });
        })
        .catch((err) => {
          window.location.href = "/services";
          console.log(err);
          document
            .getElementsByClassName("deleteSuccess")
            .classList.add("hidden");
          navigate(from, { replace: true });
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const servicedata = Object.fromEntries(formData);
    console.log(servicedata);
    fetch(`https://car-server-three.vercel.app/servicesUpdate/${data?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(servicedata),
    })
      .then((res) => res.json())
      .then((servicedata) => {
        if (servicedata) {
          alert("Service updated Successfully");
        }
        console.log(servicedata);
        setServices([...services, servicedata]);
        navigate(from, { replace: true });
        // e.target.reset();
      });
  };
  console.log(data);
  return (
    <div>
      <section
        // data-aos="fade-up"
        data-aos-duration="3000"
        class="bg-white dark:bg-gray-900"
        data-aos="fade-up-down"
      >
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <div>
            <h1 className="text-3xl dark:text-white my-6 text-center md:text-5xl font-semibold ">
              Update Your Custom Service{" "}
            </h1>
            <Link to={`/service/${data._id}`}>
              <button
                pill={true}
                className="btn-ghost text-blue-600"
                color="none"
              >
                <FaInfoCircle></FaInfoCircle>
              </button>
            </Link>
          </div>
          <h2 class="mb-4 text-xl  font-bold text-gray-900 dark:text-white">
            {/* Add a new Service */}
          </h2>
          <form onSubmit={handleSubmit} action="#">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Service Name
                </label>
                <input
                  type="text"
                  name="carName"
                  id="name"
                  defaultValue={data?.carName}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Service name"
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="image"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Service Image
                </label>
                <input
                  type="url"
                  defaultValue={data?.picture}
                  name="picture"
                  id="image"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Service Image Link"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </label>
                <input
                  defaultValue={data?.company}
                  type="text"
                  name="company"
                  id="brand"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Service brand"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  defaultValue={data?.price}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                />
              </div>

              {/* <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select category</option>
                  <option value="repair">Full Repair</option>
                  <option value="paint">Paint</option>
                  <option value="wash">Wash</option>
                  <option value="upgrade">Purchase</option>
                </select>
              </div> */}
              <div>
                <label
                  for="item-weight"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Service Reg. Date
                </label>
                <input
                  //   set current date as default value
                  defaultValue={data?.registered}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  type="date"
                  name="registered"
                  id=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="about"
                  rows="8"
                  defaultValue={data?.about}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              id="deleteButton"
              class="deleteSuccess inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Update Service
            </button>
          </form>
          <div></div>
          <div class="flex justify-center m-5">
            <Button
              onClick={() => handleDelete(data?._id)}
              id="deleteButton"
              data-modal-toggle="deleteModal"
              gradientMonochrome="failure"
              type="button"
              className="flex deleteSuccess items-center justify-between w-[60] px-5 py-3 mt-6 text-base font-medium text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FaTrashAlt></FaTrashAlt> <p>DELETE SERVICE</p>
            </Button>
          </div>
        </div>
      </section>

      {/* <!-- Main modal --> */}
      {/* <div
        id="deleteModal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        
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
      </div> */}
    </div>
  );
};

export default Update;
