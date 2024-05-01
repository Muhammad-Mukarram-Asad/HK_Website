// import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, Link } from "react-router-dom";
//  import Container from "react-bootstrap/Container";
//  import Nav from "react-bootstrap/Nav";
//  import Navbar from "react-bootstrap/Navbar";
import Home from "./Home";
import About from "./About";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
        <img src={"https://hysabkytab.com/wp-content/uploads/2022/05/white-logo.png"}
            alt="HK Logo" />
          <li> <Link to="/">HOME</Link></li>
          <li> <Link to="/about">ABOUT US</Link></li>
          <li> <Link to="/product">PRODUCTS</Link></li>
          <li> <Link to="/resources">RESOURCES</Link></li>
          <li> <Link to="/news">NEWS& MEDIA</Link></li>
          <li> <Link to="/help">HELP</Link></li>
          <li> <Link to="/contact">CONTACT US</Link></li>


        </ul>
      </nav>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={"https://hysabkytab.com/wp-content/uploads/2022/05/white-logo.png"}
            alt="HK Logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <Nav.Link href="#pricing">Resources</Nav.Link>
            <Nav.Link href="#pricing">NEWS & MEDIA</Nav.Link>

          </Nav>
        </Container>
      </Navbar> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

      </Routes>
    </div>
  );
}

export default App;
