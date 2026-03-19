import AboutHero from "./components/AboutHero";
import AboutInfo from "./components/AboutInfo";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";
import { teamData } from "./data";
import FacilitiesSection from "./components/FacilitiesSection";
import { facilitiesData } from "./data";
import TeachersSection from "../Curriculum/components/TeachersSection";
import { teachersData } from "./data";


const About = () => {
  return (
    <>
      <AboutHero />
      <AboutInfo />
      <ValuesSection />
      <TeamSection data={teamData} />
      <FacilitiesSection data={facilitiesData} />
      <TeachersSection data={teachersData}/>

    </>
  );
};

export default About;