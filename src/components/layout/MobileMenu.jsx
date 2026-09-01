import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import Button from '../ui/Button';
import { servicesData } from '../../data/serviceData';
import { trainingPrograms } from '../../data/trainingData';

const MobileMenu = ({ 
  isOpen, 
  setIsOpen, 
  activeAccordion, 
  setActiveAccordion 
}) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? '' : section);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#10263F]/50 backdrop-blur-sm z-[50] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Drawer */}
      <div className={`fixed inset-y-0 right-0 w-[90%] max-w-sm bg-white z-[60] overflow-y-auto transition-transform duration-300 transform shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img src="/adya_logo_final-.png" alt="ADYA Logo" className="h-10 w-auto" />
        </Link>
        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-[#10263F] p-2 bg-gray-100 rounded-full">
          <X size={24} />
        </button>
      </div>

      <nav className="p-6 pb-24 flex flex-col space-y-2">
        <Link to="/" className="py-4 text-xl font-bold text-[#10263F] border-b border-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="py-4 text-xl font-bold text-[#10263F] border-b border-gray-50" onClick={() => setIsOpen(false)}>About Us</Link>
        
        {/* Services Accordion */}
        <div>
          <button 
            onClick={() => toggleAccordion('services')}
            className="w-full py-4 flex justify-between items-center text-xl font-bold text-[#10263F] border-b border-gray-50 focus:outline-none"
          >
            Services
            <span className="text-2xl text-[#F59E0B] font-light">{activeAccordion === 'services' ? '−' : '+'}</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-xl mt-2 ${activeAccordion === 'services' ? 'max-h-[1000px] p-4 opacity-100' : 'max-h-0 opacity-0'}`}>
            <Link to="/services" className="block py-3 font-bold text-[#F59E0B] text-sm uppercase tracking-wider" onClick={() => setIsOpen(false)}>All Services Overview</Link>
            {Object.values(servicesData).map((service, idx) => (
              <Link key={idx} to={`/services/${service.slug}`} className="block py-3 font-semibold text-gray-600" onClick={() => setIsOpen(false)}>
                {service.quickInfo.service}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/projects" className="py-4 text-xl font-bold text-[#10263F] border-b border-gray-50" onClick={() => setIsOpen(false)}>Projects</Link>
        
        {/* Training Accordion */}
        <div>
          <button 
            onClick={() => toggleAccordion('training')}
            className="w-full py-4 flex justify-between items-center text-xl font-bold text-[#10263F] border-b border-gray-50 focus:outline-none"
          >
            Training
            <span className="text-2xl text-[#F59E0B] font-light">{activeAccordion === 'training' ? '−' : '+'}</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-xl mt-2 ${activeAccordion === 'training' ? 'max-h-[500px] p-4 opacity-100' : 'max-h-0 opacity-0'}`}>
            <Link to="/training" className="block py-3 font-bold text-[#F59E0B] text-sm uppercase tracking-wider" onClick={() => setIsOpen(false)}>All Training Programs</Link>
            {trainingPrograms.map((program, idx) => (
              <Link key={idx} to={`/training/${program.slug}`} className="block py-3 font-semibold text-gray-600" onClick={() => setIsOpen(false)}>
                {program.quickInfo.program}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/equipment" className="py-4 text-xl font-bold text-[#10263F] border-b border-gray-50" onClick={() => setIsOpen(false)}>Equipment</Link>
        <Link to="/gallery" className="py-4 text-xl font-bold text-[#10263F] border-b border-gray-50" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link to="/contact" className="py-4 text-xl font-bold text-[#10263F] border-b border-gray-50" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>

      {/* Mobile Menu Bottom Fix */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
        <Button to="/quote" variant="primary" className="w-full justify-center py-4 text-lg" onClick={() => setIsOpen(false)}>
          Request a Survey
        </Button>
      </div>
      </div>
    </>
  );
};

export default MobileMenu;
