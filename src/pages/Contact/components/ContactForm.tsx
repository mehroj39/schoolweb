import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-3xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          {t("contact.form.title")}
        </h1>

        <p className="text-center text-gray-500 mt-3">
          {t("contact.form.subtitle")}
        </p>

        {/* FORM */}
        <div className="mt-10 bg-white rounded-xl shadow-md p-8">

          <form className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t("contact.form.name")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Ali Aliyev"
                className="w-full px-4 py-2 rounded-md border bg-gray-100 focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t("contact.form.email")} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="ali.aliyev@email.uz"
                className="w-full px-4 py-2 rounded-md border bg-gray-100 focus:outline-none"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t("contact.form.phone")}
              </label>
              <input
                type="text"
                placeholder="+998 90 123 45 67"
                className="w-full px-4 py-2 rounded-md border bg-gray-100 focus:outline-none"
              />
            </div>

            {/* SUBJECT */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t("contact.form.subject")} <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2 rounded-md border bg-gray-100 focus:outline-none">
                <option>{t("contact.form.select")}</option>
                <option>{t("contact.form.options.admission")}</option>
                <option>{t("contact.form.options.general")}</option>
                <option>{t("contact.form.options.other")}</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t("contact.form.message")} <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder={t("contact.form.messagePlaceholder")}
                className="w-full px-4 py-2 rounded-md border bg-gray-100 focus:outline-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {t("contact.form.button")}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;