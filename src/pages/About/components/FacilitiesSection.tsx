import { useTranslation } from "react-i18next";

interface Facility {
  title: string;
  img: string;
}

interface Props {
  data: Facility[];
}

const FacilitiesSection = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          {t("about.facilities.title")}
        </h1>

        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
          {t("about.facilities.subtitle")}
        </p>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <div key={i} className="text-center group">
              
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* TITLE */}
              <h2 className="mt-4 text-lg font-medium text-gray-800">
                {t(item.title)}
              </h2>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacilitiesSection;