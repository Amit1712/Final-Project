import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function Signup() {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
    FName: "",
    LName: "",
    newsLetter: false,
  });

  function handleChange(event) {
    console.log(event.target);
    const { value, name } = event.target;
    setUserInfo((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  function handleClick() {
    console.log("btn clicked - user info:");
    console.log(userInfo);
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="p-5">
          <div className="w-fitC m-auto pb-4">
            <h1 className="m-auto p-2">Join our exclusive club!</h1>
            <h5 className="m-auto p-2">
              get great deals and join thousands of happy customers!
            </h5>
          </div>
          <form className="form p-3" id="registerForm">
            <div>
              <h2>
                Welcome {userInfo.FName} {userInfo.LName}
              </h2>
            </div>
            <Form.Row>
              <Col>
                <Form.Label>Enter your first name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="firestname"
                  name="FName"
                  onChange={handleChange}
                  value={userInfo.FName}
                />
              </Col>
              <Col>
                <Form.Label>Enter your last name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="lastname"
                  name="LName"
                  onChange={handleChange}
                  value={userInfo.LName}
                />
              </Col>
            </Form.Row>
            <div>
              <Form.Label>Choose a username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                name="userName"
                onChange={handleChange}
                value={userInfo.userName}
              />
            </div>
            <div>
              <Form.Label>Choose a password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Check
                type="checkbox"
                label="Add me to the newsletter"
                name="newsLetter"
                onClick={handleChange}
              />
            </div>
            <div>
              <Button variant="dark" onClick={handleClick}>
                Sign Up
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
