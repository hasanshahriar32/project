import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaTrashAlt } from "react-icons/fa";

// import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../../Authentication/Context/UserContext";
import SinglePart from "../../../CarParts/SinglePart";
import { useEffect } from "react";
import useAdmin from "../../../../hooks/useAdmin";

const Singlecategory = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = useContext(AuthContext);
  const [admin] = useAdmin(user?.uid);
  console.log(user);
  const multipleHandler = () =>
    alert(
      "Multiple order feature coming soon! 🚀 since we are in beta version"
    );
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
    fetch("https://paradox-pet.vercel.app/categoryPost", {
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
        console.log(error);
      });
  };
  useEffect(() => {
    fetch(`https://paradox-pet.vercel.app/categoryPost/${currentLinkLastPart}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, [currentLinkLastPart]);
  // console.log(postData);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) {
      return;
    }

    fetch(`https://paradox-pet.vercel.app/categoryPost/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Comment deleted successfully!");
        const remaining = postData.filter((pd) => pd._id !== id);
        setPostData(remaining);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.log(error);
      });
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="flex flex-wrap justify-evenly items-center">
        {data.map((service) => (
          <SinglePart key={service._id} service={service}></SinglePart>
        ))}
      </div>
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
                name="posterId"
                defaultValue={user?.uid}
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
                  {(user?.uid === post?.posterId || admin) && (
                    <button
                      onClick={() => handleDelete(post._id)}
                      // id="dropdownComment4Button"
                      // data-dropdown-toggle="dropdownComment4"
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button"
                    >
                      {/* <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg> */}
                      <FaTrashAlt className="text-red-500"></FaTrashAlt>
                    </button>
                  )}
                  {/* <!-- Dropdown menu --> */}
                  {/* <div
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
                          Edit
                        </a>
                      </li>
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
                  </div> */}
                </footer>
                <p class="text-gray-500 dark:text-gray-400">{post?.comment}</p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
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
                    Reply
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Singlecategory;
