import React, { useContext, useState } from "react";
import { Button } from "react-neon-ui";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Providers = () => {
  const [status, setStatus] = useState("");
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
  const handlegooglelogin = () => {
    handleGoogleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
        setStatus("logged in");
        const notify = () => toast.success(status);
        notify();
      })
      .catch((err) => {
        console.log(err);
        setStatus(err);
        const notify = () => toast.error(status);
        notify();
      });
  };
  const handlegithublogin = () => {
    handleGithubSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
        setStatus("logged in");
        const notify = () => toast.success(status);
        notify();
      })
      .catch((err) => {
        console.log(err);
        setStatus(err);
        const notify = () => toast.error(status);
        notify();
        alert(err);
      });
  };
  return (
    <div className="gap-1 flex justify-evenly items-center flex-col">
      <Button
        className=" App flex justify-evenly items-center  gap-1  "
        style={{ width: "250px" }}
        onClick={handlegooglelogin}
        variant="primary"
      >
        <FaGoogle></FaGoogle>
        <p>Login With Google</p>
      </Button>
      <Button
        className=" App flex justify-evenly items-center gap-1  "
        style={{ width: "250px" }}
        onClick={handlegithublogin}
        variant="secondary"
      >
        <FaGithub></FaGithub>
        Login with github
      </Button>
      <ToastContainer />
    </div>
  );
};

export default Providers;
