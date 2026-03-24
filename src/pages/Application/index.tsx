import { useTranslation } from "react-i18next";

const Application = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form className="w-full max-w-md flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">
          {t("application.title")}
        </h1>

        <input
          type="text"
          placeholder={t("application.name")}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder={t("application.surname")}
          className="border p-2 rounded"
        />

        <input
          type="tel"
          placeholder={t("application.phone")}
          className="border p-2 rounded"
        />

        <button className="bg-blue-600 text-white py-2 rounded">
          {t("application.submit")}
        </button>
      </form>
    </div>
  );
};

export default Application;