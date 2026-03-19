import { Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const WorkingHours = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8 flex gap-5">

          {/* ICON */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Clock size={22} />
          </div>

          {/* CONTENT */}
          <div className="w-full">

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-800">
              {t("contact.hours.title")}
            </h3>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

              {/* LEFT */}
              <div>
                <p className="text-blue-600 font-medium">
                  {t("contact.hours.school")}
                </p>
                <p className="text-gray-700 mt-1">
                  {t("contact.hours.school_days")}
                </p>
                <p className="text-gray-700">
                  {t("contact.hours.school_time")}
                </p>
              </div>

              {/* RIGHT */}
              <div>
                <p className="text-blue-600 font-medium">
                  {t("contact.hours.admission")}
                </p>
                <p className="text-gray-700 mt-1">
                  {t("contact.hours.admission_days")}
                </p>
                <p className="text-gray-700">
                  {t("contact.hours.admission_time")}
                </p>
              </div>

            </div>

            {/* FOOTNOTE */}
            <p className="text-sm text-gray-500 mt-4">
              {t("contact.hours.note")}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkingHours;