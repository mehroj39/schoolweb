import { useTranslation } from "react-i18next";

interface StatItem {
  value: string;
  label: string;
}

interface Props {
  data: StatItem[];
}

const StatsSection = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        {data.map((item, i) => (
          <div key={i}>
            <h2 className="text-3xl md:text-4xl font-semibold">
              {item.value}
            </h2>
            <p className="mt-2 text-sm md:text-base text-blue-100">
              {t(item.label)}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default StatsSection;