import { useTranslation } from "react-i18next";
import { FileText, Users, Calendar, CheckCircle } from "lucide-react";

const icons = [
  <FileText size={28} />,
  <Users size={28} />,
  <Calendar size={28} />,
  <CheckCircle size={28} />,
];

const AdmissionProcess = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: "admissions.process.step1.title",
      desc: "admissions.process.step1.desc",
    },
    {
      title: "admissions.process.step2.title",
      desc: "admissions.process.step2.desc",
    },
    {
      title: "admissions.process.step3.title",
      desc: "admissions.process.step3.desc",
    },
    {
      title: "admissions.process.step4.title",
      desc: "admissions.process.step4.desc",
    },
  ];

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          {t("admissions.process.title")}
        </h2>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              
              {/* ICON */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-600 text-white rounded-full">
                {icons[i]}
              </div>

              {/* TITLE */}
              <h3 className="mt-4 font-semibold text-gray-800">
                {t(step.title)}
              </h3>

              {/* DESC */}
              <p className="mt-2 text-gray-500 text-sm">
                {t(step.desc)}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdmissionProcess;