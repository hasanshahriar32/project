import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Navbar,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-neon-ui";
import { useContext } from "react";
import { themeChange } from "theme-change";
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
  const [theme, setTheme] = useState("Color Theme");
  useEffect(() => {}, [setTheme]);
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  // console.log(user);
  return (
    <div className="">
      <Navbar className="App  overflow-y-auto" fluid={true} rounded={true}>
        <Navbar.Brand className="text-white">
          <a href="https://paradox-bd.me" target="_blank">
            <img
              href="https://paradox-bd.com/"
              src="https://avatars.githubusercontent.com/u/109535601?s=40&v=4"
              className="mr-3  h-6 sm:h-9 hidden sm:flex"
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
          <ul class="menu menu-horizontal   p-0">
            <label
              // data-act-class="ACTIVECLASS"
              // data-toggle-theme="dark,light"
              className="swap swap-rotate absolute left-24 visible lg:hidden bg-gray-800 p-5 top-2  z-50 cursor-pointer   btn-sm btn  "
              // data-choose-theme
            >
              <input type="checkbox" />

              <svg
                className="swap-on fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                //   data-toggle-theme="light"
                //   data-act-class="ACTIVECLASS"
                data-set-theme="light"
                data-act-class="ACTIVECLASS"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
              <svg
                className="swap-off fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                //   data-toggle-theme="dark"
                //   data-act-class="ACTIVECLASS"
                data-set-theme="dark"
                data-act-class="ACTIVECLASS"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </label>

            <li
              className="w-44 hidden lg:flex absolute right-40 top-2 z-20"
              data-choose-theme
              tabindex="0"
            >
              <NavLink className="w-full flex justify-between">
                <Link
                //   data-set-theme=""
                //   setTheme=" System Default"
                //   data-act-class="ACTIVECLASS"
                //   onClick={() => setTheme("System Default")}
                //   className="hover:  hover:text-base-100 "
                >
                  {theme}
                </Link>
                <svg
                  className="fill-current bg-base-300 lg:rounded-full  lg:w-6 lg:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul data-choose-theme className="w-full   p-2 bg-base-200">
                <li>
                  <Link
                    data-set-theme=""
                    onClick={() => setTheme("System Default")}
                    data-act-class="ACTIVECLASS"
                  >
                    System Default
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="dark"
                    onClick={() => setTheme("Dark")}
                    //onClick swapTheme class swap-off
                    data-act-class="ACTIVECLASS"
                  >
                    Dark
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="light"
                    onClick={() => setTheme("Light")}
                    data-act-class="ACTIVECLASS"
                  >
                    Light
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="retro"
                    onClick={() => setTheme("Retro")}
                    data-act-class="ACTIVECLASS"
                  >
                    Retro
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="cyberpunk"
                    onClick={() => setTheme("Cyberpunk")}
                    data-act-class="ACTIVECLASS"
                  >
                    Cyberpunk
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

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
        <Navbar.Collapse className="text-white ">
          <Link to="/home" active={true}>
            Home
          </Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/navbars">Services</Link>
          <Link to="/navbars">Pricing</Link>
          <Link to="/navbars">Contact</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
