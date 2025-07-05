import { Container, Button } from "react-bootstrap";
import arun_singh2 from "../../../assets/image/arun_singh2.jpeg";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate()
  return (
    <section className="about-us-section py-5 bg-light">
      <Container className="custom-container">
        <section className="py-5">
          <div className="row g-5 w-100">
            <div className="col-lg-6">
              <div className="about-left image-container">
                <img
                  src={arun_singh2}
                  alt="Soldering Electronics"
                  className="about-image"
                />
                <img
                  src={arun_singh2}
                  alt="Soldering Electronics"
                  className="about-image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right">
                <h6 className="text-danger about-label border-bottom border-danger d-inline-block">
                  ABOUT US
                </h6>
                <h2 className="about-title">Empowering Innovators</h2>
                <p> Welcome to Ninkaj Electronics</p>
                <p className="about-description">
I am Mithilesh Yadav an Electronic Engineer                
Innovative automation solutions designed to boost efficiency and redefine productivity.
Join us in shaping the future of smart industries..
                </p>
                <Button variant="outline-danger" onClick={()=>navigate('/about')}>Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
