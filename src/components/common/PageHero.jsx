import React from 'react';

const PageHero = ({ 
  eyebrow, 
  title, 
  description, 
  image, 
  breadcrumb,
  className = ''
}) => {
  return (
    <section className={`bg-[#10263F] relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20 ${className}`}>
      {/* Background Image / Overlay */}
      {image && (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="absolute inset-0 bg-[#10263F]/80 mix-blend-multiply"></div>
        </>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">

          {eyebrow && (
            <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
              {eyebrow}
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          
          {description && (
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default PageHero;
