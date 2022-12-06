import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import SinglePart from "./SinglePart";
// import car from "./car.json";
import { AuthContext } from "../../Authentication/Context/UserContext";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AddNewProduct from "./AddNewProduct";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// ..
AOS.init();

const CarParts = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true);
    fetch(" https://paradox-pet.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [services]);
  //   console.log(services);

  return (
    <div>
      <div className="App my-8 dark:text-white" data-aos="fade-up-left">
        <h1 className="text-3xl my-3 md:text-5xl font-semibold ">
          Public Services Area
        </h1>
        <p>
          Our services are genuine. They are being popular worldwide and being
          purchased by well known multi-national companies.{" "}
        </p>
        <div className="flex flex-wrap justify-evenly gap-3 lg:gap-8 ">
          {loading ? (
            <div className="text-center mt-16">
              <div className="spinner-grow text-primary" role="status">
                <div
                  role="status"
                  class="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div class="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
                    <svg
                      class="w-12 h-12 text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div class="flex items-center mt-4 space-x-3">
                    <svg
                      class="w-14 h-14 text-gray-200 dark:text-gray-700"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                      <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            services.map((service) => (
              <SinglePart key={service._id} service={service}></SinglePart>
            ))
          )}
        </div>
      </div>
      {/* <AddNewProduct></AddNewProduct> */}
    </div>
  );
};

export default CarParts;
