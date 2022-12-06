import { Button, Card } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AllCategory = () => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState([]);
  React.useEffect(() => {
    setLoading(true);
    fetch(" https://paradox-pet.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setType(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // setLoading(false);
  }, []);
  // console.log(type);
  const handleAdd = (e) => {
    e.preventDefault();
    // console.log("clicked");
    const formData = new FormData(e.target);
    const servicedata = Object.fromEntries(formData);
    console.log(servicedata);
    fetch(" https://paradox-pet.vercel.app/addCategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(servicedata),
    })
      .then((res) => res.json())
      .then((data) => {
        {
          console.log(data);
          alert("Category Added Successfully");
          e.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      data-aos-duration="3000"
      data-aos="fade-left"
      className=" dark:bg-gray-900 pt-6 lg:pt-16 pb-6 "
    >
      <h1 className="text-3xl font-bold text-center m-12 dark:text-white lg:text-5xl">
        Browse Categories
      </h1>
      {(loading === true && (
        <div role="status" class="animate-pulse">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
          <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
          <div class="flex justify-center items-center mt-4">
            <svg
              class="mr-2 w-10 h-10 text-gray-200 dark:text-gray-700"
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
            <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
            <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      )) ||
        (loading === false && (
          <div className="flex justify-evenly items-center flex-wrap gap-6">
            {type.map((type) => (
              <div className="max-w-sm ">
                <Card imgSrc={type.picture}>
                  <div className="flex justify-between">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {type.category}
                    </h5>
                    <div className="flex">
                      <Link className="mr-2" to={`/updateCategory/${type._id}`}>
                        <Button pill={true} color="warning">
                          <FaEdit></FaEdit>
                        </Button>
                      </Link>
                      <Link to={`/category/${type._id}`}>
                        <Button className="btn ">Discover</Button>
                      </Link>
                    </div>
                  </div>
                  <p className="font-normal h-48 overflow-clip text-gray-700 dark:text-gray-400">
                    {type.about}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        ))}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new Category
          </h2>
          <form action="#" onSubmit={handleAdd}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  name="category"
                  id="name"
                  defaultValue={type.category}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="image"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category image
                </label>
                <input
                  type="text"
                  name="picture"
                  id="image"
                  defaultValue={type.picture}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product image"
                  required=""
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
                  rows="8"
                  name="about"
                  defaultValue={type.about}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Category
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AllCategory;
