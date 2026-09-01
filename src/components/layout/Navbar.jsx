import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu } from 'lucide-react';
import Button from '../ui/Button';
import { servicesData } from '../../data/serviceData';
import { trainingPrograms } from '../../data/trainingData';

const Navbar = ({ isScrolled, setIsMobileMenuOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');
  const isTrainingActive = location.pathname.startsWith('/training');

  return (
    <div className={`w-full bg-white transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 shadow-md z-50' : 'relative z-40 border-b border-gray-100'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'}`}>
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src="/adya_logo_final-.png" alt="ADYA Logo" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-bold tracking-wider uppercase transition-colors relative group ${isActive('/') ? 'text-[#10263F]' : 'text-gray-600 hover:text-[#10263F]'}`}>
              Home
              {isActive('/') && <span className="absolute -bottom-2 left-1/2 w-1/2 h-0.5 bg-[#F59E0B] transform -translate-x-1/2"></span>}
            </Link>
            
            <Link to="/about" className={`text-sm font-bold tracking-wider uppercase transition-colors relative group ${isActive('/about') ? 'text-[#10263F]' : 'text-gray-600 hover:text-[#10263F]'}`}>
              About
              {isActive('/about') && <span className="absolute -bottom-2 left-1/2 w-1/2 h-0.5 bg-[#F59E0B] transform -translate-x-1/2"></span>}
            </Link>

            {/* Services Mega Dropdown */}
            <div className="relative group h-full py-8">
              <button className={`text-sm font-bold tracking-wider uppercase transition-colors flex items-center ${isServicesActive ? 'text-[#10263F]' : 'text-gray-600 group-hover:text-[#10263F]'}`}>
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              {isServicesActive && <span className="absolute bottom-6 left-1/2 w-1/2 h-0.5 bg-[#F59E0B] transform -translate-x-1/2"></span>}
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out mt-0 pointer-events-none group-hover:pointer-events-auto overflow-hidden">
                <div className="grid grid-cols-2 p-6 gap-x-8 gap-y-4">
                  {Object.values(servicesData).map((service, idx) => (
                    <Link key={idx} to={`/services/${service.slug}`} className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors group/link">
                      <ArrowRight size={16} className="text-[#F59E0B] mt-1 mr-3 shrink-0 transform group-hover/link:translate-x-1 transition-transform" />
                      <div>
                        <div className="font-bold text-[#10263F] text-sm mb-1">{service.quickInfo.service}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
                  <Link to="/services" className="text-sm font-bold text-[#10263F] uppercase tracking-wider hover:text-[#F59E0B] transition-colors">
                    View All Services Overview
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/projects" className={`text-sm font-bold tracking-wider uppercase transition-colors relative group ${isActive('/projects') ? 'text-[#10263F]' : 'text-gray-600 hover:text-[#10263F]'}`}>
              Projects
              {isActive('/projects') && <span className="absolute -bottom-2 left-1/2 w-1/2 h-0.5 bg-[#F59E0B] transform -translate-x-1/2"></span>}
            </Link>

            {/* Training Dropdown */}
            <div className="relative group h-full py-8">
              <button className={`text-sm font-bold tracking-wider uppercase transition-colors flex items-center ${isTrainingActive ? 'text-[#10263F]' : 'text-gray-600 group-hover:text-[#10263F]'}`}>
                Training <ChevronDown size={16} className="ml-1" />
              </button>
              {isTrainingActive && <span className="absolute bottom-6 left-1/2 w-1/2 h-0.5 bg-[#F59E0B] transform -translate-x-1/2"></span>}
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[350px] bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out mt-0 pointer-events-none group-hover:pointer-events-auto overflow-hidden">
                <div className="flex flex-col p-4">
                  {trainingPrograms.map((program, idx) => (
                    <Link key={idx} to={`/training/${program.slug}`} className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group/link">
                      <ArrowRight size={16} className="text-[#F59E0B] mr-3 shrink-0 transform group-hover/link:translate-x-1 transition-transform" />
                      <span className="font-bold text-[#10263F] text-sm">{program.quickInfo.program}</span>
                    </Link>
                  ))}
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
                  <Link to="/training" className="text-sm font-bold text-[#10263F] uppercase tracking-wider hover:text-[#F59E0B] transition-colors">
                    View All Training Programs
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/gallery" className={`text-sm font-bold tracking-wider uppercase transition-colors relative group ${isActive('/gallery') ? 'text-[#10263F]' : 'text-gray-600 hover:text-[#10263F]'}`}>
              Gallery
              {isActive('/gallery') && <span className="absolute -bottom-2 left-1/2 w-1/2 h-0.5 bg-[#F59E0B] transform -translate-x-1/2"></span>}
            </Link>
            
            <Link to="/contact" className={`text-sm font-bold tracking-wider uppercase transition-colors relative group ${isActive('/contact') ? 'text-[#10263F]' : 'text-gray-600 hover:text-[#10263F]'}`}>
              Contact
              {isActive('/contact') && <span className="absolute -bottom-2 left-1/2 w-1/2 h-0.5 bg-[#F59E0B] transform -translate-x-1/2"></span>}
            </Link>

            <Button to="/quote" variant="primary" className="ml-4 px-6 py-3 shadow-md text-sm">
              Request a Survey <ArrowRight size={16} className="ml-2" />
            </Button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="xl:hidden flex items-center">
            <Link to="/quote" className="md:hidden bg-[#10263F] text-[#F59E0B] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg mr-4">
              Survey
            </Link>
            <button 
              className="text-[#10263F] p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={32} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
