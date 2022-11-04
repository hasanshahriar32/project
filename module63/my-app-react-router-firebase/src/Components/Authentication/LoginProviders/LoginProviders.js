import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const LoginProviders = () => {
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className=" m-3 rounded items-center justify-center flex md:justify-between w-80 md:w-[550px] flex-wrap block">
      <button
        onClick={handleGoogleSignIn}
        className="my-2 btn  btn-secondary flex justify-evenly w-60"
      >
        <FaGoogle></FaGoogle> <p>Continue with Google</p>
      </button>
      <button
        onClick={handleGithubSignIn}
        className="my-2 btn  btn-info flex justify-evenly w-60"
      >
        <FaGithub></FaGithub> <p>Continue with GitHub</p>
      </button>
    </div>
  );
};

export default LoginProviders;
