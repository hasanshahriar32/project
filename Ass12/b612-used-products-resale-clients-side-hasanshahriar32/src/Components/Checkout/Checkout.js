import { Button } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/Context/UserContext";
import Hero from "./Hero/Hero";

const Checkout = ({ setShowModal }) => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  //   console.log(data);
  const handleOrderDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.target);
    // const orderData = [...data._id];
    const orderDetails = Object.fromEntries(formData);
    console.log(orderDetails);
    fetch(
      " https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/addOrder",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          alert("Item booked successfully");
          setShowModal(false);
          const url = `/orders/${user?.uid}`;
          navigate(url);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  return (
    <div>
      {/* <Hero></Hero> */}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Order Confirmation: {data?.carName}
          </h2>

          <form action="#" onSubmit={handleOrderDetails}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Order Name
                </label>
                <input
                  type="text"
                  name="order"
                  id="order"
                  value={`${data?.carName}`}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
                <input
                  type="text"
                  className="hidden"
                  name="serviceId"
                  value={data?._id}
                />
                <input
                  type="text"
                  className="hidden"
                  name="UserId"
                  value={user?.uid}
                />
                <input
                  type="text"
                  className="hidden"
                  name="picture"
                  value={data?.picture}
                />
                <input
                  type="text"
                  className="hidden"
                  name="date"
                  value={new Date().toDateString("dd/MM/yyyy")}
                />
                <input
                  type="text"
                  className="hidden"
                  name="quantity"
                  value="1"
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Receiver Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={user?.displayName}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type receiver name"
                  required
                />
              </div>
              <div class="w-full">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Receiver email address"
                  required
                />
              </div>
              <div class="w-full">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  //   value={user?.phone}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Receiver phone number"
                  required
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
                  type="text"
                  name="company"
                  id="brand"
                  value={data?.company}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
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
                  value={data?.price}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                />
              </div>
              <div>
                <label
                  for="country"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shipment Country
                </label>
                <select
                  id="country"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Country</option>
                  <option value="TV">Bangladesh</option>
                  <option value="PC">Pakistan</option>
                  <option value="GA">India</option>
                  <option value="PH">Myanmar</option>
                </select>
              </div>
              <div>
                <label
                  for="item-weight"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Item Weight (kg)
                </label>
                <input
                  type="number"
                  name="item-weight"
                  id="item-weight"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Keep it empty if not sure"
                  //   required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="address"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Address (with zip code and country)
                </label>
                <textarea
                  required
                  id="address"
                  rows="8"
                  name="address"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Receiver address here"
                ></textarea>
              </div>
            </div>
            {/* <Link to={`/pay/${data._id}`}> */}
            <button
              type="submit"
              class="mr-2 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Book!
            </button>
            {/* <button
              type="submit"
              class="bg-purple-500 hover:bg-slate-500 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Pay Now
            </button> */}
            {/* </Link> */}
          </form>
          <div className="flex justify-center">
            <Link to={`/orders/${user?.uid}`}>
              <Button pill={true} gradientDuoTone="greenToBlue">
                My Bookings
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
