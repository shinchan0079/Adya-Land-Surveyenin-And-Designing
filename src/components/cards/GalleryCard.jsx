import { Maximize2, MapPin } from 'lucide-react';

const GalleryCard = ({ 
  image, 
  title, 
  category, 
  location, 
  onClick,
  className = "" 
}) => {
  return (
    <div 
      className={`relative group rounded-2xl overflow-hidden shadow-sm cursor-pointer border border-gray-100 ${className}`}
      onClick={onClick}
    >
      <div className="aspect-w-4 aspect-h-3 h-64 bg-gray-200">
        <img 
          src={image} 
          alt={title || category} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          loading="lazy"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10263F]/90 via-[#10263F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
          <Maximize2 size={20} />
        </div>

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {category && (
            <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-2 block">
              {category}
            </span>
          )}
          
          {title && (
            <h3 className="text-white font-bold text-lg mb-1 leading-tight">
              {title}
            </h3>
          )}
          
          {location && (
            <div className="flex items-center text-gray-300 text-xs font-medium mt-2">
              <MapPin size={12} className="mr-1" />
              {location}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default GalleryCard;
