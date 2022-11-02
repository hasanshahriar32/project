import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LeftNav from "../SideNav/LeftNav/LeftNav";
import RightNav from "../SideNav/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col className="d-none d-lg-block" xs={3} md={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col xs={12} md={7} lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col xs={12} md={5} lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
