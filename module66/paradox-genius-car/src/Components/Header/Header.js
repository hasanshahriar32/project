import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Navbar,
} from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-neon-ui";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Context/UserContext";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
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
          <Flowbite className="">
            <DarkThemeToggle />
          </Flowbite>
        </Navbar.Brand>
        <div className="flex justify-between items-center md:order-2">
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
                <Link to="/profile">Dashboard</Link>
                <Link to="/settings">Settings</Link>
                <Link to={`/orders/${user.uid}`}>My Orders</Link>
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
          <Link
            className="hover:text-orange-600 dark:text-white"
            to="/home"
            active={true}
          >
            Home
          </Link>
          <Link className="hover:text-orange-600 dark:text-white" to="/about">
            About
          </Link>
          <Link
            className="hover:text-orange-600 dark:text-white"
            to="/services"
          >
            Services
          </Link>
          <Link className="hover:text-orange-600 dark:text-white" to="/pricing">
            Pricing
          </Link>
          <Link className="hover:text-orange-600 dark:text-white" to="/contact">
            Contact
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <hr className="dark:bg-gray-900" />
    </div>
  );
};

export default Header;
