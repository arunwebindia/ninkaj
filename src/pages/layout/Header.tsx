// components/Header.tsx
import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar key="md" expand="md" bg="light" className="shadow-sm sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/">My Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}  onClick={handleShow}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
            show={show}
          onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <li>
                <NavLink className={"nav-link"} to="/" onClick={handleClose}>Home</NavLink>
                </li>
                <li>
                <NavLink className={"nav-link"} to="/about" onClick={handleClose}>About</NavLink>

                </li>
                <li>
                <NavLink className={"nav-link"} to="/products" onClick={handleClose}>Products</NavLink>

                </li>
                <li>

                <NavLink className={"nav-link"} to="/contact" onClick={handleClose}>Contact Us</NavLink>
                </li>
              </Nav>
              
                <Button variant="outline-primary">
                  Login
                </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
