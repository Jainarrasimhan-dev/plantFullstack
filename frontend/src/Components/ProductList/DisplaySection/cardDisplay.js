import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const CardDisplay = () => {
  return (
    <div>
      <Row>
        <Col>
          {" "}
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Smallpot-164.jpg?v=1704867612&width=375"
            />
            <Card.Body>
              <Card.Title>Peace Lily Plant</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/DSC_82942.jpg?v=1696240355&width=375"
            />
            <Card.Body>
              <Card.Title>Bamboo Plant</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card>
            <Card.Img
              variant="top"
              src="https://www.ugaoo.com/cdn/shop/products/LagosPlanter-Grey_f26c8dee-c8ce-4e1a-bec7-86006f560c98.jpg?v=1680418283"
            />
            <Card.Body>
              <Card.Title>Peace Lily Plant</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardDisplay;
