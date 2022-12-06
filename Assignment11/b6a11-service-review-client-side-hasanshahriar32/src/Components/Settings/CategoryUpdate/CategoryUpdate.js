import { Button } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom/dist";

const CategoryUpdate = () => {
  const data = useLoaderData();
  const deleteHandle = (id) => {
    fetch(` https://paradox-pet.vercel.app/deleteCategory/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully");
        alert("deleted successfully");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const category = e.target.name.value;
    // const price = e.target.price.value;
    const about = e.target.about.value;
    const picture = e.target.image;
    const formData = new FormData(e.target);
    const servicedata = Object.fromEntries(formData);
    console.log(servicedata);
    fetch(` https://paradox-pet.vercel.app/categoryUpdate/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(servicedata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  console.log(data);
  return (
    <div>
      {/* <h1>Category Update</h1> */}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Edit Category
          </h2>
          <form action="#" onSubmit={handleUpdate}>
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
                  defaultValue={data.category}
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
                  defaultValue={data.picture}
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
                  defaultValue={data.about}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Update Category
            </button>
            <Button color="failure" onClick={() => deleteHandle(data._id)}>
              Delete Category
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CategoryUpdate;
