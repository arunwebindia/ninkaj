import  { useState } from "react";
import {  Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import ProductCard from "../../../components/ProductCard";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    city: "",
    email: "",
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log({ ...formData, rating });
  };
  const reviews = [
    { name: "Arun Singh", city: "Delhi", rating: 5, comment: "Fantastic product!" },
    { name: "Priya Sharma", city: "Mumbai", rating: 4, comment: "Good quality and fast delivery." },
  ];

  return (
    <>
    <Card className="my-4 border-0">
      <Card.Body>
        <h4 className="mb-3">Write a Review</h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <div>
              {[...Array(5)].map((_, i) => {
                const value = i + 1;
                return (
                  <FaStar
                    key={i}
                    size={24}
                    style={{ cursor: "pointer", marginRight: 5 }}
                    color={value <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    onClick={() => setRating(value)}
                    onMouseLeave={() => setHover(null)}
                  />
                );
              })}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your experience..."
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit Review
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="my-4">
      <h4>Customer Reviews</h4>
      <Row>
        {reviews.map((rev, idx) => (
          <Col md={12} key={idx}>
            <Card className="mb-3 border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0">{rev.name} ({rev.city})</h6>
                    <div className="text-warning mb-2">
                      {[...Array(rev.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mb-0">{rev.comment}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    <div className="my-4">
      <h4>Other products</h4>
      <Row className="g-3">
                <Col lg={4} md={6}>
                  <ProductCard
                    image="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                    name="product1"
                    description="descriptin"
                    rating={3}
                    onViewDetails={() => {}}
                  />
                </Col>
                <Col lg={4} md={6}>
                  <ProductCard
                    image="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                    name="product1"
                    description="descriptin"
                    rating={3}
                    onViewDetails={() => {}}
                  />
                </Col>
                <Col lg={4} md={6}>
                  <ProductCard
                    image="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                    name="product1"
                    description="descriptin"
                    rating={3}
                    onViewDetails={() => {}}
                  />
                </Col>
                
              </Row>
      </div>
    </>
  );
};
export default ReviewForm