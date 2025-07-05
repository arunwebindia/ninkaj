
import ProductSection from "./ProductComp";

export default function ProductInfor() {
  return (
    <div>
      <ProductSection reverse={false}/>
      <ProductSection reverse={true}/>
    </div>
  );
}
