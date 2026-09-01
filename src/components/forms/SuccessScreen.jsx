import { CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react';

const SuccessScreen = ({ leadCode, title, message, whatsappMessage, onReset }) => {
  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/919453072917?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="bg-white p-10 md:p-16 rounded-sm shadow-xl border-t-8 border-green-500 text-center animate-fadeIn">
      <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle2 size={48} />
      </div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#10263F] mb-4">
        {title || 'Request Received'}
      </h2>
      <h3 className="text-xl font-bold text-gray-500 mb-8">Thank You for Contacting ADYA.</h3>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        {message || 'Your enquiry has been successfully saved to our system. We will review your requirements shortly.'}
      </p>
      
      {leadCode && (
        <div className="inline-block bg-gray-50 border border-gray-200 font-mono font-bold text-[#10263F] text-xl px-6 py-3 mb-12 shadow-sm rounded-sm">
          Reference: {leadCode}
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={onReset} className="inline-flex items-center justify-center px-5 py-2.5 text-sm md:text-base border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-100 rounded-sm transition-colors">
          <ArrowLeft size={18} className="mr-2" /> Back
        </button>
        <button onClick={handleWhatsAppRedirect} className="inline-flex items-center justify-center px-5 py-2.5 text-sm md:text-base bg-[#25D366] text-white font-bold rounded-sm hover:bg-green-600 transition-colors shadow-sm">
          Continue on WhatsApp <MessageCircle size={18} className="ml-2" />
        </button>
      </div>
      
      <p className="text-xs text-gray-400 mt-8">
        We recommend continuing on WhatsApp for faster communication.
      </p>
    </div>
  );
};

export default SuccessScreen;
