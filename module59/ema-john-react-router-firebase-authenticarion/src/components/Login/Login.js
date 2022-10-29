import React, { useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import "./Login.css";
const Login = () => {
  const [error, setError] = useState("");
  const { signin } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setError("user logged in successfully");
        form.reset();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };
  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
          required
        />
        <br />
        <button type="submit">Login</button>
        <br />
        <small>
          New here? <Link to="/signup">register</Link>{" "}
        </small>
        <br />
        <small>{error}</small>
      </form>
    </div>
  );
};

export default Login;
