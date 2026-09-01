import { 
  ArrowRight, 
  MapPin, 
  Ruler, 
  FileText,
  MessageCircle,
  PhoneCall,
  AlertCircle,
  ShieldCheck,
  Target
} from 'lucide-react';
import Button from '../components/ui/Button';
import FAQSection from '../components/common/FAQSection';
import PageHero from '../components/common/PageHero';
import ProcessSteps from '../components/common/ProcessSteps';
import SurveyRequestForm from '../components/forms/SurveyRequestForm';
import FadeIn from '../components/common/FadeIn';
import { StaggerContainer, itemVariants } from '../components/common/StaggerContainer';
import { motion } from 'framer-motion';

const Quote = () => {

  const faqs = [
    {
      q: "Do I need to know exactly which survey I need?",
      a: "Not necessarily. If you are unsure, just select the service you think fits best or choose 'Other', and describe your actual requirement in Step 3. Our engineers will review it and suggest the appropriate survey type."
    },
    {
      q: "Can I send my site location through Google Maps?",
      a: "Yes! While submitting the form, you can paste your Google Maps link in the location field. This is very helpful for our team to assess the site."
    },
    {
      q: "Do I need to upload land documents?",
      a: "No, uploading documents is completely optional. If you don't have them right now, you can select 'I will share them later' in Step 4 and proceed."
    },
    {
      q: "How is the surveying cost calculated?",
      a: "Surveying cost depends on factors like the total land area, location (distance from our office), terrain complexity, and the specific outputs required (e.g., contour intervals, CAD drawings). We will provide a precise quotation after discussing your submitted requirement."
    },
    {
      q: "Is submitting the form a confirmed booking?",
      a: "No. Submitting this form is simply a request for discussion and a quotation. No work is confirmed until we have discussed the scope and you approve the final quotation."
    },
    {
      q: "Can I discuss my requirement directly by phone or WhatsApp?",
      a: "Absolutely! You can use the 'Chat on WhatsApp' button below or visit our Contact page to call us directly."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* 1. PAGE HERO */}
      <section className="bg-[#10263F] relative overflow-hidden pt-8 lg:pt-12 pb-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/site visiting2.jpg')] bg-cover bg-center mix-blend-screen grayscale"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right" className="max-w-xl">
              <div className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-2 mb-6 rounded-sm uppercase tracking-wider border border-white/20">
                Request a Survey
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
                Tell Us About Your Site.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                Share a few details about your land, site or engineering requirement. This information will help us understand the scope of work before discussing the next steps.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2} className="relative h-[300px] lg:h-[400px] hidden md:block">
              <img src="/survey2.jpg" alt="Survey Map" className="absolute top-0 right-0 w-3/4 h-3/4 object-cover rounded-sm border border-white/20 shadow-2xl z-10 grayscale-[30%]" />
              <img src="/survey3.jpg" alt="Total Station" className="absolute bottom-0 left-0 w-2/3 h-2/3 object-cover rounded-sm border-8 border-[#10263F] shadow-2xl z-20 grayscale-[30%]" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. QUICK INFORMATION STRIP */}
      <section className="bg-white border-b border-gray-200 relative z-20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {[
              { icon: <MapPin size={24} />, title: "Site Details", desc: "Tell us where the project is located." },
              { icon: <Ruler size={24} />, title: "Survey Requirement", desc: "Select the service you need." },
              { icon: <FileText size={24} />, title: "Available Documents", desc: "Share relevant drawings if required." },
              { icon: <PhoneCall size={24} />, title: "Discussion", desc: "We can discuss after submission." }
            ].map((item, idx) => (
              <motion.div variants={itemVariants} key={idx} className="p-6 flex items-start group">
                <div className="text-[#F59E0B] mr-4 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#10263F] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* MAIN FORM AREA */}
      <section id="form" className="py-8 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SurveyRequestForm />
        </div>
      </section>

      {/* 15. HOW IT WORKS */}
      <section className="py-10 lg:py-12 bg-[#10263F] text-white border-t-4 border-[#F59E0B]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-3 font-mono">How It Works</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              What Happens After You Submit?
            </h2>
          </div>

          <ProcessSteps 
            steps={[
              { title: "SUBMIT REQUIREMENT", description: "" },
              { title: "REQUIREMENT REVIEW", description: "" },
              { title: "DISCUSSION", description: "" },
              { title: "SITE VISIT", description: "(if required/confirmed)" },
              { title: "SCOPE / QUOTATION", description: "" },
              { title: "WORK COMMENCES", description: "(after confirmation)" }
            ]}
            theme="dark"
          />
        </div>
      </section>

      {/* 16. QUOTE DISCLAIMER */}
      <section className="py-10 bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeIn direction="up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-gray-200 text-[#10263F] rounded-full mb-6 shadow-sm">
              <AlertCircle size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#10263F] mb-6">
              How Is Survey Cost Determined?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed bg-white p-8 rounded-sm shadow-sm border border-gray-200 text-left md:text-center">
              Surveying requirements can vary greatly depending on factors such as site location, total land area, type of survey, site conditions (vegetation/structures), required outputs, and scope of work. <strong>Final pricing should therefore be discussed after understanding your actual requirement.</strong> We do not offer random flat-rate packages, ensuring you only pay for the precision and service your specific site needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 17. NEED HELP CHOOSING A SERVICE? */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#10263F] mb-4">Not Sure Which Survey You Need?</h2>
            <p className="text-gray-500">Match your requirement with the right surveying service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { need: "I want to measure my land area accurately", service: "Land Survey" },
              { need: "I need property boundary information", service: "Boundary Survey" },
              { need: "I need site levels / terrain mapping", service: "Topographical / Contour Survey" },
              { need: "I need construction points marked on ground", service: "Layout / Setting Out" },
              { need: "I need professional engineering drawings", service: "Civil Engineering / Design" },
              { need: "I'm still not sure what I need", service: "Talk to ADYA" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-50 p-5 rounded-sm border border-gray-100 group hover:border-[#F59E0B] transition-colors">
                <span className="text-sm font-medium text-gray-600 mb-3 sm:mb-0 text-center sm:text-left">{item.need}</span>
                <span className="text-sm font-bold text-[#10263F] bg-white px-4 py-2 border border-gray-200 whitespace-nowrap group-hover:text-[#F59E0B] transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> {item.service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 18. PRIVACY & DATA NOTICE */}
      <section className="py-8 bg-white text-center border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <ShieldCheck size={24} className="mx-auto text-gray-400 mb-4" />
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed mb-4">
            Information and documents submitted through this form are strictly used only for handling the enquiry, generating quotations, and related professional communication, subject to ADYA's Privacy Policy.
          </p>
          <div className="flex justify-center space-x-6 text-sm font-bold text-[#10263F]">
            <a href="#" className="hover:text-[#F59E0B]">Privacy Policy</a>
            <a href="#" className="hover:text-[#F59E0B]">Terms & Conditions</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Quote;
