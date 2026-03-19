import { useTranslation } from "react-i18next";
import InfoCard from "../../../shared/ui/InfoCard";
import { homeCards } from "../components/data";

const CardsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f7f7f7] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {homeCards.map((card, i) => (
          <InfoCard
            key={i}
            icon={card.icon}
            title={t(card.title)}
            description={t(card.description)}
          />
        ))}

      </div>
    </section>
  );
};

export default CardsSection;