import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImg from "../../../assets/hero.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
      
      <img
        src={heroImg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        
        <h1 className="text-white font-semibold leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl max-w-4xl">
          {t("hero.title")}
        </h1>

        <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg">
          {t("hero.subtitle")}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          
          <Link
            to="/admissions"
            className="bg-green-700 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            {t("hero.apply")}
          </Link>

          <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
            {t("hero.more")}
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;