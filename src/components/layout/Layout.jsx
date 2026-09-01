import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ContactBar from './ContactBar';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import PreFooterCTA from './PreFooterCTA';
import FloatingWhatsApp from './FloatingWhatsApp';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState('');
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide PreFooterCTA on Contact or Quote pages
  const hidePreFooter = location.pathname === '/contact' || location.pathname === '/quote';

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white selection:bg-[#F59E0B] selection:text-white overflow-x-hidden">
      <header className="w-full z-50">
        <ContactBar />
        <Navbar 
          isScrolled={isScrolled} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          setIsOpen={setIsMobileMenuOpen} 
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        />
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>

      {!hidePreFooter && <PreFooterCTA />}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
