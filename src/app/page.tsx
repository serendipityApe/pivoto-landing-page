import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";
import Demo from "@/components/demo";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden dark">
        {/* <Banner /> */}
        <Navbar />
        <Hero />
        <Features />
        <ProductShowcase />
        <FAQs />
        {/* <CallToAction /> */}
      </div>
      <Footer />
    </>
  );
}
