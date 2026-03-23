import { useTranslation } from "react-i18next";

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-green-700 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold">
          {t("admissions.contact.title")}
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-green-100 max-w-2xl mx-auto">
          {t("admissions.contact.subtitle")}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

          {/* PHONE */}
          <a
            href="tel:+998901231122"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 transition"
          >
            +998 90 123 11 22
          </a>

          {/* EMAIL */}
          <a
            href="mailto:qabul@school10karshi.uz"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 transition"
          >
            qabul@school10karshi.uz
          </a>

        </div>

      </div>
    </section>
  );
};

export default ContactCTA;