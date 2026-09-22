import {
  ArrowRight,
  Ruler,
  ShieldCheck,
  Building2,
  HardHat,
  CheckCircle2,
  Users,
  BookOpen,
  Crosshair,
  MessageCircle,
  Calculator,
  Search,
  PenTool,
  Lightbulb,
  GraduationCap,
  Star,
  Home,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import Button from '../components/ui/Button';
import FadeIn from '../components/common/FadeIn';
import { StaggerContainer, itemVariants } from '../components/common/StaggerContainer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. ABOUT HERO */}
      <PageHero
        eyebrow="About Adya"
        title="20+ Years of Experience. Built on Precision & Practice."
        description="Adya Land Surveying And Design is a professional civil engineering and land surveying firm providing practical surveying, design and technical solutions backed by more than two decades of field experience."
        image="/service_hero1.jpg"
      />

      {/* 2. WHO WE ARE */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Image with Floating Badge */}
            <FadeIn direction="right" className="order-2 lg:order-1 relative">
              <img
                src="/site visiting2.jpg"
                alt="Professional Surveying Project"
                className="rounded-2xl shadow-xl object-cover w-full h-[450px]"
              />
              <div className="absolute -top-6 -left-6 bg-[#10263F] p-6 lg:p-8 rounded-2xl shadow-2xl border-4 border-white">
                <div className="text-4xl lg:text-5xl font-heading font-black text-[#F59E0B] mb-1">20+</div>
                <div className="text-white text-xs lg:text-sm font-bold uppercase tracking-wider leading-tight">
                  Years of<br />Experience
                </div>
              </div>
            </FadeIn>

            {/* Right Content */}
            <FadeIn direction="left" delay={0.2} className="order-1 lg:order-2">
              <div className="mb-6">
                <SectionHeading
                  label="Who We Are"
                  title="Engineering Experience You Can Rely On."
                  align="left"
                />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Adya Land Surveying And Design combines practical field experience with professional engineering knowledge to provide reliable land surveying, civil design and technical solutions.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                With more than 20 years of experience in civil engineering work, our approach is based on understanding actual site conditions, taking accurate measurements and developing practical solutions according to project requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Land Surveying",
                  "Civil Engineering",
                  "Design & Drafting",
                  "Practical Training"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-[#10263F] font-bold">
                    <CheckCircle2 className="text-[#F59E0B] mr-3" size={24} /> {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERIENCE */}
      <section className="py-10 lg:py-12 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Experience"
            title="More Than Two Decades of Practical Engineering Experience."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4 lg:mt-6">
            {/* Left Large Text */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="flex flex-row items-baseline gap-3 md:gap-4 font-heading font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 opacity-90 text-7xl lg:text-8xl tracking-tight leading-none">20+</span>
                <span className="text-4xl lg:text-5xl tracking-tight text-[#F59E0B]">YEARS</span>
              </div>
            </div>

            {/* Right Text & Blocks */}
            <div className="lg:col-span-8">
              <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed border-l-4 border-[#F59E0B] pl-5 max-w-4xl">
                Experience in civil engineering is built not only through drawings and calculations, but through understanding real sites, measurements, challenges and project requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pr-0 lg:pr-8">
                {[
                  { title: "Field Surveying", desc: "Real-site measurement and surveying experience." },
                  { title: "Civil Engineering", desc: "Practical understanding of civil engineering requirements." },
                  { title: "Engineering Design", desc: "Technical drawings and design solutions based on project needs." },
                  { title: "Knowledge Sharing", desc: "Practical guidance and training for learners and professionals." }
                ].map((block, idx) => (
                  <div key={idx}>
                    <h3 className="text-base font-semibold text-[#F59E0B] mb-1">{block.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">{block.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AREAS OF EXPERTISE */}
      <section id="expertise" className="py-12 lg:py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <SectionHeading
              label="Our Expertise"
              title="Survey. Design. Engineering. Training."
              align="center"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6">
            {[
              { num: "01", title: "Land Surveying", desc: "Accurate field measurement and site-data collection for land and engineering requirements.", link: "/services", icon: <Crosshair size={24} className="text-[#10263F]" /> },
              { num: "02", title: "Civil Engineering", desc: "Practical engineering solutions developed around real site and project requirements.", link: "/services", icon: <Building2 size={24} className="text-[#10263F]" /> },
              { num: "03", title: "Design & Drafting", desc: "Professional drawings, planning and technical documentation.", link: "/services", icon: <PenTool size={24} className="text-[#10263F]" /> },
              { num: "04", title: "Practical Training", desc: "Field-oriented learning based on practical surveying and engineering experience.", link: "/training", icon: <GraduationCap size={24} className="text-[#10263F]" /> }
            ].map((exp, idx) => (
              <motion.div variants={itemVariants} key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#F59E0B]/30 transition-all duration-300 group relative overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/survey.jpg')] bg-cover mix-blend-multiply group-hover:opacity-10 transition-opacity"></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-[#10263F] opacity-80 group-hover:text-[#F59E0B] transition-colors">{exp.icon}</div>
                      <div className="text-2xl font-heading font-black text-gray-200 group-hover:text-[#F59E0B] transition-colors">{exp.num}</div>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-[#10263F] mb-2">{exp.title}</h3>
                    <p className="text-gray-600 text-[13px] leading-relaxed mb-4">{exp.desc}</p>
                  </div>
                  {idx === 0 && (
                    <div className="mt-auto">
                      <Link to={exp.link} className="inline-flex items-center text-[#F59E0B] font-bold hover:text-orange-600 transition-colors uppercase tracking-wider text-[10px]">
                        Explore Surveying <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. OUR JOURNEY (Timeline) */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="Experience Built Over Time."
            align="center"
          />

          <div className="max-w-4xl mx-auto relative mt-8">
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full"></div>

            {[
              { step: "FOUNDATION", desc: "Civil Engineering Knowledge", icon: <BookOpen size={18} /> },
              { step: "FIELD EXPERIENCE", desc: "Practical Site & Survey Work", icon: <HardHat size={18} /> },
              { step: "TECHNICAL EXPERTISE", desc: "Surveying, Planning & Design", icon: <Ruler size={18} /> },
              { step: "KNOWLEDGE SHARING", desc: "Practical Training & Guidance", icon: <Users size={18} /> },
              { step: "TODAY", desc: "ADYA Land Surveying And Design", icon: <Star size={18} /> }
            ].map((milestone, idx) => (
              <div key={idx} className={`relative z-10 flex items-center mb-8 md:mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="absolute left-5 md:left-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#10263F] text-[#10263F] flex items-center justify-center -translate-x-1/2 shadow-lg z-20 hover:bg-[#F59E0B] hover:border-[#F59E0B] hover:text-white transition-all cursor-default">
                  {milestone.icon}
                </div>
                <div className="hidden md:block md:w-1/2"></div>
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#F59E0B]/50 transition-all inline-block w-full sm:w-auto sm:min-w-[280px] max-w-md cursor-default text-left">
                    <h3 className="text-xs md:text-sm font-bold text-[#F59E0B] mb-1.5 uppercase tracking-widest">{milestone.step}</h3>
                    <p className="text-[#10263F] text-base md:text-lg font-heading font-bold">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH */}
      <section className="py-12 lg:py-16 bg-[#F5F6F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How We Approach Our Work"
            title="Every Good Solution Starts With Understanding the Site."
            align="center"
          />

          <div className="max-w-5xl mx-auto mt-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {[
                { num: "01", title: "Understand", desc: "Client requirement aur project ko samajhna.", icon: <Search size={18} /> },
                { num: "02", title: "Survey", desc: "Actual site conditions aur measurements collect karna.", icon: <Crosshair size={18} /> },
                { num: "03", title: "Analyze", desc: "Survey data aur engineering requirements evaluate karna.", icon: <Calculator size={18} /> },
                { num: "04", title: "Design", desc: "Practical engineering drawings/solutions develop karna.", icon: <Ruler size={18} /> },
                { num: "05", title: "Verify", desc: "Details aur requirements check karna.", icon: <ShieldCheck size={18} /> },
                { num: "06", title: "Deliver", desc: "Required survey/design output provide karna.", icon: <CheckCircle2 size={18} /> }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-[#F59E0B]/20 flex flex-col items-center text-center relative hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
                  <div className="absolute top-2 right-3 text-3xl font-heading font-black text-[#F59E0B]/10">
                    {step.num}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#F59E0B] text-[#10263F] flex items-center justify-center mb-2 z-10 shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#10263F] mb-1 z-10">{step.title}</h3>
                  <p className="text-gray-600 text-[13px] font-medium z-10 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg md:text-xl font-heading font-bold text-[#10263F] italic opacity-90">
              Measure Accurately. Design Intelligently. Deliver Professionally.
            </h3>
          </div>
        </div>
      </section>

      {/* 8. OUR ENGINEERING PHILOSOPHY */}
      <section className="py-12 lg:py-16 bg-[#10263F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/site visiting2.jpg')] bg-cover bg-center mix-blend-screen"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            label="Our Philosophy"
            title="Precision Is Not Just a Measurement. It's Our Approach."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
            {[
              { title: "Accuracy", desc: "Attention to measurements and technical details.", icon: <Crosshair size={24} /> },
              { title: "Practicality", desc: "Solutions designed around actual site requirements.", icon: <HardHat size={24} /> },
              { title: "Professionalism", desc: "Clear and responsible approach to every project.", icon: <ShieldCheck size={24} /> },
              { title: "Continuous Learning", desc: "Combining experience with evolving engineering practices.", icon: <Lightbulb size={24} /> }
            ].map((principle, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-[#F59E0B]/50 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                <div className="text-[#F59E0B] mb-3">
                  {principle.icon}
                </div>
                <h3 className="text-white text-lg font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ENGINEER / FOUNDER PROFILE */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Experience Behind Adya"
            title="Meet the Civil Engineer Behind ADYA."
            align="center"
          />

          <div className="max-w-5xl mx-auto bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 mt-6 md:mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <img
                  src="/owner.jpeg"
                  alt="Principal Civil Engineer"
                  className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
                />
              </div>

              <div className="lg:col-span-3 p-6 md:p-10 lg:p-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#10263F] mb-2">Er. Arvind Kumar Chaurasiya</h3>
                <p className="text-base lg:text-lg font-bold text-[#F59E0B] mb-2 uppercase tracking-wide">Civil Engineer | Land Surveying & Design Professional</p>
                <div className="inline-block bg-[#10263F] text-white px-3 py-1 rounded text-xs md:text-sm font-bold mb-6">
                  20+ Years of Industry Experience
                </div>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                  With more than two decades of practical civil engineering experience, Arvind Kumar Chaurasiya brings extensive field knowledge to surveying, engineering design and technical problem-solving.
                </p>

                <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
                  {["Land Surveying", "Civil Engineering", "Engineering Design", "Site Work", "Technical Drawings", "Practical Training"].map((chip, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 text-gray-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-sm cursor-default hover:border-[#F59E0B] transition-colors">
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-10 border-t border-gray-200 pt-6 lg:pt-8">
                  <div>
                    <div className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Qualification</div>
                    <div className="text-base md:text-lg font-bold text-[#10263F]">Civil Engineering</div>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Experience</div>
                    <div className="text-base md:text-lg font-bold text-[#10263F]">20+ Years</div>
                  </div>
                </div>

                <Button to="/contact" variant="primary" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5">
                  Discuss Your Requirement <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHO WE SERVE */}
      <section className="py-12 lg:py-16 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Who We Serve"
            title="Supporting Different Engineering Requirements."
            align="center"
            theme="dark"
          />

          <div className="max-w-5xl mx-auto mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
              {[
                { name: "Landowners", icon: <Home size={28} /> },
                { name: "Builders & Developers", icon: <Building2 size={28} /> },
                { name: "Architects", icon: <Ruler size={28} /> },
                { name: "Civil Contractors", icon: <HardHat size={28} /> },
                { name: "Engineers", icon: <Settings size={28} /> },
                { name: "Students & Trainees", icon: <GraduationCap size={28} /> }
              ].map((client, idx) => (
                <div key={idx} className="bg-white p-4 lg:p-5 rounded-2xl shadow-sm border border-transparent hover:border-[#F59E0B] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default flex flex-col items-center justify-center">
                  <div className="text-[#10263F] group-hover:text-[#F59E0B] mx-auto flex justify-center mb-3 transition-colors">{client.icon}</div>
                  <h3 className="font-bold text-[#10263F] text-[13px] md:text-sm leading-tight">{client.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. BRAND STATEMENT */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#10263F] leading-tight italic mb-8">
            “Every successful engineering project begins with understanding the ground it stands on.”
          </h2>
          <div className="inline-block border-t-2 border-[#F59E0B] pt-4">
            <div className="font-bold tracking-widest uppercase text-gray-500 text-sm md:text-base">
              ADYA Land Surveying And Design
            </div>
          </div>
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <CTASection
        eyebrow="Let's Work Together"
        title="Have a Site, Survey or Design Requirement?"
        description="Bring us your project requirement and let's discuss the right surveying or engineering approach."
        primaryText={null}
        secondaryText={null}
        showWhatsApp={false}
      />

    </div>
  );
};

export default About;
