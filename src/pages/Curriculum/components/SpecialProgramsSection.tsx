import { useTranslation } from "react-i18next";

interface Program {
  title: string;
  desc: string;
  icon: string;
  bg: string;
}

interface Props {
  data: Program[];
}

const SpecialProgramsSection = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          {t("curriculum.programs.title")}
        </h2>

        {/* CARDS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              
              {/* ICON */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg text-white text-xl ${item.bg}`}
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {t(item.title)}
              </h3>

              {/* DESC */}
              <p className="mt-2 text-gray-500 text-sm">
                {t(item.desc)}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialProgramsSection;