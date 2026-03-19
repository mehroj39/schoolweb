import AdmissionsHero from "./components/AdmissionsHero";
import AdmissionProcess from "./components/AdmissionProcess";
import ApplicationForm from "./components/ApplicationForm";
import PaymentSection from "./components/PaymentSection";
import ImportantDatesSection from "./components/ImportantDatesSection";
import { importantDatesData } from "./data";
import ContactCTA from "./components/ContactCTA";


const Admissions = () => {
  return  (
    <>
    <AdmissionsHero/>
    <AdmissionProcess/>
    <ApplicationForm/>
    <PaymentSection/>
    <ImportantDatesSection data={importantDatesData}/>
    <ContactCTA/>
    </>
  )
};

export default Admissions;