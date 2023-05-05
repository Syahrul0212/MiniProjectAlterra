import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { getAuth, signOut } from "firebase/auth"; 
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const NavbarComponent = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  
// logout function 
  const handleLogOut = () => {
    const auth = getAuth()
    signOut(auth)
    .then((result) => {
      localStorage.clear()
      navigate("/")
    })
    .catch((err) => {
      console.error(err)
    })
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <strong>Kasir</strong> App
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        <Nav>
          <img src={user?.photoURL} className="border rounded-circle" height={40} />
          <Nav.Link href="#deets"><strong>{user?.email}</strong></Nav.Link>
          <Button className="btn btn-success ms-4 me-4 " onClick={handleLogOut}>
            Log Out
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
