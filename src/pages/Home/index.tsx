import { Helmet } from "react-helmet-async";

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
      {/* 🔥 SEO (ENG MUHIM PAGE) */}
      <Helmet>
        <title>10-maktab Qarshi | Rasmiy sayt</title>
        <meta
          name="description"
          content="Qarshi shahridagi 10-maktab rasmiy sayti. Sifatli ta’lim, tajribali o‘qituvchilar va zamonaviy o‘quv dasturlari bilan tanishing."
        />
      </Helmet>

      {/* CONTENT */}
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