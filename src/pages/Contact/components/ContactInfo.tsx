import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ADDRESS */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
              <MapPin size={24} />
            </div>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              {t("contact.info.address.title")}
            </h3>

            <p className="mt-2 text-gray-500">
              {t("contact.info.address.line1")}
              <br />
              {t("contact.info.address.line2")}
            </p>
          </div>

          {/* PHONE */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-600 text-white">
              <Phone size={24} />
            </div>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              {t("contact.info.phone.title")}
            </h3>

            <p className="mt-2 text-gray-500">
              {t("contact.info.phone.number")}
              <br />
              {t("contact.info.phone.time")}
            </p>
          </div>

          {/* EMAIL */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-yellow-500 text-white">
              <Mail size={24} />
            </div>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              {t("contact.info.email.title")}
            </h3>

            <p className="mt-2 text-gray-500">
              {t("contact.info.email.address")}
              <br />
              {t("contact.info.email.desc")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;