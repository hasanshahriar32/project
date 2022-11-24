import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/Context/UserContext";
import Providers from "../../../Authentication/Providers/Providers";
import RegisterLottie from "./RegisterLottie";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.init";

const Register = () => {
  const auth = getAuth(app);
  const { createUser, user } = useContext(AuthContext);
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState("");
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const agreeHandle = () => {
    setAgree(!agree);
  };
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    setStatus("Loading...");
    const email = form.email.value;
    const password = form.password.value;
    const comfirm = form.confirm.value;
    const name = form.name.value;
    const image = form.image.value;

    if (comfirm !== password) {
      setStatus("Password does not match");
      const notify = () => toast.error(status);
      notify();
      return;
    }
    // console.log(email, password);
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        setStatus("Register Successful");
        const notify = () => toast.success(status);
        notify();
        handleUpdate(name, image);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setStatus(err.message);
        const notify = () => toast.error(status);
        notify();
      });
  };
  const handleUpdate = (name, image) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        console.log("update profile success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (user?.uid) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div className="flex  flex-wrap  justify-center items-center m-5">
      <div
        className="hidden lg:flex"
        style={{ width: "50vw", height: "600px" }}
      >
        <RegisterLottie></RegisterLottie>
      </div>
      <div className="shadow-lg flex gap-2  justify-center items-center flex-col border-dotted bg-cyan-100 dark:bg-cyan-300 w-80 m-5 p-5 rounded">
        <h1 className="text-center text-3xl m-3 mb-6">Register!</h1>
        <form
          onSubmit={handleSignUp}
          className=" gap-3 flex justify-center items-center flex-col"
        >
          <div>
            <div className="mb-2 ">
              <Label
                htmlFor="name"
                className="dark:text-black"
                value="Your Name"
              />
            </div>
            <input
              id=""
              type="text"
              name="name"
              placeholder="Donald Trump"
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 ">
              <Label
                htmlFor="image"
                className="dark:text-black"
                value="Your Image Link"
              />
            </div>
            <input
              id="image"
              type="text"
              name="image"
              placeholder="https://placeimg.com/192/192/people"
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 ">
              <Label
                htmlFor="email2"
                className="dark:text-black"
                value="Your email"
              />
            </div>
            <input
              id="email2"
              type="email"
              name="email"
              placeholder="name@site.com"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password2"
                className="dark:text-black"
                value="Your password"
              />
            </div>
            <input
              id="password2"
              type="password"
              placeholder="********"
              name="password"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="repeat-password"
                className="dark:text-black"
                value="Repeat password"
              />
            </div>
            <input
              id="repeat-password"
              type="password"
              name="confirm"
              placeholder="********"
              required={true}
              shadow={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" onClick={agreeHandle} />
            <Label htmlFor="agree">
              <span className="dark:text-black">I agree with the </span>
              <Link
                to="/terms"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </Link>
            </Label>
          </div>
          {
            //if agree is true then , enable button
            agree == true ? (
              <Button type="submit">Register new account</Button>
            ) : (
              <Button disabled type="submit">
                Register new account
              </Button>
            )
          }
          <small>
            Already a member? <Link to="/login">login</Link>
          </small>

          <br />
          <small className="text-red-500">{status}</small>
        </form>
        <Providers></Providers>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
