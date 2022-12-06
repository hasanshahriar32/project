import { Button, Card } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Categories = () => {
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
  return (
    <div className=" dark:bg-gray-900 pt-6 lg:pt-16 pb-6 ">
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
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="max-w-sm "
              >
                <Card imgSrc={type.picture}>
                  <div className="flex justify-between">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {type.category}
                    </h5>
                    <Link to={`/category/${type._id}`}>
                      <Button className="btn ">Discover</Button>
                    </Link>
                  </div>
                  <p className="font-normal h-48 overflow-clip text-gray-700 dark:text-gray-400">
                    {type.about}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Categories;
