import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from './SectionHeading';

const FAQSection = ({ items, title = "Frequently Asked Questions", className = "", isSection = true }) => {
  const [activeFaq, setActiveFaq] = useState(0);

  if (!items || items.length === 0) return null;

  const Content = (
    <>
      {title && <SectionHeading title={title} align="center" />}
      
      <div className="space-y-2">
        {items.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-xl overflow-hidden transition-colors duration-300 ${activeFaq === index ? 'border-[#F59E0B] bg-orange-50/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}
          >
            <button 
              className="w-full text-left px-4 py-2.5 flex justify-between items-center focus:outline-none"
              onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
            >
              <span className={`font-bold text-sm pr-6 ${activeFaq === index ? 'text-[#10263F]' : 'text-gray-700'}`}>
                {faq.question}
              </span>
              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-[#F59E0B] text-white' : 'bg-gray-100 text-gray-500'}`}>
                {activeFaq === index ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </div>
            </button>
            
            <div 
              className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-96 pb-3 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-gray-600 text-xs leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  if (!isSection) {
    return <div className={`w-full ${className}`}>{Content}</div>;
  }

  return (
    <section className={`py-12 lg:py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        {Content}
      </div>
    </section>
  );
};

export default FAQSection;
