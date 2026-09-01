import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  number,
  slug, 
  className = "" 
}) => {
  return (
    <div className={`bg-gray-50 border border-gray-100 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 hover:bg-[#10263F] hover:text-white transition-all duration-300 group flex flex-col h-full ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="text-[#10263F] bg-white p-2 rounded-lg shadow-sm group-hover:text-[#F59E0B] group-hover:scale-110 transition-all duration-300">
          {Icon && <Icon size={20} />}
        </div>
        {number && (
          <div className="text-2xl font-heading font-black text-gray-200 group-hover:text-white/20 transition-colors">
            {number}
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-bold text-[#10263F] group-hover:text-white mb-2 transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-5 leading-relaxed transition-colors flex-grow">
        {description}
      </p>
      
      <div className="mt-auto">
        <Link 
          to={slug} 
          className="inline-flex items-center text-[#F59E0B] font-semibold hover:text-orange-400 transition-colors uppercase text-xs tracking-wider group/link"
        >
          Explore Service <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
