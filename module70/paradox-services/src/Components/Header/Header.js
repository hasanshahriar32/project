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
    <div>
      <Navbar className="App overflow-y-auto" fluid={true} rounded={true}>
        <Navbar.Brand>
          <a href="https://paradox-bd.me" target="_blank">
            <img
              href="https://paradox-bd.com/"
              src="https://avatars.githubusercontent.com/u/109535601?s=40&v=4"
              className="mr-3 h-6 sm:h-9 hidden sm:flex"
              alt="Flowbite Logo"
            />
          </a>
          <span className="self-center whitespace-nowrap hidden lg:flex text-xl font-semibold dark:text-white">
            PARADOX SERVICES
          </span>
          <span className="self-center whitespace-nowrap text-xl md:visible lg:hidden font-semibold dark:text-white">
            SERVICES
          </span>
          <span className="self-center whitespace-nowrap text-xl md:visible md:hidden font-semibold dark:text-white"></span>
          {/* <Flowbite>
            <DarkThemeToggle></DarkThemeToggle>
          </Flowbite> */}
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
                <Link>Settings</Link>
                <Link>Earnings</Link>
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
          <Link to="/home" active={true}>
            Home
          </Link>
          <Link to="/navbars">About</Link>
          <Link to="/navbars">Services</Link>
          <Link to="/navbars">Pricing</Link>
          <Link to="/navbars">Contact</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
