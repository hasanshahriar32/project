import React from "react";
import { useContext } from "react";
import "flowbite";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Authentication/Context/UserContext";
import { deleteUser, getAuth, updateProfile } from "firebase/auth";
import app from "../Authentication/Firebase/Firebase.init";
const UpdateProfile = () => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const notify = () => toast.success("Profile Updated !");
  const notify1 = () => toast.warning("Reload Required !");
  const notify2 = (err) => toast.error(err);
  const userUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        console.log("Profile updated!");
        notify();
        notify1();
      })
      .catch((error) => {
        console.log(error);
        // alert(error.message);
        notify2(error.message);
      });
  };

  //   const { user } = useContext(AuthContext);
  //   console.log(user);
  const deleteAccount = () => {
    const agree = window.confirm(
      `Are you sure to delete account ${user?.displayName}?`
    );
    if (agree) {
      deleteUser(user)
        .then(function () {
          // User deleted..
          console.log("User deleted");
        })
        .catch(function (error) {
          // An error happened.
          console.log(error);
          alert(error);
        });
    }
  };
  return (
    <div
      data-aos-duration="3000"
      data-aos="fade-left"
      class="bg-white dark:bg-gray-900"
    >
      <ToastContainer />
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update profile
          </h2>
          <form onSubmit={userUpdate} action="#">
            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Profile Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  defaultValue={user?.displayName}
                  placeholder="Type profile name"
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="image"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Profile Image Link
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  defaultValue={user?.photoURL}
                  placeholder="Insert image link"
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  disabled
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  defaultValue={user?.email}
                  placeholder="Type email"
                  //   required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  disabled
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  //   value=""
                  placeholder="Password"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="confirm"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  disabled
                  name="confirm"
                  id="confirm"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  //   value=""
                  placeholder="Confirm password"
                  required=""
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bio
                </label>
                <textarea
                  id="description"
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write your bio here..."
                ></textarea>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button
                type="submit"
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update profile
              </button>
              <button
                onClick={deleteAccount}
                type="button"
                class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                <svg
                  class="w-5 h-5 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Delete account
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfile;
