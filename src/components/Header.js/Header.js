import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect bg="warning" expand="md">
        <Container>
          <Navbar.Brand href="#home">Work-Wear</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
