import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// ..
AOS.init();

const Faq = () => {
  return (
    <div data-aos="fade-up-left">
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What are the different ways to manage a state in a React
                  application?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  When it comes to manage the state in a react component there
                  are a few ways to do it. So first we are going to define what
                  is a state and a component React code is made of entities
                  called components. Components can be rendered to a particular
                  element in the DOM using the React DOM library. When rendering
                  a component, one can pass in values that are known as “props”
                  The State of a component is a set of methods to manage what is
                  happening inside of it. For example you have the method
                  ComponentWillMount() that executes when the component gets
                  rendered and let you write code to make an API call when the
                  component gets rendered or assign some data to the component.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What does "lifetime access" exactly mean?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  In Prototype Inheritance, an object uses the properties or
                  methods of another object via the prototype linkage. All the
                  JavaScript objects inherit properties and methods from a
                  prototype like Date objects inherit properties from
                  Date.prototype and so on.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What is a unit test? Why should we write unit tests?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Lets start with the definition: Unit testing is a software
                  testing method where “units”—the individual components of
                  software—are tested. Developers write unit tests for their
                  code to make sure that the code works correctly. This helps to
                  detect and protect against bugs in the future.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  React vs. Angular vs. Vue?
                </h3>
                {/* faq  */}
                <p class="text-gray-500 dark:text-gray-400">
                  There are three frameworks for building web applications that
                  every frontend developer has heard about: React, Vue.js, and
                  Angular. React is a UI library, Angular is a fully-fledged
                  front-end framework, while Vue.js is a progressive framework.
                  They can be used almost interchangeably to build front-end
                  applications, but they are not 100 percent the same, so it
                  makes sense to compare them and understand their differences.
                  Each framework is component-based and allows the rapid
                  creation of UI features. However, they all have a different
                  structure and architecture — so first, well look into their
                  architectural differences to understand the philosophy behind
                  them.
                </p>
              </div>
            </>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
