import React, { useEffect } from "react";
import { useState } from "react";
// import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import { themeChange } from "theme-change";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useState("Color Theme");
  useEffect(() => {}, [setTheme]);

  //   <Helmet>
  //     <html data-theme="light"></html>
  //     <script
  //       src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"
  //       integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
  //       crossorigin="anonymous"
  //       async
  //     ></script>
  //   </Helmet>;
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const [users, setUsers] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    console.log(users);

    fetch(" https://node-mongo-crud-server-amber.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("User Added Successfully");
          e.target.reset();
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
      {/* <!-- theme changer menu --> */}
      <select class="select select-bordered tabindex='0" data-choose-theme>
        <option value="">System Default</option>
        <option value="dark">Dark</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="retro">Retro</option>
        <option value="cupcake">Cupcake</option>
        <option value="light">Light</option>
        <option value="fantasy">Fantasy</option>
        <option value="wireframe">Wireframe</option>
        <option value="coffee">Coffee</option>
        <option value="valentine">Valentine</option>
        <option value="aqua">Aqua</option>
        <option value="forest">Foerest</option>
        <option value="halloween">Halloween</option>
        <option value="lofi">Lofi</option>
        <option value="lemonade">Lemonade</option>
      </select>
      <ul class="menu menu-horizontal p-0">
        <label
          // data-act-class="ACTIVECLASS"
          // data-toggle-theme="dark,light"
          className="swap swap-rotate"
          // data-choose-theme
        >
          <input type="checkbox" />

          <svg
            className="swap-on fill-current w-10 h-10"
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
            className="swap-off fill-current w-10 h-10"
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

        <li className="w-44 " data-choose-theme tabindex="0">
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
          <ul data-choose-theme className="w-full  p-2 bg-base-200">
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
            <li>
              <Link
                data-set-theme="luxury"
                onClick={() => setTheme("Luxury")}
                data-act-class="ACTIVECLASS"
              >
                Luxury
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      {/* <button
        class="theme"
        // data-toggle-theme
        // data-toggle-theme="dark,light"
        data-act-class="ACTIVECLASS"
      ></button> */}

      <h2>Please add a new user</h2>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          onBlur={handleEventBlur}
          name="name"
          defaultValue="Name"
          className="input"
        />
        <br />
        <input
          type="email"
          name="email"
          onBlur={handleEventBlur}
          defaultValue="Email"
          className="input"
        />
        <br />
        <input
          type="text"
          name="phone"
          onBlur={handleEventBlur}
          defaultValue="Phone"
          className="input"
        />
        <br />
        <input type="submit" className="btn " value="Submit" />
      </form>
    </div>
  );
};

export default Home;
