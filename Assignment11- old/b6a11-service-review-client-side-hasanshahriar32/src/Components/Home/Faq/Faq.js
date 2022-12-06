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
                  Difference between SQL and NoSQL
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  The main difference between SQL and NoSQL is that they are
                  known as relational and non-relational database structures,
                  respectively, that are used in different modes for
                  implementing and manipulating data. The data storage and data
                  management systems are highly biased by these terms for their
                  structure and arrangement, which helps to maintain the data
                  structure as per requirements and needs.
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
                  What is JWT, and how does it work?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  🔴 What is JWT? JWT stands for “ JSON web token ” it is an
                  open standard (RFC 7519) that defines a compact and
                  self-contained way for securely transmitting information
                  between parties as a JSON object. JWT is simply a token that
                  is written in JSON format. It is really safe to use because it
                  can be signed in using a secret (with the HMAC algorithm) or a
                  public/private key pair using RSA or ECDSA. 🔴How does JWT
                  work? JWT contains 3 parts 1) The header 2) The payload 3) The
                  signature image The header of the JWT token is just some
                  metadata for the token such as the algorithm name and type.
                  image The payload is some data that you can encode into the
                  jwt which will be saved in the token payload and later you can
                  use those unique data to identify the specific user. The more
                  data you add the bigger the jwt token will be.
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
                  What is the difference between javascript and NodeJS?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  JavaScript is a programming language, which runs in web
                  browsers. Whereas Node.js is an interpreter or running
                  environment for JavaScript, which holds a lot of requiring
                  libraries and all. JavaScript is basically one standard
                  defining programming language; it can run any browser with a
                  default browser running environment.
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
                  How does NodeJS handle multiple requests at the same time?
                </h3>
                {/* faq  */}
                <p class="text-gray-500 dark:text-gray-400">
                  The event-driven model is very efficient and allows NodeJS to
                  handle thousands of concurrent requests with ease. Node.js
                  uses two concepts Non-blocking I/O Asynchronous Whenever a
                  client sends a request the single thread will send that
                  request to someone else. The current thread will not be busy
                  working with that request. There are workers working for the
                  server. The server sends the request to the worker, the worker
                  further sends it to the other server and waits for the
                  response. In the meantime if there is another request the
                  thread will send it to another worker and the worker will wait
                  for the response from the another server. In this way the
                  single thread will always be available to take the requests
                  from the client. It will not block the requests.
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
