import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect bg="warning" expand="md">
        <Container>
          <Navbar.Brand href="#home">Work-Wear</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
