import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Settings, 
  FileText
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import ProcessSteps from '../components/common/ProcessSteps';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import { servicesData } from '../data/serviceData';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = servicesData[slug];

  useEffect(() => {
    if (!data) {
      navigate('/services');
    }
    window.scrollTo(0, 0);
  }, [slug, data, navigate]);

  if (!data) return null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* 1. HERO */}
      <PageHero 
        eyebrow={data.badge}
        title={data.heroTitle}
        description={data.heroDesc}
        image={data.heroImg}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: data.quickInfo.service }
        ]}
      />

      {/* 2. QUICK INFO BAR */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-gray-100 sm:divide-y-0 lg:divide-x divide-gray-100">
            {[
              { label: "Service", value: data.quickInfo.service },
              { label: "Suitable For", value: data.quickInfo.suitableFor },
              { label: "Location", value: data.quickInfo.location },
              { label: "Site Visit", value: data.quickInfo.siteVisit }
            ].map((info, idx) => (
              <div key={idx} className="p-6 text-center">
                <span className="block text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">{info.label}</span>
                <span className="font-bold text-[#10263F] text-sm md:text-base">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW */}
      <section className="py-12 lg:py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <SectionHeading 
            label="Service Overview"
            title={data.overview.title}
            description={data.overview.content}
            align="center"
          />
        </div>
      </section>

      {/* 4. USE CASES */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title={`When Is ${data.quickInfo.service} Useful?`}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.useCases.map((useCase, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-[#F59E0B] transition-colors">
                <div className="w-12 h-12 bg-blue-50 text-[#10263F] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#F59E0B] group-hover:text-white transition-colors shadow-sm">
                  <MapPin size={24} />
                </div>
                <h3 className="font-semibold text-[#10263F] text-lg mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COVERAGE & DELIVERABLES */}
      <section className="py-12 lg:py-16 bg-[#10263F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-4">What Is Covered?</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight">
                {data.whatIsCovered.title}
              </h2>
              <div className="space-y-4">
                {data.whatIsCovered.items.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 size={24} className="text-[#F59E0B] mr-4 shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-200 text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-8 italic border-l-2 border-[#F59E0B] pl-4">
                {data.whatIsCovered.note}
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm">
              <div className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-4">Deliverables</div>
              <h3 className="text-2xl font-bold mb-8 text-white">What Can You Receive?</h3>
              <ul className="space-y-5 mb-8">
                {data.deliverables.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-200 text-lg">
                    <FileText size={20} className="text-[#F59E0B] mr-4" /> {item}
                  </li>
                ))}
              </ul>
              <div className="text-sm text-gray-400 bg-black/20 p-5 rounded-xl border border-white/5">
                <span className="text-[#F59E0B] font-bold">Note:</span> {data.deliverables.note}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROCESS STEPS */}
      {data.visualFlow && (
        <section className="py-12 lg:py-16 bg-[#10263F] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              label="How We Work"
              title="The Analytical Workflow."
              align="center"
              theme="dark"
            />
            <div className="mt-10 max-w-5xl mx-auto">
              <ProcessSteps 
                steps={data.visualFlow.map(flow => ({ title: flow.step, description: flow.desc }))} 
                type="horizontal" 
              />
            </div>
          </div>
        </section>
      )}

      {/* 7. EQUIPMENT & WHO ITS FOR */}
      <section className="py-12 lg:py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Equipment */}
            <div>
              <SectionHeading 
                label="Tools & Technology"
                title="Equipment Selected According to the Work."
                align="left"
              />
              <div className="space-y-4 mb-8">
                {data.equipment.map((eq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start shadow-sm">
                    <Settings className="text-[#10263F] mt-1 mr-4 shrink-0 bg-gray-100 p-2 rounded-lg" size={40} />
                    <div>
                      <h4 className="font-bold text-[#10263F] text-lg mb-2">{eq.name}</h4>
                      <p className="text-gray-600">{eq.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/equipment" className="inline-flex items-center text-[#F59E0B] font-bold hover:text-orange-600 transition-colors uppercase tracking-wider text-sm">
                Explore All Equipment <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Who Its For */}
            <div>
              <SectionHeading 
                label="Target Clients"
                title="Who Is This Service For?"
                align="left"
              />
              <div className="flex flex-wrap gap-3 mt-8">
                {data.whoItsFor.map((client, idx) => (
                  <span key={idx} className="bg-white border border-gray-200 text-[#10263F] px-4 py-2 rounded-lg font-semibold text-sm shadow-sm">
                    {client}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      {data.faqs && (
        <FAQSection 
          items={data.faqs.map(faq => ({ question: faq.q, answer: faq.a }))} 
          title={`Questions About ${data.quickInfo.service}?`} 
        />
      )}

      {/* 9. CTA */}
      <CTASection 
        eyebrow="Need This Service?"
        title={`Ready to proceed with ${data.quickInfo.service}?`}
        description="Submit your detailed requirement through our specialized survey request system."
        primaryText=""
        secondaryText=""
        showWhatsApp={false}
      />
      
    </div>
  );
};

export default ServiceDetail;
