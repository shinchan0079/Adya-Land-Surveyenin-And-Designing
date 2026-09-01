const Hero = ({ title, subtitle, bgImage = "/survey.jpg", overlayOpacity = "bg-opacity-70" }) => {
  return (
    <div className="relative py-24 md:py-32 lg:py-40 bg-[#10263F] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Overlay */}
        <div className={`absolute inset-0 bg-[#10263F] ${overlayOpacity}`}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-body">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Decorative Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-[#10263F] via-[#F59E0B] to-[#10263F]"></div>
    </div>
  );
};

export default Hero;
