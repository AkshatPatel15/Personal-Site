import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Head.css";
import "../App.css";

function OffcanvasExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="main-head App"
      sticky="top"
    >
      <Container>
        <Navbar.Brand className="nav-brand" href="#home">
          Akshat Patel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-all-text"></Nav>
          <Nav>
            <Nav.Link className="nav-text" href="#memes">
              Portfolio
            </Nav.Link>
            <Nav.Link className="nav-text" href="#memes">
              Services
            </Nav.Link>
            <Nav.Link className="nav-text" href="#memes">
              Skills
            </Nav.Link>
            <Nav.Link className="nav-text" href="#memes">
              Contact
            </Nav.Link>
            <Nav.Link className="nav-text" href="#memes">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
