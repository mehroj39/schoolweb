import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";

interface Item {
  date: string;
  title: string;
  desc: string;
}

interface Props {
  data: Item[];
}

const ImportantDatesSection = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-3xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          {t("admissions.dates.title")}
        </h2>

        {/* LIST */}
        <div className="mt-10 space-y-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 bg-white p-6 rounded-xl border shadow-sm"
            >
              {/* ICON */}
              <div className="text-blue-600 mt-1">
                <Calendar size={28} />
              </div>

              {/* CONTENT */}
              <div>
                <p className="text-blue-600 text-sm font-medium">
                  {t(item.date)}
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-1">
                  {t(item.title)}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
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

export default ImportantDatesSection;