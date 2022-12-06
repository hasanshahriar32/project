import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Review from "../CarParts/SingleDetail/Review/Review";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Context/UserContext";
import { Button } from "flowbite-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
// ..
AOS.init();
const stripePromise = loadStripe(process.env.REACT_APP_PK);
// const stripePromise = loadStripe(
//   "pk_test_51LEJNMB95tAlnqnFFTycKfYO8NSYd3h0YEpTQdCbyoq3SDCHwly1lXBvNlzTqCae9wGjv1XEJRzMcYCtq8ZppehG00OUL8d9WB"
// );

const OrderRow = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  //   console.log(data);
  console.log(stripePromise);
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
                <h1 class="max-w-2xl mb-4 text-2xl tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
                  Order By:
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
                {/* <Button>Pay</Button>
                 */}
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={data?.picture} alt="mockup" />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="flex flex-col items-center w-full justify-center">
        <h2 className="text-red-600">
          Default Payment Method Is Cash On Delivery
        </h2>
        <p className="dark:text-gray-300">or, Pay With Stripe</p>

        <div className="bg-violet-100 w-[400px]   hover:bg-gray-300 p-6 text-gray-100 rounded my-6">
          <Elements stripe={stripePromise}>
            <CheckOutForm data={data} />
          </Elements>
        </div>

        <Link
          to={`/orders/${user?.uid}`}
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Go Back
        </Link>
        <Link to="/contact">
          <Button
            className={`hidden`}
            onClick={() => alert("contact sale to cancel order")}
            color="failure"
          >
            Email Admin to Cancel Order
          </Button>
        </Link>

        <div id="review">
          <Review></Review>
        </div>
      </div>
    </div>
  );
};

export default OrderRow;
