import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import UserContext, {
  AuthContext,
} from "../../Authentication/Context/UserContext";
// ..
AOS.init();

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(` https://paradox-pet.vercel.app/orders?UserId=${user?.uid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("token");
          alert("jwt invalid or expired!! please  login again.");
          logOut();
        }
        return res.json();
      })
      .then((data) => setData(data));
  }, []);

  // const data = useLoaderData();
  console.log(data);
  const handleDelete = (id) => {
    fetch(` https://paradox-pet.vercel.app/deleteOrder/${id}`, {
      method: "DELETE",
      cors: "no-cors",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully");
        alert("deleted successfully");
        const agree = window.confirm("Do you wanna refresh the page?");
        if (agree) {
          window.location.reload();
        } else {
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  return (
    <div>
      <div data-aos="fade-up">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="py-3 px-6">
                  Product
                </th>
                <th scope="col" class="py-3 px-6">
                  Qty
                </th>
                <th scope="col" class="py-3 px-6">
                  Price
                </th>
                <th scope="col" class="py-3 px-6">
                  Status
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((order) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="p-4 w-32">
                    <img
                      className="rounded-xl w-24 h-24"
                      src={order?.picture}
                      alt={order?.order}
                    />
                  </td>
                  <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    {order.order}
                  </td>
                  <td class="py-4 px-6">
                    <div class="flex items-center space-x-3">
                      <button
                        class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span class="sr-only">Quantity button</span>
                        <svg
                          class="w-4 h-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          //   placeholder="1"
                          value={order?.quantity}
                          required
                        />
                      </div>
                      <button
                        class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span class="sr-only">Quantity button</span>
                        <svg
                          class="w-4 h-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    ${order.price}
                  </td>
                  <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Paid/ Unpaid
                  </td>
                  <td class="py-4 px-6">
                    <Link
                      to={`/orderRow/${order._id}`}
                      class="font-medium mr-1 text-purple-600 dark:text-purple-500 hover:underline"
                    >
                      Pay and More
                    </Link>
                    <button
                      onClick={() => handleDelete(order?._id)}
                      //   href="#"
                      class="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Clear
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
