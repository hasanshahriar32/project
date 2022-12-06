import { Button, Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import "./Banner.css";
import BannerData from "./BannerData";
import Lottie1 from "./Lottie1";
import Lottie2 from "./Lottie2";
import Lottie3 from "./Lottie3";
const Banner = () => {
  return (
    <div className="">
      <div className="h-60 sm:h-[300px] md:h-[480px] m-8 lg:m-20 lg:h-[600px]">
        <Carousel>
          {/* slide 1  */}

          <div className="flex h-full p-6 items-center justify-center  dark:text-white">
            <section class="bg-white dark:bg-gray-900">
              <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                  <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Easy sell of old books and buy new books
                  </h1>
                  <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    We make it easyer to sell your old books and buy new books.
                    We are here to help you.
                  </p>
                  <Link to="/services">
                    <a
                      // href="#"
                      class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                      Get started
                      <svg
                        class="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                  <Link to="/contact">
                    <a
                      // href="#"
                      class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      Speak to Sales
                    </a>
                  </Link>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <Lottie1></Lottie1>
                </div>
              </div>
            </section>
          </div>

          {/* slide 2  */}

          <div className="flex h-full p-6 items-center justify-center  dark:text-white">
            <section class="bg-white dark:bg-gray-900">
              <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                  <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Trusted by 1000+ students. Join them now .
                  </h1>
                  <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Our platform is trusted by 1000+ students. Join them now and
                    get your books. Our sellers are verified and trusted.
                  </p>
                  <Link to="/services">
                    <a
                      // href="#"
                      class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                      Get started
                      <svg
                        class="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                  <Link>
                    <a
                      // href="#"
                      class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      Speak to Sales
                    </a>
                  </Link>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <Lottie2></Lottie2>
                </div>
              </div>
            </section>
          </div>

          {/* slide 3 */}

          <div className="flex h-full p-6 items-center justify-center  dark:text-white">
            <section class="bg-white dark:bg-gray-900">
              <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                  <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Payments tool for software companies
                  </h1>
                  <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    From checkout to global sales tax compliance, companies
                    around the world use Flowbite to simplify their payment
                    stack.
                  </p>
                  <Link to="/services">
                    <a
                      // href="#"
                      class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                      Get started
                      <svg
                        class="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                  <Link to="/contact">
                    <a
                      // href="#"
                      class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      Speak to Sales
                    </a>
                  </Link>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <Lottie3></Lottie3>
                </div>
              </div>
            </section>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
