// components/Footer.tsx
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-wrapper position-relative bg-black text-white pt-5">
      {/* SVG Wave */}
      <div className="footer-wave position-absolute top-0 w-100" style={{ transform: "translateY(-100%)" }}>
        <svg viewBox="0 0 1440 320" style={{ display: "block" }}>
          <path
            fill="#000"
            fillOpacity="1"
            d="M0,192L40,181.3C80,171,160,149,240,154.7C320,160,400,192,480,186.7C560,181,640,139,720,122.7C800,107,880,117,960,144C1040,171,1120,213,1200,197.3C1280,181,1360,107,1400,69.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </div>

      <Container className="text-center">
        {/* Logo & Description */}
        <Row className="mb-4">
          <Col>
            <h3 className="fw-bold">MyShop</h3>
            <p className="text-white small">
              Bringing you the best products with quality service — right from Delhi, India.
            </p>
          </Col>
        </Row>

        {/* Navigation */}
        <Row className="mb-4">
          <Col>
            <Nav className="justify-content-center gap-4">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
              <Nav.Link as={Link} to="/products" className="text-white">Products</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* Social Icons */}
        <Row className="mb-3">
          <Col>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-white"><FaFacebookF /></a>
              <a href="#" className="text-white"><FaTwitter /></a>
              <a href="#" className="text-white"><FaInstagram /></a>
              <a href="#" className="text-white"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col>
            <small className="text-white">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
