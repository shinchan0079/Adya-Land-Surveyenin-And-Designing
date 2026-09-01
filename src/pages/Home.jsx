import { useState } from 'react';
import { 
  ArrowRight, 
  Map, 
  Ruler, 
  ShieldCheck, 
  Building2, 
  HardHat, 
  Compass, 
  MapPin, 
  CheckCircle2, 
  Users, 
  Target, 
  Crosshair, 
  Star,
  MessageCircle,
  Calculator,
  X,
  ZoomIn
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectData';
import SectionHeading from '../components/common/SectionHeading';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import ProcessSteps from '../components/common/ProcessSteps';
import ProjectCard from '../components/cards/ProjectCard';
import Button from '../components/ui/Button';
import FadeIn from '../components/common/FadeIn';
import { StaggerContainer, itemVariants } from '../components/common/StaggerContainer';
import { motion } from 'framer-motion';

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const faqs = [
    {
      q: "What types of land surveys do you provide?",
      a: "We provide comprehensive land surveying services including boundary surveys, topographical surveys, contour mapping, layout/setting out, and as-built surveys for both residential and commercial projects."
    },
    {
      q: "Do you provide surveying services in Lucknow?",
      a: "Yes, we are based in Lucknow and provide professional surveying and civil engineering services throughout the city and surrounding regions in Uttar Pradesh."
    },
    {
      q: "What information is required before a site survey?",
      a: "Ideally, we need the site location, approximate area, purpose of the survey, and any existing property documents or previous layout plans if available."
    },
    {
      q: "Do you provide civil engineering drawings and design?",
      a: "Yes, alongside surveying, we offer complete civil engineering design, 2D/3D AutoCAD drafting, and technical planning for construction projects."
    },
    {
      q: "What equipment do you use for surveying?",
      a: "We utilize highly accurate, professional-grade equipment including Total Stations, Auto Levels, and DGPS/GNSS systems for precise field measurements."
    },
    {
      q: "Do you provide practical surveying training?",
      a: "Yes, we offer hands-on, practical training programs for civil engineering students and professionals focusing on Total Station operation, AutoCAD, and Civil 3D."
    },
    {
      q: "How can I request a survey quotation?",
      a: "You can request a quotation by calling us directly, sending a WhatsApp message, or filling out the Request a Survey form on our website."
    }
  ];

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 2. HERO SECTION */}
      <section className="bg-white overflow-hidden pt-2 pb-8 lg:pt-4 lg:pb-12 xl:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <FadeIn direction="right" className="max-w-xl">
              <div className="inline-flex items-center bg-gray-100 text-[#10263F] text-xs font-bold px-3 py-1.5 mb-4 rounded-full uppercase tracking-wider border border-gray-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] mr-2"></span>
                20+ Years of Civil Engineering Experience
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#10263F] leading-tight mb-4">
                Precision in Survey.<br/>
                <span className="text-[#F59E0B]">Excellence in Design.</span>
              </h1>
              <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed font-normal">
                Professional land surveying, civil engineering design and practical training solutions backed by 20+ years of real field experience.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-8">
                <Button to="/quote" variant="primary" className="text-xs font-bold px-4 py-2 shadow-md shadow-orange-500/30 hover:-translate-y-1 transform transition-all">
                  Request a Survey <ArrowRight className="ml-1.5" size={14} />
                </Button>
                <Button to="/services" variant="outline" className="text-xs font-bold px-4 py-2 hover:-translate-y-1 transform transition-all border-2">
                  Explore Services
                </Button>
              </div>

              {/* Trust Sub-strip */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-gray-500 font-medium">
                <span>20+ Years Experience</span>
                <span className="hidden sm:inline text-gray-300">•</span>
                <span>Professional Surveying</span>
                <span className="hidden sm:inline text-gray-300">•</span>
                <span>Engineering Design</span>
              </div>
            </FadeIn>
            
            {/* Right Image */}
            <FadeIn direction="left" delay={0.2} className="relative">
              <div className="absolute inset-0 bg-[#F59E0B] rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <div className="absolute inset-0 border-2 border-[#10263F] rounded-2xl transform -translate-x-4 -translate-y-4 opacity-10"></div>
              <img 
                src="/site visiting.jpg" 
                alt="Professional Total Station Surveying" 
                className="relative rounded-2xl shadow-2xl object-cover object-top w-full h-[350px] lg:h-[450px] bg-white border-4 border-white"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. QUICK TRUST STRIP */}
      <section className="bg-[#10263F] py-4 lg:py-5 border-t-4 border-[#F59E0B]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x-0 md:divide-x md:divide-gray-700 text-center items-center">
            <div className="px-2 md:px-4">
              <div className="text-2xl md:text-3xl font-heading font-bold text-[#F59E0B]">20+</div>
              <div className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider mt-1">Years of Experience</div>
            </div>
            <div className="px-2 md:px-4">
              <div className="text-lg md:text-xl font-heading font-bold text-white tracking-wider uppercase">Land</div>
              <div className="text-gray-400 text-xs md:text-sm font-medium mt-1">Surveying</div>
            </div>
            <div className="px-2 md:px-4">
              <div className="text-lg md:text-xl font-heading font-bold text-white tracking-wider uppercase">Civil</div>
              <div className="text-gray-400 text-xs md:text-sm font-medium mt-1">Engineering</div>
            </div>
            <div className="px-2 md:px-4">
              <div className="text-lg md:text-xl font-heading font-bold text-white tracking-wider uppercase">Design</div>
              <div className="text-gray-400 text-xs md:text-sm font-medium mt-1">Planning & Drawings</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT ADYA */}
      <section className="pt-10 pb-12 lg:pt-16 lg:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Image */}
            <FadeIn direction="right" className="order-2 lg:order-1 relative">
              <img 
                src="/survey1.jpg" 
                alt="Site Survey Work" 
                className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
              />
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-16 h-32 bg-[#F59E0B] rounded-l-2xl hidden lg:block opacity-50"></div>
            </FadeIn>
            
            {/* Right Content */}
            <FadeIn direction="left" delay={0.2} className="order-1 lg:order-2">
              <SectionHeading 
                label="About Adya"
                title="Experience You Can Measure. Expertise You Can Trust."
                align="left"
              />
              <p className="text-gray-600 mb-8 leading-relaxed text-base">
                Adya Land Surveying And Design is a professional civil engineering and land surveying firm providing surveying, design and technical solutions backed by more than two decades of practical industry experience.
              </p>
              
              <ul className="space-y-3 mb-10">
                <li className="flex items-center text-base text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#F59E0B] mr-3" size={20} /> 20+ Years Field Experience
                </li>
                <li className="flex items-center text-base text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#F59E0B] mr-3" size={20} /> Professional Land Surveying
                </li>
                <li className="flex items-center text-base text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#F59E0B] mr-3" size={20} /> Civil Engineering & Design
                </li>
                <li className="flex items-center text-base text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#F59E0B] mr-3" size={20} /> Practical Training
                </li>
              </ul>
              
              <Button to="/about" variant="secondary" className="px-5 py-2.5 text-sm md:text-base">
                Discover Our Story <ArrowRight className="ml-2" size={20} />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. OUR SERVICES */}
      <section className="py-12 lg:py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <SectionHeading 
              label="Our Services"
              title="Surveying & Engineering Solutions Built Around Your Project."
              align="center"
            />
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-10 mt-6">
            {[
              { num: "01", title: "Land Surveying", desc: "Accurate land measurement and field surveying." },
              { num: "02", title: "Topographical Survey", desc: "Terrain, elevation and existing site-feature mapping." },
              { num: "03", title: "Boundary Survey", desc: "Property boundaries and land dimensions." },
              { num: "04", title: "Layout & Setting Out", desc: "Establishing engineering drawings accurately onto the actual site." },
              { num: "05", title: "Civil Engineering Design", desc: "Professional engineering design according to project requirements." },
              { num: "06", title: "CAD Drawing & Drafting", desc: "Accurate digital drawings and technical documentation." }
            ].map((service, index) => (
              <motion.div variants={itemVariants} key={index} className="bg-[#10263F]/90 backdrop-blur-sm text-white rounded-xl p-5 transition-all duration-300 group shadow-md hover:shadow-xl border border-[#10263F]/20 hover:-translate-y-1">
                <div className="text-3xl font-heading font-black text-white/20 mb-3 transition-colors">
                  {service.num}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-6 transition-colors leading-relaxed">
                  {service.desc}
                </p>
                <Link to="/services" className="inline-flex items-center text-[#F59E0B] font-bold hover:text-orange-400 transition-colors uppercase text-xs md:text-sm tracking-wider">
                  Explore Service <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <Link to="/services" className="inline-flex items-center justify-center font-bold text-[#10263F] hover:text-[#F59E0B] transition-colors text-lg">
              View All Services <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCE / WHY ADYA */}
      <section className="pt-4 pb-12 lg:pt-6 lg:pb-16 bg-[#10263F] text-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('/site visiting2.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <SectionHeading 
              label="Why Choose Adya"
              title={<span className="lg:whitespace-nowrap">20+ Years of Experience Behind Every Measurement.</span>}
              theme="dark"
              align="center"
              className="max-w-4xl"
            />
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="flex flex-col items-center mt-0 mb-10">
              <div className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300 text-5xl md:text-6xl tracking-tight flex items-baseline gap-3">
                20+ <span className="text-3xl md:text-4xl tracking-tight text-[#F59E0B]">YEARS</span>
              </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Field Experience", desc: "Practical knowledge developed through years of civil engineering work." },
              { title: "Precision-Focused", desc: "Surveying and design carried out with attention to technical accuracy." },
              { title: "Practical Solutions", desc: "Engineering solutions aligned with real site requirements." },
              { title: "End-to-End", desc: "From site surveying and measurements to drawings and design." }
            ].map((card, idx) => (
              <motion.div variants={itemVariants} key={idx} className="bg-white/5 backdrop-blur-sm border-t-2 border-t-[#F59E0B]/0 hover:border-t-[#F59E0B] border-x border-b border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#F59E0B]/20 transition-all duration-300">
                  <Target className="text-[#F59E0B]" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#F59E0B] transition-colors">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. OUR PROCESS */}
      <section className="py-12 lg:py-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            label="How We Work"
            title="From Site to Final Solution."
            align="center"
          />

          <div className="max-w-5xl mx-auto mt-8 lg:mt-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {[
                { num: "01", label: "DISCUSS", desc: "Requirement" },
                { num: "02", label: "SITE VISIT", desc: "Understand" },
                { num: "03", label: "SURVEY", desc: "Measurements" },
                { num: "04", label: "ANALYZE", desc: "Survey Data" },
                { num: "05", label: "DESIGN", desc: "Drawings" },
                { num: "06", label: "DELIVER", desc: "Final Output" }
              ].map((step, idx) => (
                <div key={idx} className="relative group text-center">
                  <div className="w-20 h-20 mx-auto bg-[#F59E0B] border-4 border-white rounded-full flex items-center justify-center mb-4 relative z-10 hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#F59E0B]/30">
                    <span className="text-2xl font-heading font-black text-[#10263F]">{step.num}</span>
                  </div>
                  <h4 className="text-[#10263F] font-bold tracking-wider mb-1">{step.label}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. EQUIPMENT & TECHNOLOGY */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Tools & Technology"
            title="Precision Supported by Professional Technology."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mt-2">
            {["Total Station", "Auto Level", "DGPS / GNSS", "AutoCAD", "Civil 3D"].map((tool, idx) => (
              <div key={idx} className="bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-[#F59E0B] font-bold text-[#10263F] transition-all duration-300 cursor-default hover:-translate-y-1">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FEATURED PROJECTS */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <SectionHeading 
              label="Our Work"
              title="Experience Built in the Field."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProjects.map((proj, idx) => (
              <ProjectCard 
                key={idx}
                title={proj.title}
                category={proj.category}
                location={proj.location}
                image={proj.image}
                slug={`/projects/${proj.id}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/projects" variant="outline" className="px-5 py-2.5 text-sm md:text-base">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* 10. PRACTICAL TRAINING */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <FadeIn direction="right" className="order-2 lg:order-1">
              <SectionHeading 
                label="Practical Training"
                title="Learn Surveying From Real Field Experience."
                align="left"
              />
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Practical training designed for civil engineering students, diploma students, fresh engineers and professionals who want to understand real surveying and field workflows.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="bg-[#10263F] text-white px-4 py-2 rounded-full text-sm font-semibold">Land Surveying</span>
                <span className="bg-[#10263F] text-white px-4 py-2 rounded-full text-sm font-semibold">Total Station</span>
                <span className="bg-[#10263F] text-white px-4 py-2 rounded-full text-sm font-semibold">Auto Level</span>
                <span className="bg-[#10263F] text-white px-4 py-2 rounded-full text-sm font-semibold">AutoCAD</span>
                <span className="bg-[#10263F] text-white px-4 py-2 rounded-full text-sm font-semibold">Civil Practical</span>
              </div>
              
              <Button to="/training" variant="primary" className="px-5 py-2.5 text-sm md:text-base">
                Explore Training <ArrowRight className="ml-2" size={20} />
              </Button>
            </FadeIn>

            {/* Right Image */}
            <FadeIn direction="left" delay={0.2} className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#F59E0B] rounded-3xl transform translate-x-4 -translate-y-4 opacity-20 hidden md:block"></div>
              <img 
                src="/training1.jpg" 
                alt="Practical Surveying Training" 
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 11. WHO WE SERVE */}
      <section className="py-12 lg:py-16 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Who We Work With"
            title="Engineering Support for Different Requirements."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center mt-2">
            {[
              { name: "Landowners", icon: <Map size={40} /> },
              { name: "Builders & Developers", icon: <Building2 size={40} /> },
              { name: "Architects", icon: <Ruler size={40} /> },
              { name: "Civil Contractors", icon: <HardHat size={40} /> },
              { name: "Engineers", icon: <Compass size={40} /> },
              { name: "Students & Professionals", icon: <Users size={40} /> }
            ].map((client, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-[#F59E0B] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <div className="text-[#10263F] group-hover:text-[#F59E0B] mx-auto flex justify-center mb-4 transition-colors">{client.icon}</div>
                <h3 className="font-bold text-[#10263F] text-sm lg:text-base leading-tight">{client.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. GALLERY */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#10263F] mb-6">
              Surveying in Action.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { src: "/survey2.jpg", title: "Site Survey" },
              { src: "/survey3.jpg", title: "Total Station" },
              { src: "/training2.jpg", title: "Training" },
              { src: "/survey4.jpg", title: "Design" }
            ].map((img, idx) => (
              <div 
                key={idx} 
                className="relative rounded-2xl overflow-hidden group shadow-md h-64 lg:h-72 cursor-pointer"
                onClick={() => { setCurrentImg(img.src); setLightboxOpen(true); }}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#10263F]/90 to-transparent flex items-end p-5">
                  <h3 className="text-white font-bold text-sm lg:text-base uppercase tracking-wider">{img.title}</h3>
                </div>

                <div className="absolute inset-0 bg-[#10263F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-10 h-10 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {lightboxOpen && (
            <div className="fixed inset-0 z-[100] bg-[#10263F]/95 backdrop-blur-sm flex items-center justify-center p-4">
              <button 
                className="absolute top-6 right-6 text-white hover:text-[#F59E0B] transition-colors bg-white/10 p-2 rounded-full z-10"
                onClick={() => setLightboxOpen(false)}
              >
                <X size={24} />
              </button>
              <img 
                src={currentImg} 
                alt="Enlarged View" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl relative z-0" 
              />
            </div>
          )}

          <div className="text-center mt-12">
            <Button to="/gallery" variant="outline" className="px-5 py-2.5 text-sm md:text-base">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* 13 & 14. CLIENT REVIEW & FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Client Review */}
            <div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-[#10263F] mb-6 text-center">What Our Clients Say.</h2>
              <div className="bg-white p-5 md:p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                <div className="flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-100 pb-3 sm:pb-0 sm:pr-4">
                  <div className="text-4xl md:text-5xl font-heading font-black text-[#10263F]">5.0</div>
                  <div className="flex text-[#F59E0B] my-2 justify-center sm:justify-start">
                    <Star fill="currentColor" size={14} />
                    <Star fill="currentColor" size={14} />
                    <Star fill="currentColor" size={14} />
                    <Star fill="currentColor" size={14} />
                    <Star fill="currentColor" size={14} />
                  </div>
                  <div className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-wider">Google Rating</div>
                </div>
                
                <div>
                  <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed italic mb-4">
                    "Very professional service and highly accurate land survey provided. The team is very knowledgeable about civil engineering requirements."
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="font-bold text-[#10263F] text-sm">Verified Client</div>
                      <div className="text-[11px] text-gray-500">Lucknow, Uttar Pradesh</div>
                    </div>
                    <a href="#" className="text-[11px] font-bold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1.5 rounded-full inline-block">
                      View on Google &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: FAQ */}
            <div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-[#10263F] mb-6 text-center">Questions About Our Services?</h2>
              <FAQSection 
                items={faqs.map(faq => ({ question: faq.q, answer: faq.a }))} 
                title={null} 
                isSection={false}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <CTASection 
        eyebrow="Start Your Project"
        title="Need a Land Survey or Engineering Design?"
        description="Tell us about your site or project requirements and discuss the right surveying or engineering solution with our team."
        primaryText={null}
        secondaryText={null}
        showWhatsApp={false}
      />
      
    </div>
  );
};

export default Home;
