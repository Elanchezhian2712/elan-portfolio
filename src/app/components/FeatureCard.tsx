interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-zinc-900 rounded-xl p-6 shadow-md transition-transform duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600/20 text-purple-500 mb-5">
      {icon}
    </div>
    <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>
  </div>
);
