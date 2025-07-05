import React from "react";
import { Container } from "react-bootstrap";
import ProductSection from "./ProductComp";

export default function ProductInfor() {
  return (
    <div>
      <ProductSection reverse={false}/>
      <ProductSection reverse={true}/>
    </div>
  );
}
