import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    console.log(users);
  };

  const handleEventBlur = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newUsers = { ...users };
    newUsers[field] = value;
    setUsers(newUsers);
    console.log(value, field);
  };

  return (
    <div>
      <Link to="/users/add">Home</Link>

      <h2>Please add a new user</h2>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          onBlur={handleEventBlur}
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          name="email"
          onBlur={handleEventBlur}
          placeholder="Email"
        />
        <br />
        <input
          type="text"
          name="phone"
          onBlur={handleEventBlur}
          placeholder="Phone"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
