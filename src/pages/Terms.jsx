import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';

const termsSections = [
  { id: "acceptance", title: "2. Acceptance of Terms" },
  { id: "website-info", title: "3. Website Information" },
  { id: "services", title: "4. Surveying & Engineering Services" },
  { id: "request", title: "5. Request a Survey" },
  { id: "quotations", title: "6. Quotations & Pricing" },
  { id: "site-access", title: "7. Site Visit & Access" },
  { id: "client-info", title: "8. Client-Provided Information" },
  { id: "documents", title: "9. Land Documents & Ownership" },
  { id: "accuracy", title: "10. Survey Accuracy & Conditions" },
  { id: "deliverables", title: "11. Drawings & Deliverables" },
  { id: "changes", title: "12. Changes in Project Scope" },
  { id: "timelines", title: "13. Project Timeline" },
  { id: "payments", title: "14. Payment Terms" },
  { id: "cancellation", title: "15. Cancellation / Rescheduling" },
  { id: "training", title: "16. Training Terms" },
  { id: "conduct", title: "17. Training Conduct" },
  { id: "ip", title: "18. Intellectual Property" },
  { id: "gallery", title: "20. Gallery & Project Showcase" },
  { id: "third-party", title: "21. Third-Party Services" },
  { id: "availability", title: "22. Website Availability" },
  { id: "liability", title: "23. Limitation of Liability" },
  { id: "updates", title: "24. Changes to Terms" },
  { id: "law", title: "25. Governing Law" },
  { id: "contact", title: "26. Contact Us" }
];

const Terms = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = termsSections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(termsSections[i].id);
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
      
      {/* 1. TERMS HERO */}
      <section className="bg-white border-b border-gray-200 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-4 py-2 mb-6 rounded-full uppercase tracking-wider">
            TERMS & CONDITIONS
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#10263F] mb-6">
            Terms for Using Our Website & Services.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            These Terms & Conditions outline the general terms applicable to the use of the ADYA Land Surveying And Design website, enquiries, quotations, surveying and engineering services, and training-related information.
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
                  {termsSections.map((section) => (
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
                  {termsSections.map((section) => (
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
              
              <section id="acceptance">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">2. Acceptance of Terms</h2>
                <p>By accessing this website or submitting an enquiry, users agree to use the website in accordance with these Terms & Conditions and applicable laws.</p>
              </section>

              <section id="website-info">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">3. Website Information</h2>
                <p>Information available on this website is provided for general informational purposes and to help visitors understand the services offered by ADYA.</p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4 text-sm rounded-r-lg">
                  <strong>Important:</strong> Service descriptions on this website do not imply that the exact same scope will be universally applicable to every project or site.
                </div>
              </section>

              <section id="services">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">4. Surveying & Engineering Services</h2>
                <p>The actual scope of any service will depend on various factors, including but not limited to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Type of survey or service requested</li>
                  <li>Land or site area and location</li>
                  <li>Site conditions and accessibility</li>
                  <li>Required measurements, drawings, and deliverables</li>
                  <li>Availability of existing documents</li>
                </ul>
                <p className="mt-4">The final scope of work is decided only after a thorough discussion and official quotation.</p>
              </section>

              <section id="request">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">5. Request a Survey (Online Enquiries)</h2>
                <p className="font-bold text-[#10263F]">Submission of a survey or project enquiry does not by itself constitute confirmation of a booking, site visit or service agreement.</p>
                <p className="mt-4">Our standard procedure follows this flow: Enquiry → Discussion → Scope Definition → Quotation → Confirmation → Work Execution.</p>
              </section>

              <section id="quotations">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">6. Quotations & Pricing</h2>
                <p>Pricing may vary according to the nature, location, size, complexity, and scope of the work. Submitting an enquiry on our website does not automatically lock in a final price.</p>
                <p className="mt-4">Official quotations will explicitly mention the Scope of Work, Price, Payment Terms, Deliverables, Validity, and Timeline.</p>
              </section>

              <section id="site-access">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">7. Site Visit & Access</h2>
                <p>It is the client's responsibility to provide reasonable and safe site access for the agreed work. Restrictions, unsafe conditions, physical barriers, or lack of permissions may impact the execution of the work.</p>
              </section>

              <section id="client-info">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">8. Client-Provided Information</h2>
                <p>Users should provide accurate and relevant information when submitting site details, project requirements, maps, drawings or other documents. Incorrect or incomplete information may affect the project scope and validity of the quotation.</p>
              </section>

              <section id="documents">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">9. Land Documents & Ownership</h2>
                <p>Uploading documents or requesting a survey through ADYA does <strong>not</strong> mean we:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Certify land ownership</li>
                  <li>Decide or resolve legal title disputes</li>
                  <li>Replace or supersede any government authority</li>
                </ul>
                <p className="mt-4">Our surveying and engineering scope provides technical field data and should not be confused with legal title verification.</p>
              </section>

              <section id="accuracy">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">10. Survey Accuracy & Site Conditions</h2>
                <p>Surveying work is performed according to the agreed scope, available information, professional methods applicable to the specific requirement, and existing physical site conditions.</p>
              </section>

              <section id="deliverables">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">11. Drawings & Deliverables</h2>
                <p>Deliverables will be generated according to the specific project (e.g., survey drawing, site plan, CAD file, engineering design). Only the specific deliverables explicitly included in the agreed scope should be considered part of the service.</p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">12. Changes in Project Scope</h2>
                <p>Any additional requirements requested after the original quotation (e.g., adding contour mapping to a boundary survey, or requesting extra area coverage) will not be automatically included in the original quote. Changes or additional requirements may require a revised scope, timeline, and pricing.</p>
              </section>

              <section id="timelines">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">13. Project Timeline</h2>
                <p>Project timelines may depend heavily on site size, location, accessibility, weather conditions, required outputs, and scope changes. Specific, committed timelines will only be provided within a formal quotation or agreement.</p>
              </section>

              <section id="payments">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">14. Payment Terms</h2>
                <p>Payment terms, advance requirements, milestones, and final payment conditions will be communicated according to the applicable quotation or agreement prior to the commencement of work.</p>
              </section>

              <section id="cancellation">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">15. Cancellation & Rescheduling</h2>
                <p>Cancellations or rescheduling of site visits and projects may be subject to non-refundable expenses if travel has already been undertaken, work has commenced, or specific resources were allocated. Specific policies will be detailed in the project agreement.</p>
              </section>

              <section id="training">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">16. Training Terms</h2>
                <p>For training programs offered by ADYA:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Programs, batch schedules, fees, and course modules are subject to change.</li>
                  <li>Equipment availability and practical sessions depend on the actual course structure.</li>
                  <li>Certificates are provided only if specifically offered in the program details.</li>
                </ul>
                <div className="bg-orange-50 border-l-4 border-[#F59E0B] p-4 mt-4 text-sm rounded-r-lg">
                  <strong>Important:</strong> Participation in a training program does not constitute a guarantee of employment or placement unless expressly stated in a separate written commitment.
                </div>
              </section>

              <section id="conduct">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">17. Training Conduct</h2>
                <p>Students are expected to follow trainer instructions, use highly sensitive surveying equipment responsibly, maintain appropriate professional conduct, and strictly adhere to field and site safety requirements.</p>
              </section>

              <section id="ip">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">18. Intellectual Property</h2>
                <p>The logo, branding, text, graphics, original photographs, website design, and content of this website are the property of ADYA Land Surveying And Design. Unauthorized copying or reuse is restricted subject to applicable law.</p>
                <p className="mt-4 text-sm"><em>Note: Client-uploaded documents and specific project deliverables prepared for a client are governed by their respective project agreements.</em></p>
              </section>

              <section id="gallery">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">20. Gallery & Project Showcase</h2>
                <p>Project photographs, drawings, or information are only published where ADYA has the appropriate right or permission to display them. Sensitive client details (e.g., phone numbers, private addresses, confidential coordinates) are actively avoided or redacted in public showcases.</p>
              </section>

              <section id="third-party">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">21. Third-Party Services</h2>
                <p>This website may utilize third-party services (e.g., Google Maps, WhatsApp, external links). Your interaction with these third-party platforms is governed by their respective terms and privacy policies.</p>
              </section>

              <section id="availability">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">22. Website Availability</h2>
                <p>ADYA does not guarantee that the website will always be uninterrupted or error-free. Access may be temporarily suspended due to maintenance, hosting issues, or network connectivity problems.</p>
              </section>

              <section id="liability">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">23. Limitation of Liability</h2>
                <p>To the extent permitted by applicable law, responsibility relating to website use and subsequent services should be subject to the applicable service scope, official agreement, and legal requirements.</p>
              </section>

              <section id="updates">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">24. Changes to Terms</h2>
                <p>These Terms & Conditions may be updated when website features, services, or business practices change. Users are encouraged to review this page periodically.</p>
              </section>

              <section id="law">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">25. Governing Law</h2>
                <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the courts in Lucknow, Uttar Pradesh.</p>
              </section>

              <section id="contact" className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-12">
                <h2 className="text-2xl font-bold text-[#10263F] mb-4">26. Questions About These Terms?</h2>
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

export default Terms;
