import React from "react";
import { Carousel, Col } from "react-bootstrap";

function Display() {
  return (
    <Col lg={10} className="m-auto">
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
  );
}

export default Display;
