import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

const product = {
  id: 99,
  name: "Gold Ring",
  price: 159.99,
  src: "http://pngimg.com/uploads/ring/ring_PNG104.png",
  material: "Gold",
  size: "M",
  quantity: 1,
};

function CartItem() {
  const [quantity, setQuantity] = useState(product.quantity);

  function handleCounterClick(event) {
    const { name } = event.target;
    if (name === "plus") {
      setQuantity(quantity + 1);
    } else if (name === "minus") {
      if (quantity <= 1) return;
      setQuantity(quantity - 1);
    }
  }

  return (
    <Row className="p-3">
      <Col lg={3} md={5} xl={3}>
        <div className="rounded mb-3 mb-md-0">
          <a href="#!">
            <img alt="blabla" className="img-fluid w-100" src={product.src} />
          </a>
        </div>
      </Col>
      <Col lg={9} xl={9} md={7}>
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h5>{product.name}</h5>
              <p className="mb-2 text-muted text-uppercase small">
                Material: {product.material}
              </p>
              <p className="mb-3 text-muted text-uppercase small">
                Size: {product.size}
              </p>
            </div>
            <div>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="light"
                  onClick={handleCounterClick}
                  name="minus"
                >
                  -
                </Button>
                <input
                  name="quantity"
                  value={quantity}
                  readOnly
                  type="number"
                  style={{ width: "30%" }}
                />
                <Button
                  variant="light"
                  onClick={handleCounterClick}
                  name="plus"
                >
                  +
                </Button>
              </div>
              <small className="form-text text-muted text-center">
                (Note, 1 piece)
              </small>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <a
                href="#!"
                type="button"
                className="card-link-secondary small text-uppercase mr-3"
              >
                <FontAwesomeIcon icon={["fas", "trash"]} className="mr-1" />
                Remove item
              </a>
              <a
                href="#!"
                type="button"
                className="card-link-secondary small text-uppercase"
              >
                <FontAwesomeIcon icon={["fas", "heart"]} className="mr-1" />
                Move to wish list
              </a>
            </div>
            <p className="mb-0">
              <span>
                <strong>${product.price}</strong>
              </span>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default CartItem;
