import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ProductThumbnail from "./ProductThumbnail";
import products from "../products.js";

function createProductThumbnail(product) {
  return (
    <ProductThumbnail
      key={product.id}
      id={product.id}
      name={product.name}
      img={product.img}
      desc={product.desc}
      price={product.price}
    />
  );
}

function List() {
  return <CardDeck>{products.map(createProductThumbnail)}</CardDeck>;
}

export default List;
