import React from "react";
import { Card, CardDeck, Col } from "react-bootstrap";
import { men, women } from "../categories.js";

function createCatCard(category) {
  return (
    <Card className="text-black catCard" key={category.id}>
      <a href={`cat/${category.id}`}>
        <Card.Img src={category.src} alt={`Category${category.id}`} />
        <Card.ImgOverlay>
          <Card.Title>{category.name}</Card.Title>
        </Card.ImgOverlay>
      </a>
    </Card>
  );
}

function Men() {
  return <CardDeck className="h-100">{men.map(createCatCard)}</CardDeck>;
}

function Women() {
  return <CardDeck className="h-100">{women.map(createCatCard)}</CardDeck>;
}

function CategoryThumbs() {
  return (
    <CardDeck>
      <Col lg={12} className="p-3">
        <Men />
      </Col>
      <Col lg={12} className="p-3">
        <Women />
      </Col>
    </CardDeck>
  );
}

export default CategoryThumbs;
