import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ProductThumbnail from "./ProductThumbnail";
// import products from "../products.js";

function ProductThumb(props) {
  return (
    <ProductThumbnail
      id={props.product.id}
      name={props.product.name}
      img={props.product.img}
      desc={props.product.desc}
      price={props.product.price}
    />
  );
}

function List(props) {
  function mapProductsArr(product, index) {
    return <ProductThumb product={product} key={index} />;
  }
  return (
    <CardDeck className="p-3">{props.products.map(mapProductsArr)}</CardDeck>
  );
}

function Full_List({ products }) {
  let curIndex = 0;
  return products.map((product, index) => {
    if (index === curIndex) {
      const curProducts = products.slice(curIndex, curIndex + 4);
      curIndex += 4;
      return <List products={curProducts} key={index} />;
    }
    return null;
  });
}

export default Full_List;
