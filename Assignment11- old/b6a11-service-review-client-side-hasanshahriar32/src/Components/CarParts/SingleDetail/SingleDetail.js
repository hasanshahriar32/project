import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Review from "./Review/Review";
import { Button } from "flowbite-react";
import HomeModal from "../../Home/HomeModal/HomeModal";
import { useContext } from "react";
import { AuthContext } from "../../../Authentication/Context/UserContext";
import { toast } from "react-toastify";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// ..
AOS.init();

const SingleDetail = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  console.log(service);
  const currentLink = window.location.href;
  //get the current url's last part
  const currentLinkLastPart = currentLink.substr(
    currentLink.lastIndexOf("/") + 1
  );
  const [postData, setPostData] = React.useState([]);

  // alert(currentLinkLastPart);

  const handleComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    fetch("https://books-review-mocha.vercel.app/categoryPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((dataGet) => {
        if (dataGet) {
          toast.success("Comment added successfully!");
        }
        //cleat the form
        e.target.reset();
        //insert data to postData

        setPostData([...postData, data]);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };
  useEffect(() => {
    fetch(
      `https://books-review-mocha.vercel.app/categoryPost/${currentLinkLastPart}`
    )
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, [currentLinkLastPart]);
  console.log(postData);

  return (
    <div>
      <div className="flex justify-center items-center">
        <section class="bg-white flex justify-center dark:bg-gray-800">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            class=" grid  justify-evenly max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
          >
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                {service?.carName}
              </h1>
              <p class="max-w-2xl mb-6 font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
                {service?.about}
              </p>
              <p class="max-w-2xl mb-6 font-bold text-gray-400  md:text-lg lg:text-xl dark:text-gray-400">
                Price: ${service?.price}
              </p>
              <p class="max-w-2xl mb-6  text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
                Made by: {service?.company}
              </p>
              <p class="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Made at: {service?.registered}
              </p>

              <Link
                to="/services"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Go Back
              </Link>
              <HomeModal></HomeModal>
              {user?.uid === service?.sellerId && (
                <Link
                  to={`/updateService/${service?._id}`}
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Update Service
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
                </Link>
              )}
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={service?.picture} alt="mockup" />
            </div>
          </div>
        </section>
      </div>
      <div id="review">
        {/* <Review></Review> */}
        {/* review start  */}

        <div>
          <section class="bg-white dark:bg-gray-900 py-8 lg:py-16">
            <div class="max-w-2xl mx-auto px-4">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion {postData.length}
                </h2>
              </div>
              <form onSubmit={handleComment} class="mb-6">
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label for="comment" class="sr-only">
                    Your comment
                  </label>
                  <textarea
                    name="comment"
                    id="comment"
                    rows="6"
                    class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <input
                  type="text"
                  className="hidden"
                  name="image"
                  defaultValue={user?.photoURL}
                />
                <input
                  type="text"
                  className="hidden"
                  name="image"
                  defaultValue={user?.photoURL}
                />
                <input
                  type="text"
                  className="hidden"
                  name="name"
                  defaultValue={user?.displayName}
                />
                <input
                  type="text"
                  className="hidden"
                  name="email"
                  defaultValue={user?.email}
                />
                <input
                  type="text"
                  className="hidden"
                  name="date"
                  defaultValue={new Date().toDateString()}
                />
                <input
                  type="text"
                  className="hidden"
                  name="categoryId"
                  defaultValue={currentLinkLastPart}
                />
                <button
                  type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>
              {postData.map((post) => (
                <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <footer class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img
                          class="mr-2 w-6 h-6 rounded-full"
                          src={post?.image}
                          alt={post?.name}
                        />
                        <span>{post?.name}</span>
                      </p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        <time pubdate datetime={post?.date} title={post?.date}>
                          {post?.date}
                        </time>
                      </p>
                    </div>
                    <button
                      id="dropdownComment4Button"
                      data-dropdown-toggle="dropdownComment4"
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="btn"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      </svg>
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div
                      id="dropdownComment4"
                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconHorizontalButton"
                      >
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Remove
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </footer>
                  <p class="text-gray-500 dark:text-gray-400">
                    {post?.comment}
                  </p>
                  <div class="flex items-center mt-4 space-x-4">
                    <button
                      // onclick redirect to comment section
                      // onClick={() => handleReply(post?.id)}
                      href="#comment"
                      type="button"
                      class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                    >
                      <svg
                        aria-hidden="true"
                        class="mr-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                      <a href="#comment">Reply</a>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* review end  */}
      </div>
    </div>
  );
};

export default SingleDetail;
