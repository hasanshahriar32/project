import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Navbar,
} from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-neon-ui";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Context/UserContext";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import useAdmin from "../../hooks/useAdmin";
// ..
AOS.init();

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [admin] = useAdmin(user?.uid);
  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
        //remove jwt from localstorage
        localStorage.removeItem("token");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(user);
  return (
    <div className="dark:bg-gray-900" data-aos="fade-down">
      <Navbar
        className="bg-slate-200 dark:bg-gray-900 App"
        fluid={true}
        rounded={true}
      >
        <Link to="/about">
          <Navbar.Brand>
            <img
              href="https://paradox-bd.com/"
              src="https://avatars.githubusercontent.com/u/109535601?s=40&v=4"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center hidden sm:flex whitespace-nowrap text-xl font-semibold dark:text-white">
              PARADOX SERVICES
            </span>
            <span className="self-center  sm:hidden flex whitespace-nowrap text-xl  dark:text-white">
              SERVICES
            </span>
          </Navbar.Brand>
        </Link>
        <div className="flex justify-between items-center md:order-2">
          <Flowbite className="">
            <DarkThemeToggle />
          </Flowbite>
          {user?.uid ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={user?.photoURL}
                  title={user?.displayName}
                  rounded={true}
                />
              }
            >
              <div className="flex flex-col justify-start gap-5">
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>

                <Link to={`/orders/${user.uid}`}>My Orders</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/contact">Contact</Link>
                <Dropdown.Divider />
                <Link>
                  <button onClick={handleLogout}>Sign out</button>
                </Link>
              </div>
            </Dropdown>
          ) : (
            <Link to="/login">
              <Button variant="secondary" size="medium">
                Get Started
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            className="hover:text-orange-600 dark:text-white"
            to="/home"
            active={true}
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-orange-600 dark:text-white"
            to="/category"
          >
            Categories
          </NavLink>
          <NavLink
            className="hover:text-orange-600 dark:text-white"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink className="hover:text-orange-600 dark:text-white" to="/blog">
            Blog
          </NavLink>
          <NavLink
            className="hover:text-orange-600 dark:text-white"
            to="/dashboard"
          >
            Dashboard
          </NavLink>

          {admin && (
            <NavLink
              className="hover:text-orange-600 dark:text-white"
              to="/admin"
            >
              Administrator
            </NavLink>
          )}
        </Navbar.Collapse>
      </Navbar>
      <hr className="dark:bg-gray-900" />
    </div>
  );
};

export default Header;
