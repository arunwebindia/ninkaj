import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-section bg-light p-5">
      <Container className="py-5 custom-container">
        <Row className="g-5">
          {/* Left Side */}
          <Col md={6} className="p-4 text-white d-flex flex-column justify-content-center">
            <h2 className="mb-4 text-danger">Get in Touch</h2>
            <p className="opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure laudantium veritatis.</p>
            <p>
              <strong>Address:</strong> 123 Electronic Street, Tech City, India
            </p>
            <p>
              <strong>Email:</strong> support@ninkaj.com
            </p>
            <p>
              <strong>Phone:</strong> +91 9876543210
            </p>
           
          </Col>

          {/* Right Side - Form */}
          <Col md={6} className="p-4 bg-white rounded-2">
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                 <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" />
              </Form.Group>

                </Col>

              </Row>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

             
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
