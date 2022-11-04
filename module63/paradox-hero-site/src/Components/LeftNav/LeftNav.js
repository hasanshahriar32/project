import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const LeftNav = ({ course }) => {
  //   console.log(data);

  return (
    <tr className="">
      <td className="">
        <input type="checkbox" className=" checkbox" />
      </td>
      <Link to={`/course/${course.id}`}>
        <th>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={course.icon} alt="course image" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="font-bold">{course.name}</div>
              <div className="text-sm opacity-50">Price: {course.price}</div>
            </div>
          </div>
        </th>
      </Link>
    </tr>
  );
};

export default LeftNav;
