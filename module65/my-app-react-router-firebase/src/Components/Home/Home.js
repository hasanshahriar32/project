import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
  };

  return (
    <div>
      <Link to="/users/add">Home</Link>

      <h2>Please add a new user</h2>
      <form onSubmit={handleSubmit} action="">
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="text" name="phone" placeholder="Phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
