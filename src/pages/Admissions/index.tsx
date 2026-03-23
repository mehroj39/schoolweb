import { Helmet } from "react-helmet-async";

import AdmissionsHero from "./components/AdmissionsHero";
import AdmissionProcess from "./components/AdmissionProcess";
import ApplicationForm from "./components/ApplicationForm";
import PaymentSection from "./components/PaymentSection";
import ImportantDatesSection from "./components/ImportantDatesSection";
import { importantDatesData } from "./data";
import ContactCTA from "./components/ContactCTA";

const Admissions = () => {
  return (
    <>
      {/* 🔥 SEO */}
      <Helmet>
        <title>Qabul | 10-maktab Qarshi</title>
        <meta
          name="description"
          content="10-maktabga qabul jarayoni, ariza topshirish, to‘lov va muhim sanalar haqida batafsil ma’lumot oling."
        />
      </Helmet>

      {/* CONTENT */}
      <AdmissionsHero />
      <AdmissionProcess />
      <ApplicationForm />
      <PaymentSection />
      <ImportantDatesSection data={importantDatesData} />
      <ContactCTA />
    </>
  );
};

export default Admissions;