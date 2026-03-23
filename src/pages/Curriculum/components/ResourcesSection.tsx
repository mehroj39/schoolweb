import { useTranslation } from "react-i18next";
import { FileDown } from "lucide-react";

interface Resource {
  title: string;
  desc: string;
  file: string;
}

interface Props {
  data: Resource[];
}

const ResourcesSection = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          {t("curriculum.resources.title")}
        </h1>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                
                {/* ICON */}
                <div className="text-blue-600">
                  <FileDown size={28} />
                </div>

                {/* CONTENT */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {t(item.title)}
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    {t(item.desc)}
                  </p>

                  <a
                    href={item.file}
                    className="inline-block mt-2 text-blue-600 text-sm hover:underline"
                  >
                    {t("curriculum.resources.download")}
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;