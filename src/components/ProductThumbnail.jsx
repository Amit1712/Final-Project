import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
//FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

function ProductThumbnail(props) {
  return (
    <Card className="w-100 d-lg-block">
      <Link to={`/product/${props.id}`}>
        <Card.Img alt="product-img" src={props.img} variant="top" />
      </Link>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <span>{props.desc}</span>
        </Card.Text>
        <Card.Text>
          <span>{props.price}$</span>
        </Card.Text>
        <Card.Text>
          <span>⭐⭐⭐⭐⭐</span>
          <a href="/" className="ml-auto">
            <FontAwesomeIcon icon="shopping-cart" />
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductThumbnail;
