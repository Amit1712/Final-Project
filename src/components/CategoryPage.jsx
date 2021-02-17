import React from "react";
import List from "./List";
import { Container, Row, Col, Form, Carousel } from "react-bootstrap";

function CategoryPage() {
  return (
    <Container fluid>
      <Row className="p-4">
        <h2 className="m-auto">Category Name</h2>
      </Row>
      <Row>
        <Col sm={4}>
          <Form className="form">
            <Form.Group className="mb-auto">
              <Form.Label htmlFor="priceRange">
                Price Range (0.99$ - 99.99$)
              </Form.Label>
              <Form.Control type="range" id="priceRange" />
              <Form.Check label="Fruits" className="mb-2" />
              <Form.Check label="Veggies" className="mb-2" />
              <Form.Check label="Snacks" className="mb-2" />
              <Form.Check label="Canned Food" className="mb-2" />
              <Form.Check label="Beverages" className="mb-2" />
              <Form.Check label="Pharma" className="mb-2" />
              <Form.Check label="Toiletries" className="mb-2" />
            </Form.Group>
          </Form>
          <Form className="form">
            <Form.Group className="mb-auto">
              <Form.Label>Shipping Methods</Form.Label>
              <Form.Check type="radio" label="Express" className="mb-2" />
              <Form.Check type="radio" label="UPS" className="mb-2" />
              <Form.Check type="radio" label="DHL" className="mb-2" />
              <Form.Check type="radio" label="Regular" className="mb-2" />
              <Form.Check type="radio" label="Free" className="mb-2" />
            </Form.Group>
          </Form>
        </Col>
        <Col lg={8}>
          <Carousel className="salesCarousel">
            <Carousel.Item className="carouselImg" interval={2000}>
              <img
                className="d-block w-100"
                src="https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item className="carouselImg" interval={2000}>
              <img
                className="d-block w-100"
                src="https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className="carouselImg" interval={2000}>
              <img
                className="d-block w-100"
                src="https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="p-3">
          <List />
        </Col>
        <Col lg={12} className="p-3">
          <List />
        </Col>
        <Col lg={12} className="p-3">
          <List />
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryPage;
