import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';

const privacySections = [
  { id: "information-collection", title: "1. Information We Collect" },
  { id: "use-of-information", title: "2. How We Use Information" },
  { id: "data-sharing", title: "3. Information Sharing" },
  { id: "data-security", title: "4. Data Security" },
  { id: "cookies", title: "5. Cookies & Tracking" },
  { id: "third-party", title: "6. Third-Party Links" },
  { id: "user-rights", title: "7. Your Rights" },
  { id: "changes", title: "8. Changes to Privacy Policy" },
  { id: "contact", title: "9. Contact Us" }
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = privacySections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(privacySections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* 1. PRIVACY HERO */}
      <section className="bg-white border-b border-gray-200 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-4 py-2 mb-6 rounded-full uppercase tracking-wider">
            PRIVACY POLICY
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#10263F] mb-6">
            How We Protect Your Data.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            This Privacy Policy explains how ADYA Land Surveying And Design collects, uses, and protects your personal information when you use our website or services.
          </p>
          <div className="text-sm font-bold text-gray-400">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT LAYOUT */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Mobile Dropdown */}
            <div className="lg:hidden sticky top-20 z-30 bg-white border border-gray-200 rounded-xl shadow-sm mb-8">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full flex justify-between items-center px-4 py-3 font-bold text-[#10263F]"
              >
                Jump to Section <ChevronDown size={20} className={`transform transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileMenuOpen && (
                <div className="border-t border-gray-100 max-h-64 overflow-y-auto">
                  {privacySections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 text-sm border-b border-gray-50 ${activeSection === section.id ? 'bg-blue-50 text-[#F59E0B] font-bold' : 'text-gray-600'}`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Sticky Sidebar */}
            <aside className="hidden lg:block w-1/4 shrink-0">
              <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-h-[80vh] overflow-y-auto">
                <h3 className="font-bold text-[#10263F] uppercase tracking-wider text-xs mb-6">Table of Contents</h3>
                <nav className="space-y-1">
                  {privacySections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${activeSection === section.id ? 'bg-[#10263F] text-white font-bold' : 'text-gray-600 hover:bg-gray-100 hover:text-[#10263F]'}`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content Area */}
            <main className="lg:w-3/4 max-w-4xl bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm text-gray-700 leading-relaxed space-y-12">
              
              <section id="information-collection">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">1. Information We Collect</h2>
                <p>We may collect personal information such as your name, contact details (phone, email, WhatsApp), qualification, location, and specific project requirements when you voluntarily submit forms on our website (e.g., Contact Form, Survey Request, Training Enquiry).</p>
              </section>

              <section id="use-of-information">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">2. How We Use Information</h2>
                <p>The information we collect is used to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Understand your specific surveying, design, or training requirements.</li>
                  <li>Communicate with you regarding quotes, appointments, or program details.</li>
                  <li>Improve our website services and offerings based on user feedback.</li>
                </ul>
              </section>

              <section id="data-sharing">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">3. Information Sharing</h2>
                <p>We do not sell, trade, or rent your personal identification information to third parties. We may share necessary information with trusted third-party service providers (such as communication tools like WhatsApp) solely for the purpose of operating our business and providing you with requested services, subject to their respective privacy policies.</p>
              </section>

              <section id="data-security">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">4. Data Security</h2>
                <p>We adopt appropriate data collection, storage, and processing practices to protect against unauthorized access, alteration, or disclosure of your personal information. However, no data transmission over the internet or any wireless network can be guaranteed to be 100% secure.</p>
              </section>

              <section id="cookies">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">5. Cookies & Tracking</h2>
                <p>Our website may use "cookies" to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.</p>
              </section>

              <section id="third-party">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">6. Third-Party Links</h2>
                <p>Our website may contain links to external sites (such as Google Maps or WhatsApp). We are not responsible for the privacy practices or content of these third-party websites.</p>
              </section>

              <section id="user-rights">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">7. Your Rights</h2>
                <p>Depending on your jurisdiction, you may have the right to request access to the personal data we hold about you, request corrections, or request deletion of your data. Contact us directly to exercise these rights.</p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">8. Changes to Privacy Policy</h2>
                <p>ADYA Land Surveying And Design has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes. You acknowledge and agree that it is your responsibility to review this privacy policy periodically.</p>
              </section>

              <section id="contact" className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-12">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">9. Questions About Privacy?</h2>
                <div className="space-y-2 mb-8">
                  <p className="font-bold text-[#10263F]">ADYA Land Surveying And Design</p>
                  <p><strong>Address:</strong> Face 1, CB-614, Gangotri Vihar Colony, Chhota Bharwara, Lucknow – 226010</p>
                  <p><strong>Phone:</strong> +91 94530 72917</p>
                  <p><strong>Email:</strong> adyalandsurvey@gmail.com</p>
                </div>
                <Button to="/contact" variant="primary" className="px-5 py-2.5 text-sm md:text-base">
                  Contact Us <ArrowRight className="ml-2" size={18} />
                </Button>
              </section>

            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
