import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import List from "./List";

library.add(fab);

function ProductPage() {
  return (
    <Container fluid>
      <Row className="p-3">
        <Col lg={6}>
          <div className="form productImg">
            <img
              src="https://www.kaspersky.com/content/en-global/images/product-icon-KSOS.png"
              alt="prodimage"
            />
            <div className="thumbs">bla bla sum thumbs</div>
          </div>
        </Col>
        <Col lg={6}>
          <Form className="form" id="productListing">
            <h2>Product Name</h2>
            <h5>Description</h5>
            <h5>Price:</h5>
            <Form.Label className="d-block">Choose quantity</Form.Label>
            <Form.Control as="select" custom>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
            <div>
              <small>Shipping Fee:</small>
            </div>
            <div className="prodBtns">
              <Button variant="dark">Buy Now</Button>
              <Button variant="dark">Add To Cart</Button>
            </div>
            <div className="pay-icons">
              <div>
                <small className="text-muted d-block">We accept</small>
                <FontAwesomeIcon icon={["fab", "cc-paypal"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "cc-visa"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "cc-mastercard"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "cc-amex"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "bitcoin"]} size="2x" />
              </div>
            </div>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row className="p-3">
        <Col lg={12}>
          <h4>Related Items</h4>
          <List />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
