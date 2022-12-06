import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Categories from "../Categories";
import { Link, Outlet } from "react-router-dom";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

const Category = () => {
  const [navigate, setNavigate] = useState(false);
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    axios
      .get(
        " https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/category"
      )
      .then((res) => {
        setAllCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate]);
  console.log(allCategory);

  return (
    <div>
      <Header></Header>
      {/* <!-- drawer init and show --> */}
      <div class="text-center">
        {!navigate && (
          <button
            onClick={() => setNavigate(true)}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
          >
            Show navigation
          </button>
        )}
      </div>

      {/* <!-- drawer component --> */}
      {navigate && (
        <div
          id="drawer-navigation"
          class="fixed z-40  p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
          tabindex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <button
            onClick={() => setNavigate(false)}
            type="button"
            data-drawer-dismiss="drawer-navigation"
            aria-controls="drawer-navigation"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 relative left-60  inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <span class="sr-only">Close menu</span>
          </button>
          <h5
            id="drawer-navigation-label"
            class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Menu
          </h5>

          <div class="py-4 overflow-y-auto">
            <ul class="space-y-2">
              <li>
                <Link
                  to={`/category`}
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">All Category</span>
                </Link>
              </li>
              {allCategory.map((singleCategory) => (
                <li>
                  <Link
                    to={`/category/${singleCategory._id}`}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="ml-3">{singleCategory?.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <Outlet></Outlet>
      {/* <Categories></Categories> */}
      <Footer></Footer>
    </div>
  );
};

export default Category;
