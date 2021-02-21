import React from "react";
import ItemsList from "./List";
import { Container, Row, Col, Form, Carousel } from "react-bootstrap";

function CategoryPage() {
  return (
    <Container fluid>
      <Row className="p-4">
        <h2 className="m-auto">Category Name</h2>
      </Row>
      <Row>
        <Col sm={4}>
          <div
            className="form"
            style={{ border: "none", padding: "0 15px 15px" }}
          >
            <Form.Label>Filter by</Form.Label>
            <Form.Control as="select" custom>
              <option value="">Price: Low to Highest</option>
              <option value="">Price: High to Lowest</option>
              <option value="">Rating</option>
            </Form.Control>
          </div>
          <Form className="form">
            <Form.Group className="mb-auto">
              <Form.Label htmlFor="priceRange">
                Price Range (19.99$ - 999.99$)
              </Form.Label>
              <Form.Control type="range" id="priceRange" />
              <Form.Check label="Gold" className="mb-2" />
              <Form.Check label="Silver" className="mb-2" />
              <Form.Check label="Bronze" className="mb-2" />
              <Form.Check label="White Gold" className="mb-2" />
              <Form.Check label="Platinum" className="mb-2" />
              <Form.Check label="Copper" className="mb-2" />
              <Form.Check label="Gemstones" className="mb-2" />
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
          <Carousel className="salesCarousel" style={{ paddingTop: "15px" }}>
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
          <ItemsList />
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryPage;
