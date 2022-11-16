import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet className="h-[100vh]"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
