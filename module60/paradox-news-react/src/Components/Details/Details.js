import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import LeftNav from "../SideNav/LeftNav/LeftNav";
import SingleCategory from "./SingleCategory";

const Details = () => {
  const news = useLoaderData();
  //   console.log(news);
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col style={{ position: "sticky" }} xs={12} md={4}>
            <LeftNav></LeftNav>
          </Col>
          <Col xs={12} md={8}>
            <h5>News Items: {news.length}</h5>
            {news.map((item) => (
              <SingleCategory key={item.id} item={item}></SingleCategory>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
