import React from "react";
import { Jumbotron, Col } from "react-bootstrap";

function Jumbo() {
  return (
    <Col lg={12}>
      <Jumbotron fluid className="mb-auto">
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Jumbotron>
    </Col>
  );
}

export default Jumbo;
