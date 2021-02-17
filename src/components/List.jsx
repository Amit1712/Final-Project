import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ProductThumbnail from "./ProductThumbnail";
import products from "../products.js";

function ProductThumb({ product }) {
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

function List(props) {
  function mapProductsArr(product, index) {
    return <ProductThumb product={product} key={index} />;
  }
  return (
    <CardDeck className="p-3">{props.products.map(mapProductsArr)}</CardDeck>
  );
}

function Full_List() {
  let curIndex = 0;
  return products.map((product, index) => {
    if (index === curIndex) {
      const curProducts = products.slice(curIndex, curIndex + 4);
      curIndex += 4;
      return <List products={curProducts} key={index} />;
    }
    return <></>;
  });
}

export default Full_List;
