import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState('');

  const toggleAccordion = (section) => {
    if (openAccordion === section) {
      setOpenAccordion('');
    } else {
      setOpenAccordion(section);
    }
  };

  return (
    <footer className="bg-[#10263F] text-white pt-16 pb-24 md:pb-8 border-t border-[#F59E0B]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP FOOTER (Hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand (Span 3) */}
          <div className="col-span-3">
            <Link to="/" className="inline-block mb-6">
              <img src="/adya_logo_final-.png" alt="Adya Land Surveying And Design" className="h-16 w-auto object-contain bg-white p-2 rounded" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional Civil Engineering & Land Surveying Services.<br/>
              Accurate Land Surveying • Planning • Designing by experienced professionals.
            </p>
            <div className="inline-block border border-gray-700 px-4 py-2 rounded-full text-xs font-bold text-[#F59E0B] tracking-wider uppercase">
              20+ Years of Experience
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="col-span-2 pl-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 flex items-center">
              Quick Links <span className="w-8 h-px bg-[#F59E0B] ml-3"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[#F59E0B] transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#F59E0B] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-[#F59E0B] transition-colors text-sm">Projects</Link></li>
              <li><Link to="/equipment" className="text-gray-400 hover:text-[#F59E0B] transition-colors text-sm">Equipment</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-[#F59E0B] transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#F59E0B] transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services (Span 3) */}
          <div className="col-span-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 flex items-center">
              Services <span className="w-8 h-px bg-[#F59E0B] ml-3"></span>
            </h4>
            <ul className="space-y-3 mb-4">
              <li><Link to="/services/land-surveying" className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-1 mr-2 shrink-0" /> Land Surveying</Link></li>
              <li><Link to="/services/boundary-survey" className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-1 mr-2 shrink-0" /> Boundary Survey</Link></li>
              <li><Link to="/services/topographical-survey" className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-1 mr-2 shrink-0" /> Topographical Survey</Link></li>
              <li><Link to="/services/topographical-survey" className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-1 mr-2 shrink-0" /> Contour / Level Survey</Link></li>
              <li><Link to="/services/land-surveying" className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-1 mr-2 shrink-0" /> Layout / Setting Out</Link></li>
              <li><Link to="/services/civil-engineering-design" className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-1 mr-2 shrink-0" /> Civil Engineering Design</Link></li>
            </ul>
            <Link to="/services" className="text-[#F59E0B] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">View All Services →</Link>
          </div>

          {/* Column 4: Training (Span 2) */}
          <div className="col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 flex items-center">
              Training <span className="w-8 h-px bg-[#F59E0B] ml-3"></span>
            </h4>
            <ul className="space-y-3 mb-4">
              <li><Link to="/training/land-surveying-training" className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-1 mr-2 shrink-0" /> Land Surveying</Link></li>
              <li><Link to="/training/total-station-training" className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-1 mr-2 shrink-0" /> Total Station</Link></li>
              <li><Link to="/training/auto-level-training" className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-1 mr-2 shrink-0" /> Auto Level</Link></li>
              <li><Link to="/training/autocad-civil" className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-1 mr-2 shrink-0" /> AutoCAD for Civil</Link></li>
            </ul>
            <Link to="/training" className="text-[#F59E0B] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">Explore Training →</Link>
          </div>

          {/* Column 5: Contact (Span 2) */}
          <div className="col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 flex items-center">
              Contact ADYA <span className="w-8 h-px bg-[#F59E0B] ml-3"></span>
            </h4>
            <ul className="space-y-4 mb-6">
              <li className="flex text-gray-400 text-sm">
                <MapPin className="text-[#F59E0B] mr-3 shrink-0 mt-0.5" size={16} />
                <a href="https://maps.app.goo.gl/nvrMGRPw7kWBqRJy5?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition-colors">
                  Face 1, CB-614, Gangotri Vihar Colony, Chhota Bharwara, Lucknow – 226010
                </a>
              </li>
              <li className="flex text-gray-400 text-sm">
                <Phone className="text-[#F59E0B] mr-3 shrink-0 mt-0.5" size={16} />
                <span>+91 94530 72917</span>
              </li>
              <li className="flex text-gray-400 text-sm">
                <Mail className="text-[#F59E0B] mr-3 shrink-0 mt-0.5" size={16} />
                <span>adyalandsurvey@gmail.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://wa.me/919453072917" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:scale-110 transition-transform">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437-9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:scale-110 transition-transform">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:scale-110 transition-transform">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* MOBILE FOOTER (Accordion Style) */}
        <div className="lg:hidden mb-12">
          {/* Brand Always Visible */}
          <div className="mb-8 text-center">
            <Link to="/" className="inline-block mb-6">
              <img src="/adya_logo_final-.png" alt="Adya Land Surveying And Design" className="h-12 w-auto object-contain bg-white p-2 rounded mx-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional Civil Engineering & Land Surveying Services.<br/>
              Accurate Land Surveying • Planning • Designing by experienced professionals.
            </p>
            <div className="inline-block border border-gray-700 px-4 py-2 rounded-full text-xs font-bold text-[#F59E0B] tracking-wider uppercase">
              20+ Years of Experience
            </div>
          </div>

          <div className="border-t border-gray-800 divide-y divide-gray-800">
            {/* Quick Links Accordion */}
            <div>
              <button 
                onClick={() => toggleAccordion('links')}
                className="w-full py-4 flex justify-between items-center text-white font-bold uppercase tracking-wider text-sm focus:outline-none"
              >
                Quick Links
                <ChevronDown size={18} className={`transform transition-transform ${openAccordion === 'links' ? 'rotate-180 text-[#F59E0B]' : 'text-gray-500'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'links' ? 'max-h-64 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-3 pl-2">
                  <li><Link to="/about" className="text-gray-400 text-sm">About Us</Link></li>
                  <li><Link to="/projects" className="text-gray-400 text-sm">Projects</Link></li>
                  <li><Link to="/equipment" className="text-gray-400 text-sm">Equipment</Link></li>
                  <li><Link to="/gallery" className="text-gray-400 text-sm">Gallery</Link></li>
                </ul>
              </div>
            </div>

            {/* Services Accordion */}
            <div>
              <button 
                onClick={() => toggleAccordion('services')}
                className="w-full py-4 flex justify-between items-center text-white font-bold uppercase tracking-wider text-sm focus:outline-none"
              >
                Services
                <ChevronDown size={18} className={`transform transition-transform ${openAccordion === 'services' ? 'rotate-180 text-[#F59E0B]' : 'text-gray-500'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'services' ? 'max-h-[400px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-3 pl-2 mb-3">
                  <li><Link to="/services/land-surveying" className="text-gray-400 text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-0.5 mr-2 shrink-0" /> Land Surveying</Link></li>
                  <li><Link to="/services/boundary-survey" className="text-gray-400 text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-0.5 mr-2 shrink-0" /> Boundary Survey</Link></li>
                  <li><Link to="/services/topographical-survey" className="text-gray-400 text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-0.5 mr-2 shrink-0" /> Topographical Survey</Link></li>
                  <li><Link to="/services/civil-engineering-design" className="text-gray-400 text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-0.5 mr-2 shrink-0" /> Civil Engineering Design</Link></li>
                </ul>
                <Link to="/services" className="text-[#F59E0B] text-xs font-bold pl-2">View All Services →</Link>
              </div>
            </div>

            {/* Training Accordion */}
            <div>
              <button 
                onClick={() => toggleAccordion('training')}
                className="w-full py-4 flex justify-between items-center text-white font-bold uppercase tracking-wider text-sm focus:outline-none"
              >
                Training
                <ChevronDown size={18} className={`transform transition-transform ${openAccordion === 'training' ? 'rotate-180 text-[#F59E0B]' : 'text-gray-500'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'training' ? 'max-h-64 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-3 pl-2 mb-3">
                  <li><Link to="/training/total-station-training" className="text-gray-400 text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-0.5 mr-2 shrink-0" /> Total Station Training</Link></li>
                  <li><Link to="/training/land-surveying-training" className="text-gray-400 text-sm flex items-start"><ArrowRight size={14} className="text-[#F59E0B] mt-0.5 mr-2 shrink-0" /> Land Surveying Training</Link></li>
                </ul>
                <Link to="/training" className="text-[#F59E0B] text-xs font-bold pl-2">Explore Training →</Link>
              </div>
            </div>

            {/* Contact Accordion */}
            <div>
              <button 
                onClick={() => toggleAccordion('contact')}
                className="w-full py-4 flex justify-between items-center text-white font-bold uppercase tracking-wider text-sm focus:outline-none"
              >
                Contact
                <ChevronDown size={18} className={`transform transition-transform ${openAccordion === 'contact' ? 'rotate-180 text-[#F59E0B]' : 'text-gray-500'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'contact' ? 'max-h-64 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-4 pl-2">
                  <li className="flex text-gray-400 text-sm">
                    <MapPin className="text-[#F59E0B] mr-3 shrink-0 mt-0.5" size={16} />
                    <a href="https://maps.app.goo.gl/nvrMGRPw7kWBqRJy5?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition-colors">
                      Face 1, CB-614, Gangotri Vihar Colony, Lucknow – 226010
                    </a>
                  </li>
                  <li className="flex text-gray-400 text-sm">
                    <Phone className="text-[#F59E0B] mr-3 shrink-0 mt-0.5" size={16} />
                    <span>+91 94530 72917</span>
                  </li>
                  <li className="flex text-gray-400 text-sm">
                    <Mail className="text-[#F59E0B] mr-3 shrink-0 mt-0.5" size={16} />
                    <span>adyalandsurvey@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2026 ADYA Land Surveying And Design. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm font-bold text-gray-500">
            <Link to="/privacy" className="hover:text-[#F59E0B] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#F59E0B] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
