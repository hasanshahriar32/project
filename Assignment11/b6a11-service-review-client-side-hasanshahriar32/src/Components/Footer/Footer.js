import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link } from "react-router-dom";
// ..
AOS.init();

const Footer = () => {
  return (
    <div data-aos="fade-up">
      <footer class="p-4 bg-base-200 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://paradox-bd.com/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://avatars.githubusercontent.com/u/109535601?s=40&v=4"
              class="mr-3 h-8"
              alt="Paradox Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pet Home
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" class="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/terms" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://t.me/mrxx32"
                class="mr-4 hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <Link to="/contact" href="#" class=" hover:underline md:mr-6 ">
                Licensing
              </Link>
            </li>

            <li>
              {/* <script
                type="text/javascript"
                src="https://www.freevisitorcounters.com/auth.php?id=8401e81219ae9c25d15bcb94d7eabfd9e4cec147"
              ></script>
              <script
                type="text/javascript"
                src="https://www.freevisitorcounters.com/en/home/counter/980456/t/5"
              ></script> */}
            </li>
          </ul>
          <div className="">
            <p className="dark:text-gray-400">Visit Counter</p>
            <script
              type="text/javascript"
              src="https://www.freevisitorcounters.com/auth.php?id=8401e81219ae9c25d15bcb94d7eabfd9e4cec147"
            ></script>
            <script
              type="text/javascript"
              src="https://www.freevisitorcounters.com/en/home/counter/980456/t/5"
            ></script>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://paradox-bd.com/" class="hover:underline">
            Paradox™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
