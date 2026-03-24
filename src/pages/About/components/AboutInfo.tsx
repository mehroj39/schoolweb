import { useTranslation } from "react-i18next";
import schoolImg from "../../../assets/school.jpg"; // rasm qo‘y

const AboutInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f5f6f7] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div>
          <img
            src={schoolImg}
            alt="school"
            className="rounded-xl w-full h-full object-cover shadow-sm"
          />
        </div>

        {/* TEXT */}
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
            {t("about.info.title")}
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {t("about.info.desc1")}
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {t("about.info.desc2")}
          </p>

          {/* STATS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            
            <div className="bg-blue-300 px-6 py-4 rounded-xl w-full">
              <h2 className="text-blue-600 text-2xl font-semibold">
                950+
              </h2>
              <p className="text-gray-700 text-base mt-1">
                {t("about.info.students")}
              </p>
            </div>

            <div className="bg-green-200 px-6 py-4 rounded-xl w-full">
              <h3 className="text-green-600 text-2xl font-semibold">
                52+
              </h3>
              <p className="text-gray-700 text-base mt-1">
                {t("about.info.teachers")}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutInfo;