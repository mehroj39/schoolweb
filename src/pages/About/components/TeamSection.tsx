import { useTranslation } from "react-i18next";

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  img: string;
}

interface Props {
  data: TeamMember[];
}

const TeamSection = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl text-black md:text-4xl font-semibold text-center mb-12">
          {t("team.title")}
        </h1>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>

                <p className="text-blue-600 text-sm mt-1">
                  {t(item.role)}
                </p>

                <p className="text-gray-500 text-sm mt-2">
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

export default TeamSection;