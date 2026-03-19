import { useTranslation } from "react-i18next";

const ContactHero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-blue-600 py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold">
          {t("contact.hero.title")}
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          {t("contact.hero.subtitle")}
        </p>

      </div>
    </section>
  );
};

export default ContactHero;