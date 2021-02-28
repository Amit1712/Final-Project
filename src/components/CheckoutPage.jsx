import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  MDBBtn,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBTabPane,
  MDBTabContent,
} from "mdbreact";
import { Container, Col, Row, Card } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";

function CheckoutPage() {
  const [activePill, setActivePill] = useState("1");
  const { register, handleSubmit, errors } = useForm();
  const isCountry = (country: string) => country !== "Country...";
  const onSubmit = (data) => {
    console.log("user registerd");
    console.log(data);
  };

  function handleClick(event) {
    let { id } = event.target;
    id = id.toString();
    if (activePill === id) {
      return;
    }
    setActivePill(id);
  }
  const style = {
    color: "black",
    tagline: false,
  };

  return (
    <Container fluid>
      <Row className="my-2">
        <Card className="w-100">
          <Card.Body>
            <Row>
              <Col lg={8} className="mb-4">
                {/*Tabs Navbar*/}
                <MDBNav color="dark" className="nav-justified">
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <strong
                        id="1"
                        className={activePill === "1" ? "active" : ""}
                        onClick={handleClick}
                      >
                        1. Identify
                      </strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <strong
                        id="2"
                        className={activePill === "2" ? "active" : ""}
                        onClick={handleClick}
                      >
                        2. Billing
                      </strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <strong
                        id="3"
                        className={activePill === "3" ? "active" : ""}
                        onClick={handleClick}
                      >
                        3. Shipping
                      </strong>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent className="pt-4" activeItem={activePill}>
                  {/*Tab 1 - Identify*/}
                  <MDBTabPane tabId="1">
                    <Row>
                      <Col lg={6}>
                        <Card className="mb-1">
                          <Card.Body>
                            <Card.Text>
                              We encourage you to register to our club for
                              exclusive offers and discounts!
                            </Card.Text>
                            <MDBBtn
                              color="dark"
                              size="md"
                              block
                              href="/signup"
                              className="btn-a"
                            >
                              Click to Register
                            </MDBBtn>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col lg={6}>
                        <Card className="mb-1">
                          <Card.Body>
                            <Card.Text>
                              If you already registered we advise you to login
                              before placing your order
                            </Card.Text>
                            <MDBBtn
                              color="dark"
                              size="md"
                              block
                              href="/login"
                              className="btn-a"
                            >
                              Click to Login
                            </MDBBtn>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Row className="m-auto p-2">
                        <Col>
                          <small>
                            If you wish to complete your order as a guest please
                            click Next Step
                          </small>
                        </Col>
                      </Row>
                    </Row>
                    <hr className="mb-3" />
                    <MDBBtn
                      color="dark"
                      size="lg"
                      block
                      id="2"
                      onClick={handleClick}
                    >
                      Next step
                    </MDBBtn>
                  </MDBTabPane>
                  {/*Tab 2 - Billing info*/}
                  <MDBTabPane tabId="2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Row>
                        <Col md={6} className="mb-4">
                          <label htmlFor="FName">First name</label>
                          <input
                            type="text"
                            id="FName"
                            name="FName"
                            placeholder="Enter your first name"
                            className="form-control"
                            ref={register({ required: true })}
                          />
                          {errors.FName && (
                            <span className="invalid-feedback d-block">
                              This field is required
                            </span>
                          )}
                        </Col>
                        <Col md={6} className="mb-2">
                          <label htmlFor="LName">Last name</label>
                          <input
                            type="text"
                            id="LName"
                            name="LName"
                            placeholder="Enter your last name"
                            className="form-control"
                            ref={register({ required: true })}
                          />
                          {errors.LName && (
                            <span className="invalid-feedback d-block">
                              This field is required
                            </span>
                          )}
                        </Col>
                        <Col>
                          <div className="mb-4">
                            <label htmlFor="email">Email</label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Enter your email address - yourmail@example.com"
                              ref={register({ required: true })}
                            />
                            {errors.email && (
                              <span className="invalid-feedback d-block">
                                This field is required
                              </span>
                            )}
                          </div>
                          <div className="mb-4">
                            <label htmlFor="address">Address</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              className="form-control"
                              placeholder="1234 Main St"
                              ref={register({ required: true })}
                            />
                            {errors.address && (
                              <span className="invalid-feedback d-block">
                                This field is required
                              </span>
                            )}
                          </div>
                          <label htmlFor="address2">Address 2 (optional)</label>
                          <input
                            type="text"
                            id="address2"
                            name="address2"
                            className="form-control mb-4"
                            placeholder="Apartment or suite"
                            ref={register}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} className="mb-4">
                          <label htmlFor="country">Country</label>
                          <select
                            className="custom-select d-block w-100"
                            id="country"
                            name="country"
                            ref={register({
                              required: true,
                              validate: isCountry,
                            })}
                          >
                            <option>Country...</option>
                            <option>United States</option>
                          </select>
                          {errors.country && (
                            <span className="invalid-feedback d-block">
                              This field is required
                            </span>
                          )}
                        </Col>
                        <Col lg={6} className="mb-4">
                          <label htmlFor="zip">Zip</label>
                          <input
                            type="text"
                            className="form-control"
                            id="zip"
                            name="zipcode"
                            ref={register({ required: true })}
                          />
                          {errors.zipcode && (
                            <span className="invalid-feedback d-block">
                              This field is required
                            </span>
                          )}
                        </Col>
                      </Row>
                      <hr />
                      <div className="mb-1 ml-4">
                        <input
                          type="checkbox"
                          className="form-check-input filled-in"
                          id="chekboxRules"
                          name="terms"
                          ref={register({ required: true })}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="chekboxRules"
                        >
                          I accept the terms and conditions
                        </label>
                        {errors.terms && (
                          <span className="invalid-feedback d-block">
                            You must check this box
                          </span>
                        )}
                      </div>
                      <div className="mb-1 ml-4">
                        <input
                          type="checkbox"
                          className="form-check-input filled-in"
                          id="register"
                          name="register"
                        />
                        <label className="form-check-label" htmlFor="register">
                          Save this information for next time
                        </label>
                      </div>
                      <div className="mb-1 ml-4">
                        <input
                          type="checkbox"
                          className="form-check-input filled-in"
                          id="newsLetter"
                          name="newsLetter"
                          ref={register}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="newsLetter"
                        >
                          Subscribe to the newsletter
                        </label>
                      </div>
                      <hr />
                      <MDBBtn color="dark" size="lg" block id="3" type="submit">
                        Next step
                      </MDBBtn>
                    </form>
                  </MDBTabPane>
                  {/*Tab 3 - Shipping info*/}
                  <MDBTabPane tabId="3">
                    <div>Please choose your desired shipping method</div>
                    <div className="d-block my-3">
                      <div className="mb-2 ml-4">
                        <input
                          name="group2"
                          type="radio"
                          className="form-check-input with-gap"
                          id="radioWithGap4"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radioWithGap4"
                        >
                          Regular
                        </label>
                      </div>
                      <div className="mb-2 ml-4">
                        <input
                          iname="group2"
                          type="radio"
                          className="form-check-input with-gap"
                          id="radioWithGap5"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radioWithGap5"
                        >
                          Priority Mail
                        </label>
                      </div>
                      <div className="mb-2 ml-4">
                        <input
                          name="group2"
                          type="radio"
                          className="form-check-input with-gap"
                          id="radioWithGap6"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radioWithGap6"
                        >
                          Express Delivery
                        </label>
                      </div>
                      <hr />
                      <Row>
                        <Col md={6} className="mb-3">
                          <div className="mb-1 ml-4">
                            <input
                              type="checkbox"
                              className="form-check-input filled-in"
                              id="address"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="address"
                              required
                            >
                              Shipping address is same as billing address
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <label htmlFor="address1">Address</label>
                          <input
                            type="text"
                            id="address1"
                            className="form-control mb-4"
                            placeholder="1234 Main St"
                          />
                          <label htmlFor="address-12">
                            Address 2 (optional)
                          </label>
                          <input
                            type="text"
                            id="address-12"
                            className="form-control mb-4"
                            placeholder="Apartment or suite"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md="12" className="mb-4">
                          <label htmlFor="country">Country</label>
                          <select
                            className="custom-select d-block w-100"
                            id="country"
                            required
                          >
                            <option>Choose...</option>
                            <option>United States</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                          <label htmlFor="state">State</label>
                          <select
                            className="custom-select d-block w-100"
                            id="state"
                            required
                          >
                            <option>Choose...</option>
                            <option>California</option>
                          </select>
                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                          <label htmlFor="zip2">Zip</label>
                          <input
                            type="text"
                            className="form-control"
                            id="zip2"
                            required
                          />
                          <div className="invalid-feedback">
                            Zip code required.
                          </div>
                        </Col>
                      </Row>
                      <hr className="mb-4" />
                    </div>
                  </MDBTabPane>
                </MDBTabContent>
              </Col>
              {/*Summary column*/}
              <Col lg={4} className="mb-4">
                <Card className="mb-2">
                  <Card.Body>
                    <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                      Summary
                    </h4>
                    <hr />
                    <Row>
                      <Col sm={8}>Item Name + Item Description</Col>
                      <Col sm={4}>$ Item Price</Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={8}>Item Name + Item Description</Col>
                      <Col sm={4}>$ Item Price</Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={8}>Item Name + Item Description</Col>
                      <Col sm={4}>$ Item Price</Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={8}>
                        <strong>Total</strong>
                      </Col>
                      <Col sm={4}>
                        <strong>$ TotalPrice</strong>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <PayPalButton style={style} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default CheckoutPage;
