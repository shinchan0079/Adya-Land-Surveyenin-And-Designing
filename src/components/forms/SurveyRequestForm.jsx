import { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Upload,
  ShieldCheck,
  Edit2,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import SuccessScreen from './SuccessScreen';
import Spinner from '../ui/Spinner';
import { createLead } from '../../services/leadService';

const SurveyRequestForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [requestId, setRequestId] = useState('');
  
  const [formData, setFormData] = useState({
    service: '',
    site: {
      address: '',
      city: '',
      district: '',
      pincode: '',
      mapLocation: '',
      area: '',
      unit: 'Sq. Ft.',
      siteType: ''
    },
    requirement: {
      description: '',
      purpose: '',
      preferredDate: 'As Soon As Available'
    },
    documents: {
      hasDocuments: null,
      files: []
    },
    customer: {
      name: '',
      phone: '',
      whatsapp: '',
      whatsappSameAsPhone: false,
      email: '',
      preferredContact: 'Phone Call'
    }
  });

  const updateSiteData = (field, value) => {
    setFormData(prev => ({ ...prev, site: { ...prev.site, [field]: value } }));
  };

  const updateRequirementData = (field, value) => {
    setFormData(prev => ({ ...prev, requirement: { ...prev.requirement, [field]: value } }));
  };

  const updateCustomerData = (field, value) => {
    setFormData(prev => ({ ...prev, customer: { ...prev.customer, [field]: value } }));
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !formData.service) {
      alert("Please select a service to continue.");
      return;
    }
    if (currentStep === 2 && (!formData.site.address || !formData.site.city)) {
      alert("Please enter the Site Location (Address and City).");
      return;
    }
    if (currentStep === 3 && !formData.requirement.description) {
      alert("Please describe your requirement.");
      return;
    }
    if (currentStep === 5 && (!formData.customer.name || !formData.customer.phone)) {
      alert("Please provide your Name and Phone Number.");
      return;
    }
    
    // Scroll handling is tricky in a component, but window.scrollTo works generally if it's placed near top.
    const formElement = document.getElementById('survey-request-form');
    if(formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    const formElement = document.getElementById('survey-request-form');
    if(formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setCurrentStep(prev => prev - 1);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    const whatsAppNumber = formData.customer.whatsappSameAsPhone ? formData.customer.phone : formData.customer.whatsapp;
    
    try {
      const payload = {
        name: formData.customer.name,
        phone: formData.customer.phone,
        type: 'Survey',
        service: formData.service,
        whatsapp: whatsAppNumber || '',
        email: formData.customer.email || '',
        location: `${formData.site.address}, ${formData.site.city}`,
        data: {
          site: formData.site,
          requirement: formData.requirement,
          hasDocuments: formData.documents.hasDocuments,
          preferredContact: formData.customer.preferredContact
        }
      };

      const data = await createLead(payload);
      
      const generatedId = data.leadCode;
      
      const message = `*NEW SURVEY REQUEST (${generatedId})*%0A%0A` +
        `*1. SERVICE:* ${formData.service}%0A%0A` +
        `*2. SITE DETAILS*%0A` +
        `Location: ${formData.site.address}, ${formData.site.city}${formData.site.district ? `, ${formData.site.district}` : ''} ${formData.site.pincode}%0A` +
        `Area: ${formData.site.area ? formData.site.area + ' ' + formData.site.unit : 'Not specified'}%0A` +
        `Type: ${formData.site.siteType || 'Not specified'}%0A%0A` +
        `*3. REQUIREMENT*%0A` +
        `Description: ${formData.requirement.description}%0A` +
        `Purpose: ${formData.requirement.purpose || 'Not specified'}%0A` +
        `Preferred Discussion: ${formData.requirement.preferredDate}%0A%0A` +
        `*4. DOCUMENTS*%0A` +
        `Status: ${formData.documents.hasDocuments ? 'Has documents ready to share' : 'No documents available right now'}%0A%0A` +
        `*5. CONTACT*%0A` +
        `Name: ${formData.customer.name}%0A` +
        `Phone: ${formData.customer.phone}%0A` +
        `WhatsApp: ${whatsAppNumber || 'N/A'}%0A` +
        `Email: ${formData.customer.email || 'N/A'}%0A` +
        `Preferred Method: ${formData.customer.preferredContact}`;

      setSuccessData({ leadCode: generatedId, message });
      
      const formElement = document.getElementById('survey-request-form');
      if(formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
    } catch (err) {
      console.error(err);
      alert(err.message || 'There was an issue submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div id="survey-request-form">
        <SuccessScreen 
          leadCode={successData.leadCode}
          title="Survey Request Received"
          message="Thank you! Your comprehensive quote request has been securely stored in our system. Continue on WhatsApp to finalize your requirements or send attachments."
          whatsappMessage={successData.message}
          onReset={() => {
            setSuccessData(null);
            setCurrentStep(1);
          }}
        />
      </div>
    );
  }

  return (
    <div id="survey-request-form" className="bg-white shadow-xl border border-gray-200 rounded-sm overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/survey.jpg')] bg-cover bg-center pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="bg-[#10263F] p-8 border-b border-gray-800">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-white font-heading font-bold text-2xl uppercase tracking-wider">Request A Survey</h2>
            <span className="text-[#F59E0B] font-mono font-bold text-sm">Step {currentStep} of 6</span>
          </div>
          
          <div className="hidden md:flex justify-between items-center relative mt-8">
            <div className="absolute top-2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>
            <div className="absolute top-2 left-0 h-0.5 bg-[#F59E0B] -translate-y-1/2 z-0 transition-all duration-300" style={{ width: `${((currentStep - 1) / 5) * 100}%` }}></div>
            
            {["Service", "Site", "Req.", "Docs", "Contact", "Review"].map((label, idx) => {
              const stepNum = idx + 1;
              const isActive = stepNum === currentStep;
              const isCompleted = stepNum < currentStep;
              
              return (
                <div key={idx} className="relative z-10 flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mb-2 transition-colors duration-300 ${isActive ? 'bg-[#F59E0B] border-[#F59E0B] shadow-[0_0_10px_rgba(245,158,11,0.5)]' : isCompleted ? 'bg-white border-white' : 'bg-[#10263F] border-gray-600'}`}></div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-[#F59E0B]' : isCompleted ? 'text-white' : 'text-gray-500'}`}>{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-8 md:p-12 overflow-hidden">
          
          <AnimatePresence mode="wait">
            {/* STEP 1: SERVICE */}
            {currentStep === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
              <div className="text-sm font-bold text-gray-400 mb-2 font-mono">STEP 01 — SELECT SERVICE</div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#10263F] mb-8">What Service Do You Need?</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Land Survey", "Topographical Survey", "Boundary Survey", 
                  "Contour Survey", "Level Survey", "Layout / Setting Out", 
                  "Civil Engineering Design", "CAD / Drawing", "Other"
                ].map((srv, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setFormData(prev => ({ ...prev, service: srv }))}
                    className={`cursor-pointer border-2 rounded-sm p-5 transition-all flex items-center justify-between group ${formData.service === srv ? 'border-[#F59E0B] bg-orange-50/20' : 'border-gray-200 hover:border-[#10263F]'}`}
                  >
                    <span className={`font-bold ${formData.service === srv ? 'text-[#10263F]' : 'text-gray-600 group-hover:text-[#10263F]'}`}>{srv}</span>
                    {formData.service === srv && <CheckCircle2 size={20} className="text-[#F59E0B]" />}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: SITE INFORMATION */}
          {currentStep === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-sm font-bold text-gray-400 mb-2 font-mono">STEP 02 — SITE DETAILS</div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#10263F] mb-8">Tell Us About the Site.</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[#10263F] text-sm font-bold mb-2">Site / Project Location (Village / Area) <span className="text-red-500">*</span></label>
                  <input type="text" value={formData.site.address} onChange={(e) => updateSiteData('address', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors" placeholder="E.g., Gomti Nagar / Plot No 42" />
                  <p className="text-xs text-gray-500 mt-2">You can also paste a Google Maps location link here.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[#10263F] text-sm font-bold mb-2">City <span className="text-red-500">*</span></label>
                    <input type="text" value={formData.site.city} onChange={(e) => updateSiteData('city', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors" placeholder="E.g., Lucknow" />
                  </div>
                  <div>
                    <label className="block text-[#10263F] text-sm font-bold mb-2">District</label>
                    <input type="text" value={formData.site.district} onChange={(e) => updateSiteData('district', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[#10263F] text-sm font-bold mb-2">PIN Code</label>
                    <input type="text" value={formData.site.pincode} onChange={(e) => updateSiteData('pincode', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#10263F] text-sm font-bold mb-2">Approximate Land / Plot Area</label>
                    <div className="flex">
                      <input type="number" value={formData.site.area} onChange={(e) => updateSiteData('area', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-l-sm px-4 py-3 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors border-r-0" placeholder="E.g., 2500" />
                      <select value={formData.site.unit} onChange={(e) => updateSiteData('unit', e.target.value)} className="bg-gray-100 border border-gray-200 rounded-r-sm px-4 py-3 text-gray-700 focus:outline-none focus:border-[#F59E0B] font-bold">
                        <option>Sq. Ft.</option>
                        <option>Sq. Meter</option>
                        <option>Sq. Yard</option>
                        <option>Bigha</option>
                        <option>Acre</option>
                        <option>Hectare</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[#10263F] text-sm font-bold mb-2">Site Type</label>
                    <select value={formData.site.siteType} onChange={(e) => updateSiteData('siteType', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-gray-700 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors appearance-none">
                      <option value="">Select Type</option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Agricultural</option>
                      <option>Construction Site</option>
                      <option>Industrial</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: REQUIREMENT */}
          {currentStep === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-sm font-bold text-gray-400 mb-2 font-mono">STEP 03 — REQUIREMENT</div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#10263F] mb-8">What Do You Need Help With?</h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-[#10263F] text-sm font-bold mb-2">Describe Your Requirement <span className="text-red-500">*</span></label>
                  <textarea rows="5" value={formData.requirement.description} onChange={(e) => updateRequirementData('description', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-4 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors text-gray-700" placeholder="Example: I need a boundary and topographical survey for my plot before starting building construction..."></textarea>
                </div>

                <div>
                  <label className="block text-[#10263F] text-sm font-bold mb-3">Purpose of Survey / Work</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Land Measurement", "Boundary Identification", "Building Construction",
                      "Site Planning", "Layout", "Engineering Design", "Existing Site Documentation", "Other"
                    ].map((purpose, idx) => (
                      <div 
                        key={idx}
                        onClick={() => updateRequirementData('purpose', purpose)}
                        className={`cursor-pointer border rounded-sm px-4 py-2.5 text-sm font-bold text-center transition-colors ${formData.requirement.purpose === purpose ? 'bg-[#10263F] text-white border-[#10263F]' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}`}
                      >
                        {purpose}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 border border-[#F59E0B]/30 p-6 rounded-sm">
                  <label className="block text-[#10263F] text-sm font-bold mb-3">When Would You Prefer to Discuss the Requirement?</label>
                  <div className="flex flex-wrap gap-4 items-center">
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="preferredDate" value="As Soon As Available" checked={formData.requirement.preferredDate === 'As Soon As Available'} onChange={(e) => updateRequirementData('preferredDate', e.target.value)} className="mr-2 text-[#F59E0B] focus:ring-[#F59E0B]" />
                      <span className="text-gray-700 font-medium">As Soon As Available</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="preferredDate" value="No Preference" checked={formData.requirement.preferredDate === 'No Preference'} onChange={(e) => updateRequirementData('preferredDate', e.target.value)} className="mr-2 text-[#F59E0B] focus:ring-[#F59E0B]" />
                      <span className="text-gray-700 font-medium">No Preference</span>
                    </label>
                  </div>
                  <p className="text-xs text-[#F59E0B] mt-4 font-bold flex items-center">
                    <AlertCircle size={14} className="mr-1" /> Note: Preferred date is subject to confirmation and availability. This is not a confirmed site visit.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: DOCUMENTS */}
          {currentStep === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-sm font-bold text-gray-400 mb-2 font-mono">STEP 04 — DOCUMENTS</div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#10263F] mb-8">Have Existing Site Documents?</h3>
              
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-sm p-12 text-center bg-gray-50 hover:bg-gray-100 hover:border-[#F59E0B] transition-colors cursor-pointer group" onClick={() => setFormData(prev => ({ ...prev, documents: { ...prev.documents, hasDocuments: true }}))}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:text-[#F59E0B] transition-colors">
                    <Upload size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-[#10263F] mb-2">Upload Drawing / Map / Document</h4>
                  <p className="text-gray-500 text-sm mb-4">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
                  <span className="bg-[#10263F] text-white text-sm font-bold px-6 py-2.5 rounded-sm">Select Files</span>
                  
                  {formData.documents.hasDocuments === true && (
                    <div className="mt-6 flex flex-col items-center">
                      <div className="bg-green-100 text-green-700 px-4 py-2 rounded-sm flex items-center text-sm font-bold mb-4">
                        <CheckCircle2 size={16} className="mr-2" /> Documents marked for attachment.
                      </div>
                      <input 
                        type="file" 
                        multiple 
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setFormData(prev => ({ 
                          ...prev, 
                          documents: { ...prev.documents, files: e.target.files } 
                        }))}
                        className="w-full max-w-sm text-gray-700 text-sm file:mr-4 file:py-2.5 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-bold file:bg-[#F59E0B] file:text-white hover:file:bg-orange-600 transition-colors bg-white border border-gray-200 p-1"
                      />
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <span className="text-gray-400 font-bold uppercase text-xs">OR</span>
                </div>

                <div 
                  onClick={() => setFormData(prev => ({ ...prev, documents: { ...prev.documents, hasDocuments: false }}))}
                  className={`cursor-pointer border p-6 text-center rounded-sm transition-colors ${formData.documents.hasDocuments === false ? 'border-[#F59E0B] bg-orange-50' : 'border-gray-200 hover:border-gray-400'}`}
                >
                  <label className="flex items-center justify-center cursor-pointer">
                    <input type="radio" checked={formData.documents.hasDocuments === false} readOnly className="mr-3 text-[#F59E0B] focus:ring-[#F59E0B]" />
                    <span className="font-bold text-[#10263F]">I don't have documents right now / I will share them later</span>
                  </label>
                </div>

                <div className="flex items-center text-xs text-gray-500 mt-6 bg-gray-50 p-4 border border-gray-100 rounded-sm">
                  <ShieldCheck size={20} className="text-green-500 mr-3 shrink-0" />
                  <p>We respect your privacy. Documents shared are strictly used for understanding the scope of work and generating a quotation.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 5: CONTACT DETAILS */}
          {currentStep === 5 && (
            <motion.div 
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-sm font-bold text-gray-400 mb-2 font-mono">STEP 05 — CONTACT</div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#10263F] mb-8">How Can We Reach You?</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#10263F] text-sm font-bold mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" value={formData.customer.name} onChange={(e) => updateCustomerData('name', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-[#10263F] text-sm font-bold mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" value={formData.customer.phone} onChange={(e) => updateCustomerData('phone', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors" placeholder="10-digit mobile number" />
                  </div>
                </div>

                <div>
                  <label className="flex items-center mb-4 cursor-pointer">
                    <input type="checkbox" checked={formData.customer.whatsappSameAsPhone} onChange={(e) => updateCustomerData('whatsappSameAsPhone', e.target.checked)} className="mr-2 rounded text-[#F59E0B] focus:ring-[#F59E0B] w-4 h-4" />
                    <span className="text-sm text-gray-600 font-medium">My WhatsApp number is same as Phone number</span>
                  </label>
                  
                  {!formData.customer.whatsappSameAsPhone && (
                    <div>
                      <label className="block text-[#10263F] text-sm font-bold mb-2">WhatsApp Number</label>
                      <input type="tel" value={formData.customer.whatsapp} onChange={(e) => updateCustomerData('whatsapp', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors" placeholder="WhatsApp number" />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-[#10263F] text-sm font-bold mb-2">Email Address (Optional)</label>
                  <input type="email" value={formData.customer.email} onChange={(e) => updateCustomerData('email', e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-[#10263F] text-sm font-bold mb-3">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    {["Phone Call", "WhatsApp", "Email"].map((method, idx) => (
                      <label key={idx} className="flex items-center cursor-pointer">
                        <input type="radio" name="preferredContact" value={method} checked={formData.customer.preferredContact === method} onChange={(e) => updateCustomerData('preferredContact', e.target.value)} className="mr-2 text-[#F59E0B] focus:ring-[#F59E0B]" />
                        <span className="text-gray-700 font-medium text-sm">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 6: REVIEW */}
          {currentStep === 6 && (
            <motion.div 
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-sm font-bold text-gray-400 mb-2 font-mono">STEP 06 — REVIEW</div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#10263F] mb-8">Review Your Survey Request.</h3>
              
              <div className="space-y-6">
                
                {/* Summary Block */}
                <div className="bg-gray-50 rounded-sm border border-gray-200 p-6 relative">
                  <button onClick={() => setCurrentStep(1)} className="absolute top-6 right-6 text-gray-400 hover:text-[#F59E0B] transition-colors"><Edit2 size={18} /></button>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Service</div>
                      <div className="font-bold text-[#10263F] text-lg">{formData.service}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-sm border border-gray-200 p-6 relative">
                  <button onClick={() => setCurrentStep(2)} className="absolute top-6 right-6 text-gray-400 hover:text-[#F59E0B] transition-colors"><Edit2 size={18} /></button>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
                    <div className="md:col-span-2">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Site Location</div>
                      <div className="font-bold text-[#10263F]">{formData.site.address}, {formData.site.city}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Approx. Area</div>
                      <div className="font-bold text-[#10263F]">{formData.site.area ? `${formData.site.area} ${formData.site.unit}` : 'Not Specified'}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Site Type</div>
                      <div className="font-bold text-[#10263F]">{formData.site.siteType || 'Not Specified'}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-sm border border-gray-200 p-6 relative">
                  <button onClick={() => setCurrentStep(3)} className="absolute top-6 right-6 text-gray-400 hover:text-[#F59E0B] transition-colors"><Edit2 size={18} /></button>
                  <div className="grid grid-cols-1 gap-y-6">
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Requirement</div>
                      <div className="font-medium text-gray-700 italic border-l-2 border-[#F59E0B] pl-3">"{formData.requirement.description}"</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-sm border border-gray-200 p-6 relative">
                  <button onClick={() => setCurrentStep(5)} className="absolute top-6 right-6 text-gray-400 hover:text-[#F59E0B] transition-colors"><Edit2 size={18} /></button>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Contact Name</div>
                      <div className="font-bold text-[#10263F]">{formData.customer.name}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</div>
                      <div className="font-bold text-[#10263F]">{formData.customer.phone}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Documents</div>
                      <div className="font-bold text-gray-600">{formData.documents.hasDocuments ? 'Attached' : 'Will share later'}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#10263F] p-6 rounded-sm text-white mt-8">
                  <label className="flex items-start cursor-pointer">
                    <input required type="checkbox" className="mt-1 mr-3 rounded text-[#F59E0B] focus:ring-[#F59E0B] w-5 h-5 border-gray-600 bg-[#1A365D]" />
                    <span className="text-sm text-gray-300 font-medium leading-relaxed">
                      I confirm that the information provided above is correct to the best of my knowledge. I understand this is a request for quotation and not a confirmed booking.
                    </span>
                  </label>
                </div>
              </div>
            </motion.div>
          )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className={`mt-12 flex ${currentStep === 1 ? 'justify-end' : 'justify-between'} items-center pt-8 border-t border-gray-100`}>
            {currentStep > 1 && (
              <button onClick={handlePrevStep} className="flex items-center text-gray-500 font-bold hover:text-[#10263F] transition-colors uppercase tracking-wider text-sm px-4 py-2">
                <ArrowLeft size={16} className="mr-2" /> Back
              </button>
            )}
            
            {currentStep < 6 ? (
              <button onClick={handleNextStep} className="flex items-center bg-[#10263F] text-white font-bold px-5 py-2.5 text-sm md:text-base rounded-sm hover:bg-blue-900 transition-colors uppercase tracking-wider text-sm">
                Continue <ArrowRight size={16} className="ml-2" />
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={isSubmitting} className="flex items-center bg-[#F59E0B] text-white font-bold px-10 py-4 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm shadow-lg disabled:opacity-70">
                {isSubmitting ? (
                  <>
                    <Spinner size={18} /> Sending...
                  </>
                ) : (
                  <>
                    Submit Request <ArrowRight size={18} className="ml-2" />
                  </>
                )}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SurveyRequestForm;
