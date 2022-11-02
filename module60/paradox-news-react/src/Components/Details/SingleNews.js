import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleNews = () => {
  const news = useLoaderData();
  //   console.log(news);
  return (
    <div>
      <h2>{news.title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "evenly",
          alignItems: "evenly",
        }}
      >
        {" "}
        <img style={{ width: "70px" }} src={news.author.img} alt="" />
        <div>
          <p>{news.author.name}</p>
          <small>{news.author.published_date}</small>
        </div>
        <br />
      </div>
      <img
        className=""
        style={{ maxWidth: "30rem" }}
        src={news.image_url}
        alt=""
      />
      <p style={{}}>{news.details}</p>
    </div>
  );
};

export default SingleNews;
