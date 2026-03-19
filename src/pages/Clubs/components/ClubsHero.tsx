import { useTranslation } from "react-i18next";

const ClubsHero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-semibold">
          {t("clubs.hero.title")}
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-lg">
          {t("clubs.hero.subtitle")}
        </p>

      </div>
    </section>
  );
};

export default ClubsHero;