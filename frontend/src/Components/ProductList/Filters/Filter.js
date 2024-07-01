import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './filter.css'
const Filter = () => {
  return (
    <div style={{backgroundColor:'#fafafa'}}>
        <Row className='m-3'>
        <Col className='textFilter py-3'>FILTER</Col>
        <Col className='textFilter py-3 text-decoration-underline'>CLEAR ALL</Col>
        </Row>
       

          <Accordion defaultActiveKey="0"  style={{backgroundColor:'#fafafa !important'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Type of Plants</Accordion.Header>
        <Accordion.Body>
        <div>
            <Row>
                <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>Air Plant (15) </Col>
                

            </Row>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
        <div>
            <Row>
                <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>$15 </Col>
    <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>$50</Col> <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>$100 </Col>
                

            </Row>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Light</Accordion.Header>
        <Accordion.Body>
        <div>
            <Row>
                <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>Air Plant (15) </Col>
                

            </Row>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Ideal Plant Location</Accordion.Header>
        <Accordion.Body>
        <div>
            <Row>
                <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>Air Plant (15) </Col>
                

            </Row>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Indoor/Outdoor</Accordion.Header>
        <Accordion.Body>
        <div>
            <Row>
                <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>Air Plant (15) </Col>
                

            </Row>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Maintenance</Accordion.Header>
        <Accordion.Body>
        <div>
            <Row>
                <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>Air Plant (15) </Col>
                

            </Row>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Pot Size</Accordion.Header>
        <Accordion.Body>
        <Accordion.Item eventKey="7">
        <Accordion.Header>Water Schedule</Accordion.Header>
        <Accordion.Body>
        <div>
            <Row>
                <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>Air Plant (15) </Col>
                

            </Row>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Color</Accordion.Header>
        <Accordion.Body>
        <div>
            <Row>
                <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>Air Plant (15) </Col>
                

            </Row>
        </div>
        </Accordion.Body>
      </Accordion.Item>
        <div>
            <Row>
                <Col className='text-start mx-5 '> <span > <input type='checkbox'   className="checkbox-input border-bottom"
   /></span>Air Plant (15) </Col>
                

            </Row>
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Filter