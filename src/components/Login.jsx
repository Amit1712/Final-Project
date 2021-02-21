import React, { useState } from "react";
import { Container, Row, Button, Col, Form } from "react-bootstrap";

function Login() {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
    FName: "",
    LName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUserInfo((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  function handleClick() {
    console.log("sent data to server");
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="p-5">
          <div className="w-fitC m-auto pb-5">
            <h1 className="m-auto p-2">Login to our exclusive club!</h1>
          </div>
          <form className="form" id="loginForm">
            <div>
              <h2>Hello {userInfo.userName}</h2>
            </div>
            <div className="p-3">
              <Form.Control
                type="text"
                onChange={handleChange}
                name="userName"
                placeholder="Username:"
                value={userInfo.userName}
                className="d-flex p-1 m-2"
              />
              <Form.Control
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Password:"
                value={userInfo.password}
                className="d-flex p-1 m-2"
              />
            </div>
            <div className="p-3">
              <Button variant="dark" onClick={handleClick}>
                Login
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
