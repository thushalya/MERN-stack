import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/add" className='nav-link'>Create a Student</Link>
        <Link to="/" className='nav-link'>Home</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header