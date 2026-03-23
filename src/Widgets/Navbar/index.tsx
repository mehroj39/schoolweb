import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n: i18next } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const currentLang = i18next.language;

  const navLinks = [
    { path: "/", label: t("navbar.home") },
    { path: "/about", label: t("navbar.about") },
    { path: "/curriculum", label: t("navbar.curriculum") },
    { path: "/admissions", label: t("navbar.admissions") },
    { path: "/clubs", label: t("navbar.clubs") },
    { path: "/contact", label: t("navbar.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f2f2f2] border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded-md">
            №11
          </div>
          <span className="font-semibold text-gray-800">
            {t("navbar.logo")}
          </span>
        </div>

        {/* CENTER GRID NAV (DESKTOP) */}
        <nav className="hidden lg:grid grid-cols-3 gap-x-8 gap-y-2 text-center text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* LANG */}
          <div className="flex bg-gray-200 rounded-lg p-1 text-sm">
            {["uz", "ru", "en"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLang(lang)}
                className={`px-2 py-1 rounded-md ${
                  currentLang === lang
                    ? "bg-green-700 text-white"
                    : "text-gray-700"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            to="/apply"
            className="bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            {t("navbar.apply")}
          </Link>

          <Search size={20} />
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE GRID MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4">

          <div className="grid grid-cols-2 gap-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="py-2 bg-gray-100 rounded hover:bg-gray-200 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* LANG */}
          <div className="flex justify-center gap-2 mt-4">
            {["uz", "ru", "en"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLang(lang)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* APPLY */}
          <Link
            to="/apply"
            onClick={() => setIsOpen(false)}
            className="block mt-4 bg-green-700 text-white text-center py-2 rounded"
          >
            {t("navbar.apply")}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;