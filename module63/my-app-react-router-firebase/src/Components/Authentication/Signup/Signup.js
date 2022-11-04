import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import app from "../Firebase/firebase.config";

import LoginProviders from "../LoginProviders/LoginProviders";
const auth = getAuth(app);

const Signup = () => {
  const { user, emailPassRegister, updateUserData } = useContext(AuthContext);
  const [status, setStatus] = useState("");
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  //if user is logged in, redirect to profile page
  if (user && user.uid) {
    <Navigate to="/" replace></Navigate>;
  }
  const handleSubmit = (e) => {
    setStatus("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    let image = form.image.value;
    if (image == "") {
      image = "https://placeimg.com/192/192/people";
    }
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email, password);
    if (password !== confirm) {
      setStatus("password mismatch");
      return;
    }
    emailPassRegister(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setStatus("user logged in successfully");
        form.reset();
        navigate(from, { replace: true });
        updateUser(name, image);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setStatus(errorMessage);
        // ..
      });
  };
  const updateUser = (name, image) => {
    updateUserData(name, image)
      .then(() => {
        console.log("updated successfully");
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.error(error);
        setStatus(error.message);
      });
  };

  return (
    <div>
      {user?.uid ? (
        <Navigate to="/" replace></Navigate>
      ) : (
        <div
          className="hero min-h-screen bg-base-200"
          style={{
            backgroundImage: `url("https://placeimg.com/1000/800/tech")`,
          }}
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center text-base-content lg:text-left">
              <h1 className="text-5xl text-accent-content font-bold">
                Register now!
              </h1>
              <p className="py-6">
                Welcome to the paradox to learn new things. We are here to help
                you to learn new things.We are offering courses of web
                development, machine learning, data science, and many more.
              </p>
              <div className="flex lg:hidden justify-center">
                <LoginProviders></LoginProviders>
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Donald Trump"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Image Link</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="https://placeimg.com/192/192/people"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Confirm Password <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    required
                    type="password"
                    name="confirm"
                    placeholder="p******d"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <small>
                  Already have an account?{" "}
                  <Link to="/login" className="text-info">
                    login here
                  </Link>
                </small>
                <small className="text-red-700">{status}</small>
                <div className="w-60"></div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
