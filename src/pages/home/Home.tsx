import ReviewSection from "../../components/ReviewSection";
import AboutUs from "../about/components/About";
import ContactUs from "../contact/component/ContactUs";
import HeroSection from "./banner/HeroSection";
import ProductSection from "./product/ProductSection";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutUs/>
      <ProductSection/>
      <ReviewSection/>
      <ContactUs/>
    </div>
  )
}
