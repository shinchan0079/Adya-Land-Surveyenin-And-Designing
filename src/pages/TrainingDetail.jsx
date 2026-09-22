import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Crosshair, 
  GraduationCap,
  Settings,
  Image as ImageIcon,
  MessageCircle,
  MapPin,
  Clock,
  Award,
  Users,
  Target
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import { getProgramBySlug } from '../data/trainingData';
import SuccessScreen from '../components/forms/SuccessScreen';
import { createLead } from '../services/leadService';

const TrainingDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    qualification: '',
    organization: '',
    city: '',
    message: ''
  });

  const program = getProgramBySlug(slug);

  useEffect(() => {
    if (!program) {
      navigate('/training');
    }
    window.scrollTo(0, 0);
  }, [slug, program, navigate]);

  if (!program) return null;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.qualification) {
      alert("Please fill all required fields before submitting.");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const rawMessage = `*TRAINING ENQUIRY*\n\n` +
        `*Program:* ${program.quickInfo.program}\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*WhatsApp:* ${formData.whatsapp || 'Same'}\n` +
        `*Email:* ${formData.email || 'N/A'}\n` +
        `*Qualification:* ${formData.qualification}\n` +
        `*College/Company:* ${formData.organization || 'N/A'}\n` +
        `*City:* ${formData.city || 'N/A'}\n\n` +
        `*Message:* ${formData.message || 'N/A'}`;
      
      const whatsappNumber = '919453072917';
      const emailAddress = 'adyalandsurvey@gmail.com';
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent('Training Enquiry: ' + program.quickInfo.program)}&body=${encodeURIComponent(rawMessage)}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Trigger Mailto via hidden iframe to avoid popup/focus blockers
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = mailtoUrl;
      document.body.appendChild(iframe);
      setTimeout(() => document.body.removeChild(iframe), 2000);

      setSuccessData({ leadCode: 'DIRECT-WA', message: rawMessage });

    } catch (err) {
      console.error(err);
      alert('There was an issue processing your request. Please try WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* 1. HERO */}
      <PageHero 
        eyebrow={program.badge}
        title={program.title}
        description={program.shortDesc}
        image={program.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Training", href: "/training" },
          { label: program.quickInfo.program }
        ]}
      />

      {/* 2. QUICK COURSE OVERVIEW */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 divide-y divide-gray-100 sm:divide-y-0 lg:divide-x divide-gray-100">
            {[
              { label: "Program", value: program.quickInfo.program, icon: <GraduationCap size={16} /> },
              { label: "Type", value: program.quickInfo.type, icon: <Crosshair size={16} /> },
              { label: "Location", value: program.quickInfo.location, icon: <MapPin size={16} /> },
              { label: "Duration", value: program.quickInfo.duration, icon: <Clock size={16} /> },
              { label: "Certificate", value: program.quickInfo.certificate, icon: <Award size={16} /> }
            ].map((info, idx) => (
              <div key={idx} className="p-6 flex flex-col justify-center text-center">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center justify-center">
                  <span className="text-[#F59E0B] mr-1">{info.icon}</span> {info.label}
                </span>
                <span className="font-bold text-[#10263F] text-sm md:text-base leading-snug">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT THIS TRAINING */}
      <section className="py-8 lg:py-10 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading 
            label="Program Overview"
            title={program.overview.title}
            description={program.overview.content}
          />
        </div>
      </section>

      {/* 4. WHO SHOULD JOIN? */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <SectionHeading title="Who Should Join?" />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {program.whoShouldJoin.map((aud, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 px-6 py-3 rounded-xl flex items-center shadow-sm font-bold text-[#10263F]">
                <Users className="text-[#F59E0B] mr-2" size={18} /> {aud}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU'LL LEARN & WHAT TO EXPECT */}
      <section className="py-12 lg:py-16 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                label="Learning Outcomes"
                title="What You'll Learn"
                theme="dark"
                align="left"
              />
              <div className="space-y-4 mt-8">
                {program.learningOutcomes.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 size={24} className="text-[#F59E0B] mr-4 shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-200 text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm">
              <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-4">The Experience</div>
              <h3 className="text-2xl font-bold text-white mb-8">What You Can Expect</h3>
              <div className="space-y-6">
                {program.whatToExpect.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-white text-lg mb-2 flex items-center">
                      <Target size={20} className="text-[#F59E0B] mr-3" /> {item.title}
                    </h4>
                    <p className="text-gray-200 pl-8 text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRAINING MODULES */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeading 
            label="Curriculum"
            title="Training Modules"
          />
          <div className="space-y-4 mt-8">
            {program.modules.map((mod, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-gray-50 border border-[#F59E0B] rounded-xl p-5 transition-colors group shadow-sm hover:shadow-md">
                <div className="md:w-24 shrink-0 mb-3 md:mb-0 text-center md:text-left">
                  <div className="text-[#F59E0B] font-mono font-bold text-xs uppercase tracking-widest">Module</div>
                  <div className="text-3xl font-heading font-black text-[#10263F]">{mod.id}</div>
                </div>
                <div className="md:pl-5 md:border-l border-gray-200 flex-grow text-center md:text-left">
                  <h3 className="text-lg font-bold text-[#10263F] mb-1">{mod.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIELD PRACTICE */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F59E0B] rounded-3xl transform -translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="/survey7.jpg" 
                alt="Field Practice" 
                className="relative rounded-3xl shadow-xl object-cover w-full h-[400px] grayscale-[20%]"
              />
            </div>
            <div>
              <SectionHeading 
                label="Field Practice"
                title={program.fieldPractice.title}
                align="left"
              />
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We believe civil engineering is learned on the ground, not just on a whiteboard. Our training includes dedicated outdoor sessions where you apply concepts directly on a physical site.
              </p>
              <ul className="space-y-4">
                {program.fieldPractice.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-medium text-lg">
                    <Crosshair size={24} className="text-[#F59E0B] mr-4 shrink-0" /> {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT & SOFTWARE */}
      <section className="py-12 lg:py-16 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SectionHeading 
                label="Training Tools"
                title="Equipment Used"
                theme="dark"
                align="left"
              />
              <div className="space-y-4 mt-8">
                {program.equipment.map((eq, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col">
                    <span className="font-semibold text-base mb-1 flex items-center"><Settings size={20} className="text-[#F59E0B] mr-2" /> {eq.name}</span>
                    <span className="text-gray-400 text-sm ml-7">{eq.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {program.software && (
              <div>
                <SectionHeading 
                  label="Digital Skills"
                  title={program.software.title}
                  theme="dark"
                  align="left"
                />
                <div className="space-y-4 mt-8">
                  {program.software.tools.map((tool, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col">
                      <span className="font-semibold text-base flex items-center"><Award size={20} className="text-[#F59E0B] mr-2" /> {tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {program.faqs && (
        <FAQSection 
          items={program.faqs.map(faq => ({ question: faq.q, answer: faq.a }))} 
          title="Training FAQ"
        />
      )}

      {/* TRAINING ENQUIRY FORM */}
      <section id="enquire" className="py-12 lg:py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#F59E0B]"></div>
            
            <SectionHeading 
              title="Interested in This Training?"
              description="Submit your details to discuss schedule and admission."
            />
            
            {successData ? (
              <div className="mt-6">
                <SuccessScreen 
                  leadCode={successData.leadCode}
                  title="Training Enquiry Received"
                  message="Thank you! We've saved your training enquiry. You can continue on WhatsApp for faster admission process."
                  whatsappMessage={successData.message}
                  onReset={() => {
                    setSuccessData(null);
                    setFormData({ name: '', phone: '', whatsapp: '', email: '', qualification: '', organization: '', city: '', message: '' });
                  }}
                />
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4 mt-6">
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between mb-6">
                  <span className="text-xs font-bold text-[#10263F] uppercase mb-1 md:mb-0">Selected Program:</span>
                  <span className="font-bold text-[#10263F] text-base flex items-center"><GraduationCap size={20} className="text-[#F59E0B] mr-2" /> {program.quickInfo.program}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input required label="Full Name" name="name" value={formData.name} onChange={handleFormChange} placeholder="Your name" />
                  <Input required type="tel" label="Phone Number" name="phone" value={formData.phone} onChange={handleFormChange} placeholder="10-digit number" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input required label="Qualification" name="qualification" value={formData.qualification} onChange={handleFormChange} placeholder="E.g., Diploma Civil, B.Tech" />
                  <Input label="College / Company" name="organization" value={formData.organization} onChange={handleFormChange} placeholder="Where are you currently?" />
                </div>

                <Input label="Current City" name="city" value={formData.city} onChange={handleFormChange} placeholder="E.g., Lucknow" />
                
                <Textarea label="Any specific query? (Optional)" name="message" value={formData.message} onChange={handleFormChange} placeholder="Type your message..." />

                <div className="pt-2 flex justify-center">
                  <Button type="submit" variant="primary" className="justify-center disabled:opacity-70 px-8 py-3" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Enquire for This Program'} <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        eyebrow="Build Practical Skills"
        title="Ready to Learn Beyond Theory?"
        description="Enquire about the current training program and understand the available practical learning options."
      />
      
    </div>
  );
};

export default TrainingDetail;
