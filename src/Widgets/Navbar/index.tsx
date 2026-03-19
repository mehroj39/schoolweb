import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n: i18next } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const currentLang = i18next.language;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f2f2f2] border-b z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded-md">
              №11
            </div>
            <span className="font-semibold text-gray-800">
              {t("navbar.logo")}
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 ml-6 text-gray-700">
            <Link to="/" className="hover:text-black">{t("navbar.home")}</Link>
            <Link to="/about" className="hover:text-black">{t("navbar.about")}</Link>
            <Link to="/curriculum" className="hover:text-black">{t("navbar.curriculum")}</Link>
            <Link to="/admissions" className="hover:text-black">{t("navbar.admissions")}</Link>
            <Link to="/clubs" className="hover:text-black">{t("navbar.clubs")}</Link>
            <Link to="/contact" className="hover:text-black">{t("navbar.contact")}</Link>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* LANGUAGE SWITCHER */}
          <div className="flex items-center bg-gray-200 rounded-lg p-1 text-sm">
            {["uz", "ru", "en"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLang(lang)}
                className={`px-2 py-1 rounded-md font-medium transition ${
                  currentLang === lang
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Apply Button */}
          <Link
            to="/apply"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
          >
            {t("navbar.apply")}
          </Link>

          {/* Search Icon */}
          <button className="text-gray-700 hover:text-black">
            <Search size={20} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;