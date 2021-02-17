import React from "react";
import { Carousel, Col } from "react-bootstrap";

function Display() {
  return (
    <Col lg={10} className="m-auto">
      <Carousel className="salesCarousel">
        <Carousel.Item className="carouselImg" interval={2000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5723324/pexels-photo-5723324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carouselImg" interval={2000}>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/shopping-online-isometric-infographic-flowchart-poster_1284-15255.jpg"
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
