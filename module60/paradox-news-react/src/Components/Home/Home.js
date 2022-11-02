import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategory from "../Details/SingleCategory";

const Home = () => {
  const news = useLoaderData();
  //   console.log(news);
  return (
    <div>
      <h1>Home</h1>
      <h5>News Items: {news.length}</h5>
      {news.map((item) => (
        <SingleCategory key={item.id} item={item}></SingleCategory>
      ))}
    </div>
  );
};

export default Home;
