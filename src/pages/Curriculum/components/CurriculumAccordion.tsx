import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const CurriculumAccordion = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "curriculum.levels.primary.title",
      desc: "curriculum.levels.primary.desc",
      subjects: [
        "curriculum.levels.primary.s1",
        "curriculum.levels.primary.s2",
        "curriculum.levels.primary.s3",
        "curriculum.levels.primary.s4",
        "curriculum.levels.primary.s5",
        "curriculum.levels.primary.s6",
      ],
    },
    {
      title: "curriculum.levels.middle.title",
      desc: "curriculum.levels.middle.desc",
      subjects: [
        "curriculum.levels.middle.s1",
        "curriculum.levels.middle.s2",
        "curriculum.levels.middle.s3",
        "curriculum.levels.middle.s4",
        "curriculum.levels.middle.s5",
        "curriculum.levels.middle.s6",
        "curriculum.levels.middle.s7",
      ],
    },
    {
      title: "curriculum.levels.high.title",
      desc: "curriculum.levels.high.desc",
      subjects: [
        "curriculum.levels.high.s1",
        "curriculum.levels.high.s2",
        "curriculum.levels.high.s3",
        "curriculum.levels.high.s4",
        "curriculum.levels.high.s5",
        "curriculum.levels.high.s6",
        "curriculum.levels.high.s7",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-800">
          {t("curriculum.info.title")}
        </h2>

        <p className="text-center text-gray-500 mt-3">
          {t("curriculum.info.subtitle")}
        </p>

        {/* ACCORDION */}
        <div className="mt-10 space-y-4">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border shadow-sm">

              {/* HEADER */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-medium text-gray-800">
                  {t(item.title)}
                </span>

                <ChevronDown
                  className={`transition ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* CONTENT */}
              {openIndex === index && (
                <div className="px-5 pb-5 border-t">

                  <p className="mt-4 text-gray-600">
                    {t(item.desc)}
                  </p>

                  <h4 className="mt-4 font-semibold text-gray-800">
                    {t("curriculum.subjects")}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-gray-600">
                    {item.subjects.map((s, i) => (
                      <p key={i}>• {t(s)}</p>
                    ))}
                  </div>

                  <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
                    {t("curriculum.download")}
                  </button>

                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurriculumAccordion;