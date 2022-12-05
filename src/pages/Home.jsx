import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import OurServices from "../components/OurServices";
import Testimonial from "../components/Testimonial";
import CardSewa from "../components/CardSewa";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero isButtonShow={true} />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CardSewa />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
