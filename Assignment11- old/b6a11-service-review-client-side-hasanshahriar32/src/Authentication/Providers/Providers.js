import React, { useContext, useState } from "react";
import { Button } from "react-neon-ui";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import useToken from "../../hooks/useToken";

const Providers = () => {
  const [status, setStatus] = useState("");
  const [userUid, setuserUid] = useState("");
  //call setuserUid after sving data at dB
  const [token, loading] = useToken(userUid);
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  if (token && !loading) {
    navigate(from, { replace: true });
  }
  const { handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
  const handlegooglelogin = () => {
    handleGoogleSignIn()
      .then((res) => {
        console.log(res.user);
        setStatus("logged in");
        const name = res.user?.displayName;
        const email = res.user?.email;
        const uid = res.user?.uid;
        const image = res.user?.photoURL;
        const userAbout = "buyer";
        setuserUid(uid);
        saveUserToDb(name, image, email, uid, userAbout);

        const notify = () => toast.success(status);
        notify();

        // navigate(from, { replace: true });
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
        setStatus("logged in");
        const name = res.user?.displayName;
        const email = res.user?.email;
        const image = res.user?.photoURL;
        const uid = res.user?.uid;
        const userAbout = "buyer";
        setuserUid(uid);
        saveUserToDb(name, image, email, uid, userAbout);
        const notify = () => toast.success(status);
        notify();
        // navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setStatus(err);
        const notify = () => toast.error(status);
        notify();
      });
  };

  const saveUserToDb = (name, image, email, uid, userAbout) => {
    fetch(" https://books-review-mocha.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, image, email, uid, userAbout }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        setuserUid(uid);
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
