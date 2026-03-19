import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CTASection = ({ title, subtitle, buttonText }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="bg-green-600 text-white py-16 text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-semibold">
          {t(title)}
        </h2>

        <p className="mt-4 text-green-100">
          {t(subtitle)}
        </p>

        <Link
          to="/apply"
          className="inline-block mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          {t(buttonText)}
        </Link>

      </div>
    </section>
  );
};

export default CTASection;