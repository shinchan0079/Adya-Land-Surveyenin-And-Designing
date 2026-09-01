import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SuccessScreen from './SuccessScreen';
import { createLead } from '../../services/leadService';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

const DetailedEnquiryForm = () => {
  const [mainForm, setMainForm] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    service: '',
    location: '',
    area: '',
    message: ''
  });

  const handleMainChange = (e) => {
    const { name, value } = e.target;
    setMainForm(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const submitMainForm = async (e) => {
    e.preventDefault();
    if (!mainForm.name || !mainForm.phone || !mainForm.service || !mainForm.location || !mainForm.message) {
      alert("Please fill all required fields before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const data = await createLead({
        name: mainForm.name,
        phone: mainForm.phone,
        type: 'Contact',
        email: mainForm.email,
        whatsapp: mainForm.whatsapp,
        service: mainForm.service,
        location: mainForm.location,
        data: {
          area: mainForm.area,
          message: mainForm.message
        }
      });

      const message = `Hello ADYA,%0A%0AI would like to submit a detailed enquiry:%0A%0A*Name:* ${mainForm.name}%0A*Phone:* ${mainForm.phone}%0A*WhatsApp:* ${mainForm.whatsapp || 'Same'}%0A*Email:* ${mainForm.email || 'N/A'}%0A*Service Required:* ${mainForm.service}%0A*Site Location:* ${mainForm.location}%0A*Approx Area:* ${mainForm.area || 'N/A'}%0A%0A*Requirement/Message:*%0A${mainForm.message}`;
      
      setSuccessData({ leadCode: data.leadCode, message });
      setMainForm({ name: '', phone: '', whatsapp: '', email: '', service: '', location: '', area: '', message: '' });
      
    } catch (err) {
      console.error(err);
      alert(err.message || 'There was an issue submitting your enquiry. Please try WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successData) {
    return (
      <SuccessScreen 
        leadCode={successData.leadCode}
        title="Enquiry Received"
        message="Thank you! We've saved your detailed enquiry. We strongly recommend continuing on WhatsApp to send us any related files or drawings directly."
        whatsappMessage={successData.message}
        onReset={() => setSuccessData(null)}
      />
    );
  }

  return (
    <form onSubmit={submitMainForm} className="space-y-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input required label="Full Name" name="name" value={mainForm.name} onChange={handleMainChange} placeholder="Enter your full name" />
        <Input required type="tel" label="Phone Number" name="phone" value={mainForm.phone} onChange={handleMainChange} placeholder="10-digit mobile number" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="tel" label="WhatsApp Number (Optional)" name="whatsapp" value={mainForm.whatsapp} onChange={handleMainChange} placeholder="If different from phone" />
        <Input type="email" label="Email Address (Optional)" name="email" value={mainForm.email} onChange={handleMainChange} placeholder="your@email.com" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select 
          required 
          label="Service Required" 
          name="service" 
          value={mainForm.service} 
          onChange={handleMainChange}
          options={[
            "Land Surveying",
            "Topographical Survey",
            "Boundary Survey",
            "Contour / Level Survey",
            "Layout / Setting Out",
            "Civil Engineering Design",
            "CAD Drawing / Drafting",
            "Training",
            "Other"
          ]}
        />
        <Input required label="Site / Project Location" name="location" value={mainForm.location} onChange={handleMainChange} placeholder="E.g., Gomti Nagar, Lucknow" />
      </div>

      <Input label="Approximate Land Area (Optional)" name="area" value={mainForm.area} onChange={handleMainChange} placeholder="E.g., 5 Acres, 2000 Sq.Ft." />
      
      <Textarea required label="Message / Requirement" name="message" value={mainForm.message} onChange={handleMainChange} placeholder="Describe your project, purpose of survey, or what you need help with..." />

      <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
        <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto px-8 whitespace-nowrap">
          {isSubmitting ? 'Sending...' : 'Submit Enquiry'} <ArrowRight size={20} className="ml-2" />
        </Button>
        <p className="text-xs text-gray-500 text-center sm:text-left leading-relaxed">
          By submitting, a formatted message will be generated securely via WhatsApp to our official contact.
        </p>
      </div>
    </form>
  );
};

export default DetailedEnquiryForm;
