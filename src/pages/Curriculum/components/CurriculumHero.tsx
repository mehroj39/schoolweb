import { useTranslation } from "react-i18next";

const CurriculumHero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        <h1 className="text-3xl md:text-5xl font-semibold">
          {t("curriculum.hero.title")}
        </h1>

        <p className="mt-4 text-white/90 text-sm md:text-lg">
          {t("curriculum.hero.subtitle")}
        </p>

      </div>
    </section>
  );
};

export default CurriculumHero;