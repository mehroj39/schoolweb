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
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#2f2f2f] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center sm:text-left">
          
          {/* LOGO */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded-md">
                №11
              </div>
              <h2 className="text-white font-semibold text-lg">
                {t("navbar.logo")}
              </h2>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
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
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition block"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("footer.contact")}
            </h3>

            <div className="space-y-3 text-sm flex flex-col items-center sm:items-start">
              
              <div className="flex gap-2 items-start text-left">
                <MapPin size={16} className="mt-1 shrink-0" />
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
                <span className="break-all">
                  info@maktab11qarshi.uz
                </span>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-white font-semibold mb-4">
              {t("footer.newsletter")}
            </h3>

            <p className="text-sm text-gray-400 mb-3 max-w-xs">
              {t("footer.subscribe_text")}
            </p>

            <div className="w-full max-w-sm">
              <input
                type="email"
                placeholder={t("footer.email_placeholder")}
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#3a3a3a] border border-gray-600 text-sm outline-none focus:border-blue-500"
              />

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition">
                {t("footer.subscribe")}
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-600 my-6 sm:my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* SOCIAL */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white mb-3 font-medium">
              {t("footer.social")}
            </h4>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3a3a3a] hover:bg-gray-500 cursor-pointer transition"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-gray-400">
            {t("footer.copyright")}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;