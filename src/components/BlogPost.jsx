import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import articles from "../articles.js";

function BlogPost() {
  const chunkStr = (str, n, acc) => {
    if (str.length === 0) {
      return acc;
    } else {
      acc.push(str.substring(0, n));
      return chunkStr(str.substring(n), n, acc);
    }
  };
  let { id } = useParams();
  const post = articles.find((art) => art.id === Number(id));
  const articleBody = chunkStr(post.content, 165, []);

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
        <Col lg={12}>
          {articleBody.map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default BlogPost;
