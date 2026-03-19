import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { footerLinks } from "./data";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#2f2f2f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* LOGO */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded-md">
                №11
              </div>
              <h2 className="text-white font-semibold">
                {t("navbar.logo")}
              </h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path} className="hover:text-white cursor-pointer">
                  {t(link.key)}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("footer.contact")}
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1" />
                <p>
                  Qarshi shahri, 4-mikrorayon, 47/7, <br />
                  Qashqadaryo viloyati
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <Phone size={16} />
                <span>+998 75 220 07 70</span>
              </div>

              <div className="flex gap-2 items-center">
                <Mail size={16} />
                <span>info@maktab11qarshi.uz</span>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("footer.newsletter")}
            </h3>

            <p className="text-sm text-gray-400 mb-3">
              {t("footer.subscribe_text")}
            </p>

            <input
              type="email"
              placeholder={t("footer.email_placeholder")}
              className="w-full mb-3 px-3 py-2 rounded-md bg-[#3a3a3a] border border-gray-600 text-sm outline-none focus:border-blue-500"
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium">
              {t("footer.subscribe")}
            </button>
          </div>
        </div>

        <div className="border-t border-gray-600 my-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* SOCIAL */}
          <div>
            <h4 className="text-white mb-3 font-medium">
              {t("footer.social")}
            </h4>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3a3a3a] hover:bg-gray-500 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-gray-400 text-center md:text-right">
            {t("footer.copyright")}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;  