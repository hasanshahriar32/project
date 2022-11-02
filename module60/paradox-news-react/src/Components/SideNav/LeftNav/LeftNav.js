import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "./Modal";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://paradox-news-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3>All Category: {categories.length}</h3>
      <br />
      {categories.map((category) => (
        <p key={category.id}>
          <Link
            className="text-decoration-none hover:text-success"
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
