import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const StoredUser = useLoaderData();

  const [users, setUsers] = useState(StoredUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    console.log(users);
    fetch(
      ` https://node-mongo-crud-server-amber.vercel.app/users/${users._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(users),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("User Updated Successfully");
          //   e.target.reset();
        }
      });
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
      <Link to="/">Add User</Link>

      <div>
        <h1>Update User: {StoredUser.name}</h1>
        <form onSubmit={handleSubmit} action="">
          <input
            type="text"
            onBlur={handleEventBlur}
            name="name"
            defaultValue={`${StoredUser.name}`}
            className="input"
          />
          <br />
          <input
            type="email"
            name="email"
            onBlur={handleEventBlur}
            defaultValue={`${StoredUser.email}`}
            className="input"
          />
          <br />
          <input
            type="text"
            name="phone"
            onBlur={handleEventBlur}
            defaultValue={`${StoredUser.phone}`}
            className="input"
          />
          <br />
          <input type="submit" className="btn btn-secondary" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
