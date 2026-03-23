import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import { testimonialsData } from "../components/data";

const Testimonials = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const item = testimonialsData[index];

  return (
    <section className="bg-[#f7f7f7] py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
          {t("testimonials.title")}
        </h1>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm relative">
          
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
          />

          <div className="flex justify-center gap-1 text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            "{t(item.text)}"
          </p>

          <p className="text-lg mt-6 font-semibold text-gray-800">
            {item.name}
          </p>

          <p className="text-sm text-gray-600">{t(item.role)}</p>

          {/* arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-xl"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
          >
            ›
          </button>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonialsData.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                i === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;