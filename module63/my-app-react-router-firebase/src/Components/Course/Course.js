import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const data = useLoaderData();
  //   console.log(data);

  return (
    <div>
      <div className="m-3 flex justify-center">
        <img className="h-[200px] md:h-80 " src={data.img} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <img className="h-[60px]  " src={data.icon} alt="" />
        <h1 className="text-center text-4xl m-2">{data.name}</h1>
      </div>
      <p className="text-center m-5">{data.details}</p>
      <div className="flex justify-center">
        <div>
          <p className="m-3">{data.duration}</p>
          <p className="m-3"> Price: {data.price}</p>
          <Link to={`/checkout/${data.id}`}>
            <button className="btn btn-warning m-5">Purchase</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
