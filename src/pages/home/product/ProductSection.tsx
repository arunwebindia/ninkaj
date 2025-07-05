import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../../components/ProductCard";
import { useNavigate } from "react-router-dom";

export default function ProductSection() {
  const navigate = useNavigate()
  return (
    <div className="py-5">
      <Container className="py-5 custom-container">
        <div className="d-flex justify-content-between">
          <h4 className="fw-bold  text-dark">Our Main Products</h4>
          <button className="btn btn-outline-danger">View all</button>
        </div>

        <p className="pb-5">
          Revolutionize your operations with our high-performance MOTOR &
          SUBMERSIBLE STARTERS.
        </p>
        <Row className="g-3">
          <Col lg={4} md={6}>
            <ProductCard
              image="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
              name="product1"
              description="descriptin"
              rating={3}
              onViewDetails={() => navigate('/products/1')}
            />
          </Col>
          <Col lg={4} md={6}>
            <ProductCard
              image="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
              name="product1"
              description="descriptin"
              rating={3}
              onViewDetails={() => navigate('/products/1')}
            />
          </Col>
          <Col lg={4} md={6}>
            <ProductCard
              image="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
              name="product1"
              description="descriptin"
              rating={3}
              onViewDetails={() => navigate('/products/1')}
            />
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
