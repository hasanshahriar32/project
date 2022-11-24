import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/Context/UserContext";
import Providers from "../../../Authentication/Providers/Providers";
import LoginLottie from "./LoginLottie";

const Login = () => {
  const [status, setStatus] = useState("");

  const { signin, user, sendPassResetMail } = useContext(AuthContext);
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("Loading...");
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signin(email, password)
      .then((res) => {
        // console.log(res.user);

        const user = res.user;
        const currentUser = {
          uid: user.uid,
          email: user.email,
        };
        //get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("jwt", data.token);
            navigate(from, { replace: true });
          });

        setStatus("Login Successful");
        const notify = () => toast.success(status);
        notify();
      })
      .catch((err) => {
        console.log(err);
        setStatus(err.message);
        const notify = () => toast.error(status);
        notify();
      });
  };
  const saveMail = (e) => {
    const mail = e.target.value;
    localStorage.setItem("mail", mail);
    // console.log(mail);
  };
  const handleresetpass = () => {
    const email = localStorage.getItem("mail");
    if (email == "") {
      setStatus("Please Enter Your Email at Your Email Field");
      const notify = () => toast.error(status);
      notify();
      return;
    }
    console.log(email);
    sendPassResetMail(email)
      .then(() => {
        setStatus("Password reset mail sent");
        const notify = () => toast.error(status);
        notify();
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setStatus(errorMessage);
        const notify = () => toast.error(status);
        notify();
        // ..
      });
  };
  if (user?.uid) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="flex flex-wrap flex-row-reverse justify-center items-center m-5">
      <div
        className="hidden lg:flex"
        style={{ width: "50vw", height: "600px" }}
      >
        <LoginLottie></LoginLottie>
      </div>

      <div className="shadow-lg border-dotted dark:bg-cyan-300 bg-cyan-100 w-80 m-5 p-5 rounded ">
        <h1 className="text-center text-3xl m-3 mb-6">Login Now!</h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                className="dark:text-black"
                value="Your email"
              />
            </div>
            <input
              className="dark:text-black"
              id="email1"
              type="email"
              name="email"
              placeholder="name@site.com"
              required={true}
              onBlur={saveMail}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password1"
                className="dark:text-black"
                value="Your password"
              />
            </div>
            <input
              className="dark:text-black"
              id="password1"
              type="password"
              name="password"
              placeholder="P******d"
              required={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label className="dark:text-black" htmlFor="remember">
              Remember me
            </Label>
          </div>
          <Button type="submit">Login</Button>

          <br />
          <small>
            New here? <Link to="/register">register now</Link>
          </small>
          <br />
          <small className="text-red-500">{status}</small>
        </form>
        <div className="App">
          <small>
            forget pass?{" "}
            <button onClick={handleresetpass} className="text-primary">
              reset here
            </button>
          </small>
        </div>
        <Providers></Providers>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
