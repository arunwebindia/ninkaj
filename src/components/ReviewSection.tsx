// components/ReviewSection.tsx
import { Container, Carousel, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
// import "./ReviewSection.css";

const reviews = [
  {
    name: "Amit Sharma",
    description:
      "The starter kit was amazing and easy to use. As a beginner, I found everything I needed to kickstart my project.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    description:
      "Superb service and fast delivery. The sensors and documentation were top-notch.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    description:
      "High-quality products for a great price. Highly recommended for hobbyists!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

export default function ReviewSection() {
  return (
    <section className="review-section-white py-5 bg-light">
      <Container className="custom-container">
        <h2 className="text-center fw-bold mb-5 text-dark">What Our Customers Say</h2>
        <Carousel indicators={true} controls={false} className="review-carousel">
          {reviews.map((review, idx) => (
            <Carousel.Item key={idx}>
              <div className="d-flex flex-column align-items-center text-center px-3 px-md-5">
                <Image
                  src={review.image}
                  roundedCircle
                  width={100}
                  height={100}
                  className="mb-3 shadow-sm"
                />
                <h5 className="fw-semibold text-dark">{review.name}</h5>
                <div className="text-warning mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < review.rating ? "#ffc107" : "#e0e0e0"}
                    />
                  ))}
                </div>
                <p className="text-muted mx-auto" style={{ maxWidth: 700 }}>
                  “{review.description}”
                </p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
