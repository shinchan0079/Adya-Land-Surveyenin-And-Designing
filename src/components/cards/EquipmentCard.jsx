const EquipmentCard = ({ 
  title, 
  description, 
  image, 
  uses = [],
  className = "" 
}) => {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group ${className}`}>
      
      <div className="h-48 overflow-hidden relative bg-gray-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#10263F]/20 group-hover:bg-transparent transition-colors z-10"></div>
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        ) : (
          <div className="text-gray-400">No Image</div>
        )}
      </div>
      
      <div className="p-6 text-center border-b border-gray-50">
        <h3 className="font-bold text-[#10263F] text-xl mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
      
      {uses.length > 0 && (
        <div className="p-4 bg-gray-50 flex flex-wrap justify-center gap-2">
          {uses.map((use, idx) => (
            <span key={idx} className="bg-white border border-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {use}
            </span>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default EquipmentCard;
