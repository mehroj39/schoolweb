import { useTranslation } from "react-i18next";

const ApplicationForm = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          {t("admissions.form.title")}
        </h1>

        <p className="text-center text-gray-500 mt-3">
          {t("admissions.form.subtitle")}
        </p>

        {/* FORM */}
        <div className="mt-10 bg-white p-8 rounded-xl shadow-sm border">

          {/* STUDENT */}
          <h2 className="text-lg font-semibold mb-4">
            {t("admissions.form.student")}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="input" placeholder={t("admissions.form.name")} />
            <input className="input" placeholder={t("admissions.form.surname")} />

            <input type="date" className="input" />

            <select className="input">
              <option>{t("admissions.form.class")}</option>
              <option>1-sinf</option>
              <option>2-sinf</option>
              <option>3-sinf</option>
              <option>4-sinf</option>
              <option>5-sinf</option>
              <option>6-sinf</option>
              <option>7-sinf</option>
              <option>8-sinf</option>
              <option>9-sinf</option>
              <option>10-sinf</option>
              <option>11-sinf</option>
            </select>
          </div>

          {/* PARENT */}
          <h3 className="text-lg font-semibold mt-8 mb-4">
            {t("admissions.form.parent")}
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="input md:col-span-2" placeholder={t("admissions.form.fullname")} />
            <input className="input" placeholder="Email" />
            <input className="input" placeholder={t("admissions.form.phone")} />
          </div>

          {/* EXTRA */}
          <h3 className="text-lg font-semibold mt-8 mb-4">
            {t("admissions.form.extra")}
          </h3>

          <div className="space-y-4">
            <input className="input w-full" placeholder={t("admissions.form.address")} />
            <input className="input w-full" placeholder={t("admissions.form.school")} />

            <textarea
              className="input w-full h-28 resize-none"
              placeholder={t("admissions.form.notes")}
            />
          </div>

          {/* BUTTON */}
          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
            {t("admissions.form.submit")}
          </button>

        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;