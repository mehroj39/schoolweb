import { useTranslation } from "react-i18next";
import { Target, Heart, Users, Award } from "lucide-react";

const ValuesSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Target size={22} />,
      title: "about.values.quality.title",
      desc: "about.values.quality.desc",
    },
    {
      icon: <Heart size={22} />,
      title: "about.values.care.title",
      desc: "about.values.care.desc",
    },
    {
      icon: <Users size={22} />,
      title: "about.values.team.title",
      desc: "about.values.team.desc",
    },
    {
      icon: <Award size={22} />,
      title: "about.values.innovation.title",
      desc: "about.values.innovation.desc",
    },
  ];

  return (
    <section className="bg-[#f5f6f7] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-center text-2xl md:text-4xl font-semibold text-gray-800 mb-12">
          {t("about.values.title")}
        </h1>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition"
            >
              {/* ICON */}
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
                {item.icon}
              </div>

              {/* TITLE */}
              <h2 className="font-semibold text-gray-800">
                {t(item.title)}
              </h2>

              {/* DESC */}
              <p className="text-base text-gray-500 mt-2 leading-relaxed">
                {t(item.desc)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;