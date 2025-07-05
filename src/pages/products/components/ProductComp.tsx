import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import "./ProductSection.css";

const ProductSection = ({reverse}:{reverse:boolean}) => {
  const navigate = useNavigate()
  return (
    <div className="product-section bg-light py-5">
      <Container className="custom-container">
                    
        
        <Row className={`align-items-center overflow-hidden p-3 ${reverse ? 'flex-row-reverse' : ''}`}>
          

          {/* Product Details */}
          <Col md={6}>
          <small className="text-danger">STARTER</small>
            <h5 className="py-3">.5 HP TO 1.5 HP MOTOR AND SUBMERSIBLE STARTER</h5>
            <p className="text-muted">
              Enhance your home with this energy-efficient smart bulb that connects seamlessly.
            </p>
            <ul>
              <li><small>All notification will show on big size digital lcd display</small></li>
              <li><small>Set over voltage and current protection</small></li>
              <li><small>Voice Control (Alexa, Google)</small></li>
              <li><small>App Remote Control</small></li>
             
            </ul>
            <div className="d-flex justify-content-between">
<p>
              <strong>Sold:</strong> <Badge bg="success">1,280+</Badge>
            </p>
            <p>
              <strong>Rating:</strong> (4.5/5)
            </p>
            <Button variant="primary" onClick={() => navigate('/products/1')}>View Details</Button>
            <Button variant="primary">Buy</Button>
            </div>
            
            
          </Col>
          {/* Product Image */}
          <Col md={6} className="text-center">
            <img
              src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
              alt="Product"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSection;
