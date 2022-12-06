import axios from "axios";
import { Button } from "flowbite-react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client

const AllUser = () => {
  const [userCat, setUserCat] = React.useState("all");
  // const [users, setUsers] = React.useState([]);
  // React.useEffect(() => {
  //   axios
  //     .get(
  //       " https://books-review-mocha.vercel.app/users"
  //     )
  //     .then((res) => {
  //       setUsers(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [users]);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios
        .get("https://books-review-mocha.vercel.app/users")
        .then((res) => res.data),
  });

  const handleRemoveUser = (id) => {
    fetch(`https://books-review-mocha.vercel.app/admin/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully");
        toast.success(result?.message || `deleted: ${result.acknowledged}`);
        console.log(result);
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  };

  // console.log(users);
  const handleMakeAdmin = (id) => {
    console.log(id);

    fetch(`https://books-review-mocha.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("updated successfully");
        toast.success(result?.message || `updated: ${result.acknowledged}`);
        console.log(result);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex justify-center gap-2 m-2">
        {/* <Button onClick={() => setUserCat("all")}>All User</Button> */}
        <Button onClick={() => setUserCat("buyer")}>All Buyer</Button>
        <Button onClick={() => setUserCat("seller")}>All Seller</Button>
      </div>
      <ToastContainer></ToastContainer>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Email
              </th>
              <th scope="col" class="py-3 px-6">
                User Type
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>
              userCat === "seller" ? (
                user.userAbout === "seller" ? (
                  <tr
                    data-aos-duration="3000"
                    data-aos="fade-left"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td class="p-4 w-32">
                      <img
                        src={user?.image}
                        className="hidden md:flex w-12 h-12 rounded-xl"
                        alt={user?.name}
                      />
                    </td>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {user?.name}
                    </td>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {user?.email}
                    </td>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {user?.role ? user.role : user?.userAbout}
                    </td>
                    <td
                      class="py-4 px-6 flex items-center gap-1
                "
                    >
                      {user?.role !== "admin" ? (
                        <Button onClick={() => handleMakeAdmin(user?.uid)}>
                          Make Admin
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleMakeAdmin(user?.uid)}
                          type="failure"
                          className="bg-red-400"
                        >
                          Remove Admin
                        </Button>
                      )}

                      <a
                        onClick={() => handleRemoveUser(user?.uid)}
                        href="#"
                        class="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove User
                      </a>
                    </td>
                  </tr>
                ) : null
              ) : (
                user.userAbout === "buyer" && (
                  <tr
                    data-aos-duration="3000"
                    data-aos="fade-left"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td class="p-4 w-32">
                      <img
                        src={user?.image}
                        className="hidden md:flex w-12 h-12 rounded-xl"
                        alt={user?.name}
                      />
                    </td>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {user?.name}
                    </td>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {user?.email}
                    </td>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {user?.role ? user.role : user?.userAbout}
                    </td>
                    <td
                      class="py-4 px-6 flex items-center gap-1
                "
                    >
                      {user?.role !== "admin" ? (
                        <Button onClick={() => handleMakeAdmin(user?.uid)}>
                          Make Admin
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleMakeAdmin(user?.uid)}
                          type="failure"
                          className="bg-red-400"
                        >
                          Remove Admin
                        </Button>
                      )}

                      <a
                        onClick={() => handleRemoveUser(user?.uid)}
                        href="#"
                        class="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove User
                      </a>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
