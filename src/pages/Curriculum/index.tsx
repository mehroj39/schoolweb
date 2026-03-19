import CurriculumHero from "./components/CurriculumHero";
import CurriculumAccordion from "./components/CurriculumAccordion";
import SpecialProgramsSection from "./components/SpecialProgramsSection";
import { programsData } from "./data";
import { teachersData } from "./data";
import TeachersSection from "./components/TeachersSection";
import ResourcesSection from "./components/ResourcesSection";
import {resourcesData} from "./data"


const Curriculum = () => {
  return (
    <>
      <CurriculumHero />
      <CurriculumAccordion />
      <SpecialProgramsSection data={programsData} />
      <TeachersSection data={teachersData}/>
      <ResourcesSection data={resourcesData}/>

    </>
  );
};

export default Curriculum;