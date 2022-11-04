import React from "react";
import { Link } from "react-router-dom";

const RightGrid = ({ course }) => {
  return (
    <div>
      <div className="card  w-60 m-3 glass">
        <figure>
          <img className="h-60 w-80 bg-base-100" src={course.icon} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.name}</h2>
          <small>Duration: {course.duration}</small>
          <small>Price: {course.price}</small>
          <div className="card-actions justify-end">
            <Link to={`/printCourse/${course.id}`}>
              <button className="btn btn-primary"> Learn now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightGrid;
