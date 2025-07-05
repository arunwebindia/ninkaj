// components/Header.tsx
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Navbar key="md" expand="md" bg="light" className="shadow-sm sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/">MyShop</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <li>
                <NavLink className={"nav-link"} to="/">Home</NavLink>
                </li>
                <li>
                <NavLink className={"nav-link"} to="/about">About</NavLink>

                </li>
                <li>
                <NavLink className={"nav-link"} to="/products">Products</NavLink>

                </li>
                <li>

                <NavLink className={"nav-link"} to="/contact">Contact Us</NavLink>
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
