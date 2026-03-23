import { useTranslation } from "react-i18next";
import { eventsData } from "../data";

const EventsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-gray-800">
          {t("clubs.events.title")}
        </h1>

        {/* LIST */}
        <div className="mt-10 space-y-6">
          {eventsData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 flex gap-5 items-start"
            >
              
              {/* DATE BOX */}
              <div className="bg-blue-600 text-white rounded-lg w-14 h-14 flex flex-col items-center justify-center font-semibold">
                <span className="text-sm">📅</span>
                <span>{item.day}</span>
              </div>

              {/* CONTENT */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {t(item.title)}
                </h2>

                <p className="text-gray-500 mt-1 text-sm">
                  {t(item.desc)}
                </p>

                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                  <span>📅 {item.date}</span>
                  <span>🕒 {item.time}</span>
                  <span>📍 {t(item.location)}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsSection;