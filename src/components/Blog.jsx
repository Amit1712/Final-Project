import React from "react";
import { Container, Row, Col, Card, Button, CardDeck } from "react-bootstrap";
import articles from "../articles";

function Blog() {
  function createArticleCard(post) {
    return (
      <Col lg={4} key={post.id}>
        <Card className="m-2 p-1">
          <Row className="no-gutters">
            <Col>
              <Card.Img variant="top" src={post.src} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.desc}</Card.Text>
                <Button
                  variant="dark"
                  href={`blog/post/${post.id}`}
                  style={{ color: "white" }}
                >
                  Read More
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    );
  }

  return (
    <Container fluid>
      <Row className="p-2">
        <h1 className="m-auto p-4">Our blog</h1>
      </Row>
      <Row>
        <CardDeck className="p-3"> {articles.map(createArticleCard)}</CardDeck>
      </Row>
    </Container>
  );
}

export default Blog;
