import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./navbar.css"

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  sticky="top">
      <LinkContainer to={"/home"}><Navbar.Brand>LOGO</Navbar.Brand></LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
        <Nav>
          <LinkContainer to={"/home"}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/projects"}>
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/services"}>
            <Nav.Link>Services</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/contacts"}>
            <Nav.Link>Contacts</Nav.Link>
          </LinkContainer>
          {/* <Link to={"/home"}>Home</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/contacts"}>Contacts</Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
