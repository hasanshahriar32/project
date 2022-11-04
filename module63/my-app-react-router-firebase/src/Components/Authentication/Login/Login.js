import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

import LoginProviders from "../LoginProviders/LoginProviders";

const Login = () => {
  const { user, emailPassLogin, resetMail } = useContext(AuthContext);
  const [status, setStatus] = useState("");
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  //if user is logged in, redirect to profile page
  if (user && user.uid) {
    <Navigate to="/" replace></Navigate>;
  }
  const handleLogin = (e) => {
    setStatus("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    emailPassLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setStatus("user logged in successfully");
        form.reset();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setStatus(errorMessage);
        // ..
      });
  };

  const resetPass = (e) => {
    setStatus("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
    resetMail(email)
      .then(() => {
        // Password reset email sent!
        // ..
        setStatus("reset mail sent successfully! check inbox");
        alert("reset mail sent successfully! check inbox");
      })
      .catch((error) => {
        console.log(error);
        setStatus(error);
        // ..
      });
  };
  return (
    <div>
      {user?.uid ? (
        <Navigate to="/" replace></Navigate>
      ) : (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Welcome to the paradox to learn new things. We are here to help
                you to learn new things.We are offering courses of web
                development, machine learning, data science, and many more.
              </p>
              <div className="flex lg:block justify-center">
                <LoginProviders></LoginProviders>
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Email <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="admin@paradox-bd.com"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Password <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="p******d"
                    className="input input-bordered"
                  />
                </div>
                <div>
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-6" className="text-info">
                    forget password?
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <label
                        htmlFor="my-modal-6"
                        className="btn  btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="font-bold text-center text-lg">
                        Provide your email address!
                      </h3>
                      <p className="text-center text-sm">
                        We will send a password reset link to your provided mail
                      </p>
                      <form onSubmit={resetPass} className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            required
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-primary">Reset!</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <small>
                  New here?{" "}
                  <Link to="/register" className="text-info">
                    register now
                  </Link>
                </small>
                <small className="text-error">{status}</small>
                <div className="w-60"></div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
