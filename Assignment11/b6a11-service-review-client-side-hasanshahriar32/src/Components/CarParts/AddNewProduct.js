import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Authentication/Context/UserContext";
import CategoryUpdate from "../Settings/CategoryUpdate/CategoryUpdate";

const AddNewProduct = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  //   console.log(selectedCategoryId);
  useEffect(() => {
    fetch(" https://paradox-pet.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    fetch(" https://paradox-pet.vercel.app/addService", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Product Added Successfully");
        }
        toast.success("Product Added Successfully");
        console.log(data);
        setServices([...services, data]);
        e.target.reset();
      });
  };

  const handleChange = (e) => {
    console.log(e.target.value);

    const electedCategory = category.find(
      (category) => category?._id === e.target.value
    );
    // console.log(selectedCategory);

    setSelectedCategoryId(electedCategory?.category);
    // console.log(selected)
    setSelectedCategory(electedCategory?._id);
  };

  return (
    <div>
      {/* add your own data to the database and then you can see the data in the browser. */}
      <ToastContainer></ToastContainer>
      <section class="bg-white dark:bg-gray-900" data-aos="fade-up-right">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h1 className="text-3xl dark:text-white my-6 text-center md:text-5xl font-semibold ">
            Create Your Custom Service
          </h1>
          <h2 class="mb-4 text-xl  font-bold text-gray-900 dark:text-white">
            Add a new Service
          </h2>
          <form onSubmit={handleSubmit} action="#">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Service Name
                </label>
                <input
                  type="text"
                  name="carName"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Service name"
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="image"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Service Image
                </label>
                <input
                  type="url"
                  defaultValue="https://placeimg.com/480/480/nature/sepia"
                  name="picture"
                  id="image"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Service Image Link"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </label>
                <input
                  defaultValue={user?.displayName}
                  type="text"
                  name="company"
                  id="brand"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Service brand"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  defaultValue={0}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="quality"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Excellent / Good / Fair
                </label>
                <input
                  // defaultValue={user?.displayName}
                  type="text"
                  name="quality"
                  id="quality"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Service quality"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="purchaseYear"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Purchase Year
                </label>
                <input
                  type="number"
                  name="purchaseYear"
                  id="purchaseYear"
                  // defaultValue={0}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="2018"
                  required
                />
              </div>

              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  onChange={handleChange}
                  id="category"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">{selectedCategoryId}</option>
                  {category.map((singleCategory) => (
                    <option value={singleCategory._id}>
                      {singleCategory.category}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="hidden"
                  name="categoryId"
                  value={selectedCategory}
                />
                <input
                  type="text"
                  className="hidden"
                  name="category"
                  value={selectedCategoryId}
                />
                <input
                  type="text"
                  className="hidden"
                  name="sellerId"
                  value={user?.uid}
                />
              </div>
              <div>
                <label
                  for="item-weight"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Service Reg. Date
                </label>
                <input
                  disabled
                  //   set current date as default value
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  type="date"
                  name="registered"
                  id=""
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
                  name="about"
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Service
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddNewProduct;
