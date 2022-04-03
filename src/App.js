import logo from './logo.svg';
import './App.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"
import NavLogo from "./images/navbar-logo.svg"
import UserLogo from "./images/user_logo.svg"
import LoveLogo from "./images/love_logo.svg"
import CartLogo from "./images/cart_logo.svg"
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore';
import SunLover from './Components/SunLover/SunLover';


function App() {
  return (
    <div className="App">
      <Navbar bg="" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={NavLogo} alt="nav-logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto"
              style={{ maxHeight: "350px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <strong>New</strong>
              </Nav.Link>
              <Nav.Link href="#action1">
                <strong>Shop All</strong>
              </Nav.Link>
              <Nav.Link href="#action1">
                <strong>Brands</strong>
              </Nav.Link>
              <Nav.Link href="#action1">
                <strong>Food & Pantry</strong>
              </Nav.Link>
              <Nav.Link href="#action1">
                <strong>Kids & Baby</strong>
              </Nav.Link>
              <Nav.Link href="#action1">
                <strong>Personal Care</strong>
              </Nav.Link>
              <Nav.Link href="#action1">
                <strong>Clothing</strong>
              </Nav.Link>
              <Nav.Link href="#action1">
                <strong>Gifts</strong>
              </Nav.Link>
              <Nav.Link href="#action1">
                <strong>Blog</strong>
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <img
                src={UserLogo}
                alt="user-logo"
                className="ms-3 me-3 logos"
              ></img>
              <img src={LoveLogo} alt="user-logo" className=" me-3 logos"></img>
              <img src={CartLogo} alt="user-logo" className="me-3 logos"></img>
              {/* <input type="search" placeholder="Search" className="me-2">
                <i class="fa-solid fa-magnifying-glass"></i>
              </input> */}
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Home></Home>
        <Explore></Explore>
        <SunLover></SunLover>
      </div>
    </div>
  );
}

export default App;
