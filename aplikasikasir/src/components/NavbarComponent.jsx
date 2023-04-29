import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><strong>Kasir</strong> App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
