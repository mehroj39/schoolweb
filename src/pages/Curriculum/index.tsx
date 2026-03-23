import { Helmet } from "react-helmet-async";

import CurriculumHero from "./components/CurriculumHero";
import CurriculumAccordion from "./components/CurriculumAccordion";
import SpecialProgramsSection from "./components/SpecialProgramsSection";
import { programsData } from "./data";
import { teachersData } from "./data";
import TeachersSection from "./components/TeachersSection";
import ResourcesSection from "./components/ResourcesSection";
import { resourcesData } from "./data";

const Curriculum = () => {
  return (
    <>
      {/* 🔥 SEO */}
      <Helmet>
        <title>O‘quv dasturi | 10-maktab Qarshi</title>
        <meta
          name="description"
          content="10-maktab o‘quv dasturi, maxsus kurslar, o‘qituvchilar va ta’lim resurslari bilan tanishing. Zamonaviy va sifatli ta’lim tizimi."
        />
      </Helmet>

      {/* CONTENT */}
      <CurriculumHero />
      <CurriculumAccordion />
      <SpecialProgramsSection data={programsData} />
      <TeachersSection data={teachersData} />
      <ResourcesSection data={resourcesData} />
    </>
  );
};

export default Curriculum;