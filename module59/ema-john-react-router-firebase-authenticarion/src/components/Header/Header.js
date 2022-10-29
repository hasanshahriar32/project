import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../Context/UserContext";

import "./Header.css";
// const { user } = useContext(AuthContext);

const Header = () => {
  const { user } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);
  const logout = () => {
    logOut();
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">Profile</Link>
        {user?.email ? (
          <Link to="" onClick={logout}>
            Logout
          </Link>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
