import { useTranslation } from "react-i18next";

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-blue-600 text-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* TITLE */}
        <h1 className="
          font-semibold 
          leading-tight
          text-2xl 
          sm:text-3xl 
          md:text-5xl 
          lg:text-6xl
        ">
          {t("about.hero.title")}
        </h1>

        {/* SUBTITLE */}
        <p className="
          mt-6 
          text-blue-200 
          text-base
          sm:text-base 
          md:text-lg
          max-w-3xl 
          mx-auto
        ">
          {t("about.hero.subtitle")}
        </p>

      </div>
    </section>
  );
};

export default AboutHero;