import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";
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
          <Route path="/product" component={ProductPage} />
        </Switch>
      </Router>
      <Row className="footer">
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
