import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Review from "../CarParts/SingleDetail/Review/Review";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Context/UserContext";
import { Button } from "flowbite-react";
// ..
AOS.init();
const OrderRow = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  //   console.log(data);
  return (
    <div data-aos="fade-up">
      <div>
        <div className="flex justify-center items-center">
          <section class="bg-white flex justify-center dark:bg-gray-800">
            <div
              //   data-aos="flip-left"
              //   data-aos-easing="ease-out-cubic"
              //   data-aos-duration="2000"
              class=" grid  justify-evenly max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
            >
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  {data?.order}
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
                  {data?.name}
                </p>
                <p class="max-w-2xl mb-6 font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
                  {data?.email}
                </p>
                <p class="max-w-2xl mb-6 font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
                  {data?.phone}
                </p>
                <p class="max-w-2xl mb-6 font-bold text-gray-400  md:text-lg lg:text-xl dark:text-gray-400">
                  Price: ${data?.price}
                </p>

                <p class="max-w-2xl mb-6  text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
                  Made by: {data?.company}
                </p>
                <p class="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Made at: {data?.date}
                </p>

                <Link
                  to={`/orders/${user?.uid}`}
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Go Back
                </Link>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={data?.picture} alt="mockup" />
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-center">
          <Link to="/contact">
            <Button
              onClick={() => alert("contact sale to cancel order")}
              color="failure"
            >
              Cancel Order
            </Button>
          </Link>
        </div>
        <div id="review">
          <Review></Review>
        </div>
      </div>
    </div>
  );
};

export default OrderRow;
