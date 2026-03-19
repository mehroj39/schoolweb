import { useTranslation } from "react-i18next";

const AdmissionsHero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-blue-600 py-16 text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* TITLE */}
        <h1 className="text-white text-3xl md:text-5xl font-semibold">
          {t("admissions.hero.title")}
        </h1>

        {/* SUBTITLE */}
        <p className="text-white/90 mt-4 text-sm md:text-lg">
          {t("admissions.hero.subtitle")}
        </p>

      </div>
    </section>
  );
};

export default AdmissionsHero;