import { useTranslation } from "react-i18next";

const PaymentSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          {t("admissions.payment.title")}
        </h2>

        {/* TABLE */}
        <div className="mt-10 overflow-hidden rounded-xl shadow-sm border bg-white">
          
          {/* HEADER */}
          <div className="grid grid-cols-3 bg-blue-600 text-white text-sm md:text-base font-medium">
            <div className="p-4">{t("admissions.payment.grade")}</div>
            <div className="p-4">{t("admissions.payment.yearly")}</div>
            <div className="p-4">{t("admissions.payment.registration")}</div>
          </div>

          {/* ROWS */}
          <div className="grid grid-cols-3 border-t">
            <div className="p-4">{t("admissions.payment.primary")}</div>
            <div className="p-4">3,000,000 so'm/yil</div>
            <div className="p-4">500,000 so'm</div>
          </div>

          <div className="grid grid-cols-3 border-t bg-gray-50">
            <div className="p-4">{t("admissions.payment.middle")}</div>
            <div className="p-4">4,000,000 so'm/yil</div>
            <div className="p-4">600,000 so'm</div>
          </div>

          <div className="grid grid-cols-3 border-t">
            <div className="p-4">{t("admissions.payment.high")}</div>
            <div className="p-4">5,000,000 so'm/yil</div>
            <div className="p-4">700,000 so'm</div>
          </div>

        </div>

        {/* NOTE */}
        <p className="mt-6 text-sm text-gray-500 text-center">
          {t("admissions.payment.note")}
        </p>

      </div>
    </section>
  );
};

export default PaymentSection;