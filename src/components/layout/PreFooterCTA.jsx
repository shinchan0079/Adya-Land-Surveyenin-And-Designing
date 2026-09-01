import { ArrowRight, Phone } from 'lucide-react';
import Button from '../ui/Button';

const PreFooterCTA = () => {
  return (
    <section className="bg-gray-100 py-16 relative overflow-hidden border-t border-gray-200">
      {/* Subtle Contour Map Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/site visiting2.jpg')] bg-cover bg-center mix-blend-multiply"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
        <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3">HAVE A SITE TO SURVEY?</div>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#10263F] mb-8">
          Let's Discuss Your Requirement.
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button to="/quote" variant="primary" className="text-lg px-10 py-4 shadow-lg shadow-orange-500/20 w-full sm:w-auto">
            Request a Survey <ArrowRight className="ml-2" size={20} />
          </Button>
          <a href="tel:+919453072917" className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 border-2 border-[#10263F] text-[#10263F] font-bold rounded-full hover:bg-[#10263F] hover:text-white transition-colors">
            <Phone size={20} className="mr-2" /> Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
