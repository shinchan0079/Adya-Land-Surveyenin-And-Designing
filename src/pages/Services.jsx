import { useState } from 'react';
import { 
  ArrowRight, 
  Map, 
  ShieldCheck, 
  Building2, 
  HardHat, 
  Crosshair, 
  Calculator,
  PenTool,
  GraduationCap,
  FileText,
  Mountain,
  Grid,
  Layers,
  Home,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import ProcessSteps from '../components/common/ProcessSteps';
import Button from '../components/ui/Button';
import ServiceCard from '../components/cards/ServiceCard';
import FadeIn from '../components/common/FadeIn';
import { StaggerContainer, itemVariants } from '../components/common/StaggerContainer';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeServiceQuery, setActiveServiceQuery] = useState(0);

  const serviceQueries = [
    {
      q: "“I need to measure my land.”",
      a: "Land Survey",
      desc: "Accurate measurement and site information collection."
    },
    {
      q: "“I need to identify property boundaries.”",
      a: "Boundary Survey",
      desc: "Determine exact property lines and dimensions."
    },
    {
      q: "“I need ground levels and terrain data.”",
      a: "Topographical / Contour Survey",
      desc: "Mapping of elevations and existing site features."
    },
    {
      q: "“I need building points marked on site.”",
      a: "Layout / Setting Out",
      desc: "Establishing engineering drawings accurately on ground."
    },
    {
      q: "“I need drawings/design.”",
      a: "Civil Engineering & Design",
      desc: "Professional drafting and structural planning."
    },
    {
      q: "“I want to learn practical surveying.”",
      a: "Practical Training",
      desc: "Field-oriented learning for students and professionals."
    }
  ];

  const faqs = [
    {
      q: "Which type of land survey do I need?",
      a: "It depends on your project goals. If you're planning construction, a Topographical Survey is usually required. For property disputes, a Boundary Survey is needed. We can help you determine the exact requirement based on a brief discussion."
    },
    {
      q: "What information is required before a survey?",
      a: "Ideally, we need the site location, approximate area, the purpose of the survey, and any existing property documents or previous layout plans if available."
    },
    {
      q: "Does survey cost depend on land area?",
      a: "Yes, the cost typically depends on the total area, the type of survey required, the complexity of the terrain, and the specific deliverables (e.g., 2D CAD drawings, contour maps)."
    },
    {
      q: "How long does a land survey take?",
      a: "A standard residential or small commercial survey can often be completed in 1-2 days on-site, followed by 1-2 days for data processing and drafting the final CAD drawings."
    },
    {
      q: "What equipment is used for surveying?",
      a: "We utilize professional-grade, highly calibrated equipment including Total Stations for precise coordinate measurements, Auto Levels for elevation, and DGPS/GNSS systems for large-scale or satellite-based positioning."
    },
    {
      q: "Do you provide drawings after the survey?",
      a: "Absolutely. All our surveys include professional 2D AutoCAD drafting as standard deliverables. We can also provide 3D models or specific format files upon request."
    },
    {
      q: "Do you provide both surveying and design?",
      a: "Yes, we are a comprehensive civil engineering firm. We not only collect the field data through surveying but also have the in-house capability to provide civil engineering design and structural planning based on that data."
    },
    {
      q: "Can I request surveying outside Lucknow?",
      a: "We primarily serve Lucknow and surrounding regions in Uttar Pradesh. For large-scale projects, we are open to discussing requirements outside our immediate service area."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. SERVICES HERO */}
      <PageHero 
        eyebrow="Our Services"
        title="Professional Surveying & Engineering Solutions."
        description="From accurate field surveys to professional engineering design, ADYA Land Surveying And Design provides practical solutions backed by 20+ years of civil engineering experience."
        image="/service_hero1.png"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" }
        ]}
      />

      {/* 2. SERVICES INTRODUCTION */}
      <section className="py-10 lg:py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <SectionHeading 
              label="What We Do"
              title="From Ground Measurement to Engineering Design."
              description="Every project starts with understanding the actual site and requirement. Our services combine practical field knowledge, surveying and engineering design to support projects from measurement to planning and execution."
              align="center"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-4xl mx-auto mt-8">
            {[
              { title: "Survey Accurately", desc: "Reliable field measurements and site-data collection.", icon: <Crosshair size={24} /> },
              { title: "Design Practically", desc: "Engineering solutions based on actual site requirements.", icon: <HardHat size={24} /> },
              { title: "Deliver Professionally", desc: "Clear technical outputs for further project work.", icon: <ShieldCheck size={24} /> }
            ].map((highlight, idx) => (
              <motion.div variants={itemVariants} key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center group hover:border-[#F59E0B] transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#10263F] flex items-center justify-center mb-4 group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#10263F] mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. LAND SURVEYING SERVICES */}
      <section className="py-10 lg:py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Land Surveying"
            title="Accurate Measurements. Reliable Ground Data."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { num: "01", title: "Land Surveying", slug: "/services/land-surveying", desc: "Land measurement and site information collection according to project requirements.", icon: Map },
              { num: "02", title: "Topographical Survey", slug: "/services/topographical-survey", desc: "Mapping of existing ground levels, terrain and detailed site features.", icon: Mountain },
              { num: "03", title: "Boundary Survey", slug: "/services/boundary-survey", desc: "Accurate determination of land/property boundaries and dimensions.", icon: Grid },
              { num: "04", title: "Contour Survey", slug: "/services/topographical-survey", desc: "Detailed contour mapping to understand different elevations and slopes.", icon: Layers },
              { num: "05", title: "Level Survey", slug: "/services/topographical-survey", desc: "Determine site elevation and critical level differences accurately.", icon: Calculator },
              { num: "06", title: "Layout / Setting Out", slug: "/services/land-surveying", desc: "Establishing engineering drawing points, lines and dimensions onto the actual site.", icon: Crosshair }
            ].map((service, idx) => (
              <ServiceCard 
                key={idx}
                number={service.num}
                title={service.title}
                description={service.desc}
                slug={service.slug}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CIVIL ENGINEERING & DESIGN */}
      <section className="py-10 lg:py-12 bg-[#F5F6F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <SectionHeading 
              label="Design & Engineering"
              title="Turning Site Information Into Practical Designs."
              align="left"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { title: "Building Planning", desc: "Project requirements ke according building/site planning.", icon: <Building2 size={20} /> },
              { title: "Civil Engineering Design", desc: "Practical engineering solutions for project requirements.", icon: <HardHat size={20} /> },
              { title: "CAD Drawing & Drafting", desc: "Professional technical drawings in digital format.", icon: <PenTool size={20} /> },
              { title: "Site / Layout Planning", desc: "Land aur development requirements ke according layout preparation.", icon: <Map size={20} /> },
              { title: "Structural Design", desc: "Technical structural analysis and design planning.", icon: <Layers size={20} /> },
              { title: "Estimation / BOQ", desc: "Material quantity estimation and bill of quantities.", icon: <FileText size={20} /> }
            ].map((service, idx) => (
              <motion.div variants={itemVariants} key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start group hover:border-[#F59E0B] transition-colors">
                <div className="text-[#10263F] group-hover:text-[#F59E0B] transition-colors mt-1 mr-3 shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#10263F] text-base mb-1">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. SURVEYING PROCESS */}
      <section className="py-12 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="How It Works"
            title="A Clear Process From Site to Solution."
            theme="dark"
            align="center"
          />

          <div className="mt-10 max-w-4xl mx-auto">
            <ProcessSteps 
              steps={[
                { title: "DISCUSS", description: "Understand requirement" },
                { title: "SITE VISIT", description: "Review actual conditions" },
                { title: "SURVEY", description: "Take required measurements" },
                { title: "PROCESS", description: "Analyze field data" },
                { title: "DESIGN / DRAW", description: "Prepare required output" },
                { title: "DELIVER", description: "Final technical output" }
              ]}
              theme="dark"
            />
          </div>
        </div>
      </section>

      {/* 10. WHO WE SERVE */}
      <section className="py-10 lg:py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Who We Serve"
            title="Solutions for Different Project Requirements."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { name: "Landowners", desc: "Land measurement and boundary requirements.", icon: <Home size={24} /> },
              { name: "Builders & Developers", desc: "Surveying and project layout.", icon: <Building2 size={24} /> },
              { name: "Architects", desc: "Site information for planning/design.", icon: <Settings size={24} /> },
              { name: "Civil Contractors", desc: "Layout and field engineering requirements.", icon: <HardHat size={24} /> },
              { name: "Engineers", desc: "Surveying/design support.", icon: <Settings size={24} /> },
              { name: "Institutions / Students", desc: "Practical training.", icon: <GraduationCap size={24} /> }
            ].map((client, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start hover:shadow-md transition-shadow">
                <div className="text-[#F59E0B] mr-3 shrink-0">{client.icon}</div>
                <div>
                  <h3 className="font-semibold text-[#10263F] text-base mb-1">{client.name}</h3>
                  <p className="text-gray-600 text-xs">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WHICH SERVICE DO YOU NEED? (Interactive) */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionHeading 
            title="Not Sure Which Service You Need?"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-8">
            {/* Left: Queries (Tabs) */}
            <div className="md:col-span-5 space-y-3">
              {serviceQueries.map((query, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveServiceQuery(idx)}
                  className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all ${
                    activeServiceQuery === idx 
                      ? 'bg-[#10263F] text-white shadow-lg scale-105' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {query.q}
                </button>
              ))}
            </div>

            {/* Right: Answer/Mapping */}
            <div className="md:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col justify-center min-h-[300px]">
              <div className="text-sm font-bold text-[#F59E0B] uppercase tracking-widest mb-2">Recommended Service</div>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-[#10263F] mb-4">
                {serviceQueries[activeServiceQuery].a}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {serviceQueries[activeServiceQuery].desc}
              </p>
              <div>
                <Button to="/contact" variant="primary">
                  Discuss Your Requirement <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SERVICE FAQ */}
      <FAQSection 
        items={faqs.map(faq => ({ question: faq.q, answer: faq.a }))} 
        title="Frequently Asked Questions" 
      />

      {/* 14. FINAL CTA */}
      <CTASection 
        eyebrow="Start Your Project"
        title="Need Accurate Surveying or Professional Engineering Design?"
        description="Tell us about your land, site or project requirement and let's determine the right service for you."
        primaryText={null}
        primaryLink={null}
        secondaryText={null}
        secondaryLink={null}
        showWhatsApp={false}
      />

    </div>
  );
};

export default Services;
