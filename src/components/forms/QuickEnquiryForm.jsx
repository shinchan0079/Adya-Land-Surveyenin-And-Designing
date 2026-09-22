import { useState } from 'react';
import SuccessScreen from './SuccessScreen';
import { createLead } from '../../services/leadService';
import { ArrowRight, User, Phone, MapPin, Compass } from 'lucide-react';

const QuickEnquiryForm = () => {
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    location: '',
    type: '',
    area: ''
  });

  const handleQuickChange = (e) => {
    const { name, value } = e.target;
    setQuickForm(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const submitQuickForm = async (e) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.phone || !quickForm.location || !quickForm.type) {
      alert("Please fill all required fields before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const rawMessage = `Hello ADYA Land Surveyor,\n\nI would like to request a quick survey discussion:\n\n*Name:* ${quickForm.name}\n*Phone:* ${quickForm.phone}\n*Site Location:* ${quickForm.location}\n*Survey Type:* ${quickForm.type}\n*Approx Area:* ${quickForm.area || 'N/A'}`;
      
      const whatsappNumber = '919453072917';
      const emailAddress = 'adyalandsurvey@gmail.com';
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent('Quick Enquiry: ' + quickForm.type)}&body=${encodeURIComponent(rawMessage)}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Trigger Mailto via hidden iframe to avoid popup/focus blockers
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = mailtoUrl;
      document.body.appendChild(iframe);
      setTimeout(() => document.body.removeChild(iframe), 2000);
      
      setSuccessData({ leadCode: 'DIRECT-WA', message: rawMessage });
      setQuickForm({ name: '', phone: '', location: '', type: '', area: '' });
      
    } catch (err) {
      console.error(err);
      alert('There was an issue processing your request. Please try WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-3xl mx-auto border border-gray-100 mt-8 mb-8">
        <SuccessScreen 
          leadCode={successData.leadCode}
          title="Quick Enquiry Received"
          message="Thank you! We've saved your quick enquiry. Continue on WhatsApp to start the discussion instantly."
          whatsappMessage={successData.message}
          onReset={() => setSuccessData(null)}
        />
      </div>
    );
  }

  return (
    <form onSubmit={submitQuickForm} className="flex flex-col md:flex-row items-center w-full bg-white rounded-3xl md:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-visible mt-6 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] p-2">
      
      {/* Name */}
      <div className="w-full md:flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100 flex items-center group">
        <User className="text-gray-400 mr-3 shrink-0 group-focus-within:text-[#F59E0B] transition-colors" size={20} />
        <div className="flex-1">
          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 pl-2">Name *</label>
          <input required type="text" name="name" value={quickForm.name} onChange={handleQuickChange} className="w-full bg-gray-50 focus:bg-gray-100 rounded-lg px-3 py-2 text-[#10263F] font-semibold text-sm focus:outline-none transition-colors" />
        </div>
      </div>
      
      {/* Phone */}
      <div className="w-full md:flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100 flex items-center group">
        <Phone className="text-gray-400 mr-3 shrink-0 group-focus-within:text-[#F59E0B] transition-colors" size={20} />
        <div className="flex-1">
          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 pl-2">Phone *</label>
          <input required type="tel" name="phone" value={quickForm.phone} onChange={handleQuickChange} className="w-full bg-gray-50 focus:bg-gray-100 rounded-lg px-3 py-2 text-[#10263F] font-semibold text-sm focus:outline-none transition-colors" />
        </div>
      </div>

      {/* Location */}
      <div className="w-full md:flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100 flex items-center group">
        <MapPin className="text-gray-400 mr-3 shrink-0 group-focus-within:text-[#F59E0B] transition-colors" size={20} />
        <div className="flex-1">
          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 pl-2">Location *</label>
          <input required type="text" name="location" value={quickForm.location} onChange={handleQuickChange} className="w-full bg-gray-50 focus:bg-gray-100 rounded-lg px-3 py-2 text-[#10263F] font-semibold text-sm focus:outline-none transition-colors" />
        </div>
      </div>

      {/* Survey Type */}
      <div className="w-full md:flex-1 px-4 py-3 flex items-center group relative border-b md:border-b-0 border-gray-100">
        <Compass className="text-gray-400 mr-3 shrink-0 group-focus-within:text-[#F59E0B] transition-colors" size={20} />
        <div className="flex-1">
          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 pl-2">Survey Type *</label>
          <select required name="type" value={quickForm.type} onChange={handleQuickChange} className="w-full bg-gray-50 focus:bg-gray-100 rounded-lg px-3 py-2 text-[#10263F] font-semibold text-sm focus:outline-none appearance-none cursor-pointer transition-colors">
            <option value="">Select Type</option>
            <option value="Topographical">Topographical</option>
            <option value="Boundary">Boundary</option>
            <option value="Layout">Layout</option>
            <option value="Unsure">Unsure</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="w-full md:w-auto p-1 pl-2">
        <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-[#F59E0B] text-white font-bold rounded-2xl md:rounded-full px-8 py-4 hover:bg-orange-600 transition-transform hover:scale-[1.02] disabled:opacity-70 shadow-lg shadow-orange-500/20 whitespace-nowrap flex items-center justify-center h-full">
          {isSubmitting ? 'Sending...' : 'Request'} <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
      
    </form>
  );
};

export default QuickEnquiryForm;
