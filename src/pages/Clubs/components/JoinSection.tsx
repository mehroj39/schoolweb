import { useTranslation } from "react-i18next";

const JoinSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-green-700 py-16 text-center text-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold">
          {t("clubs.join.title")}
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-lg text-green-100">
          {t("clubs.join.subtitle")}
        </p>

        {/* BUTTON */}
        <button className="mt-8 bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          {t("clubs.join.button")}
        </button>

      </div>
    </section>
  );
};

export default JoinSection;