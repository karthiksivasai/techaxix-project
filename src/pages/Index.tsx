import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Industries />
      <Careers />
      <Footer />
    </div>
  );
};

export default Index;