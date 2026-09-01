import { useState } from 'react';
import { 
  ArrowRight, 
  Map, 
  Ruler, 
  HardHat, 
  CheckCircle2, 
  Crosshair, 
  MessageCircle,
  PenTool,
  GraduationCap,
  Settings,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { trainingPrograms } from '../data/trainingData';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import ProcessSteps from '../components/common/ProcessSteps';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import SuccessScreen from '../components/forms/SuccessScreen';
import TrainingCard from '../components/cards/TrainingCard';

const Training = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    qualification: '',
    program: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.qualification || !formData.program) {
      alert("Please fill all required fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          type: 'Training Enquiry',
          qualification: formData.qualification,
          program: formData.program,
          message: formData.message
        })
      });

      if (!res.ok) throw new Error('Failed to save lead');
      const data = await res.json();

      const message = `Hi ADYA Training! I am interested in joining a program.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Qualification:* ${formData.qualification}%0A*Program Interested In:* ${formData.program}%0A*Message:* ${formData.message || 'N/A'}`;
      
      setSuccessData({ leadCode: data.lead_code, message });
      setFormData({ name: '', phone: '', qualification: '', program: '', message: '' });
      
    } catch (err) {
      console.error(err);
      alert('There was an issue submitting your enquiry. Please try WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "Do I need previous surveying experience?",
      a: "No prior field experience is required for our foundational courses. However, a basic understanding of civil engineering concepts (like you would learn in a Diploma or B.Tech program) is highly recommended."
    },
    {
      q: "Is the training practical or theoretical?",
      a: "Our training is heavily practical. While we cover the necessary theory, the majority of your time will be spent handling instruments like the Total Station or Auto Level on an actual field setup, or working on AutoCAD in our lab."
    },
    {
      q: "Will I get field practice?",
      a: "Absolutely. Field practice is the core of our training methodology. You will learn to set up instruments, take measurements, and solve site challenges in a real-world environment."
    },
    {
      q: "Which surveying instruments are covered?",
      a: "Depending on your selected program, we cover Total Stations, Auto Levels, and DGPS systems, along with software like AutoCAD for drafting the field data."
    },
    {
      q: "Who can join the training?",
      a: "Our programs are ideal for Diploma and B.Tech Civil students, fresh graduates, working site engineers, and surveying beginners looking to upgrade their practical skills."
    },
    {
      q: "Where is the training conducted?",
      a: "The training is conducted at our main office and designated practice sites in Lucknow, Uttar Pradesh."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. TRAINING HERO */}
      <PageHero 
        eyebrow="Practical Training"
        title="Learn Surveying From Real Field Experience."
        description="Build practical civil engineering and surveying skills through field-oriented training guided by 20+ years of professional experience."
        image="/training3.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Training" }
        ]}
      />

      {/* 2. LEARN BY DOING */}
      <section className="py-10 lg:py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Learn By Doing"
            title="Beyond Theory. Into the Field."
            description="Civil engineering and surveying are best understood when theoretical concepts are connected with practical field experience. ADYA's training programs focus on helping learners understand real surveying procedures, instruments, measurements, drawings and practical workflows."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto mt-8">
            {[
              { title: "Learn", desc: "Understand fundamental concepts and site basics.", icon: <GraduationCap size={24} /> },
              { title: "Practice", desc: "Work with surveying procedures and professional instruments.", icon: <Crosshair size={24} /> },
              { title: "Apply", desc: "Understand how knowledge is applied to actual engineering work.", icon: <HardHat size={24} /> }
            ].map((highlight, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#10263F] text-[#F59E0B] flex items-center justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-bold text-[#10263F] mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY ADYA TRAINING */}
      <section className="py-10 lg:py-12 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Why ADYA Training"
            title="Practical Knowledge Backed by 20+ Years of Experience."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
            {[
              { title: "20+ Years Experience", desc: "Learn from long-term practical engineering knowledge." },
              { title: "Field-Oriented Learning", desc: "Understand how surveying is performed on actual sites." },
              { title: "Practical Instrument Knowledge", desc: "Learn equipment operation where included in the selected program." },
              { title: "Engineering Understanding", desc: "Connect surveying data with drawings and civil projects." },
              { title: "Real-World Workflow", desc: "Understand the process from site measurements to final output." },
              { title: "Personal Guidance", desc: "Practical guidance and mentorship during training." }
            ].map((point, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col hover:bg-white/10 transition-colors">
                <CheckCircle2 className="text-[#F59E0B] mb-4" size={28} />
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRAINING PROGRAMS */}
      <section id="programs" className="py-10 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Our Training Programs"
            title="Build Skills That Work in the Field."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            {trainingPrograms.map((program, idx) => (
              <TrainingCard 
                key={idx}
                title={program.title}
                shortDesc={program.shortDesc}
                image={program.image}
                badge={program.badge}
                modules={program.modules}
                slug={`/training/${program.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU'LL LEARN */}
      <section className="py-10 lg:py-12 bg-[#F5F6F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="Practical Skills"
            title="Skills Built Around Real Work."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
            {[
              { title: "Instrument Handling", desc: "Understand surveying instruments included in training.", icon: <Crosshair size={24} /> },
              { title: "Field Measurement", desc: "Learn practical measurement procedures on site.", icon: <Ruler size={24} /> },
              { title: "Survey Data", desc: "Understand collected field information and calculations.", icon: <Settings size={24} /> },
              { title: "Technical Drawing", desc: "Connect measurements with professional CAD drawings.", icon: <PenTool size={24} /> },
              { title: "Site Workflow", desc: "Understand how surveying fits into actual projects.", icon: <Map size={24} /> },
              { title: "Problem Solving", desc: "Learn how field situations are approached practically.", icon: <HardHat size={24} /> }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start group hover:border-[#F59E0B] transition-colors">
                <div className="text-[#10263F] group-hover:text-[#F59E0B] transition-colors mt-1 mr-4 shrink-0">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#10263F] text-lg mb-2">{skill.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRAINING METHODOLOGY */}
      <section className="py-10 lg:py-12 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="How You Learn"
            title="Understand. Observe. Practice. Apply."
            theme="dark"
            align="center"
          />

          <div className="mt-8 max-w-4xl mx-auto">
            <ProcessSteps 
              steps={[
                { title: "UNDERSTAND", description: "Theory & Fundamentals" },
                { title: "DEMONSTRATION", description: "Trainer Demonstration" },
                { title: "PRACTICE", description: "Hands-On Exercise" },
                { title: "FIELD WORK", description: "Real Site Exposure" },
                { title: "DATA / DRAWING", description: "Understand Output" },
                { title: "APPLICATION", description: "Practical Use" }
              ]}
              theme="dark"
            />
          </div>
        </div>
      </section>

      {/* 8. WHO CAN JOIN & 9. EQUIPMENT */}
      <section className="py-10 lg:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            
            {/* WHO IS IT FOR? */}
            <div>
              <SectionHeading 
                label="Who Is It For?"
                title="Training for Learners at Different Stages."
                align="left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  { name: "Diploma Civil Students", icon: <GraduationCap size={24} /> },
                  { name: "B.Tech Civil Students", icon: <GraduationCap size={24} /> },
                  { name: "Fresh Civil Engineers", icon: <HardHat size={24} /> },
                  { name: "Surveying Beginners", icon: <Ruler size={24} /> },
                  { name: "Site Engineers", icon: <Briefcase size={24} /> },
                  { name: "Working Professionals", icon: <Briefcase size={24} /> }
                ].map((audience, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center font-bold text-[#10263F]">
                    <span className="mr-3 text-[#F59E0B]">{audience.icon}</span> {audience.name}
                  </div>
                ))}
              </div>
            </div>

            {/* EQUIPMENT YOU'LL WORK WITH */}
            <div>
              <SectionHeading 
                label="Tools & Technology"
                title="Learn With Professional Surveying Tools."
                align="left"
              />
              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  "Total Station",
                  "Auto Level",
                  "DGPS / GNSS",
                  "Surveying Accessories",
                  "AutoCAD",
                  "Civil 3D"
                ].map((tool, idx) => (
                  <span key={idx} className="bg-[#10263F] text-white px-5 py-3 rounded-full font-bold shadow-md flex items-center">
                    <Crosshair size={16} className="text-[#F59E0B] mr-2" /> {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. TRAINING INFORMATION & 12. ENQUIRY FORM */}
      <section id="enquire" className="py-10 lg:py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            
            {/* Left: Info */}
            <div className="lg:col-span-5">
              <SectionHeading 
                label="Training Information"
                title="Batch Details & Enrollment."
                align="left"
              />
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Contact us to get the latest information on upcoming batches, exact duration, and fee structures for your preferred training program.
              </p>
              
              <ul className="space-y-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <li>
                  <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Training Mode</div>
                  <div className="font-medium text-[#10263F] text-lg">Practical / Field / Classroom</div>
                </li>
                <li>
                  <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Location</div>
                  <div className="font-medium text-[#10263F] text-lg">Lucknow, Uttar Pradesh</div>
                </li>
                <li>
                  <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Batch & Fees</div>
                  <div className="font-medium text-[#F59E0B] text-lg italic">Please enquire for current details.</div>
                </li>
              </ul>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-7 bg-[#10263F] p-8 md:p-12 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-heading font-bold text-white mb-8">Interested in Practical Training?</h3>
              
              {successData ? (
                <SuccessScreen 
                  leadCode={successData.leadCode}
                  title="Training Enquiry Received"
                  message="Thank you! We've received your training enquiry. We recommend continuing on WhatsApp for a faster response."
                  whatsappMessage={successData.message}
                  onReset={() => setSuccessData(null)}
                />
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input required label="Full Name" name="name" value={formData.name} onChange={handleInputChange} theme="dark" />
                    <Input required type="tel" label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} theme="dark" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select 
                      required 
                      label="Qualification" 
                      name="qualification" 
                      value={formData.qualification} 
                      onChange={handleInputChange} 
                      options={[
                        { value: "Diploma Civil", label: "Diploma Civil" },
                        { value: "B.Tech Civil", label: "B.Tech Civil" },
                        { value: "Working Professional", label: "Working Professional" },
                        { value: "Other", label: "Other" }
                      ]}
                      theme="dark" 
                    />
                    <Select 
                      required 
                      label="Training Interested In" 
                      name="program" 
                      value={formData.program} 
                      onChange={handleInputChange} 
                      options={[
                        { value: "Land Surveying", label: "Land Surveying Training" },
                        { value: "Total Station", label: "Total Station Training" },
                        { value: "Auto Level", label: "Auto Level Training" },
                        { value: "AutoCAD", label: "AutoCAD for Civil Engineering" }
                      ]}
                      theme="dark" 
                    />
                  </div>

                  <Textarea label="Message (Optional)" name="message" value={formData.message} onChange={handleInputChange} theme="dark" />

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <Button type="submit" variant="primary" disabled={isSubmitting} className="justify-center disabled:opacity-70 px-6 py-2.5 text-sm">
                      {isSubmitting ? 'Sending...' : 'Submit Training Enquiry'} <ArrowRight size={18} className="ml-2" />
                    </Button>
                    <span className="text-gray-400 font-bold text-sm">OR</span>
                    <a href="https://wa.me/919453072917" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-green-600 transition-colors text-sm">
                      <MessageCircle size={18} className="mr-2" /> WhatsApp Quick Enquiry
                    </a>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 14. TRAINING FAQ */}
      <FAQSection 
        items={faqs.map(faq => ({ question: faq.q, answer: faq.a }))} 
        title="Frequently Asked Questions" 
      />

      {/* 16. FINAL CTA */}
      <CTASection 
        eyebrow="Start Learning"
        title="Ready to Take Your Civil Engineering Skills Into the Field?"
        description="Tell us which surveying or engineering skill you want to learn and get current training details."
        primaryText=""
        secondaryText=""
        showWhatsApp={false}
      />

    </div>
  );
};

export default Training;
