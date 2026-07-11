import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero/Hero";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  return (
<>
  <Navbar />
  <Hero />
  <Stats />
  <Features />
  <HowItWorks />
  <WhyChooseUs />
  <Testimonials />
  <FAQ />
  <CTA />
  <Footer />
</>
  );
};

export default LandingPage;