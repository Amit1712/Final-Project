import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import articles from "../articles.js";

function BlogPost() {
  let { id } = useParams();
  const post = articles.find((art) => art.id === Number(id));
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <h1 className="p-4 d-block">{post.title}</h1>
          <small className="p-4" muted>
            Written by: {post.author}
          </small>
        </Col>
      </Row>
      <Row className="p-4">
        <Col lg={12}>{post.content}</Col>
      </Row>
    </Container>
  );
}

export default BlogPost;
