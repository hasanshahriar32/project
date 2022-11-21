import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header></Header>
      <Outlet className="h-[100vh]"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
