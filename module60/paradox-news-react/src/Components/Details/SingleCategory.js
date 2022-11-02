import React from "react";
import { Link } from "react-router-dom";

const SingleCategory = ({ item }) => {
  //   console.log(item);
  return (
    <div className="my-5">
      <h2>{item.title}</h2>
      <img
        className=""
        style={{ maxWidth: "30rem" }}
        src={item.image_url}
        alt=""
      />
      <p style={{ height: "212px", overflow: "hidden" }}>{item.details}</p>
      <Link to={`/detail/${item?._id}`}>
        <button className="btn btn-outline-success">Show Details</button>
      </Link>
    </div>
  );
};

export default SingleCategory;
