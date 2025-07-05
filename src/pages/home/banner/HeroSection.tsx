
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="dark-hero-section py-3">
      <Container>
        <Row className="align-items-center flex-lg-row flex-column-reverse">
          {/* Left Content */}
          <Col lg={6} className="text-center text-lg-start text-white mt-4 mt-lg-0">
            <h3 className="display-5 fw-bold mb-3">
              Reliable <span className="text-danger">NINKAJ</span> Motor Starters 
            </h3>
            <p className="text-mute my-5 py-2 hero-text">
              Ensure smooth starts, protect your equipment, and enhance efficiency with our expertly crafted electronic control devices.
              We provide a one-year guarantee, and if you ever face any issues, our team is available 24/7 to assist you at your doorstep. This product is proudly made in India
            </p>
            <Button variant="danger" size="lg" className="px-4" onClick={()=>navigate('/products')}>
              Browse Products
            </Button>
          </Col>

          {/* Right Image */}
          <Col lg={6} className="text-center">
          <Carousel fade={true} indicators={true} controls={false} interval={3000}>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-4 shadow"
                  src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                  alt="Arduino Kit"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-4 shadow"
                  src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                  alt="Raspberry Pi"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-4 shadow"
                  src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                  alt="Sensor Pack"
                />
              </Carousel.Item>
            </Carousel>
            {/* <img
              src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
              alt="Starter Kit"
              className="img-fluid hero-product-img"
            /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}


            