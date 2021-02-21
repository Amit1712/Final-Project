import React from "react";
//Bootstrap
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.png";

library.add(faShoppingCart);

function Header() {
  return (
    <Row>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="navbar"
        >
          <Navbar.Brand href="/">
            <img src={logo} alt="brand-logo" id="brandLogo" className="mb-1" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cat/1">Men's Rings</NavDropdown.Item>
                <NavDropdown.Item href="/cat/2">
                  Men's Necklaces
                </NavDropdown.Item>
                <NavDropdown.Item href="/cat/3">Men's Watches</NavDropdown.Item>
                <NavDropdown.Item href="/cat/4">
                  Men's Earrings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/cat/5">Women's Rings</NavDropdown.Item>
                <NavDropdown.Item href="/cat/6">
                  Women's Necklaces
                </NavDropdown.Item>
                <NavDropdown.Item href="/cat/7">
                  Women's Watches
                </NavDropdown.Item>
                <NavDropdown.Item href="/cat/8">
                  Women's Earrings
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Form inline>
                <Form.Control
                  id="searchBox"
                  size="sm"
                  type="text"
                  placeholder="Search"
                  className="mr-sm-1"
                />
                <Button size="sm" variant="outline-light">
                  Search
                </Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/cart">
                <FontAwesomeIcon icon="shopping-cart" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </Row>
  );
}

export default Header;
