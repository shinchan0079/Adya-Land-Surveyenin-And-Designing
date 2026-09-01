import { 
  ArrowRight, 
  MapPin, 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  Clock, 
  AlertCircle,
  Crosshair,
  Target,
  Ruler
} from 'lucide-react';
import Button from '../components/ui/Button';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import QuickEnquiryForm from '../components/forms/QuickEnquiryForm';
import DetailedEnquiryForm from '../components/forms/DetailedEnquiryForm';

const Contact = () => {

  const faqs = [
    {
      q: "How can I request a land survey?",
      a: "You can request a survey by filling out the detailed enquiry form on this page, sending a quick WhatsApp message, or calling our office directly. We will discuss your requirement and guide you on the next steps."
    },
    {
      q: "What details should I provide before the survey?",
      a: "For the most accurate assessment, please provide the site location (village/area/city), approximate land area, the required service (e.g., Topographical or Boundary Survey), and the purpose of the survey."
    },
    {
      q: "Can I send my site location through WhatsApp?",
      a: "Yes, sharing a Google Maps pin or location link via WhatsApp is highly recommended. It helps us understand the accessibility and terrain before scheduling a site visit."
    },
    {
      q: "Does survey pricing depend on land area and location?",
      a: "Yes. Pricing is typically determined by the total site area, the complexity of the terrain, the specific type of survey required, and the distance of the site from our office."
    },
    {
      q: "Can I visit the office directly?",
      a: "Absolutely. You are welcome to visit our office at Gangotri Vihar Colony, Chhota Bharwara, Lucknow during our standard working hours to discuss your project in person."
    },
    {
      q: "Do you provide training enquiries through this page?",
      a: "While you can submit training questions here, we highly recommend using the dedicated Training Enquiry form on our Practical Training page for faster routing."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. CONTACT HERO */}
      <PageHero 
        eyebrow="Contact ADYA"
        title="Let's Discuss Your Site, Survey or Design Requirement."
        description="Have a land survey, civil engineering, design or training requirement? Share the details with us and we'll understand your need before suggesting the appropriate next step."
        image="/site visiting.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us" }
        ]}
      />

      {/* 2. QUICK CONTACT CARDS */}
      <section className="py-10 relative z-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            
            <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center text-center group transition-all">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#10263F] text-base mb-1">Call Us</h3>
              <p className="text-gray-600 font-medium text-sm mb-3">+91 94530 72917</p>
              <a href="tel:+919453072917" className="mt-auto text-xs font-bold text-[#F59E0B] hover:text-orange-600 uppercase tracking-wider">Call Now</a>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center text-center group transition-all">
              <div className="w-12 h-12 bg-green-50 text-[#25D366] rounded-full flex items-center justify-center mb-3 group-hover:bg-green-100 transition-colors">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437-9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="font-bold text-[#10263F] text-base mb-1">WhatsApp</h3>
              <p className="text-gray-600 font-medium text-sm mb-3">+91 94530 72917</p>
              <a href="https://wa.me/919453072917" target="_blank" rel="noopener noreferrer" className="mt-auto text-xs font-bold text-[#25D366] hover:text-green-600 uppercase tracking-wider">Chat on WhatsApp</a>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center text-center group transition-all">
              <div className="w-12 h-12 bg-orange-50 text-[#F59E0B] rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-100 transition-colors">
                <Mail size={22} />
              </div>
              <h3 className="font-bold text-[#10263F] text-base mb-1">Email</h3>
              <p className="text-gray-600 font-medium text-sm mb-3 break-all">adyalandsurvey@gmail.com</p>
              <a href="mailto:adyalandsurvey@gmail.com" className="mt-auto text-xs font-bold text-[#F59E0B] hover:text-orange-600 uppercase tracking-wider">Send Email</a>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center text-center group transition-all">
              <div className="w-12 h-12 bg-gray-50 text-gray-800 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-100 transition-colors">
                <MapPin size={22} />
              </div>
              <h3 className="font-bold text-[#10263F] text-base mb-1">Visit Us</h3>
              <p className="text-gray-500 text-xs mb-3 leading-relaxed">Gangotri Vihar Colony, Chhota Bharwara, Lucknow</p>
              <a href="https://maps.app.goo.gl/nvrMGRPw7kWBqRJy5?g_st=aw" target="_blank" rel="noopener noreferrer" className="mt-auto text-xs font-bold text-gray-800 hover:text-black uppercase tracking-wider">Get Directions</a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAIN CONTACT SECTION & 4. FORM BEHAVIOR */}
      <section id="enquiry" className="py-20 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 max-w-7xl mx-auto">
            
            {/* Left Side: Contact Information */}
            <div className="lg:col-span-4 lg:pr-8">
              <SectionHeading 
                label="Get In Touch"
                title="We're Ready to Understand Your Requirement."
                align="left"
              />
              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                Whether you need land measurement, site surveying, engineering design or practical training, contact ADYA and share your requirement.
              </p>
              
              <div className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full text-[#10263F] mr-4 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10263F] mb-1">Office Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">ADYA Land Surveying And Design<br/>Gangotri Vihar Colony, Chhota Bharwara,<br/>Lucknow, Uttar Pradesh – 226010</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full text-[#10263F] mr-4 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10263F] mb-1">Working Hours</h4>
                    <p className="text-gray-600 text-sm">Monday to Saturday<br/>9:00 AM – 6:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full text-[#10263F] mr-4 shrink-0">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10263F] mb-1">Service Area</h4>
                    <p className="text-gray-600 text-sm">Lucknow and surrounding regions in Uttar Pradesh.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Main Detailed Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#F59E0B]"></div>
                <h3 className="text-2xl font-heading font-bold text-[#10263F] mb-8">Tell Us What You Need.</h3>
                <DetailedEnquiryForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. QUICK SURVEY ENQUIRY */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-[#10263F] p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800 text-center relative overflow-hidden">
            {/* Ambient glows for premium look */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#F59E0B] opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3">Need a Survey?</div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8">
                Request a Quick Survey Discussion.
              </h2>
              <QuickEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHAT TO SHARE BEFORE CONTACTING */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Before You Contact Us"
            title="Help Us Understand Your Requirement Better."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
            {[
              { title: "Site Location", desc: "Village, area, city, or Google Maps pin.", icon: <MapPin size={28} /> },
              { title: "Approximate Area", desc: "Plot/land size in Acres, Sq.Ft, or Bigha if known.", icon: <Ruler size={28} /> },
              { title: "Required Service", desc: "Topographical survey, boundary check, layout, design, etc.", icon: <Crosshair size={28} /> },
              { title: "Purpose", desc: "Construction planning, boundary dispute, property division, etc.", icon: <AlertCircle size={28} /> }
            ].map((prep, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-[#10263F] flex items-center justify-center mb-4">
                  {prep.icon}
                </div>
                <h3 className="font-bold text-[#10263F] text-lg mb-2">{prep.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{prep.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GOOGLE MAPS / LOCATION */}
      <section id="location" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            
            {/* Map Embed */}
            <div className="lg:col-span-7 h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.009054005262!2d81.029687!3d26.844630299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3833b668bef%3A0x7e730d786e0a7369!2sAdya%20Land%20Surveying%20And%20Design!5e1!3m2!1sen!2sin!4v1788259456615!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="ADYA Location Map"
              ></iframe>
            </div>

            {/* Address */}
            <div className="lg:col-span-5 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3">Find Us</div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#10263F] mb-6">
                Visit ADYA in Lucknow.
              </h2>
              
              <div className="mb-8">
                <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider mb-2">Office Location</h4>
                <p className="text-[#10263F] font-bold text-xl mb-1">ADYA Land Surveying And Design</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Gangotri Vihar Colony<br/>
                  Chhota Bharwara<br/>
                  Lucknow, Uttar Pradesh – 226010
                </p>
              </div>

              <a href="https://maps.app.goo.gl/nvrMGRPw7kWBqRJy5?g_st=aw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full bg-[#10263F] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-colors">
                Get Directions <ArrowRight size={20} className="ml-2" />
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* 9. TRAINING ENQUIRY SHORTCUT */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between transition-all hover:shadow-md hover:border-gray-300">
            <div className="text-center md:text-left mb-5 md:mb-0 md:mr-6">
              <h3 className="text-lg font-heading font-bold text-[#10263F] mb-1.5">Looking for Practical Training?</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Students and professionals can contact us separately for current training programs and batch information.</p>
            </div>
            <Button to="/training#enquire" variant="primary" className="whitespace-nowrap shrink-0 !px-5 !py-2 !text-sm !rounded-lg !font-semibold">
              Training Enquiry <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 10. CONTACT FAQ */}
      <FAQSection 
        items={faqs.map(faq => ({ question: faq.q, answer: faq.a }))} 
        title="Common Questions" 
        label="Contact FAQ"
      />

      {/* 12. FINAL CTA */}
      <CTASection 
        eyebrow="Let's Start With Your Requirement"
        title="Have Land to Survey or a Project to Discuss?"
        description="Share your site and service requirements with ADYA and take the next step with an experienced surveying and civil engineering professional."
        primaryText=""
        secondaryText=""
      />

    </div>
  );
};

export default Contact;
