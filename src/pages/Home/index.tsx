import Hero from "./components/Hero";
import CardsSection from "./components/CardsSection";
import StatsSection from "../../shared/ui/StatSection";
import { statsData } from "./components/data";
import Testimonials from "./components/Testimonials";
import CTASection from "../../shared/ui/CTASection";
import { ctaData } from "./components/data";


const Home = () => {
  return (
    <>
      <Hero />
      <CardsSection />
      <StatsSection data={statsData} />
      <Testimonials />
      <CTASection
        title={ctaData.title}
        subtitle={ctaData.subtitle}
        buttonText={ctaData.buttonText}
      />
    </>
  );
};

export default Home;