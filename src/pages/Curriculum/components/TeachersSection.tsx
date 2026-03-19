import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";

interface Teacher {
  name: string;
  subject: string;
  desc: string;
  img: string;
}

interface Props {
  data: Teacher[];
}

const TeachersSection = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          {t("teachers.title")}
        </h2>

        <p className="text-center text-gray-500 mt-2">
          {t("teachers.subtitle")}
        </p>

        {/* SEARCH */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder={t("teachers.search")}
            className="w-full max-w-xl px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[220px] object-cover"
              />

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-blue-600 text-sm mt-1">
                  {t(item.subject)}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  {t(item.desc)}
                </p>

                {/* BUTTON */}
                <button className="mt-3 flex items-center gap-2 text-green-600 text-sm hover:underline">
                  <Mail size={16} />
                  {t("teachers.contact")}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeachersSection;