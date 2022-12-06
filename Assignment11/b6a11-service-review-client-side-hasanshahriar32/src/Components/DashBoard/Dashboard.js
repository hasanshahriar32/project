import { Button, Tabs } from "flowbite-react";
import React from "react";
import AddNewProduct from "../CarParts/AddNewProduct";
import Orders from "../Orders/Orders";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Context/UserContext";
import SellerProduct from "./SellerProduct/SellerProduct";

const Dashboard = () => {
  //   const [loading, setLoading] = React.useState(true);
  const { user } = useContext(AuthContext);
  //   setLoading(true);
  const { data: userData = [], refetch } = useQuery({
    queryKey: ["userData"],
    queryFn: () =>
      axios
        .get(`https://paradox-pet.vercel.app/user/${user?.uid}`)
        .then((res) => res.data),
  });
  //   console.log(userData);

  return (
    <div className="">
      <Tabs.Group className="" aria-label="Full   width tabs" style="underline">
        <Tabs.Item title="My Orders">
          <Orders></Orders>
        </Tabs.Item>
        <Tabs.Item title="Invoice">Invoice </Tabs.Item>
        <Tabs.Item title="My Product">
          {userData?.role === "admin" || userData?.userAbout === "seller" ? (
            <SellerProduct></SellerProduct>
          ) : (
            <div>Not a seller</div>
          )}
        </Tabs.Item>
        <Tabs.Item title="Add Product">
          {" "}
          {userData?.role === "admin" || userData?.userAbout === "seller" ? (
            <AddNewProduct></AddNewProduct>
          ) : (
            <div>Not a seller</div>
          )}{" "}
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default Dashboard;
