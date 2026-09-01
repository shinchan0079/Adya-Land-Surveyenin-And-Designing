import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TrainingCard = ({ 
  title, 
  shortDesc, 
  badge, 
  image, 
  modules = [], 
  slug,
  className = "" 
}) => {
  return (
    <div className={`bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group ${className}`}>
      
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
        ) : (
          <div className="w-full h-full bg-gray-300"></div>
        )}
        
        {badge && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#10263F] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            {badge}
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-heading font-bold text-[#10263F] mb-4 group-hover:text-[#F59E0B] transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
          {shortDesc}
        </p>
        
        {/* Modules List */}
        {modules.length > 0 && (
          <div className="mb-8 space-y-2">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Key Topics:</div>
            {modules.slice(0, 3).map((mod, i) => (
              <div key={i} className="flex items-center text-sm font-medium text-[#10263F]">
                <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></div> {mod.title}
              </div>
            ))}
            {modules.length > 3 && (
              <div className="text-sm font-medium text-gray-500 italic mt-2">+ more</div>
            )}
          </div>
        )}

        <Link 
          to={slug} 
          className="mt-auto inline-flex items-center justify-center w-full bg-[#10263F] text-white font-bold py-3.5 rounded-xl hover:bg-blue-900 transition-colors group/btn"
        >
          View Training Details <ArrowRight className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
