import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import { Navigate } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const logoutUser = () => {
    logOut();
    <Navigate to="/home"></Navigate>;
  };
  useEffect(() => {
    fetch("https://paradox-news-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Paradox News</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link className="text-decoration-none" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none" to="/latest">
                  Latest
                </Link>
              </Nav.Link>
              <NavDropdown title="News Types" id="navbarScrollingDropdown">
                {categories.map((category) => (
                  <NavDropdown.Item key={category.id}>
                    <Link
                      className="text-decoration-none action:text-white"
                      to={`/category/${category.id}`}
                    >
                      {category.name}
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Blog
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {user ? (
              <Link
                onClick={logoutUser}
                className="mx-2 text-decoration-none my-1 text-info hover-text-primary"
                to="/login"
              >
                Logout
              </Link>
            ) : (
              <Link
                className="mx-2 text-decoration-none my-1 text-info hover-text-primary"
                to="/login"
              >
                Login
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;
