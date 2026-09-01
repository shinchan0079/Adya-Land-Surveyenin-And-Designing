import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ 
  title, 
  category, 
  location, 
  image, 
  slug,
  className = "" 
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full ${className}`}>
        {/* Image Container */}
        <div 
          className="relative h-64 overflow-hidden cursor-pointer"
          onClick={() => image && setLightboxOpen(true)}
        >
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#10263F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <ZoomIn className="text-white w-10 h-10 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {category && (
            <div className="text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-2">
              {category}
            </div>
          )}
          
          <h3 className="text-xl font-heading font-bold text-[#10263F] mb-6 group-hover:text-[#F59E0B] transition-colors leading-tight">
            {title}
          </h3>
          
          <div className="mt-auto pt-4 border-t border-gray-100">
            <Link 
              to={slug} 
              className="inline-flex items-center text-[#F59E0B] font-bold hover:text-orange-400 transition-colors uppercase text-xs md:text-sm tracking-wider"
            >
              View Project Details <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && image && (
        <div className="fixed inset-0 z-[100] bg-[#10263F]/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#F59E0B] transition-colors bg-white/10 p-2 rounded-full z-10"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
          >
            <X size={24} />
          </button>
          <img 
            src={image} 
            alt={title} 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl relative z-0" 
          />
        </div>
      )}
    </>
  );
};

export default ProjectCard;
