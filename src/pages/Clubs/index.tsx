import { Helmet } from "react-helmet-async";

import ClubsHero from "./components/ClubsHero";
import ProgramsSection from "./components/ProgramsSection";
import EventsSection from "./components/EventsSection";
import JoinSection from "./components/JoinSection";

const Clubs = () => {
  return (
    <>
      {/* 🔥 SEO */}
      <Helmet>
        <title>To‘garaklar va faoliyatlar | 10-maktab Qarshi</title>
        <meta
          name="description"
          content="10-maktabdagi to‘garaklar, qo‘shimcha mashg‘ulotlar va tadbirlar bilan tanishing. O‘quvchilar uchun keng imkoniyatlar mavjud."
        />
      </Helmet>

      {/* CONTENT */}
      <ClubsHero />
      <ProgramsSection />
      <EventsSection />
      <JoinSection />
    </>
  );
};

export default Clubs;