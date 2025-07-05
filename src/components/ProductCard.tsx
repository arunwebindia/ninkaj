// components/ProductCard.tsx
import { Card, Button, Badge } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
// import "./ProductCard.css";

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  rating: number;
  price?: string;
  onViewDetails: () => void;
  isBestSeller?: boolean;
};

export default function ProductCard({
  // image,
  // name,
  // description,
  // rating,
  // price,
  onViewDetails,
  // isBestSeller= false,
}: ProductCardProps) {
  return (
    <div className="product-card">
		<div className="product-tumb">
			<img src="https://ninkaj.com/_next/image?url=%2Fassets%2Fimages%2Fimage2.png&w=828&q=75" alt=""/>
		</div>
		<div className="product-details">
			<h6>0.5 HP SUBMERSIBLE STARTER</h6>
			<p className="text-muted">.5 HP TO 1.5 HP MOTOR AND SUBMERSIBLE STARTER</p>
      	<div className="product-price"><small>$96.00</small>$230.99</div>
			<div className="product-bottom-details">
			
				<div className="d-flex gap-2">
					<button className="btn btn-primary btn-danger px-5">Buy</button><button className="btn  btn-outline-danger px-5" onClick={()=>onViewDetails()}>View</button>
				</div>
			</div>
		</div>
	</div>
  );
}
