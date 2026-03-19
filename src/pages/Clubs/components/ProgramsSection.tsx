import { useState } from "react";
import { useTranslation } from "react-i18next";
import { clubsData } from "../data";

const tabs = ["all", "sport", "art", "clubs"];

const ProgramsSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? clubsData
      : clubsData.filter((item) => item.category === active);

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-800">
          {t("clubs.programs.title")}
        </h2>

        {/* TABS */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition
                ${
                  active === tab
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 border"
                }`}
            >
              {t(`clubs.programs.tabs.${tab}`)}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={item.img}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-5">

                {/* CATEGORY */}
                <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                  {t(`clubs.programs.tabs.${item.category}`)}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {t(item.title)}
                </h3>

                {/* DESC */}
                <p className="text-gray-500 mt-2 text-sm">
                  {t(item.desc)}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;