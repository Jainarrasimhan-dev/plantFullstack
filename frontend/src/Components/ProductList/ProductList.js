import React from "react";
import Display from "./DisplaySection/Display";
import Filter from "./Filters/Filter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductList = () => {
  return (
    <div>
      <Container>
        <Row className="my-5">
        <Col md={4} className="">
          <Filter  />
        </Col>
        <Col md={8} className="">
          <Display />
        </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default ProductList;
