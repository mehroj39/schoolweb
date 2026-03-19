import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const FaqAccordion = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      q: "faq.q1",
      a: "faq.a1",
    },
    {
      q: "faq.q2",
      a: "faq.a2",
    },
    {
      q: "faq.q3",
      a: "faq.a3",
    },
    {
      q: "faq.q4",
      a: "faq.a4",
    },
    {
      q: "faq.q5",
      a: "faq.a5",
    },
    {
      q: "faq.q6",
      a: "faq.a6",
    },
    {
      q: "faq.q7",
      a: "faq.a7",
    },
  ];

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-800">
          {t("faq.title")}
        </h2>

        <p className="text-center text-gray-500 mt-3">
          {t("faq.subtitle")}
        </p>

        {/* ACCORDION */}
        <div className="mt-10 space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border shadow-sm overflow-hidden"
            >
              {/* HEADER */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-gray-800 font-medium">
                  {t(item.q)}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* CONTENT */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 px-5 pb-4"
                    : "max-h-0 opacity-0 px-5"
                }`}
              >
                <p className="text-gray-600">{t(item.a)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqAccordion;