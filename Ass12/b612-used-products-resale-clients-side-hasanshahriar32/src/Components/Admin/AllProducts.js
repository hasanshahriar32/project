import React from "react";
import { toast, ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
const AllProducts = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch(
      " https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);
  const handleDelete = (product) => {
    const agree = window.confirm(`Are you sure to delete ${product.carName}?`);
    if (agree) {
      const id = product._id;
      fetch(
        ` https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/delete/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((result) => {
          console.log("deleted successfully");
          //redirect to home
          //   window.location.href = "/services";
          document.getElementById("deleteButton").classList.add("hidden");
          //   return <Navigate to="/services" />;
          toast.success("Deleted successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr data-aos-duration="3000" data-aos="fade-left">
              <th scope="col" class="py-3 px-6">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="py-3 px-6">
                Product
              </th>
              <th scope="col" class="py-3 px-6">
                Seller
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                data-aos-duration="3000"
                data-aos="fade-left"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="p-4 w-32">
                  <img
                    className="rounded-xl w-24 h-24"
                    src={product.picture}
                    alt={product.carName}
                  />
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {product.carName}
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {product.company}
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {product.price}
                </td>
                <td class="py-4 px-6">
                  <a
                    onClick={() => handleDelete(product)}
                    id="deleteButton"
                    href="#"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
