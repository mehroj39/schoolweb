import type { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition">
      
      {/* ICON */}
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      {/* DESC */}
      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;