import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
//Components
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
import { Container, Row } from "react-bootstrap";

function ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return props.children;
}

function App() {
  return (
    <Container fluid>
      <section className="sticky-top">
        <Header />
      </section>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/cat" component={CategoryPage} />
            {/*TO-FIX - needs dynamic cat pages*/}
            <Route path="/product" component={ProductPage} />
            {/*TO-FIX - needs dynamic prod pages*/}
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/post" component={BlogPost} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </ScrollToTop>
      </Router>
      <Row className="footer">
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
