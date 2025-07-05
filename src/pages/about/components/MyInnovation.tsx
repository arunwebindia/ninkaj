import { Container } from "react-bootstrap";

export default function MyInnovation() {
  return (
    <section className="about-us-section py-5">
      <Container className="custom-container">
        <div className="title">
          <h4>Our Innovation</h4>
          <p className="pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at
            deserunt doloribus ipsa, fugit.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card overflow-hidden">
              <div className="my-youtube">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/ftbZSXszoE0?si=M57-hMbc7r6catx9&amp;controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="description p-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente repellat eum c.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card overflow-hidden">
              <div className="my-youtube">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/ftbZSXszoE0?si=M57-hMbc7r6catx9&amp;controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="description p-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente repellat eum c.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card overflow-hidden">
              <div className="my-youtube">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/ftbZSXszoE0?si=M57-hMbc7r6catx9&amp;controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="description p-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente repellat eum c.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
