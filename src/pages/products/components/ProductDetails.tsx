import { Container } from "react-bootstrap";
import ReviewForm from "./ReviewForm";

export default function ProductDetails() {
  return (
    <div className="product-details-id">
      <Container className="custom-container">

      <div className="card-wrapper">
        <div className="card border-0">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img
                  src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                  alt="shoe image"
                />
                <img
                  src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                  alt="shoe image"
                />
                <img
                  src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                  alt="shoe image"
                />
                <img
                  src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                  alt="shoe image"
                />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id="1">
                  <img
                    src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                    alt="shoe image"
                  />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="2">
                  <img
                    src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                    alt="shoe image"
                  />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="3">
                  <img
                    src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                    alt="shoe image"
                  />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="4">
                  <img
                    src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75"
                    alt="shoe image"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="product-content">
            <h2 className="product-title">Starter</h2>
            <a href="#" className="product-link">
              visit Ninkaj store
            </a>
            <div className="product-rating">
            
              <span>4.7(21)</span>
            </div>

            <div className="product-price">
              <p className="last-price">
                Old Price: <span>$257.00</span>
              </p>
              <p className="new-price">
                New Price: <span>$249.00 (5%)</span>
              </p>
            </div>

            <div className="product-detail">
              <h2>about this item: </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eveniet veniam tempora fuga tenetur placeat sapiente architecto
                illum soluta consequuntur, aspernatur quidem at sequi ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, perferendis eius. Dignissimos, labore suscipit.
                Unde.
              </p>
              <ul>
                
              </ul>
            </div>

            <div className="purchase-info">
              <button type="button" className="btn">
                Buy by flipkart
              </button>
              <button type="button" className="btn">
                Contact to buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <ReviewForm/>
      </div>
      </Container>
    </div>
  );
}
