import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategory from "../Details/SingleCategory";
import Header from "../Header/Header";

const Latest = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <div className=" justify-content-center align-items-center direction-flex-cols">
        {news.map((item) => (
          <SingleCategory key={item.id} item={item}></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Latest;
