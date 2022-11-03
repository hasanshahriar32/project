import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import IndividualIntervalsExample from "./Carousel";
import MyVerticallyCenteredModal from "../LeftNav/Modal";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";

const RightNav = () => {
  const { googleLogin } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const googleSignin = () => {
    // console.log("Google Login");
    googleLogin()
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="">
      {user ? (
        <div style={{ display: "flex", justifyContent: "between" }}>
          <img
            style={{ width: "60px", height: "60px" }}
            src={user?.photoURL}
            alt="userPic"
          />
          <div>
            <h5>Welcome {user.displayName}</h5>
            <small>{user.email}</small>
            <small>{user?.phoneNumber}</small>
          </div>
        </div>
      ) : (
        <ButtonGroup vertical className="mb-2 ">
          <Button onClick={googleSignin} variant="outline-primary">
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button disabled variant="outline-secondary">
            <FaGithub></FaGithub> Login with GitHub
          </Button>
        </ButtonGroup>
      )}
      <br />
      <br />
      <br />
      <ListGroup variant="flush">
        <h4 className="text-lg font-bold">Find us on</h4>
        <ListGroup.Item>
          <FaFacebook></FaFacebook>{" "}
          <a target="_blank" href="https://facebook.com/paradoxtechbd">
            Facebook
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <FaGithub></FaGithub>{" "}
          <a target="_blank" href="https://github.com/paradox-bd">
            GitHub
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTelegram></FaTelegram>{" "}
          <a target="_blank" href="https://t.me/mrxx32">
            Telegram
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTwitter></FaTwitter>{" "}
          <a target="_blank" href="https://facebook.com/paradoxtechbd">
            Twitter
          </a>
        </ListGroup.Item>
      </ListGroup>
      <Link to="/latest">
        {/* <IndividualIntervalsExample></IndividualIntervalsExample> */}
      </Link>

      <div>
        <MyVerticallyCenteredModal />
      </div>
    </div>
  );
};

export default RightNav;
