import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

const CTASection = ({
  eyebrow = "Start Your Project",
  title = "Need Accurate Surveying or Professional Engineering Design?",
  description = "Tell us about your land, site or project requirement and let's determine the right service for you.",
  primaryText = "Request a Survey",
  primaryLink = "/quote",
  secondaryText = "Contact Us",
  secondaryLink = "/contact",
  showWhatsApp = true,
  className = ""
}) => {
  return (
    <section className={`py-12 lg:py-16 bg-[#10263F] text-white relative overflow-hidden ${className}`}>
      {/* Background Images / Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10263F] to-[#0A1A2F]"></div>
      <div className="absolute inset-0 opacity-15 bg-[url('/survey.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
        
        {eyebrow && (
          <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
            {eyebrow}
          </div>
        )}
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight text-white">
          {title}
        </h2>
        
        {description && (
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {primaryText && primaryLink && (
            <Button to={primaryLink} variant="primary" className="text-base px-5 py-2.5 text-sm md:text-base shadow-lg shadow-orange-500/20">
              {primaryText} <ArrowRight className="ml-2" size={18} />
            </Button>
          )}
          
          {secondaryText && secondaryLink && (
            <Button to={secondaryLink} variant="light" className="text-base px-5 py-2.5 text-sm md:text-base">
              {secondaryText}
            </Button>
          )}
        </div>

        {showWhatsApp && (
          <div className="mt-8">
            <a href="https://wa.me/919453072917" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-green-400 hover:text-green-300 font-bold transition-colors text-base md:text-lg bg-green-400/10 hover:bg-green-400/20 px-6 py-2 rounded-full">
              <MessageCircle className="mr-2" size={20} /> Chat on WhatsApp
            </a>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default CTASection;
