import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";
import News from "./Newsletter";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <section className="sticky-top">
        <Header />
      </section>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/cat" component={CategoryPage} />
          {/*TO-FIX - needs dynamic cat pages*/}
          <Route path="/product" component={ProductPage} />
          {/*TO-FIX - needs dynamic prod pages*/}
          <Route path="/newsletter" exact component={News} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
      <Row className="footer">
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
